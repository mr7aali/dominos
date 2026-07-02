/* eslint-disable */
// @ts-nocheck
import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Page has moved"
};

export function EnInternationalPage() {
  return (
    <>
    {"\r\n"}
    <meta HTTP-EQUIV="Refresh" CONTENT="0; URL=../international.html" />
    {"\r\n\r\n"}
    <a HREF="../international.html">
      <h3>
        {"Click here..."}
      </h3>
    </a>
    {"\r\n"}
    </>
  );
}
