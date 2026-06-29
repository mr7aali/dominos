const fs = require("fs");
const path = require("path");
const posixPath = require("path/posix");

const root = process.cwd();
const sourceFile = path.join(root, "www.dominos.com", "index.html");
const outDir = path.join(root, "src", "components", "home");
const assetPrefix = "/site-assets";
const assetExtensions = new Set([
  ".avif", ".css", ".gif", ".ico", ".jpeg", ".jpg", ".js", ".json", ".map", ".pdf", ".png", ".svg", ".ttf", ".txt", ".webp", ".woff", ".woff2"
]);
const voidTags = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
const skippedTags = new Set(["script", "noscript"]);
const aliases = {
  acceptcharset: "acceptCharset",
  accesskey: "accessKey",
  allowfullscreen: "allowFullScreen",
  autocomplete: "autoComplete",
  autoplay: "autoPlay",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  charset: "charSet",
  class: "className",
  colspan: "colSpan",
  contenteditable: "contentEditable",
  crossorigin: "crossOrigin",
  fillrule: "fillRule",
  for: "htmlFor",
  frameborder: "frameBorder",
  httpequiv: "httpEquiv",
  inputmode: "inputMode",
  maxlength: "maxLength",
  minlength: "minLength",
  novalidate: "noValidate",
  readonly: "readOnly",
  referrerpolicy: "referrerPolicy",
  rowspan: "rowSpan",
  srcset: "srcSet",
  strokelinecap: "strokeLinecap",
  strokelinejoin: "strokeLinejoin",
  strokewidth: "strokeWidth",
  tabindex: "tabIndex",
  viewbox: "viewBox",
  "clip-path": "clipPath",
  "font-family": "fontFamily",
  "font-size": "fontSize",
  "font-weight": "fontWeight"
};

