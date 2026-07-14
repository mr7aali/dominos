import type { ReactNode } from "react";
import { AuthModalProvider } from "../components/auth";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

type DominosLayoutProps = {
  children: ReactNode;
};

export function DominosLayout({ children }: DominosLayoutProps) {
  return (
    <AuthModalProvider>
      <SiteHeader />
      {children}
      <SiteFooter />
    </AuthModalProvider>
  );
}
