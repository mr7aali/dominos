/* eslint-disable */
// @ts-nocheck
import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Page has moved"
};

export function EnAboutPizzaGeneratedPage() {
  return (
    <>
    {"\r\n"}
    <meta HTTP-EQUIV="Refresh" CONTENT="0; URL=../about-pizza.html" />
    {"\r\n\r\n"}
    <a HREF="../about-pizza.html">
      <h3>
        {"Click here..."}
      </h3>
    </a>
    {"\r\n"}
    </>
  );
}
