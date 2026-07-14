import type { ReactNode } from "react";
import { IconSprite } from "./IconSprite";
import { ToastContainer } from "./ToastContainer";

type DominosPageShellProps = {
  children?: ReactNode;
  includeToast?: boolean;
};

export function DominosPageShell({
  children,
  includeToast = true,
}: DominosPageShellProps) {
  return (
    <div>
      <IconSprite />
      <section className="sh-bg-primary sh-flex sh-h-full sh-flex-col sh-typo-body-1">
        <main className="sh-min-h-[400px]" id="main-content">
          <section className="sh-m-auto">
            {children}
            {includeToast ? <ToastContainer /> : null}
          </section>
        </main>
      </section>
    </div>
  );
}
