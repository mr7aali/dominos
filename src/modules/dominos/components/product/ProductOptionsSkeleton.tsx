export function ProductOptionsSkeleton() {
  return (
    <div role="alert" className="w-full">
      <span className="sh-sr-only sr-only">Loading product options...</span>
      <div aria-hidden="true">
        <section className="sh-grid sh-grid-cols-1 sh-grid-rows-1 sh-gap-xx-large lg:sh-grid-cols-deal-details-column lg:sh-gap-mega-3">
          <div className="lg:sh-me-deal-details-column-end lg:sh-ms-deal-details-column-start lg:sh-min-w-deal-details-column">
            <div className="sh-h-mega-26 sh-w-full lg:sh-h-mega-7">
              <div className="rounded motion-safe:animate-pulse bg-cool-gray-200 h-full w-full" />
            </div>
          </div>
          <div className="sh-hidden sh-grid-flow-row sh-auto-rows-auto sh-grid-cols-3 sh-gap-regular lg:sh-grid xl:sh-grid-cols-4">
            <div className="rounded motion-safe:animate-pulse bg-cool-gray-200 h-full w-full aspect-square" />
            <div className="rounded motion-safe:animate-pulse bg-cool-gray-200 h-full w-full aspect-square" />
            <div className="rounded motion-safe:animate-pulse bg-cool-gray-200 h-full w-full aspect-square" />
          </div>
        </section>
      </div>
    </div>
  );
}
