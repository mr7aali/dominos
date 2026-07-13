/* eslint-disable */
// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "previous Near Me",
  "description": "Order your favorite Crumblez previous online! Sign up for Crumblez email & text offers to get great deals on your next order.",
  "alternates": {
    "canonical": "/en/menu/previous"
  },
  "robots": "index"
};

export function MenuPreviousPage() {
  return (
    <>
    <div>
<svg width="0" height="0" style={{ position: "absolute", visibility: "hidden" }} aria-hidden="true">
        <defs>
          <symbol id="icon-expand" viewBox="0 0 16 16">
            <path d="M8 10.664a.665.665 0 0 1-.472-.195L3.534 6.474a.666.666 0 0 1 .94-.941L8 9.056l3.523-3.523a.666.666 0 0 1 .942.941l-3.995 3.995c-.13.13-.3.195-.471.195h.001z" fill="currentColor"></path>
          </symbol>
        </defs>
      </svg>
      <section className="sh-bg-primary sh-flex sh-h-full sh-flex-col sh-typo-body-1">
        
        <main className="sh-min-h-[400px]" id="main-content">
          <section className="sh-m-auto">
<header className="pd-fixed pd-inset-x-none pd-top-none pd-z-20 pd-bg-neutral-white pd-transition-transform -pd-translate-y-full" aria-hidden="false">
              <div className="pd-box-border pd-border-b pd-border-cool-gray-200 pd-px-medium pd-py-large md:pd-px-x-large lg:pd-py-x-large md:pd-py-x-large">
                <div className="pd-flex pd-flex-col pd-gap-large md:pd-flex-row md:pd-items-center md:pd-justify-between">
                  <h1 className="pd-uppercase pd-text-blue pd-typo-subhead-2">
                    {"Menu"}
                  </h1>
                  <div className="pd-w-fit pd-max-w-screen-xl md:pd-flex md:pd-place-items-end md:pd-items-center md:pd-gap-small md:pd-whitespace-nowrap">
                    <div className="md:pd-p-x-small md:pd-px-none">
                      <ul className="flex w-fit flex-row items-center justify-start gap-small">
                        <li className="rounded-full border-2 px-medium py-small text-center outline-none typo-label-4 focus:shadow-button-tertiary border-cool-gray-400 bg-transparent text-text-primary">
                          <Link href="/menu">
                            {"Menu"}
                          </Link>
                        </li>
                        <li className="rounded-full border-2 px-medium py-small text-center outline-none typo-label-4 focus:shadow-button-tertiary border-cool-gray-1100 bg-cool-gray-1100 text-text-invert">
                          <Link aria-current="page" href="/menu/previous">
                            {"Recent items"}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pd-border-b pd-border-cool-gray-200 empty:pd-border-none"></div>
            </header>
            <div>
              <header className="flex justify-center border-b bg-cool-gray-200 border-cool-gray-400">
                <div className="flex w-full max-w-screen-xl flex-col gap-y-tiny px-medium pb-large pt-x-large md:px-x-large lg:pb-x-large lg:pt-jumbo">
                  <div className="pd-flex pd-flex-col pd-gap-large md:pd-flex-row md:pd-items-center md:pd-justify-between">
                    <h1 className="text-blue typo-headline-1 lg:typo-display-1">
                      {"Menu"}
                    </h1>
                    <div className="pd-w-fit pd-max-w-screen-xl md:pd-flex md:pd-place-items-end md:pd-items-center md:pd-gap-small md:pd-whitespace-nowrap">
                      <div className="md:pd-p-x-small md:pd-px-none">
                        <ul className="flex w-fit flex-row items-center justify-start gap-small">
                          <li className="rounded-full border-2 px-medium py-small text-center outline-none typo-label-4 focus:shadow-button-tertiary border-cool-gray-400 bg-transparent text-text-primary">
                            <Link href="/menu">
                              {"Menu"}
                            </Link>
                          </li>
                          <li className="rounded-full border-2 px-medium py-small text-center outline-none typo-label-4 focus:shadow-button-tertiary border-cool-gray-1100 bg-cool-gray-1100 text-text-invert">
                            <Link aria-current="page" href="/menu/previous">
                              {"Recent items"}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="pd-flex pd-justify-center pd-border-b pd-border-cool-gray-200 pd-bg-neutral-white md:pd-top-header-nav-menu-regular-with-store lg:pd-top-mega-6">
                <div className="pd-w-full pd-bg-neutral-white">
                  <div className="pd-mx-auto pd-max-w-screen-xl"></div>
                </div>
              </div>
            </div>
            <div id="root-toast-container" className="fixed top-none z-[61] mx-regular mt-mega-7 flex w-[calc(100vw-2rem)] flex-col-reverse md:right-none md:ml-none md:mr-x-large md:mt-mega-5 md:w-1/2 lg:ml-none lg:mr-mega-3 lg:w-1/3"></div>
          </section>
        </main>
        
      </section>
    </div>
    </>
  );
}
