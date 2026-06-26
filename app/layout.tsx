import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domino's Next.js Clone",
  description: "A componentized Next.js App Router conversion of the cloned Domino's site."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
