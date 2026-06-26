import Image from "next/image";
import Link from "next/link";
import React, { Fragment, type ComponentProps, type CSSProperties, type ReactNode } from "react";

type HtmlNode =
  | { type: "text"; value: string }
  | { type: "element"; tag: string; attributes: Record<string, string | true>; children: HtmlNode[] };

type StackNode = Extract<HtmlNode, { type: "element" }>;

type HtmlFragmentProps = {
  html: string;
};

const VOID_TAGS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);

const SKIPPED_TAGS = new Set(["script"]);

const ATTRIBUTE_ALIASES: Record<string, string> = {
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
  viewbox: "viewBox"
};

export function HtmlFragment({ html }: HtmlFragmentProps) {
  return <>{parseHtml(html).map((node, index) => renderNode(node, index))}</>;
}

function parseHtml(html: string): HtmlNode[] {
  const root: StackNode = { type: "element", tag: "fragment", attributes: {}, children: [] };
  const stack: StackNode[] = [root];
  const tokens = html.match(/<!--[\s\S]*?-->|<![^>]*>|<[^>]+>|[^<]+/g) ?? [];

  for (const token of tokens) {
    if (token.startsWith("<!--") || token.startsWith("<!")) continue;

    if (!token.startsWith("<")) {
      stack[stack.length - 1].children.push({ type: "text", value: decodeHtmlEntities(token) });
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
    if (!parsed || SKIPPED_TAGS.has(parsed.tag)) continue;

    const node: StackNode = {
      type: "element",
      tag: parsed.tag,
      attributes: parsed.attributes,
      children: []
    };

    stack[stack.length - 1].children.push(node);

    if (!parsed.selfClosing && !VOID_TAGS.has(parsed.tag)) {
      stack.push(node);
    }
  }

  return root.children;
}

function parseOpeningTag(token: string) {
  const match = token.match(/^<\s*([^\s/>]+)/);
  if (!match) return null;

  const tag = match[1].toLowerCase();
  const attributesSource = token
    .replace(/^<\s*[^\s/>]+/, "")
    .replace(/\/?>\s*$/, "");

  return {
    tag,
    attributes: parseAttributes(attributesSource),
    selfClosing: /\/\s*>$/.test(token)
  };
}

function parseAttributes(source: string) {
  const attributes: Record<string, string | true> = {};
  const attributePattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match: RegExpExecArray | null;

  while ((match = attributePattern.exec(source))) {
    const [, rawName, doubleQuoted, singleQuoted, unquoted] = match;
    const value = doubleQuoted ?? singleQuoted ?? unquoted;
    attributes[rawName] = value === undefined ? true : decodeHtmlEntities(value);
  }

  return attributes;
}

function renderNode(node: HtmlNode, key: React.Key): ReactNode {
  if (node.type === "text") return <Fragment key={key}>{node.value}</Fragment>;

  const children = node.children.map((child, index) => renderNode(child, index));
  const props = attributesToProps(node.attributes, key);

  if (node.tag === "a" && typeof props.href === "string" && isInternalHref(props.href)) {
    return (
      <Link {...props} href={props.href} key={key}>
        {children}
      </Link>
    );
  }

  if (node.tag === "img" && canUseNextImage(props)) {
    return <Image {...((props as unknown) as ComponentProps<typeof Image>)} key={key} unoptimized />;
  }

  return React.createElement(node.tag, props, VOID_TAGS.has(node.tag) ? undefined : children);
}

function attributesToProps(attributes: Record<string, string | true>, key: React.Key) {
  const props: Record<string, unknown> = { key };

  for (const [name, value] of Object.entries(attributes)) {
    const propName = normalizeAttributeName(name);

    if (propName === "style" && typeof value === "string") {
      props.style = parseStyle(value);
      continue;
    }

    props[propName] = value;
  }

  return props;
}

function normalizeAttributeName(name: string) {
  if (name.startsWith("data-") || name.startsWith("aria-")) return name;
  const lowerName = name.toLowerCase();
  return ATTRIBUTE_ALIASES[lowerName] ?? name;
}

function parseStyle(value: string): CSSProperties {
  return value.split(";").reduce<CSSProperties>((styles, declaration) => {
    const separatorIndex = declaration.indexOf(":");
    if (separatorIndex === -1) return styles;

    const property = declaration.slice(0, separatorIndex).trim();
    const propertyValue = declaration.slice(separatorIndex + 1).trim();
    if (!property || !propertyValue) return styles;

    const reactProperty = property.replace(/-([a-z])/g, (_match, letter: string) => letter.toUpperCase());
    return {
      ...styles,
      [reactProperty]: propertyValue
    };
  }, {});
}

function canUseNextImage(props: Record<string, unknown>) {
  return (
    typeof props.src === "string" &&
    props.src.startsWith("/site-assets/") &&
    !props.src.includes("?") &&
    hasPositiveNumber(props.width) &&
    hasPositiveNumber(props.height)
  );
}

function hasPositiveNumber(value: unknown) {
  return typeof value === "string" && /^\d+$/.test(value) && Number(value) > 0;
}

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("/site-assets/");
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}


