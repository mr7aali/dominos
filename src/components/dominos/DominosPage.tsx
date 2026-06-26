import { HtmlFragment } from "@/src/components/dominos/HtmlFragment";
import type { DominosPageDocument } from "@/src/lib/dominos-site";

type DominosPageProps = {
  document: DominosPageDocument;
};

type PageRegions = {
  body: string;
  footer?: string;
  header?: string;
};

export function DominosPage({ document }: DominosPageProps) {
  const regions = getPageRegions(document.body);

  return (
    <>
      <DominosHeadAssets html={document.head} />
      <DominosNavigation html={regions.header} />
      <DominosMain html={regions.body} />
      <DominosFooter html={regions.footer} />
    </>
  );
}

function DominosHeadAssets({ html }: { html: string }) {
  return <HtmlFragment html={html} />;
}

function DominosNavigation({ html }: { html?: string }) {
  if (!html) return null;
  return <HtmlFragment html={html} />;
}

function DominosMain({ html }: { html: string }) {
  return <HtmlFragment html={html} />;
}

function DominosFooter({ html }: { html?: string }) {
  if (!html) return null;
  return <HtmlFragment html={html} />;
}

function getPageRegions(body: string): PageRegions {
  const header = body.match(/<header\b(?=[^>]*data-testid=(["'])shell-navigation-bar\1)[\s\S]*?<\/header>/i)?.[0];
  const footer = body.match(/<footer\b[\s\S]*?<\/footer>/i)?.[0];

  return {
    header,
    footer,
    body: body
      .replace(header ?? "", "")
      .replace(footer ?? "", "")
  };
}
