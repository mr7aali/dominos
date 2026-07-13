"use client";

import { useEffect, useState } from "react";

type CarouselControlsProps = {
  targetTestId: string;
};

export function CarouselControls({ targetTestId }: CarouselControlsProps) {
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  useEffect(() => {
    const carousel = document.querySelector<HTMLElement>(
      `[data-testid="${targetTestId}"]`,
    );

    if (!carousel) {
      return;
    }

    const updateScrollState = () => {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      setCanScrollBack(carousel.scrollLeft > 4);
      setCanScrollForward(carousel.scrollLeft < maxScrollLeft - 4);
    };

    updateScrollState();
    carousel.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      carousel.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [targetTestId]);

  const scrollCarousel = (direction: "back" | "forward") => {
    const carousel = document.querySelector<HTMLElement>(
      `[data-testid="${targetTestId}"]`,
    );

    if (!carousel) {
      return;
    }

    carousel.scrollBy({
      left: direction === "forward" ? carousel.clientWidth * 0.9 : -carousel.clientWidth * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex gap-regular">
      <button
        aria-label="Previous"
        aria-disabled={!canScrollBack}
        disabled={!canScrollBack}
        className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed border border-warm-gray-800 disabled:bg-neutral-white disabled:opacity-30 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] border-warm-gray-400 bg-warm-gray-100 disabled:pointer-events-none w-xx-large p-small rounded-full aspect-square"
        type="button"
        onClick={() => scrollCarousel("back")}
      >
        <img
          alt=""
          className="block w-regular h-regular"
          src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-arrow-back--warm-gray-400.svg"
        />
      </button>
      <button
        aria-label="Next"
        aria-disabled={!canScrollForward}
        disabled={!canScrollForward}
        className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed border border-warm-gray-800 disabled:bg-neutral-white disabled:opacity-30 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] bg-cool-gray-200 border [&:not([aria-disabled='true'])]:!border-cool-gray-800 hover:bg-cool-gray-300 active:bg-cool-gray-400 [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(240,222,204,0.50),0_0_0_3px_rgba(192,165,139,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-xx-large p-small rounded-full aspect-square"
        type="button"
        onClick={() => scrollCarousel("forward")}
      >
        <img
          alt=""
          className="block w-regular h-regular"
          src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-arrow-forward--text-tertiary.svg"
        />
      </button>
    </div>
  );
}
