/* eslint-disable */
// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";
import { MenuCategoryGrid } from "../components/menu";

export const metadata: Metadata = {
  "title": "Chicken & Wings Near Me | Crumblez",
  "description": "Order your favorite Crumblez hot wings, BBQ wings, & boneless chicken online! Sign up for Crumblez email & text offers to get great deals on your next order.",
  "alternates": {
    "canonical": "/en/menu/wings"
  },
  "robots": "index"
};

export function MenuWingsPage() {
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
                    {"Chicken"}
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
                    <Link className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-large py-regular typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110 inline-block" href="/menu/wings32f4?type=order_delivery">
                      {"Delivery"}
                    </Link>
                    <span className="sv-text-blue sv-typo-headline-2">
                      {"Or"}
                    </span>
                    <Link className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-large py-regular typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110 inline-block" href="/menu/wings0e22?type=order_carryout">
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
                              {"Loaded Chicken â€“ Crispy Bacon & Tomato"}
                            </h2>
                            <p className="text-text-secondary typo-body-2 lg:typo-body-1 line-clamp-3">
                              {"Tender bites of breaded chicken made with 100% whole breast white meat topped with garlic Parmesan sauce, a blend of cheese made with mozzarella and cheddar, crispy bacon and tomato."}
                            </p>
                          </div>
                        </div>
                        <div className="group relative order-first">
                          <div className="relative flex aspect-square justify-end overflow-hidden rounded-xl border-solid border-2 border-transparent bg-cool-gray-200 group-hover:border-cool-gray-700 group-active:border-blue">
                            <picture>
                              <source data-testid="Loaded Chicken â€“ Crispy Bacon & Tomato-source-xl" srcSet="/site-assets/cms/assets/57d521dd-6307-40d4-82fa-d34e1bed613743fb.png?modified_on=2024-07-29T12%3A34%3A23.853Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Loaded Chicken â€“ Crispy Bacon & Tomato-source-lg" srcSet="/site-assets/cms/assets/57d521dd-6307-40d4-82fa-d34e1bed613743fb.png?modified_on=2024-07-29T12%3A34%3A23.853Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Loaded Chicken â€“ Crispy Bacon & Tomato-source-md" srcSet="/site-assets/cms/assets/57d521dd-6307-40d4-82fa-d34e1bed613743fb.png?modified_on=2024-07-29T12%3A34%3A23.853Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C228%2C228%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img className="min-h-full min-w-full object-right" data-testid="Loaded Chicken â€“ Crispy Bacon & Tomato-img-sm" alt="" loading="lazy" src="/site-assets/cms/assets/57d521dd-6307-40d4-82fa-d34e1bed613743fb.png?modified_on=2024-07-29T12%3A34%3A23.853Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="absolute inset-none m-small flex flex-col items-end justify-end lg:flex-row">
                            <Link className="sr-only" href="/menu/wings/S_SCCBT/loaded_chicken_crispy_bacon_tomato">
                              {"Customize "}
                              {"Loaded Chicken â€“ Crispy Bacon & Tomato"}
                            </Link>
                            <div className="pd-rounded-full pd-transition-all pd-duration-400 motion-reduce:pd-transition-none">
                              <span className="">
                                <button aria-label="Add Loaded Chicken â€“ Crispy Bacon & Tomato to Cart" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-red bg-red-default border border-neutral-white [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-wine [&:not([aria-disabled='true'])]:focus:shadow-button-primary disabled:bg-ui-background-border [&:not([aria-disabled='false'])]:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:shadow-[0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(227,24,55,0.70),0_0_0_4px_#E31837] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&:not([aria-disabled='true'])]:active:bg-red-900 disabled:bg-warm-gray-400 disabled:pointer-events-none h-x-large w-x-large p-x-small rounded-full aspect-square" type="button">
                                  <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-add-cart--background-primary.svg" />
                                </button>
                              </span>
                              <div className="pd-h-x-large pd-w-x-large pd-hidden"></div>
                            </div>
                            <div hidden style={{ display: "none" }}>
                              <div className="w-fit rounded-full border border-cool-gray-700 bg-cool-gray-200 p-tiny leading-none shadow-[0_2px_6px_0_rgba(120,84,49,0.10)]">
                                <div className="inline-flex items-center justify-center gap-small leading-none">
                                  <button aria-label="Remove one Loaded Chicken â€“ Crispy Bacon & Tomato" aria-disabled="true" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square cursor-not-allowed bg-cool-gray-500 pointer-events-none border" type="button">
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
                                  <button aria-label="Add one Loaded Chicken â€“ Crispy Bacon & Tomato" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square" type="button">
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
                              {"Loaded Chicken â€“ Classic Hot Buffalo"}
                            </h2>
                            <p className="text-text-secondary typo-body-2 lg:typo-body-1 line-clamp-3">
                              {"Tender bites of breaded chicken made with 100% whole breast white meat topped with hot buffalo sauce, ranch, a blend of cheese made with mozzarella and cheddar, and feta."}
                            </p>
                          </div>
                        </div>
                        <div className="group relative order-first">
                          <div className="relative flex aspect-square justify-end overflow-hidden rounded-xl border-solid border-2 border-transparent bg-cool-gray-200 group-hover:border-cool-gray-700 group-active:border-blue">
                            <picture>
                              <source data-testid="Loaded Chicken â€“ Classic Hot Buffalo-source-xl" srcSet="/site-assets/cms/assets/c3395e8d-f0ce-48da-bf2e-ede56e00d0ff1618.png?modified_on=2024-07-29T12%3A34%3A23.553Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Loaded Chicken â€“ Classic Hot Buffalo-source-lg" srcSet="/site-assets/cms/assets/c3395e8d-f0ce-48da-bf2e-ede56e00d0ff1618.png?modified_on=2024-07-29T12%3A34%3A23.553Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Loaded Chicken â€“ Classic Hot Buffalo-source-md" srcSet="/site-assets/cms/assets/c3395e8d-f0ce-48da-bf2e-ede56e00d0ff1618.png?modified_on=2024-07-29T12%3A34%3A23.553Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C228%2C228%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img className="min-h-full min-w-full object-right" data-testid="Loaded Chicken â€“ Classic Hot Buffalo-img-sm" alt="" loading="lazy" src="/site-assets/cms/assets/c3395e8d-f0ce-48da-bf2e-ede56e00d0ff1618.png?modified_on=2024-07-29T12%3A34%3A23.553Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="absolute inset-none m-small flex flex-col items-end justify-end lg:flex-row">
                            <Link className="sr-only" href="/menu/wings/S_SCCHB/loaded_chicken_classic_hot_buffalo">
                              {"Customize "}
                              {"Loaded Chicken â€“ Classic Hot Buffalo"}
                            </Link>
                            <div className="pd-rounded-full pd-transition-all pd-duration-400 motion-reduce:pd-transition-none">
                              <span className="">
                                <button aria-label="Add Loaded Chicken â€“ Classic Hot Buffalo to Cart" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-red bg-red-default border border-neutral-white [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-wine [&:not([aria-disabled='true'])]:focus:shadow-button-primary disabled:bg-ui-background-border [&:not([aria-disabled='false'])]:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:shadow-[0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(227,24,55,0.70),0_0_0_4px_#E31837] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&:not([aria-disabled='true'])]:active:bg-red-900 disabled:bg-warm-gray-400 disabled:pointer-events-none h-x-large w-x-large p-x-small rounded-full aspect-square" type="button">
                                  <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-add-cart--background-primary.svg" />
                                </button>
                              </span>
                              <div className="pd-h-x-large pd-w-x-large pd-hidden"></div>
                            </div>
                            <div hidden style={{ display: "none" }}>
                              <div className="w-fit rounded-full border border-cool-gray-700 bg-cool-gray-200 p-tiny leading-none shadow-[0_2px_6px_0_rgba(120,84,49,0.10)]">
                                <div className="inline-flex items-center justify-center gap-small leading-none">
                                  <button aria-label="Remove one Loaded Chicken â€“ Classic Hot Buffalo" aria-disabled="true" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square cursor-not-allowed bg-cool-gray-500 pointer-events-none border" type="button">
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
                                  <button aria-label="Add one Loaded Chicken â€“ Classic Hot Buffalo" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square" type="button">
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
                              {"Loaded Chicken â€“ Spicy Jalapeno - Pineapple"}
                            </h2>
                            <p className="text-text-secondary typo-body-2 lg:typo-body-1 line-clamp-3">
                              {"Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with sweet and spicy mango-habanero sauce, a blend of cheese made with mozzarella and cheddar, jalapeno and pineapple."}
                            </p>
                          </div>
                        </div>
                        <div className="group relative order-first">
                          <div className="relative flex aspect-square justify-end overflow-hidden rounded-xl border-solid border-2 border-transparent bg-cool-gray-200 group-hover:border-cool-gray-700 group-active:border-blue">
                            <picture>
                              <source data-testid="Loaded Chicken â€“ Spicy Jalapeno - Pineapple-source-xl" srcSet="/site-assets/cms/assets/29f7b9c3-4f6f-48f5-83ba-90bee259e803f9c4.png?modified_on=2024-09-23T13%3A53%3A43.936Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Loaded Chicken â€“ Spicy Jalapeno - Pineapple-source-lg" srcSet="/site-assets/cms/assets/29f7b9c3-4f6f-48f5-83ba-90bee259e803f9c4.png?modified_on=2024-09-23T13%3A53%3A43.936Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Loaded Chicken â€“ Spicy Jalapeno - Pineapple-source-md" srcSet="/site-assets/cms/assets/29f7b9c3-4f6f-48f5-83ba-90bee259e803f9c4.png?modified_on=2024-09-23T13%3A53%3A43.936Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C228%2C228%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img className="min-h-full min-w-full object-right" data-testid="Loaded Chicken â€“ Spicy Jalapeno - Pineapple-img-sm" alt="" loading="lazy" src="/site-assets/cms/assets/29f7b9c3-4f6f-48f5-83ba-90bee259e803f9c4.png?modified_on=2024-09-23T13%3A53%3A43.936Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="absolute inset-none m-small flex flex-col items-end justify-end lg:flex-row">
                            <Link className="sr-only" href="/menu/wings/S_SCSJP/loaded_chicken_spicy_jalapeno_pineapple">
                              {"Customize "}
                              {"Loaded Chicken â€“ Spicy Jalapeno - Pineapple"}
                            </Link>
                            <div className="pd-rounded-full pd-transition-all pd-duration-400 motion-reduce:pd-transition-none">
                              <span className="">
                                <button aria-label="Add Loaded Chicken â€“ Spicy Jalapeno - Pineapple to Cart" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-red bg-red-default border border-neutral-white [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-wine [&:not([aria-disabled='true'])]:focus:shadow-button-primary disabled:bg-ui-background-border [&:not([aria-disabled='false'])]:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:shadow-[0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(227,24,55,0.70),0_0_0_4px_#E31837] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&:not([aria-disabled='true'])]:active:bg-red-900 disabled:bg-warm-gray-400 disabled:pointer-events-none h-x-large w-x-large p-x-small rounded-full aspect-square" type="button">
                                  <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-add-cart--background-primary.svg" />
                                </button>
                              </span>
                              <div className="pd-h-x-large pd-w-x-large pd-hidden"></div>
                            </div>
                            <div hidden style={{ display: "none" }}>
                              <div className="w-fit rounded-full border border-cool-gray-700 bg-cool-gray-200 p-tiny leading-none shadow-[0_2px_6px_0_rgba(120,84,49,0.10)]">
                                <div className="inline-flex items-center justify-center gap-small leading-none">
                                  <button aria-label="Remove one Loaded Chicken â€“ Spicy Jalapeno - Pineapple" aria-disabled="true" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square cursor-not-allowed bg-cool-gray-500 pointer-events-none border" type="button">
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
                                  <button aria-label="Add one Loaded Chicken â€“ Spicy Jalapeno - Pineapple" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square" type="button">
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
                              {"Loaded Chicken â€“ Sweet BBQ Bacon"}
                            </h2>
                            <p className="text-text-secondary typo-body-2 lg:typo-body-1 line-clamp-3">
                              {"Tender bites of breaded chicken made with 100% whole breast white meat topped with sweet and smoky honey BBQ sauce, a blend of cheese made with mozzarella and cheddar, and crispy bacon."}
                            </p>
                          </div>
                        </div>
                        <div className="group relative order-first">
                          <div className="relative flex aspect-square justify-end overflow-hidden rounded-xl border-solid border-2 border-transparent bg-cool-gray-200 group-hover:border-cool-gray-700 group-active:border-blue">
                            <picture>
                              <source data-testid="Loaded Chicken â€“ Sweet BBQ Bacon-source-xl" srcSet="/site-assets/cms/assets/92e5e84a-106c-4d2d-98cf-45ecde815b651073.png?modified_on=2024-07-29T12%3A34%3A20.953Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Loaded Chicken â€“ Sweet BBQ Bacon-source-lg" srcSet="/site-assets/cms/assets/92e5e84a-106c-4d2d-98cf-45ecde815b651073.png?modified_on=2024-07-29T12%3A34%3A20.953Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Loaded Chicken â€“ Sweet BBQ Bacon-source-md" srcSet="/site-assets/cms/assets/92e5e84a-106c-4d2d-98cf-45ecde815b651073.png?modified_on=2024-07-29T12%3A34%3A20.953Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C228%2C228%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img className="min-h-full min-w-full object-right" data-testid="Loaded Chicken â€“ Sweet BBQ Bacon-img-sm" alt="" loading="lazy" src="/site-assets/cms/assets/92e5e84a-106c-4d2d-98cf-45ecde815b651073.png?modified_on=2024-07-29T12%3A34%3A20.953Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="absolute inset-none m-small flex flex-col items-end justify-end lg:flex-row">
                            <Link className="sr-only" href="/menu/wings/S_SCSBBQ/loaded_chicken_sweet_bbq_bacon">
                              {"Customize "}
                              {"Loaded Chicken â€“ Sweet BBQ Bacon"}
                            </Link>
                            <div className="pd-rounded-full pd-transition-all pd-duration-400 motion-reduce:pd-transition-none">
                              <span className="">
                                <button aria-label="Add Loaded Chicken â€“ Sweet BBQ Bacon to Cart" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-red bg-red-default border border-neutral-white [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-wine [&:not([aria-disabled='true'])]:focus:shadow-button-primary disabled:bg-ui-background-border [&:not([aria-disabled='false'])]:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:shadow-[0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(227,24,55,0.70),0_0_0_4px_#E31837] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&:not([aria-disabled='true'])]:active:bg-red-900 disabled:bg-warm-gray-400 disabled:pointer-events-none h-x-large w-x-large p-x-small rounded-full aspect-square" type="button">
                                  <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-add-cart--background-primary.svg" />
                                </button>
                              </span>
                              <div className="pd-h-x-large pd-w-x-large pd-hidden"></div>
                            </div>
                            <div hidden style={{ display: "none" }}>
                              <div className="w-fit rounded-full border border-cool-gray-700 bg-cool-gray-200 p-tiny leading-none shadow-[0_2px_6px_0_rgba(120,84,49,0.10)]">
                                <div className="inline-flex items-center justify-center gap-small leading-none">
                                  <button aria-label="Remove one Loaded Chicken â€“ Sweet BBQ Bacon" aria-disabled="true" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square cursor-not-allowed bg-cool-gray-500 pointer-events-none border" type="button">
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
                                  <button aria-label="Add one Loaded Chicken â€“ Sweet BBQ Bacon" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square" type="button">
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
                              {"Hot Buffalo Wings"}
                            </h2>
                            <p className="text-text-secondary typo-body-2 lg:typo-body-1 line-clamp-3">
                              {"Marinated and oven-baked, then smothered in hot buffalo sauce. Customize with your choice of dipping cup."}
                            </p>
                          </div>
                        </div>
                        <div className="group relative order-first">
                          <div className="relative flex aspect-square justify-end overflow-hidden rounded-xl border-solid border-2 border-transparent bg-cool-gray-200 group-hover:border-cool-gray-700 group-active:border-blue">
                            <picture>
                              <source data-testid="Hot Buffalo Wings-source-xl" srcSet="/site-assets/cms/assets/bef7d005-195c-45eb-935d-ac9ec462dd34733e.png?modified_on=2024-07-26T20%3A08%3A13.478Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Hot Buffalo Wings-source-lg" srcSet="/site-assets/cms/assets/bef7d005-195c-45eb-935d-ac9ec462dd34733e.png?modified_on=2024-07-26T20%3A08%3A13.478Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Hot Buffalo Wings-source-md" srcSet="/site-assets/cms/assets/bef7d005-195c-45eb-935d-ac9ec462dd34733e.png?modified_on=2024-07-26T20%3A08%3A13.478Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C228%2C228%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img className="min-h-full min-w-full object-right" data-testid="Hot Buffalo Wings-img-sm" alt="" loading="lazy" src="/site-assets/cms/assets/bef7d005-195c-45eb-935d-ac9ec462dd34733e.png?modified_on=2024-07-26T20%3A08%3A13.478Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="absolute inset-none m-small flex flex-col items-end justify-end lg:flex-row">
                            <Link className="sr-only" href="/menu/wings/S_HOTWINGS/hot_buffalo_wings">
                              {"Customize "}
                              {"Hot Buffalo Wings"}
                            </Link>
                            <div className="pd-rounded-full pd-transition-all pd-duration-400 motion-reduce:pd-transition-none">
                              <span className="">
                                <button aria-label="Add Hot Buffalo Wings to Cart" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-red bg-red-default border border-neutral-white [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-wine [&:not([aria-disabled='true'])]:focus:shadow-button-primary disabled:bg-ui-background-border [&:not([aria-disabled='false'])]:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:shadow-[0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(227,24,55,0.70),0_0_0_4px_#E31837] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&:not([aria-disabled='true'])]:active:bg-red-900 disabled:bg-warm-gray-400 disabled:pointer-events-none h-x-large w-x-large p-x-small rounded-full aspect-square" type="button">
                                  <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-add-cart--background-primary.svg" />
                                </button>
                              </span>
                              <div className="pd-h-x-large pd-w-x-large pd-hidden"></div>
                            </div>
                            <div hidden style={{ display: "none" }}>
                              <div className="w-fit rounded-full border border-cool-gray-700 bg-cool-gray-200 p-tiny leading-none shadow-[0_2px_6px_0_rgba(120,84,49,0.10)]">
                                <div className="inline-flex items-center justify-center gap-small leading-none">
                                  <button aria-label="Remove one Hot Buffalo Wings" aria-disabled="true" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square cursor-not-allowed bg-cool-gray-500 pointer-events-none border" type="button">
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
                                  <button aria-label="Add one Hot Buffalo Wings" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square" type="button">
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
                              {"Honey BBQ Wings"}
                            </h2>
                            <p className="text-text-secondary typo-body-2 lg:typo-body-1 line-clamp-3">
                              {"Marinated and oven-baked, then smothered in honey BBQ sauce. Customize with your choice of dipping cup."}
                            </p>
                          </div>
                        </div>
                        <div className="group relative order-first">
                          <div className="relative flex aspect-square justify-end overflow-hidden rounded-xl border-solid border-2 border-transparent bg-cool-gray-200 group-hover:border-cool-gray-700 group-active:border-blue">
                            <picture>
                              <source data-testid="Honey BBQ Wings-source-xl" srcSet="/site-assets/cms/assets/bfcd93a4-02c1-4822-97aa-4906d5de828aad4c.png?modified_on=2024-07-29T12%3A34%3A29.356Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Honey BBQ Wings-source-lg" srcSet="/site-assets/cms/assets/bfcd93a4-02c1-4822-97aa-4906d5de828aad4c.png?modified_on=2024-07-29T12%3A34%3A29.356Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Honey BBQ Wings-source-md" srcSet="/site-assets/cms/assets/bfcd93a4-02c1-4822-97aa-4906d5de828aad4c.png?modified_on=2024-07-29T12%3A34%3A29.356Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C228%2C228%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img className="min-h-full min-w-full object-right" data-testid="Honey BBQ Wings-img-sm" alt="" loading="lazy" src="/site-assets/cms/assets/bfcd93a4-02c1-4822-97aa-4906d5de828aad4c.png?modified_on=2024-07-29T12%3A34%3A29.356Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="absolute inset-none m-small flex flex-col items-end justify-end lg:flex-row">
                            <Link className="sr-only" href="/menu/wings/S_BBQW/honey_bbq_wings">
                              {"Customize "}
                              {"Honey BBQ Wings"}
                            </Link>
                            <div className="pd-rounded-full pd-transition-all pd-duration-400 motion-reduce:pd-transition-none">
                              <span className="">
                                <button aria-label="Add Honey BBQ Wings to Cart" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-red bg-red-default border border-neutral-white [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-wine [&:not([aria-disabled='true'])]:focus:shadow-button-primary disabled:bg-ui-background-border [&:not([aria-disabled='false'])]:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:shadow-[0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(227,24,55,0.70),0_0_0_4px_#E31837] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&:not([aria-disabled='true'])]:active:bg-red-900 disabled:bg-warm-gray-400 disabled:pointer-events-none h-x-large w-x-large p-x-small rounded-full aspect-square" type="button">
                                  <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-add-cart--background-primary.svg" />
                                </button>
                              </span>
                              <div className="pd-h-x-large pd-w-x-large pd-hidden"></div>
                            </div>
                            <div hidden style={{ display: "none" }}>
                              <div className="w-fit rounded-full border border-cool-gray-700 bg-cool-gray-200 p-tiny leading-none shadow-[0_2px_6px_0_rgba(120,84,49,0.10)]">
                                <div className="inline-flex items-center justify-center gap-small leading-none">
                                  <button aria-label="Remove one Honey BBQ Wings" aria-disabled="true" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square cursor-not-allowed bg-cool-gray-500 pointer-events-none border" type="button">
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
                                  <button aria-label="Add one Honey BBQ Wings" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square" type="button">
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
                              {"Plain Wings"}
                            </h2>
                            <p className="text-text-secondary typo-body-2 lg:typo-body-1 line-clamp-3">
                              {"Marinated and oven-baked. Customize with your choice of dipping cup."}
                            </p>
                          </div>
                        </div>
                        <div className="group relative order-first">
                          <div className="relative flex aspect-square justify-end overflow-hidden rounded-xl border-solid border-2 border-transparent bg-cool-gray-200 group-hover:border-cool-gray-700 group-active:border-blue">
                            <picture>
                              <source data-testid="Plain Wings-source-xl" srcSet="/site-assets/cms/assets/3f0c7768-c606-49b8-889a-190c2018153602db.png?modified_on=2024-07-29T12%3A34%3A35.061Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Plain Wings-source-lg" srcSet="/site-assets/cms/assets/3f0c7768-c606-49b8-889a-190c2018153602db.png?modified_on=2024-07-29T12%3A34%3A35.061Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Plain Wings-source-md" srcSet="/site-assets/cms/assets/3f0c7768-c606-49b8-889a-190c2018153602db.png?modified_on=2024-07-29T12%3A34%3A35.061Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C228%2C228%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img className="min-h-full min-w-full object-right" data-testid="Plain Wings-img-sm" alt="" loading="lazy" src="/site-assets/cms/assets/3f0c7768-c606-49b8-889a-190c2018153602db.png?modified_on=2024-07-29T12%3A34%3A35.061Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="absolute inset-none m-small flex flex-col items-end justify-end lg:flex-row">
                            <Link className="sr-only" href="/menu/wings/S_PLNWINGS/plain_wings">
                              {"Customize "}
                              {"Plain Wings"}
                            </Link>
                            <div className="pd-rounded-full pd-transition-all pd-duration-400 motion-reduce:pd-transition-none">
                              <span className="">
                                <button aria-label="Add Plain Wings to Cart" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-red bg-red-default border border-neutral-white [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-wine [&:not([aria-disabled='true'])]:focus:shadow-button-primary disabled:bg-ui-background-border [&:not([aria-disabled='false'])]:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:shadow-[0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(227,24,55,0.70),0_0_0_4px_#E31837] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&:not([aria-disabled='true'])]:active:bg-red-900 disabled:bg-warm-gray-400 disabled:pointer-events-none h-x-large w-x-large p-x-small rounded-full aspect-square" type="button">
                                  <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-add-cart--background-primary.svg" />
                                </button>
                              </span>
                              <div className="pd-h-x-large pd-w-x-large pd-hidden"></div>
                            </div>
                            <div hidden style={{ display: "none" }}>
                              <div className="w-fit rounded-full border border-cool-gray-700 bg-cool-gray-200 p-tiny leading-none shadow-[0_2px_6px_0_rgba(120,84,49,0.10)]">
                                <div className="inline-flex items-center justify-center gap-small leading-none">
                                  <button aria-label="Remove one Plain Wings" aria-disabled="true" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square cursor-not-allowed bg-cool-gray-500 pointer-events-none border" type="button">
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
                                  <button aria-label="Add one Plain Wings" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square" type="button">
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
                              {"Sweet Mango Habanero Wings"}
                            </h2>
                            <p className="text-text-secondary typo-body-2 lg:typo-body-1 line-clamp-3">
                              {"Marinated and oven-baked, then smothered in sweet mango habanero sauce. Customize with your choice of dipping cup."}
                            </p>
                          </div>
                        </div>
                        <div className="group relative order-first">
                          <div className="relative flex aspect-square justify-end overflow-hidden rounded-xl border-solid border-2 border-transparent bg-cool-gray-200 group-hover:border-cool-gray-700 group-active:border-blue">
                            <picture>
                              <source data-testid="Sweet Mango Habanero Wings-source-xl" srcSet="/site-assets/cms/assets/a6a2b4f7-5621-46c9-989c-10378c33548d8365.png?modified_on=2024-07-29T12%3A34%3A27.661Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Sweet Mango Habanero Wings-source-lg" srcSet="/site-assets/cms/assets/a6a2b4f7-5621-46c9-989c-10378c33548d8365.png?modified_on=2024-07-29T12%3A34%3A27.661Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Sweet Mango Habanero Wings-source-md" srcSet="/site-assets/cms/assets/a6a2b4f7-5621-46c9-989c-10378c33548d8365.png?modified_on=2024-07-29T12%3A34%3A27.661Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C228%2C228%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img className="min-h-full min-w-full object-right" data-testid="Sweet Mango Habanero Wings-img-sm" alt="" loading="lazy" src="/site-assets/cms/assets/a6a2b4f7-5621-46c9-989c-10378c33548d8365.png?modified_on=2024-07-29T12%3A34%3A27.661Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="absolute inset-none m-small flex flex-col items-end justify-end lg:flex-row">
                            <Link className="sr-only" href="/menu/wings/S_SMANG/sweet_mango_habanero_wings">
                              {"Customize "}
                              {"Sweet Mango Habanero Wings"}
                            </Link>
                            <div className="pd-rounded-full pd-transition-all pd-duration-400 motion-reduce:pd-transition-none">
                              <span className="">
                                <button aria-label="Add Sweet Mango Habanero Wings to Cart" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-red bg-red-default border border-neutral-white [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-wine [&:not([aria-disabled='true'])]:focus:shadow-button-primary disabled:bg-ui-background-border [&:not([aria-disabled='false'])]:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:shadow-[0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(227,24,55,0.70),0_0_0_4px_#E31837] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&:not([aria-disabled='true'])]:active:bg-red-900 disabled:bg-warm-gray-400 disabled:pointer-events-none h-x-large w-x-large p-x-small rounded-full aspect-square" type="button">
                                  <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-add-cart--background-primary.svg" />
                                </button>
                              </span>
                              <div className="pd-h-x-large pd-w-x-large pd-hidden"></div>
                            </div>
                            <div hidden style={{ display: "none" }}>
                              <div className="w-fit rounded-full border border-cool-gray-700 bg-cool-gray-200 p-tiny leading-none shadow-[0_2px_6px_0_rgba(120,84,49,0.10)]">
                                <div className="inline-flex items-center justify-center gap-small leading-none">
                                  <button aria-label="Remove one Sweet Mango Habanero Wings" aria-disabled="true" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square cursor-not-allowed bg-cool-gray-500 pointer-events-none border" type="button">
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
                                  <button aria-label="Add one Sweet Mango Habanero Wings" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square" type="button">
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
                              {"Garlic Parmesan Wings"}
                            </h2>
                            <p className="text-text-secondary typo-body-2 lg:typo-body-1 line-clamp-3">
                              {"Marinated and oven-baked, then smothered in garlic Parmesan sauce. Customize with your choice of dipping cup."}
                            </p>
                          </div>
                        </div>
                        <div className="group relative order-first">
                          <div className="relative flex aspect-square justify-end overflow-hidden rounded-xl border-solid border-2 border-transparent bg-cool-gray-200 group-hover:border-cool-gray-700 group-active:border-blue">
                            <picture>
                              <source data-testid="Garlic Parmesan Wings-source-xl" srcSet="/site-assets/cms/assets/98c65bfe-c54b-4ae8-8fc2-0a073c3cab981070.png?modified_on=2024-07-29T12%3A34%3A32.948Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Garlic Parmesan Wings-source-lg" srcSet="/site-assets/cms/assets/98c65bfe-c54b-4ae8-8fc2-0a073c3cab981070.png?modified_on=2024-07-29T12%3A34%3A32.948Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Garlic Parmesan Wings-source-md" srcSet="/site-assets/cms/assets/98c65bfe-c54b-4ae8-8fc2-0a073c3cab981070.png?modified_on=2024-07-29T12%3A34%3A32.948Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C228%2C228%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img className="min-h-full min-w-full object-right" data-testid="Garlic Parmesan Wings-img-sm" alt="" loading="lazy" src="/site-assets/cms/assets/98c65bfe-c54b-4ae8-8fc2-0a073c3cab981070.png?modified_on=2024-07-29T12%3A34%3A32.948Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="absolute inset-none m-small flex flex-col items-end justify-end lg:flex-row">
                            <Link className="sr-only" href="/menu/wings/S_GPRMWING/garlic_parmesan_wings">
                              {"Customize "}
                              {"Garlic Parmesan Wings"}
                            </Link>
                            <div className="pd-rounded-full pd-transition-all pd-duration-400 motion-reduce:pd-transition-none">
                              <span className="">
                                <button aria-label="Add Garlic Parmesan Wings to Cart" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-red bg-red-default border border-neutral-white [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-wine [&:not([aria-disabled='true'])]:focus:shadow-button-primary disabled:bg-ui-background-border [&:not([aria-disabled='false'])]:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:shadow-[0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(227,24,55,0.70),0_0_0_4px_#E31837] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&:not([aria-disabled='true'])]:active:bg-red-900 disabled:bg-warm-gray-400 disabled:pointer-events-none h-x-large w-x-large p-x-small rounded-full aspect-square" type="button">
                                  <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-add-cart--background-primary.svg" />
                                </button>
                              </span>
                              <div className="pd-h-x-large pd-w-x-large pd-hidden"></div>
                            </div>
                            <div hidden style={{ display: "none" }}>
                              <div className="w-fit rounded-full border border-cool-gray-700 bg-cool-gray-200 p-tiny leading-none shadow-[0_2px_6px_0_rgba(120,84,49,0.10)]">
                                <div className="inline-flex items-center justify-center gap-small leading-none">
                                  <button aria-label="Remove one Garlic Parmesan Wings" aria-disabled="true" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square cursor-not-allowed bg-cool-gray-500 pointer-events-none border" type="button">
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
                                  <button aria-label="Add one Garlic Parmesan Wings" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square" type="button">
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
                              {"Boneless Chicken"}
                            </h2>
                            <p className="text-text-secondary typo-body-2 lg:typo-body-1 line-clamp-3">
                              {"Breaded chicken made with 100% whole white breast meat. Customize with your choice of dipping cup."}
                            </p>
                          </div>
                        </div>
                        <div className="group relative order-first">
                          <div className="relative flex aspect-square justify-end overflow-hidden rounded-xl border-solid border-2 border-transparent bg-cool-gray-200 group-hover:border-cool-gray-700 group-active:border-blue">
                            <picture>
                              <source data-testid="Boneless Chicken-source-xl" srcSet="/site-assets/cms/assets/074b9690-f3fb-4085-9356-0f116ceb205c1a3b.png?modified_on=2024-07-29T12%3A34%3A32.828Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1700px)" />
                              <source data-testid="Boneless Chicken-source-lg" srcSet="/site-assets/cms/assets/074b9690-f3fb-4085-9356-0f116ceb205c1a3b.png?modified_on=2024-07-29T12%3A34%3A32.828Z&im=Resize%3D%28703%2C703%29%3BCrop%2Crect%3D%28294%2C176%2C431%2C431%29%2CallowExpansion" media="(min-width: 1000px)" />
                              <source data-testid="Boneless Chicken-source-md" srcSet="/site-assets/cms/assets/074b9690-f3fb-4085-9356-0f116ceb205c1a3b.png?modified_on=2024-07-29T12%3A34%3A32.828Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C228%2C228%29%2CallowExpansion" media="(min-width: 500px)" />
                              <img className="min-h-full min-w-full object-right" data-testid="Boneless Chicken-img-sm" alt="" loading="lazy" src="/site-assets/cms/assets/074b9690-f3fb-4085-9356-0f116ceb205c1a3b.png?modified_on=2024-07-29T12%3A34%3A32.828Z&im=Resize%3D%28426%2C426%29%3BCrop%2Crect%3D%28200%2C130%2C234%2C234%29%2CallowExpansion" />
                            </picture>
                          </div>
                          <div className="absolute inset-none m-small flex flex-col items-end justify-end lg:flex-row">
                            <Link className="sr-only" href="/menu/wings/S_BONELESS/boneless_chicken">
                              {"Customize "}
                              {"Boneless Chicken"}
                            </Link>
                            <div className="pd-rounded-full pd-transition-all pd-duration-400 motion-reduce:pd-transition-none">
                              <span className="">
                                <button aria-label="Add Boneless Chicken to Cart" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-red bg-red-default border border-neutral-white [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-wine [&:not([aria-disabled='true'])]:focus:shadow-button-primary disabled:bg-ui-background-border [&:not([aria-disabled='false'])]:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:shadow-[0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(227,24,55,0.70),0_0_0_4px_#E31837] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&:not([aria-disabled='true'])]:active:bg-red-900 disabled:bg-warm-gray-400 disabled:pointer-events-none h-x-large w-x-large p-x-small rounded-full aspect-square" type="button">
                                  <img alt="" className="block w-regular h-regular" src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-add-cart--background-primary.svg" />
                                </button>
                              </span>
                              <div className="pd-h-x-large pd-w-x-large pd-hidden"></div>
                            </div>
                            <div hidden style={{ display: "none" }}>
                              <div className="w-fit rounded-full border border-cool-gray-700 bg-cool-gray-200 p-tiny leading-none shadow-[0_2px_6px_0_rgba(120,84,49,0.10)]">
                                <div className="inline-flex items-center justify-center gap-small leading-none">
                                  <button aria-label="Remove one Boneless Chicken" aria-disabled="true" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square cursor-not-allowed bg-cool-gray-500 pointer-events-none border" type="button">
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
                                  <button aria-label="Add one Boneless Chicken" aria-disabled="false" className="inline-flex w-fit items-center justify-center disabled:cursor-not-allowed bg-blue [&:not([aria-disabled='true'])]:hover:bg-blue-900 disabled:bg-ui-background-border border-none [&:not([aria-disabled='true'])]:focus:shadow-[0_0_5px_4px_rgba(0,144,226,0.70),0_0_0_4px_rgba(0,144,226,0.50)] disabled:bg-warm-gray-400 disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:bg-blue-1000 [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] w-large p-tiny rounded-full aspect-square" type="button">
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
