import { NextResponse } from "next/server";
import {
  findLegacyHtmlFile,
  getLegacyHtml,
  rewriteLegacyHtml
} from "@/src/lib/legacy-site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{ slug?: string[] }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const params = await context.params;
  const htmlFile = await findLegacyHtmlFile(params.slug ?? []);

  if (!htmlFile) {
    return new NextResponse("Not found", { status: 404 });
  }

  const html = await getLegacyHtml(htmlFile);
  const rewrittenHtml = rewriteLegacyHtml(html, htmlFile);

  return new NextResponse(rewrittenHtml, {
    headers: {
      "content-type": "text/html; charset=utf-8"
    }
  });
}
