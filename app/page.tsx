import type { Metadata } from "next";
import { HomePage, homeMetadata } from "@/src/components/home/HomePage";

export const metadata: Metadata = homeMetadata;

export default function Page() {
  return <HomePage />;
}
