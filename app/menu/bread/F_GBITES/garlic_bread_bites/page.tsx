import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DominosPage } from "@/src/components/dominos/DominosPage";
import { getDominosMetadata, getDominosPageDocument } from "@/src/lib/dominos-site";

const sourcePath = "menu/bread/F_GBITES/garlic_bread_bites.html";

export async function generateMetadata(): Promise<Metadata> {
  return getDominosMetadata(sourcePath);
}

export default async function Page() {
  const document = await getDominosPageDocument(sourcePath);

  if (!document) {
    notFound();
  }

  return <DominosPage document={document} />;
}
