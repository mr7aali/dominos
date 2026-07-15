/* eslint-disable */
// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";
import { MenuCategoryGrid } from "../components/menu";

export const metadata: Metadata = {
  "title": "Dominos' Menu - Order Pizza, Pasta, Wings & More Online!",
  "description": "Order Crumblez pizza, pasta, sandwiches & more, available for carryout or delivery. Sign up for Crumblez email & text offers for great deals on your next order.",
  "alternates": {
    "canonical": "/en/menu"
  },
  "robots": "index"
};

export function MenuPage() {
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
              <div className="pd-box-border pd-border-b pd-border-cool-gray-200 pd-px-medium pd-py-large md:pd-px-x-large lg:pd-py-x-large md:pd-py-jumbo">
                <div className="pd-flex pd-flex-col pd-gap-large md:pd-flex-row md:pd-items-center md:pd-justify-between">
                  <h1 className="pd-uppercase pd-text-blue pd-typo-subhead-2">
                    {"Menu"}
                  </h1>
                  <div className="pd-w-fit pd-max-w-screen-xl md:pd-flex md:pd-place-items-end md:pd-items-center md:pd-gap-small md:pd-whitespace-nowrap">
                    <div className="md:pd-p-x-small md:pd-px-none">
                      <ul className="flex w-fit flex-row items-center justify-start gap-small">
                        <li className="rounded-full border-2 px-medium py-small text-center outline-none typo-label-4 focus:shadow-button-tertiary border-cool-gray-1100 bg-cool-gray-1100 text-text-invert">
                          <Link aria-current="page" href="/menu">
                            {"Menu"}
                          </Link>
                        </li>
                        <li className="rounded-full border-2 px-medium py-small text-center outline-none typo-label-4 focus:shadow-button-tertiary border-cool-gray-400 bg-transparent text-text-primary">
                          <Link href="/menu/previous">
                            {"Recent items"}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
                          <li className="rounded-full border-2 px-medium py-small text-center outline-none typo-label-4 focus:shadow-button-tertiary border-cool-gray-1100 bg-cool-gray-1100 text-text-invert">
                            <Link aria-current="page" href="/menu">
                              {"Menu"}
                            </Link>
                          </li>
                          <li className="rounded-full border-2 px-medium py-small text-center outline-none typo-label-4 focus:shadow-button-tertiary border-cool-gray-400 bg-transparent text-text-primary">
                            <Link href="/menu/previous">
                              {"Recent items"}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            </div>
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
                    <Link className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-large py-regular typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110 inline-block" href="/menu32f4?type=order_delivery">
                      {"Delivery"}
                    </Link>
                    <span className="sv-text-blue sv-typo-headline-2">
                      {"Or"}
                    </span>
                    <Link className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-large py-regular typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110 inline-block" href="/menu0e22?type=order_carryout">
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
                <div className="pd-flex pd-flex-col pd-gap-y-mega-1">
                  <article>
                    <MenuCategoryGrid />
                  </article>
                  <div className="clickable-card pd-overflow-hidden pd-rounded-xl pd-bg-cool-gray-200 pd-outline-dark-blue focus-within:pd-outline-2 active:pd-outline-blue active:outline active:outline-blue" data-testid="clickable-card">
                    <article className="pd-flex pd-flex-col md:pd-flex-row md:pd-justify-between" data-testid="build-your-own-pizza-banner">
                      <picture className="pd-order-1 md:pd-order-2">
                        <source media="(min-width: 1700px)" srcSet="/site-assets/cms/assets/e8e0ce5e-13d1-4b64-865e-9e02345398eab10d.png?im=Resize=(717,717);Crop,rect=(11,280,639,274),allowExpansion" />
                        <source media="(min-width: 1000px)" srcSet="/site-assets/cms/assets/e8e0ce5e-13d1-4b64-865e-9e02345398eab10d.png?im=Resize=(717,717);Crop,rect=(11,280,639,274),allowExpansion" />
                        <source media="(min-width: 500px)" srcSet="/site-assets/cms/assets/e8e0ce5e-13d1-4b64-865e-9e02345398eab10d.png?im=Resize=(436,436);Crop,rect=(0,125,305,244),allowExpansion" />
                        <source media="(max-width: 500px)" srcSet="/site-assets/cms/assets/e8e0ce5e-13d1-4b64-865e-9e02345398eab10d.png?im=Resize=(436,436);Crop,rect=(43,185,350,150),allowExpansion" />
                        <img src="/site-assets/cms/assets/e8e0ce5e-13d1-4b64-865e-9e02345398eab10d.png?im=Resize=(436,436);Crop,rect=(43,185,350,150),allowExpansion" alt="" className="pd-w-full pd-object-cover pd-object-center md:pd-w-auto" />
                      </picture>
                      <div className="pd-order-2 pd-flex pd-flex-col pd-items-center pd-gap-large pd-px-medium pd-pb-large pd-pt-regular md:pd-order-1 md:pd-gap-x-large md:pd-py-x-large md:pd-pl-x-large md:pd-pr-large lg:pd-pb-x-large lg:pd-pt-xx-large">
                        <div className="pd-flex pd-flex-col pd-gap-x-small md:pd-gap-regular">
                          <h2 className="pd-text-balance pd-text-center pd-text-blue pd-typo-display-2 md:pd-w-[15rem] md:pd-text-left lg:pd-typo-display-1">
                            {"Build Your Own Pizza"}
                          </h2>
                          <p className="pd-text-center pd-text-ui-extra-dark-cool pd-typo-body-1 md:pd-text-left">
                            {"Build one of over 34 million unique pizzas."}
                          </p>
                        </div>
                        <div className="pd-self-stretch md:pd-self-start">
                          <Link className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110 inline-block" href="/menu/build-your-own">
                            <span className="pd-typo-label-4 md:pd-mx-x-large">
                              {"Start Building"}
                              <span className="pd-sr-only">
                                {" "}
                                {"Your Own Pizza"}
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="cp-flex cp-flex-col cp-gap-large">
                  <h2 className="cp-text-blue cp-typo-headline-2">
                    {"Featured deal"}
                  </h2>
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
                                <h3 className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny" id=":R3l5ldmf6:">
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
                                </h3>
                                <div className="cp-mt-tiny">
                                  <button type="button" aria-labelledby=":R3l5ldmf6H1: :R3l5ldmf6:" id=":R3l5ldmf6H1:" className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110">
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
                          <button type="button" aria-labelledby=":R3l5ldmf6H2: :R3l5ldmf6:" className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed bg-neutral-white shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] text-text-secondary hover:bg-cool-gray-300 border border-transparent hover:border-cool-gray-700 focus:border-cool-gray-700 focus:shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] focus:bg-neutral-white active:bg-cool-gray-400 active:border-transparent px-medium py-small typo-label-4 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110">
                            <span id=":R3l5ldmf6H2:">
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
            <div id="root-toast-container" className="fixed top-none z-[61] mx-regular mt-mega-7 flex w-[calc(100vw-2rem)] flex-col-reverse md:right-none md:ml-none md:mr-x-large md:mt-mega-5 md:w-1/2 lg:ml-none lg:mr-mega-3 lg:w-1/3"></div>
          </section>
        </main>
        
      </section>
    </div>
    </>
  );
}
