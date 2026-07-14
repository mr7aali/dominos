import type { Metadata } from "next";
import { DominosLayout } from "../src/modules/dominos/layouts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domino's",
  description: "Order pizza, pasta, sandwiches, wings, and more from Domino's.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DominosLayout>{children}</DominosLayout>
      </body>
    </html>
  );
}
