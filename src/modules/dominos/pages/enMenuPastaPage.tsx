/* eslint-disable */
// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";
import { MenuCategoryGrid } from "../components/menu";

export const metadata: Metadata = {
  "title": "Pasta Near Me | Crumblez",
  "description": "Order your favorite Crumblez pasta online or build your own! Sign up for Crumblez email & text offers to get great deals on your next order.",
  "alternates": {
    "canonical": "/en/menu/pasta"
  },
  "robots": "index"
};

export function EnMenuPastaPage() {
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
<header className="flex justify-center border-b bg-cool-gray-200 border-cool-gray-400">
              <div className="flex w-full max-w-screen-xl flex-col gap-y-tiny px-medium pb-large pt-x-large md:px-x-large lg:pb-x-large lg:pt-jumbo">
                <div className="pd-flex pd-w-full pd-items-center pd-justify-between">
                  <h1 className="text-blue typo-headline-1 lg:typo-display-1">
                    {"Oven-Baked Pastas"}
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
                    <Link className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-large py-regular typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110 inline-block" href="/en/menu/pasta32f4?type=order_delivery">
                      {"Delivery"}
                    </Link>
                    <span className="sv-text-blue sv-typo-headline-2">
                      {"Or"}
                    </span>
                    <Link className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-large py-regular typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110 inline-block" href="/en/menu/pasta0e22?type=order_carryout">
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
                              {"5-Cheese Mac & Cheese"}
                            </h2>
                            <p className="text-text-secondary typo-body-2 lg:typo-body-1 line-clamp-3">
                              {"Our take on the classic. Penne pasta and a blend of cheese made with 100% real mozzarella, cheddar, American, Parmesan, Asiago and Alfredo sauce, oven baked to creamy, bubbly perfection."}
                            </p>
                          </div>
                        </div>
                        <div className="group relative order-first">
                          <div className="relative flex aspect-square justify-end overflow-hidden rounded-xl border-solid border-2 border-transparent bg-cool-gray-200 group-hover:border-cool-gray-700 group-active:border-blue">
                            <picture>
                              <source data-testid="5-Cheese Mac & Cheese-source-xl" srcSet="/site-assets/cms/assets/281d4d36-ca81-4789-b3c2-91a1deeaeb018ca3.png?modified_on=2024-08-28T16%3A32%3A56.653Z&im=Resize%3D%28501%2C501%29%3BCrop%2Crect%3D%2894%2C24%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="5-Cheese Mac & Cheese-source-lg" srcSet="/site-assets/cms/assets/281d4d36-ca81-4789-b3c2-91a1deeaeb018ca3.png?modified_on=2024-08-28T16%3A32%3A56.653Z&im=Resize%3D%28501%2C501%29%3BCrop%2Crect%3D%2894%2C24%2C431%2C431%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="5-Cheese Mac & Cheese-source-md" srcSet="/site-assets/cms/assets/281d4d36-ca81-4789-b3c2-91a1deeaeb018ca3.png?modified_on=2024-08-28T16%3A32%3A56.653Z&im=Resize%3D%28277%2C277%29%3BCrop%2Crect%3D%2857%2C20%2C228%2C228%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img className="min-h-full min-w-full object-right" data-testid="5-Cheese Mac & Cheese-img-sm" alt="" loading="lazy" src="/site-assets/cms/assets/281d4d36-ca81-4789-b3c2-91a1deeaeb018ca3.png?modified_on=2024-08-28T16%3A32%3A56.653Z&im=Resize%3D%28277%2C277%29%3BCrop%2Crect%3D%2857%2C20%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="absolute inset-none m-small flex flex-col items-end justify-end lg:flex-row">
                            <Link className="sr-only" href="/en/menu/pasta/S_5CHSMAC/5cheese_mac_cheese">
                              {"Customize "}
                              {"5-Cheese Mac & Cheese"}
                            </Link>
                            <div className="pd-rounded-full pd-transition-all pd-duration-400 motion-reduce:pd-transition-none">
                              <span className="">
                                <button aria-label="Add 5-Cheese Mac & Cheese to Cart" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-red bg-red-default border border-neutral-white [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-wine [&:not([aria-disabled='true'])]:focus:shadow-button-primary disabled:bg-ui-background-border [&:not([aria-disabled='false'])]:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:shadow-[0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(227,24,55,0.70),0_0_0_4px_#E31837] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&:not([aria-disabled='true'])]:active:bg-red-900 disabled:bg-warm-gray-400 disabled:pointer-events-none h-x-large w-x-large p-x-small rounded-full aspect-square" type="button">
                                  <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-add-cart--background-primary.svg" />
                                </button>
                              </span>
                              <div className="pd-h-x-large pd-w-x-large pd-hidden"></div>
                            </div>
                            <div hidden style={{ display: "none" }}>
                              <div className="w-fit rounded-full border border-cool-gray-700 bg-cool-gray-200 p-tiny leading-none shadow-[0_2px_6px_0_rgba(120,84,49,0.10)]">
                                <div className="inline-flex items-center justify-center gap-small leading-none">
                                  <button aria-label="Remove one 5-Cheese Mac & Cheese" aria-disabled="true" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square cursor-not-allowed bg-cool-gray-500 pointer-events-none border" type="button">
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
                                  <button aria-label="Add one 5-Cheese Mac & Cheese" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square" type="button">
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
                              {"Spicy Buffalo 5-Cheese Mac & Cheese"}
                            </h2>
                            <p className="text-text-secondary typo-body-2 lg:typo-body-1 line-clamp-3">
                              {"Our creamy, oven-baked 5 Cheese Mac & Cheese drizzled with buffalo sauce for a spicy kick."}
                            </p>
                          </div>
                        </div>
                        <div className="group relative order-first">
                          <div className="relative flex aspect-square justify-end overflow-hidden rounded-xl border-solid border-2 border-transparent bg-cool-gray-200 group-hover:border-cool-gray-700 group-active:border-blue">
                            <picture>
                              <source data-testid="Spicy Buffalo 5-Cheese Mac & Cheese-source-xl" srcSet="/site-assets/cms/assets/cd6afd00-4ac2-4f09-843b-48190eb1fb4bb097.png?modified_on=2024-08-28T18%3A18%3A00.429Z&im=Resize%3D%28501%2C501%29%3BCrop%2Crect%3D%2894%2C24%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Spicy Buffalo 5-Cheese Mac & Cheese-source-lg" srcSet="/site-assets/cms/assets/cd6afd00-4ac2-4f09-843b-48190eb1fb4bb097.png?modified_on=2024-08-28T18%3A18%3A00.429Z&im=Resize%3D%28501%2C501%29%3BCrop%2Crect%3D%2894%2C24%2C431%2C431%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Spicy Buffalo 5-Cheese Mac & Cheese-source-md" srcSet="/site-assets/cms/assets/cd6afd00-4ac2-4f09-843b-48190eb1fb4bb097.png?modified_on=2024-08-28T18%3A18%3A00.429Z&im=Resize%3D%28277%2C277%29%3BCrop%2Crect%3D%2857%2C20%2C228%2C228%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img className="min-h-full min-w-full object-right" data-testid="Spicy Buffalo 5-Cheese Mac & Cheese-img-sm" alt="" loading="lazy" src="/site-assets/cms/assets/cd6afd00-4ac2-4f09-843b-48190eb1fb4bb097.png?modified_on=2024-08-28T18%3A18%3A00.429Z&im=Resize%3D%28277%2C277%29%3BCrop%2Crect%3D%2857%2C20%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="absolute inset-none m-small flex flex-col items-end justify-end lg:flex-row">
                            <Link className="sr-only" href="/en/menu/pasta/S_BUFFALO/spicy_buffalo_5cheese_mac_cheese">
                              {"Customize "}
                              {"Spicy Buffalo 5-Cheese Mac & Cheese"}
                            </Link>
                            <div className="pd-rounded-full pd-transition-all pd-duration-400 motion-reduce:pd-transition-none">
                              <span className="">
                                <button aria-label="Add Spicy Buffalo 5-Cheese Mac & Cheese to Cart" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-red bg-red-default border border-neutral-white [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-wine [&:not([aria-disabled='true'])]:focus:shadow-button-primary disabled:bg-ui-background-border [&:not([aria-disabled='false'])]:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:shadow-[0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(227,24,55,0.70),0_0_0_4px_#E31837] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&:not([aria-disabled='true'])]:active:bg-red-900 disabled:bg-warm-gray-400 disabled:pointer-events-none h-x-large w-x-large p-x-small rounded-full aspect-square" type="button">
                                  <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-add-cart--background-primary.svg" />
                                </button>
                              </span>
                              <div className="pd-h-x-large pd-w-x-large pd-hidden"></div>
                            </div>
                            <div hidden style={{ display: "none" }}>
                              <div className="w-fit rounded-full border border-cool-gray-700 bg-cool-gray-200 p-tiny leading-none shadow-[0_2px_6px_0_rgba(120,84,49,0.10)]">
                                <div className="inline-flex items-center justify-center gap-small leading-none">
                                  <button aria-label="Remove one Spicy Buffalo 5-Cheese Mac & Cheese" aria-disabled="true" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square cursor-not-allowed bg-cool-gray-500 pointer-events-none border" type="button">
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
                                  <button aria-label="Add one Spicy Buffalo 5-Cheese Mac & Cheese" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square" type="button">
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
                              {"Chicken Alfredo"}
                            </h2>
                            <p className="text-text-secondary typo-body-2 lg:typo-body-1 line-clamp-3">
                              {"Try our savory Chicken Alfredo Pasta. Grilled chicken breast and creamy Alfredo sauce is mixed with penne pasta and baked to creamy perfection."}
                            </p>
                          </div>
                        </div>
                        <div className="group relative order-first">
                          <div className="relative flex aspect-square justify-end overflow-hidden rounded-xl border-solid border-2 border-transparent bg-cool-gray-200 group-hover:border-cool-gray-700 group-active:border-blue">
                            <picture>
                              <source data-testid="Chicken Alfredo-source-xl" srcSet="/site-assets/cms/assets/2a718451-e1f7-415a-a01a-3734b65f9a2128ae.png?modified_on=2024-07-26T20%3A08%3A14.878Z&im=Resize%3D%28501%2C501%29%3BCrop%2Crect%3D%2894%2C24%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Chicken Alfredo-source-lg" srcSet="/site-assets/cms/assets/2a718451-e1f7-415a-a01a-3734b65f9a2128ae.png?modified_on=2024-07-26T20%3A08%3A14.878Z&im=Resize%3D%28501%2C501%29%3BCrop%2Crect%3D%2894%2C24%2C431%2C431%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Chicken Alfredo-source-md" srcSet="/site-assets/cms/assets/2a718451-e1f7-415a-a01a-3734b65f9a2128ae.png?modified_on=2024-07-26T20%3A08%3A14.878Z&im=Resize%3D%28277%2C277%29%3BCrop%2Crect%3D%2857%2C20%2C228%2C228%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img className="min-h-full min-w-full object-right" data-testid="Chicken Alfredo-img-sm" alt="" loading="lazy" src="/site-assets/cms/assets/2a718451-e1f7-415a-a01a-3734b65f9a2128ae.png?modified_on=2024-07-26T20%3A08%3A14.878Z&im=Resize%3D%28277%2C277%29%3BCrop%2Crect%3D%2857%2C20%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="absolute inset-none m-small flex flex-col items-end justify-end lg:flex-row">
                            <Link className="sr-only" href="/en/menu/pasta/S_ALFR/chicken_alfredo">
                              {"Customize "}
                              {"Chicken Alfredo"}
                            </Link>
                            <div className="pd-rounded-full pd-transition-all pd-duration-400 motion-reduce:pd-transition-none">
                              <span className="">
                                <button aria-label="Add Chicken Alfredo to Cart" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-red bg-red-default border border-neutral-white [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-wine [&:not([aria-disabled='true'])]:focus:shadow-button-primary disabled:bg-ui-background-border [&:not([aria-disabled='false'])]:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:shadow-[0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(227,24,55,0.70),0_0_0_4px_#E31837] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&:not([aria-disabled='true'])]:active:bg-red-900 disabled:bg-warm-gray-400 disabled:pointer-events-none h-x-large w-x-large p-x-small rounded-full aspect-square" type="button">
                                  <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-add-cart--background-primary.svg" />
                                </button>
                              </span>
                              <div className="pd-h-x-large pd-w-x-large pd-hidden"></div>
                            </div>
                            <div hidden style={{ display: "none" }}>
                              <div className="w-fit rounded-full border border-cool-gray-700 bg-cool-gray-200 p-tiny leading-none shadow-[0_2px_6px_0_rgba(120,84,49,0.10)]">
                                <div className="inline-flex items-center justify-center gap-small leading-none">
                                  <button aria-label="Remove one Chicken Alfredo" aria-disabled="true" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square cursor-not-allowed bg-cool-gray-500 pointer-events-none border" type="button">
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
                                  <button aria-label="Add one Chicken Alfredo" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square" type="button">
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
                    <MenuCategoryGrid />
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
        
      </section>
    </div>
    </>
  );
}
