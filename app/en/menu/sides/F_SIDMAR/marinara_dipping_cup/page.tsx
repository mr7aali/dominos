import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DominosPage } from "@/src/components/dominos/DominosPage";
import { getDominosMetadata, getDominosPageDocument } from "@/src/lib/dominos-site";

const sourcePath = "en/menu/sides/F_SIDMAR/marinara_dipping_cup.html";

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
