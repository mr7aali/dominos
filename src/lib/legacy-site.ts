import { promises as fs } from "node:fs";
import path from "node:path";
import posixPath from "node:path/posix";

const LEGACY_ROOT = path.join(process.cwd(), "www.dominos.com");
const ASSET_ROUTE_PREFIX = "/legacy-assets";

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

export async function findLegacyHtmlFile(slug: string[]) {
  const cleanSlug = slug.filter(Boolean);
  const requestedPath = cleanSlug.join("/");
  const candidates = getHtmlCandidates(requestedPath);

  for (const candidate of candidates) {
    const filePath = safeJoin(LEGACY_ROOT, candidate);
    if (!filePath) continue;

    try {
      const stats = await fs.stat(filePath);
      if (stats.isFile()) return filePath;
    } catch {
      // Try the next candidate.
    }
  }

  return null;
}

export async function getLegacyHtml(filePath: string) {
  return fs.readFile(filePath, "utf8");
}

export async function getLegacyAsset(segments: string[]) {
  const filePath = safeJoin(LEGACY_ROOT, segments.join("/"));
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

export function rewriteLegacyHtml(html: string, htmlFile: string) {
  const baseDirectory = getLegacyDirectory(htmlFile);

  let updatedHtml = stripUnavailableLegacyScripts(html);

  updatedHtml = updatedHtml.replace(
    /\b(srcset|srcSet)=(")([^"]*)(")/g,
    (_match, attribute: string, openQuote: string, value: string, closeQuote: string) =>
      `${attribute}=${openQuote}${rewriteSrcSet(value, baseDirectory)}${closeQuote}`
  );

  updatedHtml = updatedHtml.replace(
    /\b(src|href|action)=(")([^"]*)(")/g,
    (_match, attribute: string, openQuote: string, value: string, closeQuote: string) =>
      `${attribute}=${openQuote}${rewriteReference(value, baseDirectory, attribute.toLowerCase())}${closeQuote}`
  );

  updatedHtml = updatedHtml.replace(
    /\b(src|href|action)=(')([^']*)(')/g,
    (_match, attribute: string, openQuote: string, value: string, closeQuote: string) =>
      `${attribute}=${openQuote}${rewriteReference(value, baseDirectory, attribute.toLowerCase())}${closeQuote}`
  );

  return updatedHtml;
}

function stripUnavailableLegacyScripts(html: string) {
  return html
    .replace(/<link\b(?=[^>]*\brel=(["'])preload\1)(?=[^>]*\bas=(["'])script\2)[^>]*>/gi, "")
    .replace(/<script\b(?=[^>]*\bsrc=)(?![^>]*\blocal-signin-modal\.js\b)[^>]*>\s*<\/script>/gi, "");
}

function getHtmlCandidates(requestedPath: string) {
  if (!requestedPath || requestedPath === "/") return ["index.html"];

  const normalizedPath = requestedPath.replace(/^\/+/, "");
  if (normalizedPath.endsWith(".html")) return [normalizedPath];

  return [`${normalizedPath}.html`, `${normalizedPath}/index.html`];
}

function getLegacyDirectory(htmlFile: string) {
  const relativeDirectory = path.relative(LEGACY_ROOT, path.dirname(htmlFile)).replace(/\\/g, "/");
  return relativeDirectory === "" ? "/" : `/${relativeDirectory}`;
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

  const legacyPath = resolveLegacyPath(parsed.pathPart, baseDirectory);
  if (!legacyPath) return value;

  if (attribute !== "src" && isLegacyPagePath(legacyPath)) {
    return routeUrlFor(legacyPath, parsed.suffix);
  }

  return assetUrlFor(legacyPath, parsed.suffix);
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

function resolveLegacyPath(reference: string, baseDirectory: string) {
  if (!reference || reference.includes("\0")) return null;

  const normalizedReference = reference.replace(/\\/g, "/");
  const resolved = normalizedReference.startsWith("/")
    ? posixPath.normalize(normalizedReference)
    : posixPath.normalize(posixPath.join(baseDirectory, normalizedReference));

  if (resolved === "." || resolved.startsWith("../")) return null;
  return resolved.startsWith("/") ? resolved : `/${resolved}`;
}

function isLegacyPagePath(legacyPath: string) {
  const extension = posixPath.extname(legacyPath).toLowerCase();

  if (extension === ".html") return true;
  if (ASSET_EXTENSIONS.has(extension)) return false;

  return false;
}

function routeUrlFor(legacyPath: string, suffix: string) {
  if (legacyPath === "/index.html") return `/${suffix}`;
  return `${legacyPath}${suffix}`;
}

function assetUrlFor(legacyPath: string, suffix: string) {
  return `${ASSET_ROUTE_PREFIX}${legacyPath}${suffix}`;
}

function safeJoin(root: string, relativePath: string) {
  const normalizedRelativePath = relativePath.replace(/\\/g, "/").replace(/^\/+/, "");
  const joinedPath = path.resolve(root, normalizedRelativePath);
  const relativeToRoot = path.relative(root, joinedPath);

  if (relativeToRoot.startsWith("..") || path.isAbsolute(relativeToRoot)) return null;
  return joinedPath;
}
