import { buildProductMetadata, ProductRoutePage } from "../../../../../../src/modules/dominos/routes/productRoute";

type PageProps = {
  params: Promise<{
    category: string;
    productCode: string;
    productSlug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps) {
  return buildProductMetadata({ languagePrefix: "en", params: await params });
}

export default function Page() {
  return <ProductRoutePage />;
}
