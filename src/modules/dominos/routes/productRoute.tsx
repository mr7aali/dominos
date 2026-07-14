import type { Metadata } from "next";
import { ProductOptionsLoadingPage } from "../components/product";

type ProductRouteParams = {
  category: string;
  productCode: string;
  productSlug: string;
};

type BuildProductMetadataOptions = {
  languagePrefix?: "en";
  params: ProductRouteParams;
};

function humanizeSlug(slug: string) {
  return slug
    .split(/[-_]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function buildProductMetadata({
  languagePrefix,
  params,
}: BuildProductMetadataOptions): Metadata {
  const productName = humanizeSlug(params.productSlug);
  const routePrefix = languagePrefix ? `/${languagePrefix}` : "";
  const canonical = `${routePrefix}/menu/${params.category}/${params.productCode}/${params.productSlug}`;

  return {
    title: `${productName} Near Me | Crumblez`,
    description: `Order your favorite Crumblez ${productName} online! Available for carryout or delivery.`,
    alternates: {
      canonical,
    },
    robots: "index",
  };
}

export function ProductRoutePage() {
  return <ProductOptionsLoadingPage />;
}
