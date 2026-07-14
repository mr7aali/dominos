import { DominosPageShell } from "../page-shell";
import { ProductOptionsSkeleton } from "./ProductOptionsSkeleton";

export function ProductOptionsLoadingPage() {
  return (
    <DominosPageShell>
      <ProductOptionsSkeleton />
    </DominosPageShell>
  );
}
