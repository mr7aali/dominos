import type { Metadata } from "next";
import { SiteFooter } from "../src/modules/dominos/components/SiteFooter";
import { SiteHeader } from "../src/modules/dominos/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crumblez",
  description: "Order pizza, pasta, sandwiches, wings, and more from Crumblez.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
