/* eslint-disable */
// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Salads Near Me | Domino's",
  "description": "Order your favorite Domino's Classic Garden or Chicken Caesar salad online. Sign up for Domino's email & text offers to get great deals on your next order.",
  "alternates": {
    "canonical": "/en/menu/g-salad"
  },
  "robots": "index"
};

export function MenuGSaladPage() {
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
        <header className="sh-bg-cool-gray-200 sh-sticky sh-top-none sh-z-20 sh-translate-y-none" data-testid="shell-navigation-bar">
          <div className="sh-z-10 sh-bg-blue sh-text-lg sh-uppercase sh-text-neutral-white sh-transition-transform sh-clip-path-pizza-box">
            <nav aria-label="Main" className="sh-m-auto sh-grid sh-max-w-screen-xl sh-grid-cols-[1fr_auto_minmax(0,1fr)] sh-grid-rows-1 sh-items-center sh-p-x-small md:sh-px-regular lg:sh-px-xx-large xl:sh-px-mega-4">
              <div className="sh-col-start-1 sh-row-start-1 lg:sh-hidden">
                <button aria-controls="menu-links order-online-link" aria-expanded="false" aria-haspopup="menu" aria-label="Menu" className="sh-flex sh-justify-start sh-p-regular" data-dpz-track-evt-name="Hamburger Menu" id="toggle-menu" type="button">
                  <svg width="16" height="16" viewBox="0 0 20 16" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" className="sh-text-text-invert">
                    <path d="M1 1 H19 M1 8 H19 M1 15 H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"></path>
                  </svg>
                </button>
              </div>
              <ul className="sh-col-span-3 sh-mt-x-small sh-grid sh-flex-1 sh-auto-rows-auto sh-grid-cols-2 md:sh-col-span-1 md:sh-my-regular lg:sh-flex sh-hidden" id="menu-links">
                <li className="sh-col-span-2">
                  <button className="sh-block sh-whitespace-nowrap sh-px-regular sh-py-small sh-text-left sh-typo-subhead-2 focus:sh-rounded-sm focus:sh-outline focus:sh-outline-1 focus:sh-outline-neutral-white lg:sh-typo-label-2" type="button" data-dpz-track-evt-name="Blue Nav - Order Now">
                    {"Order Now"}
                  </button>
                </li>
                <li className="sh-col-span-2">
                  <Link className="sh-block sh-whitespace-nowrap sh-px-regular sh-py-small sh-typo-subhead-2 focus:sh-rounded-sm focus:sh-outline focus:sh-outline-1 focus:sh-outline-neutral-white lg:sh-typo-label-2" data-dpz-track-evt-name="Blue Nav - Menu" href="/menu">
                    {"Menu"}
                  </Link>
                </li>
                <li className="sh-col-span-2">
                  <Link className="sh-block sh-whitespace-nowrap sh-px-regular sh-py-small sh-typo-subhead-2 focus:sh-rounded-sm focus:sh-outline focus:sh-outline-1 focus:sh-outline-neutral-white lg:sh-typo-label-2" data-dpz-track-evt-name="Blue Nav - Deals" href="/deals">
                    {"Deals"}
                  </Link>
                </li>
                <li className="sh-col-span-2">
                  <Link className="sh-block sh-whitespace-nowrap sh-px-regular sh-py-small sh-typo-subhead-2 focus:sh-rounded-sm focus:sh-outline focus:sh-outline-1 focus:sh-outline-neutral-white lg:sh-typo-label-2" data-dpz-track-evt-name="Blue Nav - My Rewards" href="/my-deals-and-rewards">
                    {"My Rewards"}
                  </Link>
                </li>
                <li className="sh-col-span-2">
                  <Link className="sh-block sh-whitespace-nowrap sh-px-regular sh-py-small sh-typo-subhead-2 focus:sh-rounded-sm focus:sh-outline focus:sh-outline-1 focus:sh-outline-neutral-white lg:sh-typo-label-2" data-dpz-track-evt-name="Blue Nav - Tracker" href="/tracker">
                    {"Tracker"}
                  </Link>
                </li>
              </ul>
              <Link aria-label="Domino's logo link, home or home page" className="sh-col-start-2 sh-row-start-1 sh-flex sh-items-center sh-justify-center sh-px-regular sh-py-small focus:sh-rounded-sm focus:sh-outline focus:sh-outline-1 focus:sh-outline-neutral-white" data-testid="domino-logo-button" href="/">
                <svg width="36" height="36" aria-hidden="true" viewBox="0 0 214.6 228.87" xmlns="http://www.w3.org/2000/svg" className="w-[2.25rem] h-[2.25rem] lg:w-jumbo lg:h-jumbo">
                  <g>
                    <path d="M210.79 62.11l-58.3-58.3a13 13 0 00-18.42 0L85.18 52.7 3.81 134.08a13 13 0 000 18.42l58.3 58.31a13 13 0 0018.42 0l72.94-72.95 57.32-57.32a13 13 0 000-18.42" fill="#fff"></path>
                    <path d="M155.4 83.11a16.87 16.87 0 115-11.94 16.87 16.87 0 01-5 11.94m51.27-16.85L148.37 8a7.2 7.2 0 00-10.18 0l-63 63 68.47 68.47 63-63a7.2 7.2 0 000-10.18" fill="#ff0000"></path>
                    <path d="M84.09 131.79a16.86 16.86 0 11-4.95 11.94 16.82 16.82 0 014.95-11.94M58.42 155a16.93 16.93 0 114.93-12 16.92 16.92 0 01-4.93 12M7.93 138.2a7.2 7.2 0 000 10.18l58.3 58.31a7.2 7.2 0 0010.18 0l63-63L70.93 75.2z" fill="#0090e2"></path>
                  </g>
                  <text fill="#fff" fontFamily="MyriadPro-Semibold, MyriadPro Semibold" fontSize="33.33" fontWeight="700" x="99.13" y="220.53">
                    {"®"}
                  </text>
                </svg>
              </Link>
              <div className="sh-col-start-3 sh-row-start-1 sh-flex sh-items-center sh-justify-end sh-px-regular sh-py-small sh-gap-medium xs:sh-gap-[8px]">
                <div className="sh-hidden sh-max-w-xs sh-flex-1 sh-justify-end sh-overflow-hidden lg:sh-flex lg:sh-p-[2px]">
                  <div className="clickable-card sv-flex sv-w-full sv-rounded-xl sv-bg-dark-blue sv-font-sans sv-text-sm sv-normal-case sv-text-neutral-white md:sv-w-1/2 lg:sv-w-full sv-p-x-small lg:sv-px-regular lg:sv-py-small active:outline active:outline-blue" data-testid="clickable-card">
                    <button type="button" className="sv-h-full sv-w-full">
                      <span className="sv-grid sv-grid-cols-[auto_1fr] sv-grid-rows-1 sv-items-center sv-justify-center sv-gap-x-x-small sv-font-bold">
                        <span>
                          <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/place--neutral-white.svg" />
                        </span>
                        <span className="sv-truncate">
                          {"Choose your location"}
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
                <button type="button" className="sh-truncate sh-flex sh-min-w-mega-1 sh-max-w-[67px] sh-items-center sh-justify-center sh-rounded-full sh-bg-neutral-white sh-px-regular sh-py-x-small sh-text-center sh-shadow-button-white sh-typo-label-3 sh-text-blue-800">
                  {"Sign In"}
                </button>
                <div className="sh-w-xx-large"></div>
              </div>
              <div className="sh-col-span-3 sh-col-start-1 sh-row-start-4 sh-mx-regular sh-my-x-small sh-flex sh-items-center sh-justify-center empty:sh-hidden md:sh-col-span-3 md:sh-col-start-1 lg:sh-hidden"></div>
            </nav>
          </div>
        </header>
        <main className="sh-min-h-[400px]" id="main-content">
          <section className="sh-m-auto">
<header className="flex justify-center border-b bg-cool-gray-200 border-cool-gray-400">
              <div className="flex w-full max-w-screen-xl flex-col gap-y-tiny px-medium pb-large pt-x-large md:px-x-large lg:pb-x-large lg:pt-jumbo">
                <div className="pd-flex pd-w-full pd-items-center pd-justify-between">
                  <h1 className="text-blue typo-headline-1 lg:typo-display-1">
                    {"Salads"}
                  </h1>
                </div>
              </div>
            </header>
            <div className="bg-background-primary lg:flex lg:flex-col">
              <div className="flex w-full max-w-screen-xl flex-col gap-xx-large self-center px-medium pb-xx-large pt-x-large md:gap-mega-1 md:px-x-large md:pb-mega-1 lg:gap-mega-1 lg:pb-mega-1 lg:pt-mega-1">
                <div className="sv-m-auto sv-hidden sv-w-full sv-max-w-screen-xl sv-flex-col sv-items-stretch sv-gap-medium sv-rounded-lg sv-bg-cool-gray-200 sv-px-large sv-py-medium sv-typo-headline-1 md:sv-flex lg:sv-flex-row lg:sv-gap-xx-large">
                  <div className="sv-flex sv-items-center sv-justify-center sv-px-x-large">
                    <span className="sv-hidden sv-h-[2px] sv-grow sv-bg-blue"></span>
                    <h1 className="sv-text-blue sv-typo-headline-1">
                      {"Start your order"}
                    </h1>
                    <span className="sv-hidden sv-h-[2px] sv-grow sv-bg-blue"></span>
                  </div>
                  <p className="sv-flex sv-grow sv-items-center sv-gap-medium">
                    <Link className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-large py-regular typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110 inline-block" href="/menu/g-salad32f4?type=order_delivery">
                      {"Delivery"}
                    </Link>
                    <span className="sv-text-blue sv-typo-headline-2">
                      {"Or"}
                    </span>
                    <Link className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-large py-regular typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110 inline-block" href="/menu/g-salad0e22?type=order_carryout">
                      {"Carryout"}
                    </Link>
                  </p>
                </div>
                <div className="sv-flex sv-w-full sv-items-center sv-justify-between sv-rounded-lg sv-bg-cool-gray-200 sv-px-regular sv-py-small md:sv-hidden">
                  <p className="sv-text-balance sv-text-center sv-text-blue sv-typo-headline-2">
                    {"Choose Carryout or Delivery"}
                  </p>
                  <div className="sv-whitespace-nowrap">
                    <button type="button" className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110">
                      {"Order Online"}
                    </button>
                  </div>
                </div>
                <div className="pd-text-gray-800 pd-grow pd-text-xl">
                  <ul className="grid grid-cols-2 gap-regular gap-y-large md:grid-cols-3 lg:grid-cols-4">
                    <li>
                      <div className="clickable-card flex flex-col gap-regular rounded-xl !outline-none active:outline active:outline-blue" data-testid="clickable-card">
                        <div className="order-last flex flex-col gap-x-small">
                          <div className="flex flex-col gap-tiny">
                            <h2 className="flex gap-tiny font-bold text-text-primary typo-body-1">
                              {"Classic Garden"}
                            </h2>
                            <p className="text-text-secondary typo-body-2 lg:typo-body-1 line-clamp-3">
                              {"A crisp and colorful combination of grape tomatoes, red onion, carrots, red cabbage, cheddar cheese and seasoned croutons, all atop a blend of romaine and iceberg lettuce."}
                            </p>
                          </div>
                        </div>
                        <div className="group relative order-first">
                          <div className="relative flex aspect-square justify-end overflow-hidden rounded-xl border-solid border-2 border-transparent bg-cool-gray-200 group-hover:border-cool-gray-700 group-active:border-blue">
                            <picture>
                              <img className="min-h-full min-w-full object-right" data-testid="Classic Garden-img-sm" alt="" loading="lazy" src="/site-assets/cms/assets/71840f38-b957-4807-bac3-5e42945a62be6822.png?modified_on=2024-02-11T03:02:46.769Z" />
                            </picture>
                          </div>
                          <div className="absolute inset-none m-small flex flex-col items-end justify-end lg:flex-row">
                            <Link className="sr-only" href="/menu/g-salad/F_GARDEN/classic_garden">
                              {"Customize "}
                              {"Classic Garden"}
                            </Link>
                            <div className="pd-rounded-full pd-transition-all pd-duration-400 motion-reduce:pd-transition-none">
                              <span className="">
                                <button aria-label="Add Classic Garden to Cart" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-red bg-red-default border border-neutral-white [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-wine [&:not([aria-disabled='true'])]:focus:shadow-button-primary disabled:bg-ui-background-border [&:not([aria-disabled='false'])]:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:shadow-[0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(227,24,55,0.70),0_0_0_4px_#E31837] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&:not([aria-disabled='true'])]:active:bg-red-900 disabled:bg-warm-gray-400 disabled:pointer-events-none h-x-large w-x-large p-x-small rounded-full aspect-square" type="button">
                                  <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-add-cart--background-primary.svg" />
                                </button>
                              </span>
                              <div className="pd-h-x-large pd-w-x-large pd-hidden"></div>
                            </div>
                            <div hidden style={{ display: "none" }}>
                              <div className="w-fit rounded-full border border-cool-gray-700 bg-cool-gray-200 p-tiny leading-none shadow-[0_2px_6px_0_rgba(120,84,49,0.10)]">
                                <div className="inline-flex items-center justify-center gap-small leading-none">
                                  <button aria-label="Remove one Classic Garden" aria-disabled="true" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square cursor-not-allowed bg-cool-gray-500 pointer-events-none border" type="button">
                                    <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/minus--text-tertiary.svg" />
                                  </button>
                                  <div role="status" aria-busy="false" className="flex justify-center">
                                    <span className="w-medium p-none text-center font-bold leading-none text-text-primary typo-body-1" data-testid="quantity-selector-value" aria-hidden="true">
                                      {"0"}
                                    </span>
                                    <span className="sr-only">
                                      {"Quantity: 0"}
                                    </span>
                                  </div>
                                  <button aria-label="Add one Classic Garden" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square" type="button">
                                    <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/plus--background-primary.svg" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="clickable-card flex flex-col gap-regular rounded-xl !outline-none active:outline active:outline-blue" data-testid="clickable-card">
                        <div className="order-last flex flex-col gap-x-small">
                          <div className="flex flex-col gap-tiny">
                            <h2 className="flex gap-tiny font-bold text-text-primary typo-body-1">
                              {"Chicken Caesar"}
                            </h2>
                            <p className="text-text-secondary typo-body-2 lg:typo-body-1 line-clamp-3">
                              {"The makings of a classic: grilled white meat chicken, Parmesan cheese and seasoned croutons, all atop a blend of romaine and iceberg lettuce."}
                            </p>
                          </div>
                        </div>
                        <div className="group relative order-first">
                          <div className="relative flex aspect-square justify-end overflow-hidden rounded-xl border-solid border-2 border-transparent bg-cool-gray-200 group-hover:border-cool-gray-700 group-active:border-blue">
                            <picture>
                              <img className="min-h-full min-w-full object-right" data-testid="Chicken Caesar-img-sm" alt="" loading="lazy" src="/site-assets/cms/assets/2e350962-1978-4de2-a7d0-ff6fb4054bbdc14b.png?modified_on=2024-02-11T03:01:44.792Z" />
                            </picture>
                          </div>
                          <div className="absolute inset-none m-small flex flex-col items-end justify-end lg:flex-row">
                            <Link className="sr-only" href="/menu/g-salad/F_CCAESAR/chicken_caesar">
                              {"Customize "}
                              {"Chicken Caesar"}
                            </Link>
                            <div className="pd-rounded-full pd-transition-all pd-duration-400 motion-reduce:pd-transition-none">
                              <span className="">
                                <button aria-label="Add Chicken Caesar to Cart" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-red bg-red-default border border-neutral-white [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-wine [&:not([aria-disabled='true'])]:focus:shadow-button-primary disabled:bg-ui-background-border [&:not([aria-disabled='false'])]:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:shadow-[0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(227,24,55,0.70),0_0_0_4px_#E31837] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&:not([aria-disabled='true'])]:active:bg-red-900 disabled:bg-warm-gray-400 disabled:pointer-events-none h-x-large w-x-large p-x-small rounded-full aspect-square" type="button">
                                  <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-add-cart--background-primary.svg" />
                                </button>
                              </span>
                              <div className="pd-h-x-large pd-w-x-large pd-hidden"></div>
                            </div>
                            <div hidden style={{ display: "none" }}>
                              <div className="w-fit rounded-full border border-cool-gray-700 bg-cool-gray-200 p-tiny leading-none shadow-[0_2px_6px_0_rgba(120,84,49,0.10)]">
                                <div className="inline-flex items-center justify-center gap-small leading-none">
                                  <button aria-label="Remove one Chicken Caesar" aria-disabled="true" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square cursor-not-allowed bg-cool-gray-500 pointer-events-none border" type="button">
                                    <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/minus--text-tertiary.svg" />
                                  </button>
                                  <div role="status" aria-busy="false" className="flex justify-center">
                                    <span className="w-medium p-none text-center font-bold leading-none text-text-primary typo-body-1" data-testid="quantity-selector-value" aria-hidden="true">
                                      {"0"}
                                    </span>
                                    <span className="sr-only">
                                      {"Quantity: 0"}
                                    </span>
                                  </div>
                                  <button aria-label="Add one Chicken Caesar" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square" type="button">
                                    <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/plus--background-primary.svg" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <hr className="pd-mb-large pd-mt-jumbo pd-border-cool-gray-200" />
                <article>
                  <div className="pd-flex pd-flex-col pd-gap-large">
                    <h1 className="pd-text-blue pd-typo-subhead-2">
                      {"Full Menu"}
                    </h1>
                    <ul className="pd-grid pd-auto-cols-fr pd-auto-rows-fr pd-grid-cols-2 pd-gap-regular md:pd-grid-cols-4 lg:pd-grid-cols-6">
                      <li className="">
                        <div className="clickable-card flex h-full flex-col overflow-hidden rounded-lg text-ui-extra-dark-cool outline-dark-blue bg-cool-gray-200 hover:border-ui-medium-cool focus:outline-2 active:outline-blue hover:outline hover:outline-1 hover:outline-cool-gray-700 active:outline-2 active:hover:outline-2 aspect-square active:outline active:outline-blue" data-testid="clickable-card">
                          <div className="relative flex flex-1 items-end justify-start overflow-visible">
                            <picture className="absolute min-h-full min-w-full max-w-full">
                              <source data-testid="BuildYourOwn-source-xl" srcSet="/site-assets/cms/assets/e981ac7d-12a0-4412-a5f3-f2da0c489d808b64.png?modified_on=2025-08-08T14%3A03%3A16.290Z&im=Resize%3D%28624%2C624%29%3BCrop%2Crect%3D%28202%2C206%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="BuildYourOwn-source-lg" srcSet="/site-assets/cms/assets/e981ac7d-12a0-4412-a5f3-f2da0c489d808b64.png?modified_on=2025-08-08T14%3A03%3A16.290Z&im=Resize%3D%28406%2C406%29%3BCrop%2Crect%3D%28132%2C134%2C280%2C280%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="BuildYourOwn-source-md" srcSet="/site-assets/cms/assets/e981ac7d-12a0-4412-a5f3-f2da0c489d808b64.png?modified_on=2025-08-08T14%3A03%3A16.290Z&im=Resize%3D%28333%2C333%29%3BCrop%2Crect%3D%28106%2C111%2C230%2C230%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img alt="" className="absolute" data-testid="BuildYourOwn-img-sm" draggable="false" loading="lazy" src="/site-assets/cms/assets/e981ac7d-12a0-4412-a5f3-f2da0c489d808b64.png?modified_on=2025-08-08T14%3A03%3A16.290Z&im=Resize%3D%28333%2C333%29%3BCrop%2Crect%3D%28106%2C102%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="z-[5] bg-cool-gray-200 bg-opacity-70">
                            <Link className="text-left flex items-end justify-start outline-none typo-label-2 mx-regular mb-small lg:typo-label-1 lg:mx-medium lg:mb-medium z-10" href="/menu/build-your-own">
                              {"Build Your Own"}
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="clickable-card flex h-full flex-col overflow-hidden rounded-lg text-ui-extra-dark-cool outline-dark-blue bg-cool-gray-200 hover:border-ui-medium-cool focus:outline-2 active:outline-blue hover:outline hover:outline-1 hover:outline-cool-gray-700 active:outline-2 active:hover:outline-2 aspect-square active:outline active:outline-blue" data-testid="clickable-card">
                          <div className="relative flex flex-1 items-end justify-start overflow-visible">
                            <picture className="absolute min-h-full min-w-full max-w-full">
                              <source data-testid="Specialty-source-xl" srcSet="/site-assets/cms/assets/2050a7ae-c278-4d60-b984-0956367382cf2f79.png?modified_on=2024-07-30T12%3A23%3A51.406Z&im=Resize%3D%28624%2C624%29%3BCrop%2Crect%3D%28202%2C206%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Specialty-source-lg" srcSet="/site-assets/cms/assets/2050a7ae-c278-4d60-b984-0956367382cf2f79.png?modified_on=2024-07-30T12%3A23%3A51.406Z&im=Resize%3D%28406%2C406%29%3BCrop%2Crect%3D%28132%2C134%2C280%2C280%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Specialty-source-md" srcSet="/site-assets/cms/assets/2050a7ae-c278-4d60-b984-0956367382cf2f79.png?modified_on=2024-07-30T12%3A23%3A51.406Z&im=Resize%3D%28333%2C333%29%3BCrop%2Crect%3D%28106%2C111%2C230%2C230%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img alt="" className="absolute" data-testid="Specialty-img-sm" draggable="false" loading="lazy" src="/site-assets/cms/assets/2050a7ae-c278-4d60-b984-0956367382cf2f79.png?modified_on=2024-07-30T12%3A23%3A51.406Z&im=Resize%3D%28333%2C333%29%3BCrop%2Crect%3D%28106%2C102%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="z-[5] bg-cool-gray-200 bg-opacity-70">
                            <Link className="text-left flex items-end justify-start outline-none typo-label-2 mx-regular mb-small lg:typo-label-1 lg:mx-medium lg:mb-medium z-10" href="/menu/specialty">
                              {"Specialty Pizzas"}
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="clickable-card flex h-full flex-col overflow-hidden rounded-lg text-ui-extra-dark-cool outline-dark-blue bg-cool-gray-200 hover:border-ui-medium-cool focus:outline-2 active:outline-blue hover:outline hover:outline-1 hover:outline-cool-gray-700 active:outline-2 active:hover:outline-2 aspect-square active:outline active:outline-blue" data-testid="clickable-card">
                          <div className="relative flex flex-1 items-end justify-start overflow-visible">
                            <picture className="absolute min-h-full min-w-full max-w-full">
                              <source data-testid="Bread-source-xl" srcSet="/site-assets/cms/assets/25702277-acad-4abb-8427-34b639f67ecd5cdd.png?modified_on=2024-12-02T17%3A09%3A35.142Z&im=Resize%3D%28512%2C512%29%3BCrop%2Crect%3D%28105%2C59%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Bread-source-lg" srcSet="/site-assets/cms/assets/25702277-acad-4abb-8427-34b639f67ecd5cdd.png?modified_on=2024-12-02T17%3A09%3A35.142Z&im=Resize%3D%28333%2C333%29%3BCrop%2Crect%3D%2869%2C42%2C280%2C280%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Bread-source-md" srcSet="/site-assets/cms/assets/25702277-acad-4abb-8427-34b639f67ecd5cdd.png?modified_on=2024-12-02T17%3A09%3A35.142Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2859%2C38%2C230%2C230%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img alt="" className="absolute" data-testid="Bread-img-sm" draggable="false" loading="lazy" src="/site-assets/cms/assets/25702277-acad-4abb-8427-34b639f67ecd5cdd.png?modified_on=2024-12-02T17%3A09%3A35.142Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2859%2C36%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="z-[5] bg-cool-gray-200 bg-opacity-70">
                            <Link className="text-left flex items-end justify-start outline-none typo-label-2 mx-regular mb-small lg:typo-label-1 lg:mx-medium lg:mb-medium z-10" href="/menu/bread">
                              {"Breads"}
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="clickable-card flex h-full flex-col overflow-hidden rounded-lg text-ui-extra-dark-cool outline-dark-blue bg-cool-gray-200 hover:border-ui-medium-cool focus:outline-2 active:outline-blue hover:outline hover:outline-1 hover:outline-cool-gray-700 active:outline-2 active:hover:outline-2 aspect-square active:outline active:outline-blue" data-testid="clickable-card">
                          <div className="relative flex flex-1 items-end justify-start overflow-visible">
                            <picture className="absolute min-h-full min-w-full max-w-full">
                              <source data-testid="Wings-source-xl" srcSet="/site-assets/cms/assets/52a5cd59-c19c-472d-b5b2-e8e0c6144408929e.png?modified_on=2024-12-02T17%3A11%3A10.571Z&im=Resize%3D%28519%2C519%29%3BCrop%2Crect%3D%2890%2C161%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Wings-source-lg" srcSet="/site-assets/cms/assets/52a5cd59-c19c-472d-b5b2-e8e0c6144408929e.png?modified_on=2024-12-02T17%3A11%3A10.571Z&im=Resize%3D%28337%2C337%29%3BCrop%2Crect%3D%2859%2C105%2C280%2C280%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Wings-source-md" srcSet="/site-assets/cms/assets/52a5cd59-c19c-472d-b5b2-e8e0c6144408929e.png?modified_on=2024-12-02T17%3A11%3A10.571Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2859%2C88%2C230%2C230%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img alt="" className="absolute" data-testid="Wings-img-sm" draggable="false" loading="lazy" src="/site-assets/cms/assets/52a5cd59-c19c-472d-b5b2-e8e0c6144408929e.png?modified_on=2024-12-02T17%3A11%3A10.571Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2859%2C85%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="z-[5] bg-cool-gray-200 bg-opacity-70">
                            <Link className="text-left flex items-end justify-start outline-none typo-label-2 mx-regular mb-small lg:typo-label-1 lg:mx-medium lg:mb-medium z-10" href="/menu/wings">
                              {"Chicken"}
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="clickable-card flex h-full flex-col overflow-hidden rounded-lg text-ui-extra-dark-cool outline-dark-blue bg-cool-gray-200 hover:border-ui-medium-cool focus:outline-2 active:outline-blue hover:outline hover:outline-1 hover:outline-cool-gray-700 active:outline-2 active:hover:outline-2 aspect-square active:outline active:outline-blue" data-testid="clickable-card">
                          <div className="relative flex flex-1 items-end justify-start overflow-visible">
                            <picture className="absolute min-h-full min-w-full max-w-full">
                              <source data-testid="Dessert-source-xl" srcSet="/site-assets/cms/assets/ae22b2e2-9f64-423f-98e7-df93821a49930515.png?modified_on=2024-07-26T20%3A08%3A08.048Z&im=Resize%3D%28413%2C413%29%3BCrop%2Crect%3D%2828%2C91%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Dessert-source-lg" srcSet="/site-assets/cms/assets/ae22b2e2-9f64-423f-98e7-df93821a49930515.png?modified_on=2024-07-26T20%3A08%3A08.048Z&im=Resize%3D%28269%2C269%29%3BCrop%2Crect%3D%2818%2C59%2C280%2C280%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Dessert-source-md" srcSet="/site-assets/cms/assets/ae22b2e2-9f64-423f-98e7-df93821a49930515.png?modified_on=2024-07-26T20%3A08%3A08.048Z&im=Resize%3D%28217%2C217%29%3BCrop%2Crect%3D%2815%2C46%2C230%2C230%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img alt="" className="absolute" data-testid="Dessert-img-sm" draggable="false" loading="lazy" src="/site-assets/cms/assets/ae22b2e2-9f64-423f-98e7-df93821a49930515.png?modified_on=2024-07-26T20%3A08%3A08.048Z&im=Resize%3D%28217%2C217%29%3BCrop%2Crect%3D%2815%2C41%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="z-[5] bg-cool-gray-200 bg-opacity-70">
                            <Link className="text-left flex items-end justify-start outline-none typo-label-2 mx-regular mb-small lg:typo-label-1 lg:mx-medium lg:mb-medium z-10" href="/menu/dessert">
                              {"Desserts"}
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="clickable-card flex h-full flex-col overflow-hidden rounded-lg text-ui-extra-dark-cool outline-dark-blue bg-cool-gray-200 hover:border-ui-medium-cool focus:outline-2 active:outline-blue hover:outline hover:outline-1 hover:outline-cool-gray-700 active:outline-2 active:hover:outline-2 aspect-square active:outline active:outline-blue" data-testid="clickable-card">
                          <div className="relative flex flex-1 items-end justify-start overflow-visible">
                            <picture className="absolute min-h-full min-w-full max-w-full">
                              <source data-testid="Pasta-source-xl" srcSet="/site-assets/cms/assets/dec46cc9-7059-4004-8b32-14fc9465bac15a27.png?modified_on=2024-12-02T16%3A54%3A22.015Z&im=Resize%3D%28462%2C462%29%3BCrop%2Crect%3D%2877%2C133%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Pasta-source-lg" srcSet="/site-assets/cms/assets/dec46cc9-7059-4004-8b32-14fc9465bac15a27.png?modified_on=2024-12-02T16%3A54%3A22.015Z&im=Resize%3D%28301%2C301%29%3BCrop%2Crect%3D%2850%2C87%2C280%2C280%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Pasta-source-md" srcSet="/site-assets/cms/assets/dec46cc9-7059-4004-8b32-14fc9465bac15a27.png?modified_on=2024-12-02T16%3A54%3A22.015Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2850%2C101%2C230%2C230%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img alt="" className="absolute" data-testid="Pasta-img-sm" draggable="false" loading="lazy" src="/site-assets/cms/assets/dec46cc9-7059-4004-8b32-14fc9465bac15a27.png?modified_on=2024-12-02T16%3A54%3A22.015Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2850%2C95%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="z-[5] bg-cool-gray-200 bg-opacity-70">
                            <Link className="text-left flex items-end justify-start outline-none typo-label-2 mx-regular mb-small lg:typo-label-1 lg:mx-medium lg:mb-medium z-10" href="/menu/pasta">
                              {"Oven-Baked Pastas"}
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="clickable-card flex h-full flex-col overflow-hidden rounded-lg text-ui-extra-dark-cool outline-dark-blue bg-cool-gray-200 hover:border-ui-medium-cool focus:outline-2 active:outline-blue hover:outline hover:outline-1 hover:outline-cool-gray-700 active:outline-2 active:hover:outline-2 aspect-square active:outline active:outline-blue" data-testid="clickable-card">
                          <div className="relative flex flex-1 items-end justify-start overflow-visible">
                            <picture className="absolute min-h-full min-w-full max-w-full">
                              <source data-testid="Sandwich-source-xl" srcSet="/site-assets/cms/assets/de67c289-a105-4ee3-a0ef-015aa5b73f4982af.png?modified_on=2026-04-27T21%3A57%3A21.647Z&im=Resize%3D%28517%2C517%29%3BCrop%2Crect%3D%28101%2C153%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Sandwich-source-lg" srcSet="/site-assets/cms/assets/de67c289-a105-4ee3-a0ef-015aa5b73f4982af.png?modified_on=2026-04-27T21%3A57%3A21.647Z&im=Resize%3D%28336%2C336%29%3BCrop%2Crect%3D%2866%2C99%2C280%2C280%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Sandwich-source-md" srcSet="/site-assets/cms/assets/de67c289-a105-4ee3-a0ef-015aa5b73f4982af.png?modified_on=2026-04-27T21%3A57%3A21.647Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2859%2C83%2C230%2C230%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img alt="" className="absolute" data-testid="Sandwich-img-sm" draggable="false" loading="lazy" src="/site-assets/cms/assets/de67c289-a105-4ee3-a0ef-015aa5b73f4982af.png?modified_on=2026-04-27T21%3A57%3A21.647Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2859%2C83%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="z-[5] bg-cool-gray-200 bg-opacity-70">
                            <Link className="text-left flex items-end justify-start outline-none typo-label-2 mx-regular mb-small lg:typo-label-1 lg:mx-medium lg:mb-medium z-10" href="/menu/sandwich">
                              {"Oven-Baked Sandwiches"}
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="clickable-card flex h-full flex-col overflow-hidden rounded-lg text-ui-extra-dark-cool outline-dark-blue bg-cool-gray-200 hover:border-ui-medium-cool focus:outline-2 active:outline-blue hover:outline hover:outline-1 hover:outline-cool-gray-700 active:outline-2 active:hover:outline-2 aspect-square active:outline active:outline-blue" data-testid="clickable-card">
                          <div className="relative flex flex-1 items-end justify-start overflow-visible">
                            <picture className="absolute min-h-full min-w-full max-w-full">
                              <source data-testid="GSalad-source-xl" srcSet="/site-assets/cms/assets/7c90a9cc-9c70-4ff2-a030-f2a4fdfd9f55da56.png?modified_on=2024-12-02T17%3A58%3A35.453Z&im=Resize%3D%28462%2C462%29%3BCrop%2Crect%3D%2877%2C133%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="GSalad-source-lg" srcSet="/site-assets/cms/assets/7c90a9cc-9c70-4ff2-a030-f2a4fdfd9f55da56.png?modified_on=2024-12-02T17%3A58%3A35.453Z&im=Resize%3D%28301%2C301%29%3BCrop%2Crect%3D%2850%2C87%2C280%2C280%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="GSalad-source-md" srcSet="/site-assets/cms/assets/7c90a9cc-9c70-4ff2-a030-f2a4fdfd9f55da56.png?modified_on=2024-12-02T17%3A58%3A35.453Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2850%2C101%2C230%2C230%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img alt="" className="absolute" data-testid="GSalad-img-sm" draggable="false" loading="lazy" src="/site-assets/cms/assets/7c90a9cc-9c70-4ff2-a030-f2a4fdfd9f55da56.png?modified_on=2024-12-02T17%3A58%3A35.453Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2850%2C95%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="z-[5] bg-cool-gray-200 bg-opacity-70">
                            <Link className="text-left flex items-end justify-start outline-none typo-label-2 mx-regular mb-small lg:typo-label-1 lg:mx-medium lg:mb-medium z-10" href="/menu/g-salad">
                              {"Salads"}
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="clickable-card flex h-full flex-col overflow-hidden rounded-lg text-ui-extra-dark-cool outline-dark-blue bg-cool-gray-200 hover:border-ui-medium-cool focus:outline-2 active:outline-blue hover:outline hover:outline-1 hover:outline-cool-gray-700 active:outline-2 active:hover:outline-2 aspect-square active:outline active:outline-blue" data-testid="clickable-card">
                          <div className="relative flex flex-1 items-end justify-start overflow-visible">
                            <picture className="absolute min-h-full min-w-full max-w-full">
                              <source data-testid="Drinks-source-xl" srcSet="/site-assets/cms/assets/86aa18bc-ed6b-49d3-af01-a1302a4916d90354.png?modified_on=2024-12-02T17%3A08%3A17.596Z&im=Resize%3D%28431%2C431%29%3BCrop%2Crect%3D%280%2C0%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Drinks-source-lg" srcSet="/site-assets/cms/assets/86aa18bc-ed6b-49d3-af01-a1302a4916d90354.png?modified_on=2024-12-02T17%3A08%3A17.596Z&im=Resize%3D%28280%2C280%29%3BCrop%2Crect%3D%280%2C0%2C280%2C280%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Drinks-source-md" srcSet="/site-assets/cms/assets/86aa18bc-ed6b-49d3-af01-a1302a4916d90354.png?modified_on=2024-12-02T17%3A08%3A17.596Z&im=Resize%3D%28230%2C230%29%3BCrop%2Crect%3D%280%2C0%2C230%2C230%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img alt="" className="absolute" data-testid="Drinks-img-sm" draggable="false" loading="lazy" src="/site-assets/cms/assets/86aa18bc-ed6b-49d3-af01-a1302a4916d90354.png?modified_on=2024-12-02T17%3A08%3A17.596Z&im=Resize%3D%28234%2C234%29%3BCrop%2Crect%3D%280%2C0%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="z-[5] bg-cool-gray-200 bg-opacity-70">
                            <Link className="text-left flex items-end justify-start outline-none typo-label-2 mx-regular mb-small lg:typo-label-1 lg:mx-medium lg:mb-medium z-10" href="/menu/drinks">
                              {"Drinks"}
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="">
                        <div className="clickable-card flex h-full flex-col overflow-hidden rounded-lg text-ui-extra-dark-cool outline-dark-blue bg-cool-gray-200 hover:border-ui-medium-cool focus:outline-2 active:outline-blue hover:outline hover:outline-1 hover:outline-cool-gray-700 active:outline-2 active:hover:outline-2 aspect-square active:outline active:outline-blue" data-testid="clickable-card">
                          <div className="relative flex flex-1 items-end justify-start overflow-visible">
                            <div className="z-10 mx-regular mt-small flex items-end justify-start self-start text-left outline-none typo-label-2 lg:mx-medium lg:mt-medium lg:typo-label-1">
                              <span className="inline-flex max-w-full items-center justify-center h-large border [background:linear-gradient(#191919,#191919)_padding-box,var(--gradient-gold)_border-box] rounded-[3.6px] border-transparent shadow-gold">
                                <span className="inline-flex overflow-hidden overflow-ellipsis whitespace-nowrap !leading-[0.86] px-x-small typo-label-4 bg-gradient-gold bg-clip-text text-transparent">
                                  {"NEW!"}
                                </span>
                              </span>
                            </div>
                            <picture className="absolute min-h-full min-w-full max-w-full">
                              <source data-testid="Sides-source-xl" srcSet="/site-assets/cms/assets/b25dd6b4-4327-4bbb-b37d-880e8eb30b93cdea.png?modified_on=2026-02-04T13%3A32%3A21.828Z&im=Resize%3D%28417%2C417%29%3BCrop%2Crect%3D%2832%2C116%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Sides-source-lg" srcSet="/site-assets/cms/assets/b25dd6b4-4327-4bbb-b37d-880e8eb30b93cdea.png?modified_on=2026-02-04T13%3A32%3A21.828Z&im=Resize%3D%28272%2C272%29%3BCrop%2Crect%3D%2821%2C76%2C280%2C280%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Sides-source-md" srcSet="/site-assets/cms/assets/b25dd6b4-4327-4bbb-b37d-880e8eb30b93cdea.png?modified_on=2026-02-04T13%3A32%3A21.828Z&im=Resize%3D%28272%2C272%29%3BCrop%2Crect%3D%2849%2C108%2C230%2C230%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img alt="" className="absolute" data-testid="Sides-img-sm" draggable="false" loading="lazy" src="/site-assets/cms/assets/b25dd6b4-4327-4bbb-b37d-880e8eb30b93cdea.png?modified_on=2026-02-04T13%3A32%3A21.828Z&im=Resize%3D%28272%2C272%29%3BCrop%2Crect%3D%2849%2C105%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="z-[5] bg-cool-gray-200 bg-opacity-70">
                            <Link className="text-left flex items-end justify-start outline-none typo-label-2 mx-regular mb-small lg:typo-label-1 lg:mx-medium lg:mb-medium z-10" href="/menu/sides">
                              {"Extras"}
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
            <svg aria-hidden="true" className="sr-only" focusable="false" viewBox="0 0 0 0" xmlns="http://www.w3.org/2000/svg">
              <filter id="block-price-stroke">
                <femorphology in="SourceGraphic" operator="dilate" result="expand" radius="6"></femorphology>
                <feflood flood-color="#ff0000"></feflood>
                <fecomposite in2="expand" operator="in" result="expand"></fecomposite>
                <femerge>
                  <femergenode in="expand"></femergenode>
                  <femergenode in="SourceGraphic"></femergenode>
                </femerge>
              </filter>
            </svg>
            <div id="root-toast-container" className="fixed top-none z-[61] mx-regular mt-mega-7 flex w-[calc(100vw-2rem)] flex-col-reverse md:right-none md:ml-none md:mr-x-large md:mt-mega-5 md:w-1/2 lg:ml-none lg:mr-mega-3 lg:w-1/3"></div>
          </section>
        </main>
        <footer className="sh-my-none sh-flex sh-flex-wrap sh-justify-center">
          <div className="sh-flex sh-w-full sh-flex-col sh-gap-x-large sh-bg-background-primary sh-px-medium sh-py-xx-large sh-text-text-secondary md:sh-px-x-large lg:sh-flex-row lg:sh-flex-wrap lg:sh-gap-none lg:sh-px-mega-4 lg:sh-py-mega-3">
            <div className="sh-w-full lg:sh-pb-jumbo">
              <img alt="" className="block w-[2.25rem] h-[2.25rem] lg:w-jumbo lg:h-jumbo" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/logo-dominos-trademark.svg" />
            </div>
            <div className="sh-flex sh-w-full sh-flex-col sh-gap-x-large lg:sh-flex-row lg:sh-justify-between lg:sh-gap-mega-6 xl:sh-gap-mega-26">
              <div className="hidden lg:block flex-1">
                <div className="sh-flex sh-flex-col sh-gap-small lg:sh-flex-1 lg:sh-flex-row lg:sh-justify-between">
                  <div className="hidden lg:block ">
                    <div className="sh-flex sh-flex-col">
                      <h2 className="sh-font-bold sh-typo-body-1" id=":Rlcqf6:">
                        {"Our Company"}
                      </h2>
                      <ul className="sh-mt-medium sh-flex sh-flex-col sh-gap-small sh-typo-body-2" aria-labelledby=":Rlcqf6:">
                        <li>
                          <a className="sh-typo-body-2" target="_blank" rel="noreferrer" href="https://biz.dominos.com/">
                            {"Corporate"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" target="_blank" rel="noreferrer" href="/en/about-pizza">
                            {"About Domino's"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <a className="sh-typo-body-2" target="_blank" rel="noreferrer" href="https://jobs.dominos.com/us/">
                            {"Jobs"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/customer-support">
                            {"Customer Support"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/email-and-text-offers">
                            {"Email & Text Offers"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" target="_blank" rel="noreferrer" href="/en/international">
                            {"World of Domino's"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block lg:hidden ">
                    <div>
                      <hr aria-hidden="true" className="sh-w-full sh-border-b sh-border-t-0 sh-border-ui-background-border" />
                      <div className="sh-gap-none">
                        <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2 sh-w-full sh-justify-between" id=":Rlcqf6:" type="button" aria-expanded="false" data-headlessui-state="">
                          {"Our Company"}
                          <div className="ui-open:rotate-180 transition-transform">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                              <use href="#icon-expand"></use>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block ">
                    <div className="sh-flex sh-flex-col">
                      <h2 className="sh-font-bold sh-typo-body-1" id=":R15cqf6:">
                        {"Our Pizza"}
                      </h2>
                      <ul className="sh-mt-medium sh-flex sh-flex-col sh-gap-small sh-typo-body-2" aria-labelledby=":R15cqf6:">
                        <li>
                          <Link className="sh-typo-body-2" href="/content/nutrition">
                            {"Nutrition"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/allergen-info">
                            {"Allergen Info"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/gluten-free-warning">
                            {"Gluten Free Warning"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/ingredients">
                            {"Ingredients"}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block lg:hidden ">
                    <div>
                      <hr aria-hidden="true" className="sh-w-full sh-border-b sh-border-t-0 sh-border-ui-background-border" />
                      <div className="sh-gap-none">
                        <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2 sh-w-full sh-justify-between" id=":R15cqf6:" type="button" aria-expanded="false" data-headlessui-state="">
                          {"Our Pizza"}
                          <div className="ui-open:rotate-180 transition-transform">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                              <use href="#icon-expand"></use>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block ">
                    <div className="sh-flex sh-flex-col">
                      <h2 className="sh-font-bold sh-typo-body-1" id=":R1lcqf6:">
                        {"Additional Services"}
                      </h2>
                      <ul className="sh-mt-medium sh-flex sh-flex-col sh-gap-small sh-typo-body-2" aria-labelledby=":R1lcqf6:">
                        <li>
                          <a className="sh-typo-body-2" target="_blank" rel="noreferrer" href="https://biz.dominos.com/school-lunch/">
                            {"Smart Slice School Lunch"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="sh-typo-body-2" target="_blank" rel="noreferrer" href="https://biz.dominos.com/services/business-orders/">
                            {"Large Business Orders"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="sh-typo-body-2" target="_blank" rel="noreferrer" href="https://www.dominosweddingregistry.com/">
                            {"Wedding Registry"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="sh-typo-body-2" target="_blank" rel="noreferrer" href="https://biz.dominos.com/services/#fundraising">
                            {"Fundraising"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="sh-typo-body-2" target="_blank" rel="noreferrer" href="https://recycling.dominos.com/">
                            {"Recycling"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/gift-cards">
                            {"Gift Cards"}
                          </Link>
                        </li>
                        <li>
                          <a className="sh-typo-body-2" target="_blank" rel="noreferrer" href="https://biz.dominos.com/real-estate/">
                            {"Real Estate"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/carryout-insurance">
                            {"Carryout Insurance"}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block lg:hidden ">
                    <div>
                      <hr aria-hidden="true" className="sh-w-full sh-border-b sh-border-t-0 sh-border-ui-background-border" />
                      <div className="sh-gap-none">
                        <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2 sh-w-full sh-justify-between" id=":R1lcqf6:" type="button" aria-expanded="false" data-headlessui-state="">
                          {"Additional Services"}
                          <div className="ui-open:rotate-180 transition-transform">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                              <use href="#icon-expand"></use>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block ">
                    <div className="sh-flex sh-flex-col">
                      <h2 className="sh-font-bold sh-typo-body-1" id=":R25cqf6:">
                        {"Legal"}
                      </h2>
                      <ul className="sh-mt-medium sh-flex sh-flex-col sh-gap-small sh-typo-body-2" aria-labelledby=":R25cqf6:">
                        <li>
                          <Link className="sh-typo-body-2" href="/data-privacy-rights">
                            {"Do Not Sell or Share My Personal Information"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/privacy">
                            {"Privacy"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/terms-of-use">
                            {"Terms of Use"}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block lg:hidden ">
                    <div>
                      <hr aria-hidden="true" className="sh-w-full sh-border-b sh-border-t-0 sh-border-ui-background-border" />
                      <div className="sh-gap-none">
                        <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2 sh-w-full sh-justify-between" id=":R25cqf6:" type="button" aria-expanded="false" data-headlessui-state="">
                          {"Legal"}
                          <div className="ui-open:rotate-180 transition-transform">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                              <use href="#icon-expand"></use>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="block lg:hidden ">
                    <hr aria-hidden="true" className="sh-w-full sh-border-b sh-border-t-0 sh-border-ui-background-border" />
                  </div>
                </div>
              </div>
              <div className="sh-flex sh-flex-col sh-gap-x-large md:sh-flex-row lg:sh-w-1/3 lg:sh-flex-col">
                <div className="md:sh-w-1/2 lg:sh-w-full">
                  <h2 className="sh-mb-regular sh-font-bold sh-typo-body-1" id=":R1kqf6:">
                    {"Download the App"}
                  </h2>
                  <ul className="sh-flex sh-space-x-regular" aria-labelledby=":R1kqf6:">
                    <li>
                      <a href="https://apps.apple.com/us/app/dominos-pizza-usa/id436491861" target="_blank" rel="noopener noreferrer">
                        <img src="/site-assets/app-store-badge.svg" alt="Download on the App Store" loading="lazy" />
                      </a>
                    </li>
                    <li>
                      <a href="https://play.google.com/store/apps/details?id=com.dominospizza" target="_blank" rel="noopener noreferrer">
                        <img src="/site-assets/google-play-badge.svg" alt="Get it on Google Play" loading="lazy" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div data-testid="social-links" className="md:sh-w-1/2 lg:sh-w-full">
                  <h2 className="sh-mb-regular sh-font-bold sh-typo-body-1" id=":R2kqf6:">
                    {"Follow Domino's"}
                  </h2>
                  <ul className="sh-flex sh-space-x-regular" aria-labelledby=":R2kqf6:"></ul>
                </div>
              </div>
              <div className="block lg:hidden ">
                <div className="sh-flex sh-flex-col sh-gap-small lg:sh-flex-1 lg:sh-flex-row lg:sh-justify-between">
                  <div className="hidden lg:block ">
                    <div className="sh-flex sh-flex-col">
                      <h2 className="sh-font-bold sh-typo-body-1" id=":Rmsqf6:">
                        {"Our Company"}
                      </h2>
                      <ul className="sh-mt-medium sh-flex sh-flex-col sh-gap-small sh-typo-body-2" aria-labelledby=":Rmsqf6:">
                        <li>
                          <a className="sh-typo-body-2" target="_blank" rel="noreferrer" href="https://biz.dominos.com/">
                            {"Corporate"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" target="_blank" rel="noreferrer" href="/en/about-pizza">
                            {"About Domino's"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <a className="sh-typo-body-2" target="_blank" rel="noreferrer" href="https://jobs.dominos.com/us/">
                            {"Jobs"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/customer-support">
                            {"Customer Support"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/email-and-text-offers">
                            {"Email & Text Offers"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" target="_blank" rel="noreferrer" href="/en/international">
                            {"World of Domino's"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block lg:hidden ">
                    <div>
                      <hr aria-hidden="true" className="sh-w-full sh-border-b sh-border-t-0 sh-border-ui-background-border" />
                      <div className="sh-gap-none">
                        <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2 sh-w-full sh-justify-between" id=":Rmsqf6:" type="button" aria-expanded="false" data-headlessui-state="">
                          {"Our Company"}
                          <div className="ui-open:rotate-180 transition-transform">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                              <use href="#icon-expand"></use>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block ">
                    <div className="sh-flex sh-flex-col">
                      <h2 className="sh-font-bold sh-typo-body-1" id=":R16sqf6:">
                        {"Our Pizza"}
                      </h2>
                      <ul className="sh-mt-medium sh-flex sh-flex-col sh-gap-small sh-typo-body-2" aria-labelledby=":R16sqf6:">
                        <li>
                          <Link className="sh-typo-body-2" href="/content/nutrition">
                            {"Nutrition"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/allergen-info">
                            {"Allergen Info"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/gluten-free-warning">
                            {"Gluten Free Warning"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/ingredients">
                            {"Ingredients"}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block lg:hidden ">
                    <div>
                      <hr aria-hidden="true" className="sh-w-full sh-border-b sh-border-t-0 sh-border-ui-background-border" />
                      <div className="sh-gap-none">
                        <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2 sh-w-full sh-justify-between" id=":R16sqf6:" type="button" aria-expanded="false" data-headlessui-state="">
                          {"Our Pizza"}
                          <div className="ui-open:rotate-180 transition-transform">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                              <use href="#icon-expand"></use>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block ">
                    <div className="sh-flex sh-flex-col">
                      <h2 className="sh-font-bold sh-typo-body-1" id=":R1msqf6:">
                        {"Additional Services"}
                      </h2>
                      <ul className="sh-mt-medium sh-flex sh-flex-col sh-gap-small sh-typo-body-2" aria-labelledby=":R1msqf6:">
                        <li>
                          <a className="sh-typo-body-2" target="_blank" rel="noreferrer" href="https://biz.dominos.com/school-lunch/">
                            {"Smart Slice School Lunch"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="sh-typo-body-2" target="_blank" rel="noreferrer" href="https://biz.dominos.com/services/business-orders/">
                            {"Large Business Orders"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="sh-typo-body-2" target="_blank" rel="noreferrer" href="https://www.dominosweddingregistry.com/">
                            {"Wedding Registry"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="sh-typo-body-2" target="_blank" rel="noreferrer" href="https://biz.dominos.com/services/#fundraising">
                            {"Fundraising"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="sh-typo-body-2" target="_blank" rel="noreferrer" href="https://recycling.dominos.com/">
                            {"Recycling"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/gift-cards">
                            {"Gift Cards"}
                          </Link>
                        </li>
                        <li>
                          <a className="sh-typo-body-2" target="_blank" rel="noreferrer" href="https://biz.dominos.com/real-estate/">
                            {"Real Estate"}
                            <span className="sh-ml-x-small">
                              <img alt="" className="block w-regular h-regular inline" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/externalpage.svg" />
                            </span>
                            <span className="sh-sr-only">
                              {"(opens in new tab)"}
                            </span>
                          </a>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/carryout-insurance">
                            {"Carryout Insurance"}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block lg:hidden ">
                    <div>
                      <hr aria-hidden="true" className="sh-w-full sh-border-b sh-border-t-0 sh-border-ui-background-border" />
                      <div className="sh-gap-none">
                        <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2 sh-w-full sh-justify-between" id=":R1msqf6:" type="button" aria-expanded="false" data-headlessui-state="">
                          {"Additional Services"}
                          <div className="ui-open:rotate-180 transition-transform">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                              <use href="#icon-expand"></use>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block ">
                    <div className="sh-flex sh-flex-col">
                      <h2 className="sh-font-bold sh-typo-body-1" id=":R26sqf6:">
                        {"Legal"}
                      </h2>
                      <ul className="sh-mt-medium sh-flex sh-flex-col sh-gap-small sh-typo-body-2" aria-labelledby=":R26sqf6:">
                        <li>
                          <Link className="sh-typo-body-2" href="/data-privacy-rights">
                            {"Do Not Sell or Share My Personal Information"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/privacy">
                            {"Privacy"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/content/terms-of-use">
                            {"Terms of Use"}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block lg:hidden ">
                    <div>
                      <hr aria-hidden="true" className="sh-w-full sh-border-b sh-border-t-0 sh-border-ui-background-border" />
                      <div className="sh-gap-none">
                        <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2 sh-w-full sh-justify-between" id=":R26sqf6:" type="button" aria-expanded="false" data-headlessui-state="">
                          {"Legal"}
                          <div className="ui-open:rotate-180 transition-transform">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                              <use href="#icon-expand"></use>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="block lg:hidden ">
                    <hr aria-hidden="true" className="sh-w-full sh-border-b sh-border-t-0 sh-border-ui-background-border" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sh-flex sh-w-full sh-flex-wrap sh-bg-blue-800 sh-text-neutral-white">
            <div className="sh-flex sh-w-full sh-max-w-screen-xl sh-flex-col sh-justify-center sh-gap-mega-1 sh-px-medium sh-py-xx-large md:sh-px-x-large lg:sh-flex-row lg:sh-justify-start lg:sh-px-mega-4">
              <div className="sh-flex sh-flex-col sh-gap-x-large lg:sh-w-1/2 lg:sh-py-jumbo">
                <div>
                  <h2 id="mix--match-offer-details" className="sh-typo-body-2 sh-font-bold sh-mb-x-small">
                    {"Mix & Match Offer Details"}
                  </h2>
                  <p className="sh-typo-body-3 sh-mb-x-large last:sh-mb-none">
                    {"You must choose this limited time offer. Prices, participation, delivery area, and charges may vary by store. 2-item minimum. Bone-in Wings, Parmesan Stuffed Crust and Pan Pizza are extra.\nEach store may charge extra for some items, crust types, toppings, and sauces. Choose or contact your local store for specific offer pricing. Delivery orders subject to each store's delivery minimum and delivery charge. Any delivery charge is not a tip paid to your driver. Drivers carry less than $20."}
                  </p>
                  <h2 id="weeklong-carryout-offer-details" className="sh-typo-body-2 sh-font-bold sh-mb-x-small">
                    {"Weeklong Carryout Offer Details"}
                  </h2>
                  <p className="sh-typo-body-3 sh-mb-x-large last:sh-mb-none">
                    {"Carryout only. You must choose for this limited time offer. Prices, participation and charges may vary. Size availability varies by crust type. Parmesan Stuffed Crust will be extra. Excludes XL and Specialty Pizzas. In addition, your local store may charge extra for some toppings and sauces."}
                  </p>
                  <h2 id="perfect-combo-offer-details" className="sh-typo-body-2 sh-font-bold sh-mb-x-small">
                    {"Perfect Combo Offer Details"}
                  </h2>
                  <p className="sh-typo-body-3 sh-mb-x-large last:sh-mb-none">
                    {"You must choose this limited time offer. Delivery charge and tax may apply. Prices, participation, delivery area and charges may vary. Parmesan Stuffed Crust and Handmade Pan will be extra. No substitutions permitted. In addition, your local store may charge extra for some toppings and sauces."}
                  </p>
                  <h2 id="offer-details" className="sh-typo-body-2 sh-font-bold sh-mb-x-small">
                    {"Offer Details"}
                  </h2>
                  <p className="sh-typo-body-3 sh-mb-x-large last:sh-mb-none">
                    {"Any Delivery Charge is not a tip paid to your driver. Please reward your driver for awesomeness. Drivers carry less than $20. Minimum purchase required for delivery. Delivery charge and tax may apply. Prices, participation, delivery area and charges may vary. Returned checks, along with the state's maximum allowable returned check fee, may be electronically presented to your bank. ©2024 Domino's IP Holder LLC. Domino's®, Domino's Pizza® and the game piece logo are registered trademarks of Domino's IP Holder LLC. \"Coca-Cola\" and the Contour Bottle design are registered trademarks of The Coca-Cola Company. Apple, the Apple logo and iPad are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android is a trademark of Google Inc. Windows® Phone is a registered trademark of the Microsoft group of companies."}
                  </p>
                </div>
                <div className="sh-hidden lg:sh-block">
                  <div>
                    <p className="sh-typo-label-5 sh-text-neutral-white sh-mb-medium last:sh-mb-none">
                      <Link href="/content/terms-of-use#california-transparency-in-supply-chains-act" className="sh-typo-body-2 sh-font-bold sh-text-neutral-white sh-underline">
                        {"CA Transparency in Supply Chains Act Disclosures"}
                      </Link>
                    </p>
                    <p className="sh-typo-label-5 sh-text-neutral-white sh-mb-medium last:sh-mb-none">
                      <Link href="/data-privacy-rights" className="sh-typo-body-2 sh-font-bold sh-text-neutral-white sh-underline">
                        {"CA Consumer Privacy Act"}
                      </Link>
                    </p>
                    <p className="sh-typo-label-5 sh-text-neutral-white sh-mb-medium last:sh-mb-none">
                      <Link href="/content/accessibility-policy" className="sh-typo-body-2 sh-font-bold sh-text-neutral-white sh-underline">
                        {"Accessibility Policy"}
                      </Link>
                    </p>
                    <p className="sh-typo-label-5 sh-text-neutral-white sh-mb-medium last:sh-mb-none">
                      {"If you are using a screen reader and are having problems using this website, please call "}
                      <a href="tel:8002524031" className="sh-typo-body-2 sh-font-bold sh-text-neutral-white sh-underline">
                        {"800-252-4031"}
                      </a>
                      {" for assistance."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="sh-flex sh-flex-col sh-gap-large lg:sh-w-1/2 lg:sh-py-jumbo">
                <div className="hidden lg:block ">
                  <div className="sh-gap-none">
                    <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2" id="headlessui-disclosure-button-:Radaf6:" type="button" aria-expanded="false" data-headlessui-state="">
                      <h2 className="sh-typo-body-2">
                        {"Allergen Warning"}
                      </h2>
                      <div className="ui-open:rotate-180 transition-transform">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                          <use href="#icon-expand"></use>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="block lg:hidden ">
                  <div className="sh-gap-none">
                    <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2 sh-w-full sh-justify-between" id="headlessui-disclosure-button-:Rcdaf6:" type="button" aria-expanded="false" data-headlessui-state="">
                      <h2 className="sh-typo-body-2">
                        {"Allergen Warning"}
                      </h2>
                      <div className="ui-open:rotate-180 transition-transform">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                          <use href="#icon-expand"></use>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="hidden lg:block ">
                  <div className="sh-gap-none">
                    <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2" id="headlessui-disclosure-button-:Ralaf6:" type="button" aria-expanded="false" data-headlessui-state="">
                      <h2 className="sh-typo-body-2">
                        {"Domino's® Rewards"}
                      </h2>
                      <div className="ui-open:rotate-180 transition-transform">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                          <use href="#icon-expand"></use>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="block lg:hidden ">
                  <div className="sh-gap-none">
                    <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2 sh-w-full sh-justify-between" id="headlessui-disclosure-button-:Rclaf6:" type="button" aria-expanded="false" data-headlessui-state="">
                      <h2 className="sh-typo-body-2">
                        {"Domino's® Rewards"}
                      </h2>
                      <div className="ui-open:rotate-180 transition-transform">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                          <use href="#icon-expand"></use>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="hidden lg:block ">
                  <div className="sh-gap-none">
                    <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2" id="headlessui-disclosure-button-:Rataf6:" type="button" aria-expanded="false" data-headlessui-state="">
                      <h2 className="sh-typo-body-2">
                        {"Our Guarantee"}
                      </h2>
                      <div className="ui-open:rotate-180 transition-transform">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                          <use href="#icon-expand"></use>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="block lg:hidden ">
                  <div className="sh-gap-none">
                    <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2 sh-w-full sh-justify-between" id="headlessui-disclosure-button-:Rctaf6:" type="button" aria-expanded="false" data-headlessui-state="">
                      <h2 className="sh-typo-body-2">
                        {"Our Guarantee"}
                      </h2>
                      <div className="ui-open:rotate-180 transition-transform">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                          <use href="#icon-expand"></use>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="hidden lg:block ">
                  <div className="sh-gap-none">
                    <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2" id="headlessui-disclosure-button-:Rb5af6:" type="button" aria-expanded="false" data-headlessui-state="">
                      <h2 className="sh-typo-body-2">
                        {"Delivery and Carryout Insurance"}
                      </h2>
                      <div className="ui-open:rotate-180 transition-transform">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                          <use href="#icon-expand"></use>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="block lg:hidden ">
                  <div className="sh-gap-none">
                    <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2 sh-w-full sh-justify-between" id="headlessui-disclosure-button-:Rd5af6:" type="button" aria-expanded="false" data-headlessui-state="">
                      <h2 className="sh-typo-body-2">
                        {"Delivery and Carryout Insurance"}
                      </h2>
                      <div className="ui-open:rotate-180 transition-transform">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                          <use href="#icon-expand"></use>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="hidden lg:block ">
                  <div className="sh-gap-none">
                    <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2" id="headlessui-disclosure-button-:Rbdaf6:" type="button" aria-expanded="false" data-headlessui-state="">
                      <h2 className="sh-typo-body-2">
                        {"Pizza Near Me"}
                      </h2>
                      <div className="ui-open:rotate-180 transition-transform">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                          <use href="#icon-expand"></use>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="block lg:hidden ">
                  <div className="sh-gap-none">
                    <button className="sh-flex sh-items-center sh-gap-x-regular sh-font-bold sh-typo-body-2 sh-w-full sh-justify-between" id="headlessui-disclosure-button-:Rddaf6:" type="button" aria-expanded="false" data-headlessui-state="">
                      <h2 className="sh-typo-body-2">
                        {"Pizza Near Me"}
                      </h2>
                      <div className="ui-open:rotate-180 transition-transform">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="block flex-shrink-0 align-middle w-large h-large" aria-hidden="true">
                          <use href="#icon-expand"></use>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <p className="sh-mb-medium lg:sh-mb-small last:sh-mb-none sh-typo-body-3 ">
                  {"This site is protected by reCAPTCHA Enterprise and the Google "}
                  <a href="https://policies.google.com/privacy" className="sh-underline" target="_blank" rel="noreferrer">
                    {"Privacy Policy"}
                  </a>
                  {" and "}
                  <a href="https://policies.google.com/terms" className="sh-underline" target="_blank" rel="noreferrer">
                    {"Terms of Service"}
                  </a>
                  {" apply."}
                </p>
              </div>
              <div className="sh-block lg:sh-hidden">
                <div>
                  <p className="sh-typo-label-5 sh-text-neutral-white sh-mb-medium last:sh-mb-none">
                    <Link href="/content/terms-of-use#california-transparency-in-supply-chains-act" className="sh-typo-body-2 sh-font-bold sh-text-neutral-white sh-underline">
                      {"CA Transparency in Supply Chains Act Disclosures"}
                    </Link>
                  </p>
                  <p className="sh-typo-label-5 sh-text-neutral-white sh-mb-medium last:sh-mb-none">
                    <Link href="/data-privacy-rights" className="sh-typo-body-2 sh-font-bold sh-text-neutral-white sh-underline">
                      {"CA Consumer Privacy Act"}
                    </Link>
                  </p>
                  <p className="sh-typo-label-5 sh-text-neutral-white sh-mb-medium last:sh-mb-none">
                    <Link href="/content/accessibility-policy" className="sh-typo-body-2 sh-font-bold sh-text-neutral-white sh-underline">
                      {"Accessibility Policy"}
                    </Link>
                  </p>
                  <p className="sh-typo-label-5 sh-text-neutral-white sh-mb-medium last:sh-mb-none">
                    {"If you are using a screen reader and are having problems using this website, please call "}
                    <a href="tel:8002524031" className="sh-typo-body-2 sh-font-bold sh-text-neutral-white sh-underline">
                      {"800-252-4031"}
                    </a>
                    {" for assistance."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
    </>
  );
}
