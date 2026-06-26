import { NextResponse } from "next/server";
import { getDominosAsset, getMimeType } from "@/src/lib/dominos-site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{ path?: string[] }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const params = await context.params;
  const asset = await getDominosAsset(params.path ?? []);

  if (!asset) {
    return new NextResponse("Not found", { status: 404 });
  }

  return new NextResponse(asset.body, {
    headers: {
      "content-type": getMimeType(asset.filePath),
      "cache-control": "public, max-age=31536000, immutable"
    }
  });
}
