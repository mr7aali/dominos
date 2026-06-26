import { promises as fs } from "node:fs";
import path from "node:path";
import posixPath from "node:path/posix";
import type { Metadata } from "next";

const MIRROR_ROOT = path.join(process.cwd(), "www.dominos.com");
const ASSET_ROUTE_PREFIX = "/site-assets";

const ASSET_EXTENSIONS = new Set([
  ".avif",
  ".css",
  ".gif",
  ".ico",
  ".jpeg",
  ".jpg",
  ".js",
  ".json",
  ".map",
  ".pdf",
  ".png",
  ".svg",
  ".ttf",
  ".txt",
  ".webp",
  ".woff",
  ".woff2"
]);

const MIME_TYPES: Record<string, string> = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};

type ParsedReference = {
  pathPart: string;
  suffix: string;
};

export type DominosPageDocument = {
  body: string;
  description?: string;
  head: string;
  title?: string;
};

export async function getDominosMetadata(sourcePath: string): Promise<Metadata> {
  const document = await getDominosPageDocument(sourcePath);

  return {
    title: document?.title ?? "Domino's Clone",
    description: document?.description
  };
}

export async function getDominosPageDocument(sourcePath: string) {
  const htmlFile = safeJoin(MIRROR_ROOT, sourcePath);
  if (!htmlFile) return null;

  try {
    const stats = await fs.stat(htmlFile);
    if (!stats.isFile()) return null;

    const html = await fs.readFile(htmlFile, "utf8");
    return parseDominosPageDocument(rewriteDominosHtml(html, htmlFile));
  } catch {
    return null;
  }
}

export async function getDominosAsset(segments: string[]) {
  const filePath = safeJoin(MIRROR_ROOT, segments.join("/"));
  if (!filePath) return null;

  try {
    const stats = await fs.stat(filePath);
    if (!stats.isFile()) return null;

    return {
      body: await fs.readFile(filePath),
      filePath
    };
  } catch {
    return null;
  }
}

export function getMimeType(filePath: string) {
  return MIME_TYPES[path.extname(filePath).toLowerCase()] ?? "application/octet-stream";
}

