import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domino's Clone",
  description: "A Next.js wrapper around the mirrored Domino's site."
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
