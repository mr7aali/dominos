import type { Metadata } from "next";
import { ProductOptionsLoadingPage } from "../../../../src/modules/dominos/components/product";

export const metadata: Metadata = {
  title: "Build Your Own Pizza | Crumblez",
  description: "Build your own Crumblez pizza online. Available for carryout or delivery.",
  alternates: {
    canonical: "/en/menu/build-your-own",
  },
  robots: "index",
};

export default function Page() {
  return <ProductOptionsLoadingPage />;
}