function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const raw = fs.readFileSync(sourceFile, "utf8");
  const cleaned = rewriteHtml(removeCapturedRuntime(raw), sourceFile);
  const head = cleaned.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  const body = cleaned.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? cleaned;
  const pageTitle = decodeEntities(head.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "Domino's Clone");
  const description = decodeEntities(head.match(/<meta\b(?=[^>]*\bname=(["'])description\1)[^>]*\bcontent=(["'])(.*?)\2[^>]*>/i)?.[3] ?? "");

  const headAssets = stripMetadata(head).trim();
  const header = body.match(/<header\b(?=[^>]*data-testid=(["'])shell-navigation-bar\1)[\s\S]*?<\/header>/i)?.[0] ?? "";
  const footer = body.match(/<footer\b[\s\S]*?<\/footer>/i)?.[0] ?? "";
  const mainContent = body.replace(header, "").replace(footer, "").trim();

  writeComponent("HomeHeadAssets", headAssets);
  writeComponent("HomeHeader", header);
  writeComponent("HomeFooter", footer);
  writeComponent("HomeMain", mainContent);
  writeHomePage(pageTitle, description);
}

function writeComponent(name, html) {
  const nodes = parseHtml(html);
  const jsx = nodes.map((node) => nodeToJsx(node, 2)).join("\n");
  const needsLink = jsx.includes("<Link ");
  const imports = needsLink ? 'import Link from "next/link";\n\n' : "";
  const file = `${imports}export function ${name}() {\n  return (\n    <>\n${jsx}\n    </>\n  );\n}\n`;
  fs.writeFileSync(path.join(outDir, `${name}.tsx`), file, "utf8");
}

function writeHomePage(title, description) {
  const file = `import type { Metadata } from "next";\nimport { HomeFooter } from "./HomeFooter";\nimport { HomeHeadAssets } from "./HomeHeadAssets";\nimport { HomeHeader } from "./HomeHeader";\nimport { HomeMain } from "./HomeMain";\n\nexport const homeMetadata: Metadata = {\n  title: ${JSON.stringify(title)},\n  description: ${JSON.stringify(description)}\n};\n\nexport function HomePage() {\n  return (\n    <>\n      <HomeHeadAssets />\n      <HomeHeader />\n      <HomeMain />\n      <HomeFooter />\n    </>\n  );\n}\n`;
  fs.writeFileSync(path.join(outDir, "HomePage.tsx"), file, "utf8");
}

function removeCapturedRuntime(html) {
  return html
    .replace(/<!--\s*Mirrored from[\s\S]*?-->/gi, "")
    .replace(/<!--\s*Added by[\s\S]*?\/Added by[\s\S]*?-->/gi, "")
    .replace(/<meta\s+http-equiv=(["'])content-type\1[^>]*>/gi, "")
    .replace(/<link\b(?=[^>]*\brel=(["'])preload\1)(?=[^>]*\bas=(["'])script\2)[^>]*>/gi, "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
}

function stripMetadata(head) {
  return head
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b(?=[^>]*\bname=(["'])description\1)[^>]*>/gi, "")
    .replace(/<meta\b(?=[^>]*\bname=(["'])viewport\1)[^>]*>/gi, "")
    .replace(/<meta\b(?=[^>]*\bcharset=)[^>]*>/gi, "");
}

function rewriteHtml(html, htmlFile) {
  const baseDirectory = getMirrorDirectory(htmlFile);
  return html
    .replace(/\b(srcset|srcSet)=(["'])(.*?)\2/g, (_, attr, quote, value) => `${attr}=${quote}${rewriteSrcSet(value, baseDirectory)}${quote}`)
    .replace(/\b(src|href|action)=(["'])(.*?)\2/g, (_, attr, quote, value) => `${attr}=${quote}${rewriteReference(value, baseDirectory, attr.toLowerCase())}${quote}`);
}

function rewriteSrcSet(value, baseDirectory) {
  return value
    .split(/,\s+(?=(?:https?:|file:|\/|\.\.?\/|[A-Za-z0-9_-]))/)
    .map((entry) => {
      const match = entry.match(/^(\s*)(\S+)(.*)$/);
      if (!match) return entry;
      return `${match[1]}${rewriteReference(match[2], baseDirectory, "src")}${match[3]}`;
    })
    .join(", ");
}

function rewriteReference(value, baseDirectory, attribute) {
  if (shouldIgnoreReference(value)) return value;
  const parsed = parseReference(value);
  if (!parsed) return value;
  const mirrorPath = resolveMirrorPath(parsed.pathPart, baseDirectory);
  if (!mirrorPath) return value;
  if (attribute !== "src" && isPagePath(mirrorPath)) return pageUrlFor(mirrorPath, parsed.suffix);
  return `${assetPrefix}${mirrorPath}${parsed.suffix}`;
}

function shouldIgnoreReference(value) {
  if (!value || value.startsWith("#")) return true;
  if (/^(?:https?:|mailto:|tel:|javascript:|data:|blob:|\/\/)/i.test(value)) return true;
  if (value.startsWith(assetPrefix)) return true;
  return false;
}

function parseReference(value) {
  const fileUrlPrefix = "file:///C:/cms/assets/";
  if (value.startsWith(fileUrlPrefix)) return { pathPart: `/cms/assets/${value.slice(fileUrlPrefix.length)}`, suffix: "" };
  const firstHash = value.indexOf("#");
  const firstQuestion = value.indexOf("?");
  const suffixStart = [firstHash, firstQuestion].filter((index) => index >= 0).sort((a, b) => a - b)[0];
  if (suffixStart === undefined) return { pathPart: value, suffix: "" };
  return { pathPart: value.slice(0, suffixStart), suffix: value.slice(suffixStart) };
}

function resolveMirrorPath(reference, baseDirectory) {
  if (!reference || reference.includes("\0")) return null;
  const normalizedReference = reference.replace(/\\/g, "/");
  const resolved = normalizedReference.startsWith("/")
    ? posixPath.normalize(normalizedReference)
    : posixPath.normalize(posixPath.join(baseDirectory, normalizedReference));
  if (resolved === "." || resolved.startsWith("../")) return null;
  return resolved.startsWith("/") ? resolved : `/${resolved}`;
}

function getMirrorDirectory(htmlFile) {
  const mirrorRoot = path.join(root, "www.dominos.com");
  const relativeDirectory = path.relative(mirrorRoot, path.dirname(htmlFile)).replace(/\\/g, "/");
  return relativeDirectory === "" ? "/" : `/${relativeDirectory}`;
}

function isPagePath(mirrorPath) {
  const extension = posixPath.extname(mirrorPath).toLowerCase();
  if (extension === ".html") return true;
  if (assetExtensions.has(extension)) return false;
  return false;
}

function pageUrlFor(mirrorPath, suffix) {
  let routePath = mirrorPath.replace(/\.html$/i, "").replace(/\/index$/i, "");
  if (!routePath || routePath === "/index") return `/${suffix}`;
  return `${routePath}${suffix}`;
}

function parseHtml(html) {
  const root = { type: "element", tag: "fragment", attributes: {}, children: [] };
  const stack = [root];
  const tokens = html.match(/<!--[\s\S]*?-->|<![^>]*>|<[^>]+>|[^<]+/g) ?? [];
  for (const token of tokens) {
    if (token.startsWith("<!--") || token.startsWith("<!")) continue;
    if (!token.startsWith("<")) {
      stack[stack.length - 1].children.push({ type: "text", value: decodeEntities(token) });
      continue;
    }
    if (/^<\s*\//.test(token)) {
      const tag = token.match(/^<\s*\/\s*([^\s>]+)/)?.[1]?.toLowerCase();
      if (!tag) continue;
      while (stack.length > 1) {
        const current = stack.pop();
        if (current?.tag === tag) break;
      }
      continue;
    }
    const parsed = parseOpeningTag(token);
    if (!parsed || skippedTags.has(parsed.tag)) continue;
    const node = { type: "element", tag: parsed.tag, attributes: parsed.attributes, children: [] };
    stack[stack.length - 1].children.push(node);
    if (!parsed.selfClosing && !voidTags.has(parsed.tag)) stack.push(node);
  }
  return root.children;
}

function parseOpeningTag(token) {
  const match = token.match(/^<\s*([^\s/>]+)/);
  if (!match) return null;
  const tag = match[1].toLowerCase();
  const attributesSource = token.replace(/^<\s*[^\s/>]+/, "").replace(/\/?>\s*$/, "");
  return { tag, attributes: parseAttributes(attributesSource), selfClosing: /\/\s*>$/.test(token) };
}

function parseAttributes(source) {
  const attributes = {};
  const pattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match;
  while ((match = pattern.exec(source))) {
    const [, rawName, doubleQuoted, singleQuoted, unquoted] = match;
    const value = doubleQuoted ?? singleQuoted ?? unquoted;
    attributes[rawName] = value === undefined ? true : decodeEntities(value);
  }
  return attributes;
}

function nodeToJsx(node, level) {
  const pad = "  ".repeat(level);
  if (node.type === "text") {
    if (!node.value.trim()) return `${pad}{${JSON.stringify(node.value)}}`;
    return `${pad}{${JSON.stringify(node.value)}}`;
  }
  const tag = node.tag === "a" && isInternalHref(node.attributes.href || "") ? "Link" : node.tag;
  const attrs = attrsToJsx(node.attributes, tag);
  if (voidTags.has(node.tag)) return `${pad}<${tag}${attrs} />`;
  if (!node.children.length) return `${pad}<${tag}${attrs}></${tag}>`;
  const children = node.children.map((child) => nodeToJsx(child, level + 1)).join("\n");
  return `${pad}<${tag}${attrs}>\n${children}\n${pad}</${tag}>`;
}

function attrsToJsx(attributes, tag) {
  const parts = [];
  for (const [rawName, rawValue] of Object.entries(attributes)) {
    const name = normalizeAttribute(rawName);
    if (name === "style" && typeof rawValue === "string") {
      parts.push(`style={${styleToObject(rawValue)}}`);
      continue;
    }
    if (rawValue === true) {
      parts.push(name);
      continue;
    }
    parts.push(`${name}=${JSON.stringify(String(rawValue))}`);
  }
  return parts.length ? ` ${parts.join(" ")}` : "";
}

function normalizeAttribute(name) {
  if (name.startsWith("data-") || name.startsWith("aria-")) return name;
  const lower = name.toLowerCase();
  return aliases[lower] ?? name;
}

function styleToObject(style) {
  const entries = [];
  for (const declaration of style.split(";")) {
    const index = declaration.indexOf(":");
    if (index === -1) continue;
    const property = declaration.slice(0, index).trim();
    const value = declaration.slice(index + 1).trim();
    if (!property || !value) continue;
    const key = property.startsWith("--") ? JSON.stringify(property) : property.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    entries.push(`${key}: ${JSON.stringify(value)}`);
  }
  return `{ ${entries.join(", ")} }`;
}

function isInternalHref(href) {
  return typeof href === "string" && href.startsWith("/") && !href.startsWith(assetPrefix);
}

function decodeEntities(value) {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

main();