function rewriteDominosHtml(html: string, htmlFile: string) {
  const baseDirectory = getMirrorDirectory(htmlFile);
  let updatedHtml = removeCapturedRuntime(html);

  updatedHtml = updatedHtml.replace(
    /\b(srcset|srcSet)=(["'])(.*?)\2/g,
    (_match, attribute: string, quote: string, value: string) =>
      `${attribute}=${quote}${rewriteSrcSet(value, baseDirectory)}${quote}`
  );

  updatedHtml = updatedHtml.replace(
    /\b(src|href|action)=(["'])(.*?)\2/g,
    (_match, attribute: string, quote: string, value: string) =>
      `${attribute}=${quote}${rewriteReference(value, baseDirectory, attribute.toLowerCase())}${quote}`
  );

  return updatedHtml;
}

function parseDominosPageDocument(html: string): DominosPageDocument {
  const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;
  const title = getFirstTagText(head, "title");
  const description = head.match(/<meta\b(?=[^>]*\bname=(["'])description\1)[^>]*\bcontent=(["'])(.*?)\2[^>]*>/i)?.[3];

  return {
    body,
    description: description ? decodeHtmlEntities(description) : undefined,
    head: stripMetadataManagedByNext(head),
    title: title ? decodeHtmlEntities(title) : undefined
  };
}

function removeCapturedRuntime(html: string) {
  return html
    .replace(/<!--\s*Mirrored from[\s\S]*?-->/gi, "")
    .replace(/<!--\s*Added by[\s\S]*?\/Added by[\s\S]*?-->/gi, "")
    .replace(/<meta\s+http-equiv=(["'])content-type\1[^>]*>/gi, "")
    .replace(/<link\b(?=[^>]*\brel=(["'])preload\1)(?=[^>]*\bas=(["'])script\2)[^>]*>/gi, "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
}

function stripMetadataManagedByNext(head: string) {
  return head
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b(?=[^>]*\bname=(["'])description\1)[^>]*>/gi, "")
    .replace(/<meta\b(?=[^>]*\bname=(["'])viewport\1)[^>]*>/gi, "")
    .replace(/<meta\b(?=[^>]*\bcharset=)[^>]*>/gi, "");
}

function getFirstTagText(html: string, tagName: string) {
  const match = html.match(new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i"));
  return match?.[1];
}

function rewriteSrcSet(value: string, baseDirectory: string) {
  return value
    .split(/,\s+(?=(?:https?:|file:|\/|\.\.?\/|[A-Za-z0-9_-]))/)
    .map((entry) => {
      const match = entry.match(/^(\s*)(\S+)(.*)$/);
      if (!match) return entry;

      const [, leadingSpace, url, descriptor] = match;
      return `${leadingSpace}${rewriteReference(url, baseDirectory, "src")}${descriptor}`;
    })
    .join(", ");
}

function rewriteReference(value: string, baseDirectory: string, attribute: string) {
  if (shouldIgnoreReference(value)) return value;

  const parsed = parseReference(value);
  if (!parsed) return value;

  const mirrorPath = resolveMirrorPath(parsed.pathPart, baseDirectory);
  if (!mirrorPath) return value;

  if (attribute !== "src" && isDominosPagePath(mirrorPath)) {
    return pageUrlFor(mirrorPath, parsed.suffix);
  }

  return assetUrlFor(mirrorPath, parsed.suffix);
}

function shouldIgnoreReference(value: string) {
  if (!value || value.startsWith("#")) return true;
  if (/^(?:https?:|mailto:|tel:|javascript:|data:|blob:|\/\/)/i.test(value)) return true;
  if (value.startsWith(ASSET_ROUTE_PREFIX)) return true;
  return false;
}

function parseReference(value: string): ParsedReference | null {
  const fileUrlPrefix = "file:///C:/cms/assets/";
  if (value.startsWith(fileUrlPrefix)) {
    return {
      pathPart: `/cms/assets/${value.slice(fileUrlPrefix.length)}`,
      suffix: ""
    };
  }

  const firstHash = value.indexOf("#");
  const firstQuestion = value.indexOf("?");
  const suffixStart = [firstHash, firstQuestion].filter((index) => index >= 0).sort((a, b) => a - b)[0];

  if (suffixStart === undefined) {
    return {
      pathPart: value,
      suffix: ""
    };
  }

  return {
    pathPart: value.slice(0, suffixStart),
    suffix: value.slice(suffixStart)
  };
}

function resolveMirrorPath(reference: string, baseDirectory: string) {
  if (!reference || reference.includes("\0")) return null;

  const normalizedReference = reference.replace(/\\/g, "/");
  const resolved = normalizedReference.startsWith("/")
    ? posixPath.normalize(normalizedReference)
    : posixPath.normalize(posixPath.join(baseDirectory, normalizedReference));

  if (resolved === "." || resolved.startsWith("../")) return null;
  return resolved.startsWith("/") ? resolved : `/${resolved}`;
}

function getMirrorDirectory(htmlFile: string) {
  const relativeDirectory = path.relative(MIRROR_ROOT, path.dirname(htmlFile)).replace(/\\/g, "/");
  return relativeDirectory === "" ? "/" : `/${relativeDirectory}`;
}

function isDominosPagePath(mirrorPath: string) {
  const extension = posixPath.extname(mirrorPath).toLowerCase();

  if (extension === ".html") return true;
  if (ASSET_EXTENSIONS.has(extension)) return false;

  return false;
}

function pageUrlFor(mirrorPath: string, suffix: string) {
  let routePath = mirrorPath.replace(/\.html$/i, "");
  routePath = routePath.replace(/\/index$/i, "");

  if (!routePath || routePath === "/index") return `/${suffix}`;
  return `${routePath}${suffix}`;
}

function assetUrlFor(mirrorPath: string, suffix: string) {
  return `${ASSET_ROUTE_PREFIX}${mirrorPath}${suffix}`;
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function safeJoin(root: string, relativePath: string) {
  const normalizedRelativePath = relativePath.replace(/\\/g, "/").replace(/^\/+/, "");
  const joinedPath = path.resolve(root, normalizedRelativePath);
  const relativeToRoot = path.relative(root, joinedPath);

  if (relativeToRoot.startsWith("..") || path.isAbsolute(relativeToRoot)) return null;
  return joinedPath;
}


