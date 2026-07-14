import type { Metadata } from "next";
import { DominosLayout } from "../src/modules/dominos/layouts";
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
        <DominosLayout>{children}</DominosLayout>
      </body>
    </html>
  );
}
