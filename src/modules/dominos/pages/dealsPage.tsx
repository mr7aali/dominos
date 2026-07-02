/* eslint-disable */
// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Get National & Local Dominos Pizza Coupons for Carryout or Delivery",
  "description": "Order pizza, pasta, sandwiches & more online for carryout or delivery from Crumblez. View menu, find locations, track orders. Sign up for Crumblez email & text offers to get great deals on your next order.",
  "alternates": {
    "canonical": "/en/deals"
  },
  "robots": "index"
};

export function DealsPage() {
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
              <Link aria-label="Crumblez logo link, home page" className="sh-col-start-2 sh-row-start-1 sh-flex sh-items-center sh-justify-center sh-px-regular sh-py-small focus:sh-rounded-sm focus:sh-outline focus:sh-outline-1 focus:sh-outline-neutral-white" data-testid="crumblez-logo-button" href="/">
                <img alt="" className="block w-[2.25rem] h-[2.25rem] object-contain lg:w-jumbo lg:h-jumbo" src="/logo.jpeg" />
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
                <h1 className="text-blue typo-headline-1 lg:typo-display-1">
                  {"Deals"}
                </h1>
              </div>
            </header>
            <div className="bg-background-primary lg:flex lg:flex-col">
              <div className="flex w-full max-w-screen-xl flex-col gap-xx-large self-center px-medium pb-xx-large pt-x-large md:gap-mega-1 md:px-x-large md:pb-mega-1 lg:gap-mega-1 lg:pb-mega-1 lg:pt-mega-1">
                <div className="de-grid de-grid-cols-1 de-gap-xx-large lg:de-grid-cols-[minmax(20rem,_1fr)_3fr] lg:de-gap-mega-3">
                  <div>
                    <div className="de-flex de-items-center de-justify-between de-gap-regular de-rounded-xl de-bg-cool-gray-200 de-px-regular de-py-small lg:de-sticky lg:de-top-mega-7 lg:de-flex-wrap">
                      <div className="de-size-x-large lg:de-hidden">
                        <img alt="" className="block w-x-large h-x-large" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/price-tag.svg" />
                      </div>
                      <div className="de-hidden de-size-xx-large lg:de-block">
                        <img alt="" className="block w-xx-large h-xx-large" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/price-tag.svg" />
                      </div>
                      <div className="de-flex de-flex-1 de-justify-start lg:de-justify-center">
                        <div>
                          <div className="de-relative de-top-1/2 de-hidden de-border-t-2 de-border-dotted de-border-red"></div>
                          <p id=":R6aldmf6:" className="de-flex-1 de-text-balance de-leading-none de-text-blue de-typo-label-4 md:de-text-wrap md:de-text-center md:de-typo-label-2 lg:de-text-balance lg:de-typo-label-1">
                            {"Find your local store's coupons"}
                          </p>
                        </div>
                      </div>
                      <div className="de-whitespace-nowrap lg:de-w-full">
                        <button type="button" aria-describedby=":R6aldmf6:" className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110">
                          {"See local deals"}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="cp-flex cp-flex-col cp-gap-large">
                    <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container">
                      <div className="clickable-card rounded-lg active:outline active:outline-blue" data-testid="clickable-card">
                        <div className="grid h-full">
                          <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                            <source media="(min-width: 1000px)" sizes="(max-width: 1700px) 100vw, 1700px" srcSet="/site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(0,651,2845,1262);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(0,651,2845,1262);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(0,651,2845,1262);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(0,651,2845,1262);Resize=(1700),allowExpansion 1700w" />
                            <source media="(min-width: 500px)" sizes="(max-width: 1700px) 100vw, 1700px" srcSet="/site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(894,968,1924,829);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(894,968,1924,829);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(894,968,1924,829);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(894,968,1924,829);Resize=(1700),allowExpansion 1700w" />
                            <source media="(max-width: 500px)" sizes="(max-width: 1700px) 100vw, 1700px" srcSet="/site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(1413,796,1542,1926);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(1413,796,1542,1926);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(1413,796,1542,1926);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(1413,796,1542,1926);Resize=(1700),allowExpansion 1700w" />
                            <img src="/site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e109a7f8.jpg?im=Crop,rect=(0,651,2845,1262);Resize=(1700),allowExpansion" alt="" loading="lazy" className="h-auto w-full rounded-lg object-cover" />
                          </picture>
                          <div className="col-start-1 row-start-1 flex items-end">
                            <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                              <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                  <h2 className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny" id=":R4qaldmf6:">
                                    <span className="absolute -top-small right-large">
                                      <span className="inline-flex max-w-full items-center justify-center rounded-full border border-[rgba(254,250,246,0.70)] bg-red-700 px-x-small py-tiny text-text-invert shadow-red-glow">
                                        <span className="inline-flex overflow-hidden overflow-ellipsis whitespace-nowrap !leading-[0.86] px-small typo-label-4">
                                          {"Now with stuffed crust"}
                                        </span>
                                      </span>
                                    </span>
                                    {" "}
                                    <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                      <span>
                                        {"Best Deal Ever"}
                                      </span>
                                    </span>
                                    {" "}
                                    <span className="block text-pretty text-accessible-blue typo-offer-headline-small @5xl:typo-offer-headline-large">
                                      <span>
                                        {"Any pizza. Any toppings. "}
                                        <span className="text-accessible-red">
                                          {"$9.99 each."}
                                        </span>
                                      </span>
                                    </span>
                                  </h2>
                                  <span className="text-text-primary typo-body-2 @5xl:typo-body-1">
                                    <p>
                                      <span>
                                        {"Choose your crust. Choose your size. Choose up to 7 toppings."}
                                      </span>
                                    </p>
                                  </span>
                                  <div className="cp-mt-tiny">
                                    <button type="button" aria-labelledby=":R4qaldmf6H1: :R4qaldmf6:" id=":R4qaldmf6H1:" className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110">
                                      {"Add deal"}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sm:flex-col mt-small flex items-center gap-x-small">
                        <div>
                          <div className="inline-block whitespace-nowrap">
                            <button type="button" aria-labelledby=":R4qaldmf6H2: :R4qaldmf6:" className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed bg-neutral-white shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] text-text-secondary hover:bg-cool-gray-300 border border-transparent hover:border-cool-gray-700 focus:border-cool-gray-700 focus:shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] focus:bg-neutral-white active:bg-cool-gray-400 active:border-transparent px-medium py-small typo-label-4 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110">
                              <span id=":R4qaldmf6H2:">
                                {"Offer details"}
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="cp-mx-auto">
                          <div className="text-center text-text-secondary typo-label-5">
                            <p className="cp-text-center">
                              <span>
                                <strong className="font-bold">
                                  {"PRICES HIGHER FOR SOME LOCATIONS"}
                                </strong>
                                {" Select this offer from 6/15-7/26. Online Only. Max. 7 toppings (6 for Pan and NY Style Crust)."}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container">
                      <div className="clickable-card rounded-lg active:outline active:outline-blue" data-testid="clickable-card">
                        <div className="grid h-full">
                          <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                            <source media="(min-width: 1000px)" sizes="(max-width: 1700px) 100vw, 1700px" srcSet="/site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(248,548,3203,1421);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(248,548,3203,1421);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(248,548,3203,1421);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(248,548,3203,1421);Resize=(1700),allowExpansion 1700w" />
                            <source media="(min-width: 500px)" sizes="(max-width: 1700px) 100vw, 1700px" srcSet="/site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(400,780,3060,1319);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(400,780,3060,1319);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(400,780,3060,1319);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(400,780,3060,1319);Resize=(1700),allowExpansion 1700w" />
                            <source media="(max-width: 500px)" sizes="(max-width: 1700px) 100vw, 1700px" srcSet="/site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(1280,710,1475,1845);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(1280,710,1475,1845);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(1280,710,1475,1845);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(1280,710,1475,1845);Resize=(1700),allowExpansion 1700w" />
                            <img src="/site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b66b14.jpg?im=Crop,rect=(248,548,3203,1421);Resize=(1700),allowExpansion" alt="Mix and match" loading="lazy" className="h-auto w-full rounded-lg object-cover" />
                          </picture>
                          <div className="col-start-1 row-start-1 flex items-end">
                            <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                              <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                  <h2 className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny" id=":R5aaldmf6:">
                                    <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                      <span>
                                        {"Mix and match"}
                                      </span>
                                    </span>
                                    {" "}
                                    <span className="block text-pretty text-accessible-blue typo-offer-headline-small @5xl:typo-offer-headline-large">
                                      <span>
                                        {"Choose any two for "}
                                        <span className="text-accessible-red">
                                          {"$6.99 each."}
                                        </span>
                                      </span>
                                    </span>
                                  </h2>
                                  <div className="cp-mt-tiny">
                                    <button type="button" aria-labelledby=":R5aaldmf6H1: :R5aaldmf6:" id=":R5aaldmf6H1:" className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110">
                                      {"Add deal"}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sm:flex-col mt-small flex items-center gap-x-small">
                        <div>
                          <div className="inline-block whitespace-nowrap">
                            <button type="button" aria-labelledby=":R5aaldmf6H2: :R5aaldmf6:" className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed bg-neutral-white shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] text-text-secondary hover:bg-cool-gray-300 border border-transparent hover:border-cool-gray-700 focus:border-cool-gray-700 focus:shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] focus:bg-neutral-white active:bg-cool-gray-400 active:border-transparent px-medium py-small typo-label-4 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110">
                              <span id=":R5aaldmf6H2:">
                                {"Offer details"}
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="cp-mx-auto">
                          <div className="text-center text-text-secondary typo-label-5">
                            <p className="cp-text-center">
                              <span>
                                <strong className="font-bold">
                                  {"PRICES HIGHER FOR SOME LOCATIONS."}
                                </strong>
                                {" Your choice of any two or more medium 2-topping pizzas, sides, and desserts. Upgrade to Parmesan Stuffed Crust for $4 more."}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container">
                      <div className="clickable-card rounded-lg active:outline active:outline-blue" data-testid="clickable-card">
                        <div className="grid h-full">
                          <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                            <source media="(min-width: 1000px)" sizes="(max-width: 1700px) 100vw, 1700px" srcSet="/site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,3250,1441);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,3250,1441);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,3250,1441);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,3250,1441);Resize=(1700),allowExpansion 1700w" />
                            <source media="(min-width: 500px)" sizes="(max-width: 1700px) 100vw, 1700px" srcSet="/site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,2860,1234);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,2860,1234);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,2860,1234);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,2860,1234);Resize=(1700),allowExpansion 1700w" />
                            <source media="(max-width: 500px)" sizes="(max-width: 1700px) 100vw, 1700px" srcSet="/site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(1600,180,1850,2315);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(1600,180,1850,2315);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(1600,180,1850,2315);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(1600,180,1850,2315);Resize=(1700),allowExpansion 1700w" />
                            <img src="/site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,3250,1441);Resize=(1700),allowExpansion" alt="Week long carry out" loading="lazy" className="h-auto w-full rounded-lg object-cover" />
                          </picture>
                          <div className="col-start-1 row-start-1 flex items-end">
                            <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                              <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                  <h2 className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny" id=":R5qaldmf6:">
                                    <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                      <span>
                                        {"Weeklong carryout"}
                                      </span>
                                    </span>
                                    {" "}
                                    <span className="block text-pretty text-accessible-blue typo-offer-headline-small @5xl:typo-offer-headline-large">
                                      <span>
                                        {"Carry out for just "}
                                        <span className="text-accessible-red">
                                          {"$7.99 each."}
                                        </span>
                                      </span>
                                    </span>
                                  </h2>
                                  <div className="cp-mt-tiny">
                                    <button type="button" aria-labelledby=":R5qaldmf6H1: :R5qaldmf6:" id=":R5qaldmf6H1:" className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110">
                                      {"Add deal"}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sm:flex-col mt-small flex items-center gap-x-small">
                        <div>
                          <div className="inline-block whitespace-nowrap">
                            <button type="button" aria-labelledby=":R5qaldmf6H2: :R5qaldmf6:" className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed bg-neutral-white shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] text-text-secondary hover:bg-cool-gray-300 border border-transparent hover:border-cool-gray-700 focus:border-cool-gray-700 focus:shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] focus:bg-neutral-white active:bg-cool-gray-400 active:border-transparent px-medium py-small typo-label-4 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110">
                              <span id=":R5qaldmf6H2:">
                                {"Offer details"}
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="cp-mx-auto">
                          <div className="text-center text-text-secondary typo-label-5">
                            <p className="cp-text-center">
                              <span>
                                <strong className="font-bold">
                                  {"PRICES HIGHER FOR SOME LOCATIONS."}
                                </strong>
                                {" Spend less dough when you carry out a Large 1-topping pizza on any of our 6 delicious crusts, 8-piece wings or boneless chicken."}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container">
                      <div className="clickable-card rounded-lg active:outline active:outline-blue" data-testid="clickable-card">
                        <div className="grid h-full">
                          <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                            <source media="(min-width: 1000px)" sizes="(max-width: 1700px) 100vw, 1700px" srcSet="/site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(725,300,2820,1251);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(725,300,2820,1251);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(725,300,2820,1251);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(725,300,2820,1251);Resize=(1700),allowExpansion 1700w" />
                            <source media="(min-width: 500px)" sizes="(max-width: 1700px) 100vw, 1700px" srcSet="/site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(0,343,3615,1558);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(0,343,3615,1558);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(0,343,3615,1558);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(0,343,3615,1558);Resize=(1700),allowExpansion 1700w" />
                            <source media="(max-width: 500px)" sizes="(max-width: 1700px) 100vw, 1700px" srcSet="/site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1060,315,1876,2347);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1060,315,1876,2347);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1060,315,1876,2347);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1060,315,1876,2347);Resize=(1700),allowExpansion 1700w" />
                            <img src="/site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873aff31f.jpg?im=Crop,rect=(725,300,2820,1251);Resize=(1700),allowExpansion" alt="" loading="lazy" className="h-auto w-full rounded-lg object-cover" />
                          </picture>
                          <div className="col-start-1 row-start-1 flex items-end">
                            <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                              <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                  <h2 className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny" id=":R6aaldmf6:">
                                    <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                      <span>
                                        {"Parmesan Stuffed Crust"}
                                      </span>
                                    </span>
                                    {" "}
                                    <span className="block text-pretty text-accessible-blue typo-offer-headline-small @5xl:typo-offer-headline-large">
                                      <span>
                                        {"Just "}
                                        <span className="text-accessible-red">
                                          {"$10.99 each."}
                                        </span>
                                      </span>
                                    </span>
                                  </h2>
                                  <span className="text-text-primary typo-body-2 @5xl:typo-body-1">
                                    <p>
                                      <span>
                                        {"Mix and Match any two or more 2-topping Parmesan Stuffed Crust Pizzas for just $10.99 each!"}
                                      </span>
                                    </p>
                                  </span>
                                  <div className="cp-mt-tiny">
                                    <button type="button" aria-labelledby=":R6aaldmf6H1: :R6aaldmf6:" id=":R6aaldmf6H1:" className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110">
                                      {"Add deal"}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sm:flex-col mt-small flex items-center gap-x-small">
                        <div>
                          <div className="inline-block whitespace-nowrap">
                            <button type="button" aria-labelledby=":R6aaldmf6H2: :R6aaldmf6:" className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed bg-neutral-white shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] text-text-secondary hover:bg-cool-gray-300 border border-transparent hover:border-cool-gray-700 focus:border-cool-gray-700 focus:shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] focus:bg-neutral-white active:bg-cool-gray-400 active:border-transparent px-medium py-small typo-label-4 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110">
                              <span id=":R6aaldmf6H2:">
                                {"Offer details"}
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="cp-mx-auto">
                          <div className="text-center text-text-secondary typo-label-5">
                            <p className="cp-text-center">
                              <span>
                                <strong className="font-bold">
                                  {"PRICES HIGHER FOR SOME LOCATIONS."}
                                </strong>
                                {" You must ask for this limited time offer. Prices, participation, delivery area, and charges may vary by store. 2-item minimum. Bone-in Wings and Handmade Pan will cost extra."}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container">
                      <div className="clickable-card rounded-lg active:outline active:outline-blue" data-testid="clickable-card">
                        <div className="grid h-full">
                          <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                            <source media="(min-width: 1000px)" sizes="(max-width: 1700px) 100vw, 1700px" srcSet="/site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(0,708,2948,1307);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(0,708,2948,1307);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(0,708,2948,1307);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(0,708,2948,1307);Resize=(1700),allowExpansion 1700w" />
                            <source media="(min-width: 500px)" sizes="(max-width: 1700px) 100vw, 1700px" srcSet="/site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(801,514,2484,1072);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(801,514,2484,1072);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(801,514,2484,1072);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(801,514,2484,1072);Resize=(1700),allowExpansion 1700w" />
                            <source media="(max-width: 500px)" sizes="(max-width: 1700px) 100vw, 1700px" srcSet="/site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(1187,0,1604,2007);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(1187,0,1604,2007);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(1187,0,1604,2007);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(1187,0,1604,2007);Resize=(1700),allowExpansion 1700w" />
                            <img src="/site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(0,708,2948,1307);Resize=(1700),allowExpansion" alt="The perfect combo" loading="lazy" className="h-auto w-full rounded-lg object-cover" />
                          </picture>
                          <div className="col-start-1 row-start-1 flex items-end">
                            <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                              <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                  <h2 className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny" id=":R6qaldmf6:">
                                    <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                      <span>
                                        {"The perfect combo"}
                                      </span>
                                    </span>
                                    {" "}
                                    <span className="block text-pretty text-accessible-blue typo-offer-headline-small @5xl:typo-offer-headline-large">
                                      <span>
                                        {"Get all of this for "}
                                        <span className="text-accessible-red">
                                          {"just $19.99."}
                                        </span>
                                      </span>
                                    </span>
                                  </h2>
                                  <div className="cp-mt-tiny">
                                    <button type="button" aria-labelledby=":R6qaldmf6H1: :R6qaldmf6:" id=":R6qaldmf6H1:" className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110">
                                      {"Add deal"}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sm:flex-col mt-small flex items-center gap-x-small">
                        <div>
                          <div className="inline-block whitespace-nowrap">
                            <button type="button" aria-labelledby=":R6qaldmf6H2: :R6qaldmf6:" className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed bg-neutral-white shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] text-text-secondary hover:bg-cool-gray-300 border border-transparent hover:border-cool-gray-700 focus:border-cool-gray-700 focus:shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] focus:bg-neutral-white active:bg-cool-gray-400 active:border-transparent px-medium py-small typo-label-4 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110">
                              <span id=":R6qaldmf6H2:">
                                {"Offer details"}
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="cp-mx-auto">
                          <div className="text-center text-text-secondary typo-label-5">
                            <p className="cp-text-center">
                              <span>
                                <strong className="font-bold">
                                  {"PRICES HIGHER FOR SOME LOCATIONS."}
                                </strong>
                                {" Get two medium 1-topping pizzas and two orders of 16-piece bread bites. Choose from savory flavors like Parmesan or Garlic or indulge with sweet Cinnamon."}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
            <svg aria-hidden="true" className="sr-only" focusable="false" viewBox="0 0 0 0" xmlns="http://www.w3.org/2000/svg">
              <filter id="price-stroke">
                <femorphology in="SourceGraphic" operator="dilate" result="expand" radius="1"></femorphology>
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
              <img alt="" className="block w-[2.25rem] h-[2.25rem] object-contain lg:w-jumbo lg:h-jumbo" src="/logo.jpeg" />
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
                            {"About Crumblez"}
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
                            {"World of Crumblez"}
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
                    {"Follow Crumblez"}
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
                            {"About Crumblez"}
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
                            {"World of Crumblez"}
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
                    {"Any Delivery Charge is not a tip paid to your driver. Please reward your driver for awesomeness. Drivers carry less than $20. Minimum purchase required for delivery. Delivery charge and tax may apply. Prices, participation, delivery area and charges may vary. Returned checks, along with the state's maximum allowable returned check fee, may be electronically presented to your bank. ©2024 Crumblez IP Holder LLC. Crumblez, Crumblez® and the game piece logo are registered trademarks of Crumblez IP Holder LLC. \"Coca-Cola\" and the Contour Bottle design are registered trademarks of The Coca-Cola Company. Apple, the Apple logo and iPad are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android is a trademark of Google Inc. Windows® Phone is a registered trademark of the Microsoft group of companies."}
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
                        {"Crumblez Rewards"}
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
                        {"Crumblez Rewards"}
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
