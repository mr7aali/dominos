/* eslint-disable */
// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";
import { BrowseMenuSection } from "../components/menu";
import { CarouselControls } from "../components/CarouselControls";

export const metadata: Metadata = {
  title: "Pizza Delivery & Carryout, Pasta, Wings & More | Crumblez",
  description:
    "Order pizza, pasta, sandwiches & more online for carryout or delivery from Crumblez. View menu, find locations, track orders. Sign up for Crumblez email & text offers to get great deals on your next order.",
  alternates: {
    canonical: "/en",
  },
  robots: "index",
};

export function HomePage() {
  return (
    <>
      <div className="home-page">
        <svg
          width="0"
          height="0"
          style={{ position: "absolute", visibility: "hidden" }}
          aria-hidden="true"
        >
          <defs>
            <symbol id="icon-expand" viewBox="0 0 16 16">
              <path
                d="M8 10.664a.665.665 0 0 1-.472-.195L3.534 6.474a.666.666 0 0 1 .94-.941L8 9.056l3.523-3.523a.666.666 0 0 1 .942.941l-3.995 3.995c-.13.13-.3.195-.471.195h.001z"
                fill="currentColor"
              ></path>
            </symbol>
          </defs>
        </svg>
        <section className="sh-bg-primary sh-flex sh-h-full sh-flex-col sh-typo-body-1">
          <main className="sh-min-h-[400px]" id="main-content">
            <section className="sh-m-auto">
              <header className="flex justify-center -pizza-box-shaped-header-notch bg-background-primary">
                <div className="m-auto w-full max-w-screen-xl">
                  <div className="sh-hidden sh-p-large sh-pizza-box-shaped-header-notch md:sh-block">
                    <div className="sv-m-auto sv-hidden sv-w-full sv-max-w-screen-xl sv-flex-col sv-items-stretch sv-gap-medium sv-rounded-lg sv-bg-cool-gray-200 sv-px-large sv-py-medium sv-typo-headline-1 md:sv-flex lg:sv-flex-row lg:sv-gap-xx-large">
                      <div className="sv-flex sv-items-center sv-justify-center sv-px-x-large">
                        <span className="sv-hidden sv-h-[2px] sv-grow sv-bg-blue"></span>
                        <h1 className="sv-text-blue sv-typo-headline-1">
                          {"Start your order"}
                        </h1>
                        <span className="sv-hidden sv-h-[2px] sv-grow sv-bg-blue"></span>
                      </div>
                      <p className="sv-flex sv-grow sv-items-center sv-gap-medium">
                        <Link
                          className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-large py-regular typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110 inline-block"
                          href="/index32f4?type=order_delivery"
                        >
                          {"Delivery"}
                        </Link>
                        <span className="sv-text-blue sv-typo-headline-2">
                          {"Or"}
                        </span>
                        <Link
                          className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-large py-regular typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110 inline-block"
                          href="/index0e22?type=order_carryout"
                        >
                          {"Carryout"}
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="sh-grid">
                      <div className="sh-col-start-1 sh-row-start-1">
                        <div className="sh-relative">
                          <div className="sh-absolute sh-left-none sh-right-none sh-z-10 md:sh-hidden sh-top-[3.25rem] sh-mx-x-large md:sh-relative md:sh-top-none md:sh-m-medium md:sh-mx-x-large md:sh-flex">
                            <div className="sh-flex sh-w-full sh-items-center sh-justify-between sh-rounded-lg sh-bg-cool-gray-200 sh-px-regular sh-py-small">
                              <p className="sh-text-balance sh-text-center sh-text-blue sh-typo-headline-2">
                                <span className="md:-sh-hidden">
                                  {"Choose Carryout or Delivery"}
                                </span>
                                <span className="sh-hidden md:sh-inline">
                                  {
                                    "Get Crumblez delivered to your door or pick up at a store."
                                  }
                                </span>
                              </p>
                              <div className="sh-w-[8rem] sh-min-w-[8rem] sh-whitespace-nowrap">
                                <button
                                  type="button"
                                  className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                >
                                  {"Order Online"}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sh-col-start-1 sh-row-start-1">
                        <div
                          className="cp-grid cp-h-full md:cp-min-h-[36rem] lg:cp-hidden cp-min-h-[95vh]"
                          data-testid="tiles-narrow"
                        >
                          <div
                            aria-label="Deals"
                            aria-roledescription="carousel"
                            className="relative grid h-full w-full grid-cols-1 grid-rows-1"
                            role="group"
                            data-testid="carousel"
                          >
                            <div
                              aria-atomic="false"
                              aria-live="polite"
                              className="relative grid grid-cols-1 grid-rows-1 overflow-hidden"
                            >
                              <div
                                aria-label="Deal, 1 of 6"
                                aria-roledescription="slide"
                                className="absolute h-full w-full"
                                role="group"
                              >
                                <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container cp-h-full cp-rounded-none cp-px-none cp-pt-none xl:cp-rounded-lg xl:cp-p-small">
                                  <div
                                    className="clickable-card cp-h-full cp-rounded-none xl:cp-rounded-lg active:outline active:outline-blue"
                                    data-testid="clickable-card"
                                  >
                                    <div className="grid h-full">
                                      <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                                        <source
                                          media="(min-width: 1000px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(210,873,2796,837);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(210,873,2796,837);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(min-width: 500px)"
                                          sizes="(max-width: 1000px) 100vw, 1000px"
                                          srcSet="/site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(672,870,2540,1588);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(672,870,2540,1588);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(max-width: 500px)"
                                          sizes="100vw"
                                          srcSet="/site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(1436,356,1382,2354);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(1436,356,1382,2354);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(1436,356,1382,2354);Resize=(1000),allowExpansion 1000w"
                                        />
                                        <img
                                          src="/site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(210,873,2796,837);Resize=(1700),allowExpansion"
                                          alt=""
                                          loading="eager"
                                          className="h-auto w-full rounded-lg object-cover cp-h-full cp-rounded-none xl:cp-rounded-lg"
                                        />
                                      </picture>
                                      <div className="col-start-1 row-start-1 flex items-end">
                                        <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                                          <div className="cp-mx-auto cp-mb-[9.5rem] cp-mt-auto lg:cp-m-none lg:cp-mt-auto">
                                            <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                              <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                                <h2
                                                  className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny"
                                                  id=":Ril6b5dmf6H1:"
                                                >
                                                  <span className="absolute -top-small right-large">
                                                    <span className="inline-flex max-w-full items-center justify-center rounded-full border border-[rgba(254,250,246,0.70)] bg-red-700 px-x-small py-tiny text-text-invert shadow-red-glow">
                                                      <span className="inline-flex overflow-hidden overflow-ellipsis whitespace-nowrap !leading-[0.86] px-small typo-label-4">
                                                        {
                                                          "Now with Stuffed Crust"
                                                        }
                                                      </span>
                                                    </span>
                                                  </span>{" "}
                                                  <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                                    <span>
                                                      {"Best deal ever"}
                                                    </span>
                                                  </span>{" "}
                                                  <span className="block text-pretty text-accessible-blue typo-offer-headline-small @5xl:typo-offer-headline-large">
                                                    <span>
                                                      {
                                                        "Any pizza. Any toppings. "
                                                      }
                                                      <span className="text-accessible-red">
                                                        {"$9.99 each."}
                                                      </span>
                                                    </span>
                                                  </span>
                                                </h2>
                                                <span className="text-text-primary typo-body-2 @5xl:typo-body-1">
                                                  <p>
                                                    <span>
                                                      {
                                                        "Choose your crust. Choose your size. Choose up to 7 toppings."
                                                      }
                                                    </span>
                                                  </p>
                                                </span>
                                                <div className="cp-mt-tiny">
                                                  <button
                                                    type="button"
                                                    aria-labelledby=":Ril6b5dmf6: :Ril6b5dmf6H1:"
                                                    data-testid="tile-button-BestDealEver"
                                                    id=":Ril6b5dmf6:"
                                                    className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                                  >
                                                    {"Add deal"}
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="sm:flex-col mt-small flex items-center gap-x-small cp-absolute cp-bottom-none cp-left-none cp-right-none cp-m-none cp-bg-cool-gray-200 cp-p-small lg:cp-static lg:cp-mx-small lg:cp-p-none lg:cp-pb-none lg:cp-pt-small xl:cp-mx-none">
                                    <div className="mx-auto">
                                      <div className="text-center text-text-secondary typo-label-5">
                                        <p>
                                          <span>
                                            <strong className="font-bold">
                                              {
                                                "PRICES HIGHER FOR SOME LOCATIONS"
                                              }
                                            </strong>
                                            {
                                              " Select this offer from 6/15-7/26. Online Only. Max. 7 toppings (6 for Pan and NY Style Crust)."
                                            }
                                          </span>
                                          {"Â "}
                                          <button
                                            className="cp-underline"
                                            type="button"
                                          >
                                            {"Offer details."}
                                          </button>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                aria-label="Deal, 2 of 6"
                                aria-roledescription="slide"
                                className="absolute h-full w-full"
                                role="group"
                                hidden
                                style={{ display: "none" }}
                              >
                                <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container cp-h-full cp-rounded-none cp-px-none cp-pt-none xl:cp-rounded-lg xl:cp-p-small">
                                  <div
                                    className="clickable-card cp-h-full cp-rounded-none xl:cp-rounded-lg active:outline active:outline-blue"
                                    data-testid="clickable-card"
                                  >
                                    <div className="grid h-full">
                                      <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                                        <source
                                          media="(min-width: 1000px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(50,780,3450,1029);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(50,780,3450,1029);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(min-width: 500px)"
                                          sizes="(max-width: 1000px) 100vw, 1000px"
                                          srcSet="/site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(639,566,2583,1917);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(639,566,2583,1917);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(max-width: 500px)"
                                          sizes="100vw"
                                          srcSet="/site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(1470,530,1300,2207);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(1470,530,1300,2207);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(1470,530,1300,2207);Resize=(1000),allowExpansion 1000w"
                                        />
                                        <img
                                          src="/site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b6d8ac.jpg?im=Crop,rect=(50,780,3450,1029);Resize=(1700),allowExpansion"
                                          alt="Mix and Match"
                                          loading="lazy"
                                          className="h-auto w-full rounded-lg object-cover cp-h-full cp-rounded-none xl:cp-rounded-lg"
                                        />
                                      </picture>
                                      <div className="col-start-1 row-start-1 flex items-end">
                                        <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                                          <div className="cp-mx-auto cp-mb-[9.5rem] cp-mt-auto lg:cp-m-none lg:cp-mt-auto">
                                            <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                              <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                                <h2
                                                  className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny"
                                                  id=":Rkl6b5dmf6H1:"
                                                >
                                                  <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                                    <span>
                                                      {"Mix and match"}
                                                    </span>
                                                  </span>{" "}
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
                                                  <button
                                                    type="button"
                                                    aria-labelledby=":Rkl6b5dmf6: :Rkl6b5dmf6H1:"
                                                    data-testid="tile-button-MixAndMatch"
                                                    id=":Rkl6b5dmf6:"
                                                    className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                                  >
                                                    {"Add deal"}
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="sm:flex-col mt-small flex items-center gap-x-small cp-absolute cp-bottom-none cp-left-none cp-right-none cp-m-none cp-bg-cool-gray-200 cp-p-small lg:cp-static lg:cp-mx-small lg:cp-p-none lg:cp-pb-none lg:cp-pt-small xl:cp-mx-none">
                                    <div className="mx-auto">
                                      <div className="text-center text-text-secondary typo-label-5">
                                        <p>
                                          <span>
                                            <strong className="font-bold">
                                              {
                                                "PRICES HIGHER FOR SOME LOCATIONS."
                                              }
                                            </strong>
                                            {
                                              " You must ask for this limited time offer. Prices, participation, delivery area, and charges may vary by store. 2-item minimum. Bone-in Wings, Handmade Pan and Parmesan Stuffed Crust pizzas will cost extra."
                                            }
                                          </span>
                                          {"Â "}
                                          <button
                                            className="cp-underline"
                                            type="button"
                                          >
                                            {"Offer details"}
                                          </button>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                aria-label="Deal, 3 of 6"
                                aria-roledescription="slide"
                                className="absolute h-full w-full"
                                role="group"
                                hidden
                                style={{ display: "none" }}
                              >
                                <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container cp-h-full cp-rounded-none cp-px-none cp-pt-none xl:cp-rounded-lg xl:cp-p-small">
                                  <div
                                    className="clickable-card cp-h-full cp-rounded-none xl:cp-rounded-lg active:outline active:outline-blue"
                                    data-testid="clickable-card"
                                  >
                                    <div className="grid h-full">
                                      <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                                        <source
                                          media="(min-width: 1000px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(0,600,3636,1086);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(0,600,3636,1086);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(min-width: 500px)"
                                          sizes="(max-width: 1000px) 100vw, 1000px"
                                          srcSet="/site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,2860,1234);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,2860,1234);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(max-width: 500px)"
                                          sizes="100vw"
                                          srcSet="/site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(1900,150,1200,2037);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(1900,150,1200,2037);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(1900,150,1200,2037);Resize=(1000),allowExpansion 1000w"
                                        />
                                        <img
                                          src="/site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e39745.png?im=Crop,rect=(0,600,3636,1086);Resize=(1700),allowExpansion"
                                          alt="Weeklong Carryout"
                                          loading="lazy"
                                          className="h-auto w-full rounded-lg object-cover cp-h-full cp-rounded-none xl:cp-rounded-lg"
                                        />
                                      </picture>
                                      <div className="col-start-1 row-start-1 flex items-end">
                                        <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                                          <div className="cp-mx-auto cp-mb-[9.5rem] cp-mt-auto lg:cp-m-none lg:cp-mt-auto">
                                            <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                              <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                                <h2
                                                  className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny"
                                                  id=":Rml6b5dmf6H1:"
                                                >
                                                  <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                                    <span>
                                                      {"Weeklong carryout"}
                                                    </span>
                                                  </span>{" "}
                                                  <span className="block text-pretty text-accessible-blue typo-offer-headline-small @5xl:typo-offer-headline-large">
                                                    <span>
                                                      {"Carry out for just "}
                                                      <span className="text-accessible-red">
                                                        {"$7.99 each."}
                                                      </span>
                                                    </span>
                                                  </span>
                                                </h2>
                                                <span className="text-text-primary typo-body-2 @5xl:typo-body-1">
                                                  <p>
                                                    <span>
                                                      {
                                                        "Spend less dough when you carry out a Large 1-topping pizza on any of our 6 delicious crusts, 8-piece wings or boneless chicken."
                                                      }
                                                    </span>
                                                  </p>
                                                </span>
                                                <div className="cp-mt-tiny">
                                                  <button
                                                    type="button"
                                                    aria-labelledby=":Rml6b5dmf6: :Rml6b5dmf6H1:"
                                                    data-testid="tile-button-WeekLongCarryout"
                                                    id=":Rml6b5dmf6:"
                                                    className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                                  >
                                                    {"Add deal"}
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="sm:flex-col mt-small flex items-center gap-x-small cp-absolute cp-bottom-none cp-left-none cp-right-none cp-m-none cp-bg-cool-gray-200 cp-p-small lg:cp-static lg:cp-mx-small lg:cp-p-none lg:cp-pb-none lg:cp-pt-small xl:cp-mx-none">
                                    <div className="mx-auto">
                                      <div className="text-center text-text-secondary typo-label-5">
                                        <p>
                                          <span>
                                            <strong className="font-bold">
                                              {
                                                "PRICES HIGHER FOR SOME LOCATIONS."
                                              }
                                            </strong>
                                            {
                                              " You must ask for this offer. Prices, participation, and charges may vary. Carryout only. Excludes XL and Specialty Pizzas."
                                            }
                                          </span>
                                          {"Â "}
                                          <button
                                            className="cp-underline"
                                            type="button"
                                          >
                                            {"Offer details"}
                                          </button>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                aria-label="Deal, 4 of 6"
                                aria-roledescription="slide"
                                className="absolute h-full w-full"
                                role="group"
                                hidden
                                style={{ display: "none" }}
                              >
                                <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container cp-h-full cp-rounded-none cp-px-none cp-pt-none xl:cp-rounded-lg xl:cp-p-small">
                                  <div
                                    className="clickable-card cp-h-full cp-rounded-none xl:cp-rounded-lg active:outline active:outline-blue"
                                    data-testid="clickable-card"
                                  >
                                    <div className="grid h-full">
                                      <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                                        <source
                                          media="(min-width: 1000px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(null,null,null,null);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(null,null,null,null);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(min-width: 500px)"
                                          sizes="(max-width: 1000px) 100vw, 1000px"
                                          srcSet="/site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1030,68,2668,1617);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1030,68,2668,1617);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(max-width: 500px)"
                                          sizes="100vw"
                                          srcSet="/site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1368,170,1289,2119);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1368,170,1289,2119);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1368,170,1289,2119);Resize=(1000),allowExpansion 1000w"
                                        />
                                        <img
                                          src="/site-assets/cms/assets/premiumseriesnationaldeal4179.jpg?im=Crop,rect=(null,null,null,null);Resize=(1700),allowExpansion"
                                          alt=""
                                          loading="lazy"
                                          className="h-auto w-full rounded-lg object-cover cp-h-full cp-rounded-none xl:cp-rounded-lg"
                                        />
                                      </picture>
                                      <div className="col-start-1 row-start-1 flex items-end">
                                        <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                                          <div className="cp-mx-auto cp-mb-[9.5rem] cp-mt-auto lg:cp-m-none lg:cp-mt-auto">
                                            <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                              <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                                <h2
                                                  className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny"
                                                  id=":Rol6b5dmf6H1:"
                                                >
                                                  <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                                    <span>
                                                      {"Parmesan Stuffed Crust"}
                                                    </span>
                                                  </span>{" "}
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
                                                      {
                                                        "Mix and Match any two or more 2-topping Parmesan Stuffed Crust Pizzas for just $10.99 each!"
                                                      }
                                                    </span>
                                                  </p>
                                                </span>
                                                <div className="cp-mt-tiny">
                                                  <button
                                                    type="button"
                                                    aria-labelledby=":Rol6b5dmf6: :Rol6b5dmf6H1:"
                                                    data-testid="tile-button-PremiumSeries"
                                                    id=":Rol6b5dmf6:"
                                                    className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                                  >
                                                    {"Add deal"}
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="sm:flex-col mt-small flex items-center gap-x-small cp-absolute cp-bottom-none cp-left-none cp-right-none cp-m-none cp-bg-cool-gray-200 cp-p-small lg:cp-static lg:cp-mx-small lg:cp-p-none lg:cp-pb-none lg:cp-pt-small xl:cp-mx-none">
                                    <div className="mx-auto">
                                      <div className="text-center text-text-secondary typo-label-5">
                                        <p>
                                          <span>
                                            <strong className="font-bold">
                                              {
                                                "PRICES HIGHER FOR SOME LOCATIONS."
                                              }
                                            </strong>
                                            {
                                              "You must ask for this limited time offer. Prices, participation, delivery area, and charges may vary by store. 2-item minimum. Bone-in Wings and Handmade Pan will cost extra."
                                            }
                                          </span>
                                          {"Â "}
                                          <button
                                            className="cp-underline"
                                            type="button"
                                          >
                                            {"Offer details"}
                                          </button>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                aria-label="Deal, 5 of 6"
                                aria-roledescription="slide"
                                className="absolute h-full w-full"
                                role="group"
                                hidden
                                style={{ display: "none" }}
                              >
                                <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container cp-h-full cp-rounded-none cp-px-none cp-pt-none xl:cp-rounded-lg xl:cp-p-small">
                                  <div
                                    className="clickable-card cp-h-full cp-rounded-none xl:cp-rounded-lg active:outline active:outline-blue"
                                    data-testid="clickable-card"
                                  >
                                    <div className="grid h-full">
                                      <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                                        <source
                                          media="(min-width: 1000px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(30,511,3993,1191);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(30,511,3993,1191);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(min-width: 500px)"
                                          sizes="(max-width: 1000px) 100vw, 1000px"
                                          srcSet="/site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(801,514,2484,1072);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(801,514,2484,1072);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(max-width: 500px)"
                                          sizes="100vw"
                                          srcSet="/site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(1187,0,1604,2722);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(1187,0,1604,2722);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(1187,0,1604,2722);Resize=(1000),allowExpansion 1000w"
                                        />
                                        <img
                                          src="/site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc4916c.jpg?im=Crop,rect=(30,511,3993,1191);Resize=(1700),allowExpansion"
                                          alt="The perfect combo"
                                          loading="lazy"
                                          className="h-auto w-full rounded-lg object-cover cp-h-full cp-rounded-none xl:cp-rounded-lg"
                                        />
                                      </picture>
                                      <div className="col-start-1 row-start-1 flex items-end">
                                        <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                                          <div className="cp-mx-auto cp-mb-[9.5rem] cp-mt-auto lg:cp-m-none lg:cp-mt-auto">
                                            <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                              <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                                <h2
                                                  className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny"
                                                  id=":Rql6b5dmf6H1:"
                                                >
                                                  <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                                    <span>
                                                      {"The perfect combo"}
                                                    </span>
                                                  </span>{" "}
                                                  <span className="block text-pretty text-accessible-blue typo-offer-headline-small @5xl:typo-offer-headline-large">
                                                    <span>
                                                      {"Get all of this for "}
                                                      <span className="text-accessible-red">
                                                        {"just $19.99."}
                                                      </span>
                                                    </span>
                                                  </span>
                                                </h2>
                                                <span className="text-text-primary typo-body-2 @5xl:typo-body-1">
                                                  <p>
                                                    <span>
                                                      {
                                                        "Get two medium 1-topping pizzas and two orders of 16-piece bread bites. Choose from savory flavors like Parmesan or Garlic or indulge with sweet Cinnamon."
                                                      }
                                                    </span>
                                                  </p>
                                                </span>
                                                <div className="cp-mt-tiny">
                                                  <button
                                                    type="button"
                                                    aria-labelledby=":Rql6b5dmf6: :Rql6b5dmf6H1:"
                                                    data-testid="tile-button-PerfectCombo"
                                                    id=":Rql6b5dmf6:"
                                                    className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                                  >
                                                    {"Add deal"}
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="sm:flex-col mt-small flex items-center gap-x-small cp-absolute cp-bottom-none cp-left-none cp-right-none cp-m-none cp-bg-cool-gray-200 cp-p-small lg:cp-static lg:cp-mx-small lg:cp-p-none lg:cp-pb-none lg:cp-pt-small xl:cp-mx-none">
                                    <div className="mx-auto">
                                      <div className="text-center text-text-secondary typo-label-5">
                                        <p>
                                          <span>
                                            <strong className="font-bold">
                                              {
                                                "PRICES HIGHER FOR SOME LOCATIONS."
                                              }
                                            </strong>
                                            {
                                              " You mustÂ ask forÂ this limited time offer.Â Delivery charge and tax may apply. Prices, participation, delivery area, and charges mayÂ vary. Handmade Pan and Parmesan Stuffed Crust pizzas will be extra. No substitutionsÂ permitted. For details on pricing, contact your local store. Pricing for online ordersÂ available at checkout."
                                            }
                                          </span>
                                          {"Â "}
                                          <button
                                            className="cp-underline"
                                            type="button"
                                          >
                                            {"Offer details"}
                                          </button>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                aria-label="Deal, 6 of 6"
                                aria-roledescription="slide"
                                className="absolute h-full w-full"
                                role="group"
                                hidden
                                style={{ display: "none" }}
                              >
                                <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container cp-h-full cp-rounded-none cp-px-none cp-pt-none xl:cp-rounded-lg xl:cp-p-small">
                                  <div
                                    className="clickable-card cp-h-full cp-rounded-none xl:cp-rounded-lg active:outline active:outline-blue"
                                    data-testid="clickable-card"
                                  >
                                    <div className="grid h-full">
                                      <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                                        <source
                                          media="(min-width: 1000px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(27,367,1450,432);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(27,367,1450,432);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(min-width: 500px)"
                                          sizes="(max-width: 1000px) 100vw, 1000px"
                                          srcSet="/site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(151,105,1200,749);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(151,105,1200,749);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(max-width: 500px)"
                                          sizes="100vw"
                                          srcSet="/site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(500,3,500,851);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(500,3,500,851);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(500,3,500,851);Resize=(1000),allowExpansion 1000w"
                                        />
                                        <img
                                          src="/site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(27,367,1450,432);Resize=(1700),allowExpansion"
                                          alt=""
                                          loading="lazy"
                                          className="h-auto w-full rounded-lg object-cover cp-h-full cp-rounded-none xl:cp-rounded-lg"
                                        />
                                      </picture>
                                      <div className="col-start-1 row-start-1 flex items-end">
                                        <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                                          <div className="cp-mx-auto cp-mb-[9.5rem] cp-mt-auto lg:cp-m-none lg:cp-mt-auto">
                                            <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                              <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                                <h2
                                                  className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny"
                                                  id=":Rsl6b5dmf6H1:"
                                                >
                                                  <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                                    <span>{"Local deals"}</span>
                                                  </span>{" "}
                                                  <span className="block text-pretty text-accessible-blue typo-offer-headline-small @5xl:typo-offer-headline-large">
                                                    <span>
                                                      {
                                                        "Find your local store's coupons."
                                                      }
                                                    </span>
                                                  </span>
                                                </h2>
                                                <div className="cp-mt-tiny">
                                                  <button
                                                    type="button"
                                                    aria-labelledby=":Rsl6b5dmf6: :Rsl6b5dmf6H1:"
                                                    data-testid="tile-button-LocalDeals"
                                                    id=":Rsl6b5dmf6:"
                                                    className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                                  >
                                                    {"See local deals"}
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="absolute left-1/2 -translate-x-1/2 cp-bottom-[7rem]"
                              role="group"
                              aria-roledescription="controls"
                            >
                              <div className="inline-flex h-mega-1 rounded-full border border-cool-gray-700 bg-cool-gray-200 p-x-small touch:h-x-large touch:px-tiny">
                                <div className="flex items-center justify-center gap-x-x-small px-x-small py-tiny hidden">
                                  <span className="block h-x-small w-x-small rounded-full"></span>
                                  <span className="block h-x-small w-x-small rounded-full bg-ui-background-border"></span>
                                  <span className="block h-x-small w-x-small rounded-full bg-ui-background-border"></span>
                                  <span className="block h-x-small w-x-small rounded-full bg-ui-background-border"></span>
                                  <span className="block h-x-small w-x-small rounded-full bg-ui-background-border"></span>
                                  <span className="block h-x-small w-x-small rounded-full bg-ui-background-border"></span>
                                </div>
                                <div className="flex items-center justify-center gap-x-x-small">
                                  <button
                                    type="button"
                                    aria-label="Previous panel"
                                    disabled
                                    className="p-x-small"
                                  >
                                    <img
                                      alt=""
                                      className="block w-large h-large"
                                      src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-arrow-back--cool-gray-500.svg"
                                    />
                                  </button>
                                  <span className="whitespace-nowrap font-bold text-ui-extra-dark-cool typo-body-1">
                                    {"1 / 6"}
                                  </span>
                                  <button
                                    type="button"
                                    aria-label="Next panel"
                                    className="p-x-small"
                                  >
                                    <img
                                      alt=""
                                      className="block w-large h-large"
                                      src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/icon-type-arrow-forward--text-tertiary.svg"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-testid="tiles-wide">
                          <div
                            className="cp-hidden lg:cp-block xl:cp-px-large"
                            data-testid="hero"
                          >
                            <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container cp-h-full cp-rounded-none cp-px-none cp-pt-none xl:cp-rounded-lg xl:cp-p-small">
                              <div
                                className="clickable-card cp-h-full cp-rounded-none xl:cp-rounded-lg active:outline active:outline-blue"
                                data-testid="clickable-card"
                              >
                                <div className="grid h-full">
                                  <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                                    <source
                                      media="(min-width: 1000px)"
                                      sizes="(max-width: 1700px) 100vw, 1700px"
                                      srcSet="/site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(210,873,2796,837);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(210,873,2796,837);Resize=(1700),allowExpansion 1700w"
                                    />
                                    <source
                                      media="(min-width: 500px)"
                                      sizes="(max-width: 1000px) 100vw, 1000px"
                                      srcSet="/site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(672,870,2540,1588);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(672,870,2540,1588);Resize=(1700),allowExpansion 1700w"
                                    />
                                    <source
                                      media="(max-width: 500px)"
                                      sizes="100vw"
                                      srcSet="/site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(1436,356,1382,2354);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(1436,356,1382,2354);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(1436,356,1382,2354);Resize=(1000),allowExpansion 1000w"
                                    />
                                    <img
                                      src="/site-assets/cms/assets/3e434123-d667-4f23-960c-d55c9987e1090fb9.jpg?im=Crop,rect=(210,873,2796,837);Resize=(1700),allowExpansion"
                                      alt=""
                                      loading="eager"
                                      className="h-auto w-full rounded-lg object-cover cp-h-full cp-rounded-none xl:cp-rounded-lg"
                                    />
                                  </picture>
                                  <div className="col-start-1 row-start-1 flex items-end">
                                    <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                                      <div className="cp-mx-auto cp-mb-[9.5rem] cp-mt-auto lg:cp-m-none lg:cp-mt-auto">
                                        <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                          <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                            <h2
                                              className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny"
                                              id=":R2p6b5dmf6H1:"
                                            >
                                              <span className="absolute -top-small right-large">
                                                <span className="inline-flex max-w-full items-center justify-center rounded-full border border-[rgba(254,250,246,0.70)] bg-red-700 px-x-small py-tiny text-text-invert shadow-red-glow">
                                                  <span className="inline-flex overflow-hidden overflow-ellipsis whitespace-nowrap !leading-[0.86] px-small typo-label-4">
                                                    {"Now with Stuffed Crust"}
                                                  </span>
                                                </span>
                                              </span>{" "}
                                              <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                                <span>{"Best deal ever"}</span>
                                              </span>{" "}
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
                                                  {
                                                    "Choose your crust. Choose your size. Choose up to 7 toppings."
                                                  }
                                                </span>
                                              </p>
                                            </span>
                                            <div className="cp-mt-tiny">
                                              <button
                                                type="button"
                                                aria-labelledby=":R2p6b5dmf6: :R2p6b5dmf6H1:"
                                                data-testid="tile-button-BestDealEver"
                                                id=":R2p6b5dmf6:"
                                                className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                              >
                                                {"Add deal"}
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="sm:flex-col mt-small flex items-center gap-x-small cp-absolute cp-bottom-none cp-left-none cp-right-none cp-m-none cp-bg-cool-gray-200 cp-p-small lg:cp-static lg:cp-mx-small lg:cp-p-none lg:cp-pb-none lg:cp-pt-small xl:cp-mx-none">
                                <div className="mx-auto">
                                  <div className="text-center text-text-secondary typo-label-5">
                                    <p>
                                      <span>
                                        <strong className="font-bold">
                                          {"PRICES HIGHER FOR SOME LOCATIONS"}
                                        </strong>
                                        {
                                          " Select this offer from 6/15-7/26. Online Only. Max. 7 toppings (6 for Pan and NY Style Crust)."
                                        }
                                      </span>
                                      {"Â "}
                                      <button
                                        className="cp-underline"
                                        type="button"
                                      >
                                        {"Offer details."}
                                      </button>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="cp-hidden cp-pl-medium lg:cp-block xl:cp-pl-large xl:cp-pr-large">
                            <div className="cp-my-medium cp-flex cp-items-end cp-justify-between cp-pr-medium xl:cp-pr-large">
                              <h2 className="cp-text-blue-600 cp-typo-headline-2">
                                {"Explore more deals"}
                              </h2>
                              <CarouselControls targetTestId="two-panel-carousel" />
                            </div>
                            <section
                              aria-roledescription="carousel"
                              className="no-scrollbar flex basis-1/2 snap-x snap-mandatory scroll-p-mega-1 justify-start gap-regular overflow-x-scroll scroll-smooth"
                              data-testid="two-panel-carousel"
                            >
                              <div className="flex-shrink-0 snap-start w-[45%] flex-grow">
                                <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container">
                                  <div
                                    className="clickable-card rounded-lg active:outline active:outline-blue"
                                    data-testid="clickable-card"
                                  >
                                    <div className="grid h-full">
                                      <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                                        <source
                                          media="(min-width: 1000px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(248,548,3203,1386);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(248,548,3203,1386);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(248,548,3203,1386);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(248,548,3203,1386);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(min-width: 500px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(639,566,2583,1917);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(639,566,2583,1917);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(639,566,2583,1917);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(639,566,2583,1917);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(max-width: 500px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(1470,530,1300,2207);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(1470,530,1300,2207);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(1470,530,1300,2207);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(1470,530,1300,2207);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <img
                                          src="/site-assets/cms/assets/fd735f00-674b-4c3c-9f57-97b57ad1c2b62f17.jpg?im=Crop,rect=(248,548,3203,1386);Resize=(1700),allowExpansion"
                                          alt="Mix and Match"
                                          loading="lazy"
                                          className="h-auto w-full rounded-lg object-cover"
                                        />
                                      </picture>
                                      <div className="col-start-1 row-start-1 flex items-end">
                                        <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                                          <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                            <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                              <h3
                                                className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny"
                                                id=":R9dp6b5dmf6:"
                                              >
                                                <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                                  <span>{"Mix and match"}</span>
                                                </span>{" "}
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
                                                <button
                                                  type="button"
                                                  aria-labelledby=":R9dp6b5dmf6H1: :R9dp6b5dmf6:"
                                                  id=":R9dp6b5dmf6H1:"
                                                  className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                                >
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
                                        <button
                                          type="button"
                                          aria-labelledby=":R9dp6b5dmf6H2: :R9dp6b5dmf6:"
                                          className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed bg-neutral-white shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] text-text-secondary hover:bg-cool-gray-300 border border-transparent hover:border-cool-gray-700 focus:border-cool-gray-700 focus:shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] focus:bg-neutral-white active:bg-cool-gray-400 active:border-transparent px-medium py-small typo-label-4 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                        >
                                          <span id=":R9dp6b5dmf6H2:">
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
                                              {
                                                "PRICES HIGHER FOR SOME LOCATIONS."
                                              }
                                            </strong>
                                            {
                                              " You must ask for this limited time offer. Prices, participation, delivery area, and charges may vary by store. 2-item minimum. Bone-in Wings, Handmade Pan and Parmesan Stuffed Crust pizzas will cost extra."
                                            }
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-shrink-0 snap-start w-[45%] flex-grow">
                                <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container">
                                  <div
                                    className="clickable-card rounded-lg active:outline active:outline-blue"
                                    data-testid="clickable-card"
                                  >
                                    <div className="grid h-full">
                                      <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                                        <source
                                          media="(min-width: 1000px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,3250,1441);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,3250,1441);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,3250,1441);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,3250,1441);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(min-width: 500px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,2860,1234);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,2860,1234);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,2860,1234);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,2860,1234);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(max-width: 500px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(1900,150,1200,2037);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(1900,150,1200,2037);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(1900,150,1200,2037);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(1900,150,1200,2037);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <img
                                          src="/site-assets/cms/assets/43778453-e8b1-4db6-83fa-00f2dc43d6e36846.jpg?im=Crop,rect=(374,325,3250,1441);Resize=(1700),allowExpansion"
                                          alt="Weeklong Carryout"
                                          loading="lazy"
                                          className="h-auto w-full rounded-lg object-cover"
                                        />
                                      </picture>
                                      <div className="col-start-1 row-start-1 flex items-end">
                                        <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                                          <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                            <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                              <h3
                                                className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny"
                                                id=":Radp6b5dmf6:"
                                              >
                                                <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                                  <span>
                                                    {"Weeklong carryout"}
                                                  </span>
                                                </span>{" "}
                                                <span className="block text-pretty text-accessible-blue typo-offer-headline-small @5xl:typo-offer-headline-large">
                                                  <span>
                                                    {"Carry out for just "}
                                                    <span className="text-accessible-red">
                                                      {"$7.99 each."}
                                                    </span>
                                                  </span>
                                                </span>
                                              </h3>
                                              <span className="text-text-primary typo-body-2 @5xl:typo-body-1">
                                                <p>
                                                  <span>
                                                    {
                                                      "Spend less dough when you carry out a Large 1-topping pizza on any of our 6 delicious crusts, 8-piece wings or boneless chicken."
                                                    }
                                                  </span>
                                                </p>
                                              </span>
                                              <div className="cp-mt-tiny">
                                                <button
                                                  type="button"
                                                  aria-labelledby=":Radp6b5dmf6H1: :Radp6b5dmf6:"
                                                  id=":Radp6b5dmf6H1:"
                                                  className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                                >
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
                                        <button
                                          type="button"
                                          aria-labelledby=":Radp6b5dmf6H2: :Radp6b5dmf6:"
                                          className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed bg-neutral-white shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] text-text-secondary hover:bg-cool-gray-300 border border-transparent hover:border-cool-gray-700 focus:border-cool-gray-700 focus:shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] focus:bg-neutral-white active:bg-cool-gray-400 active:border-transparent px-medium py-small typo-label-4 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                        >
                                          <span id=":Radp6b5dmf6H2:">
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
                                              {
                                                "PRICES HIGHER FOR SOME LOCATIONS."
                                              }
                                            </strong>
                                            {
                                              " You must ask for this offer. Prices, participation, and charges may vary. Carryout only. Excludes XL and Specialty Pizzas."
                                            }
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-shrink-0 snap-start w-[45%] flex-grow">
                                <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container">
                                  <div
                                    className="clickable-card rounded-lg active:outline active:outline-blue"
                                    data-testid="clickable-card"
                                  >
                                    <div className="grid h-full">
                                      <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                                        <source
                                          media="(min-width: 1000px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(0,343,3615,1603);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(0,343,3615,1603);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(0,343,3615,1603);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(0,343,3615,1603);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(min-width: 500px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1030,68,2668,1617);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1030,68,2668,1617);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1030,68,2668,1617);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1030,68,2668,1617);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(max-width: 500px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1368,170,1289,2119);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1368,170,1289,2119);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1368,170,1289,2119);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(1368,170,1289,2119);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <img
                                          src="/site-assets/cms/assets/16279dec-7e30-45d5-9793-b839f36873af17fe.jpg?im=Crop,rect=(0,343,3615,1603);Resize=(1700),allowExpansion"
                                          alt=""
                                          loading="lazy"
                                          className="h-auto w-full rounded-lg object-cover"
                                        />
                                      </picture>
                                      <div className="col-start-1 row-start-1 flex items-end">
                                        <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                                          <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                            <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                              <h3
                                                className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny"
                                                id=":Rbdp6b5dmf6:"
                                              >
                                                <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                                  <span>
                                                    {"Parmesan Stuffed Crust"}
                                                  </span>
                                                </span>{" "}
                                                <span className="block text-pretty text-accessible-blue typo-offer-headline-small @5xl:typo-offer-headline-large">
                                                  <span>
                                                    {"Just "}
                                                    <span className="text-accessible-red">
                                                      {"$10.99 each."}
                                                    </span>
                                                  </span>
                                                </span>
                                              </h3>
                                              <span className="text-text-primary typo-body-2 @5xl:typo-body-1">
                                                <p>
                                                  <span>
                                                    {
                                                      "Mix and Match any two or more 2-topping Parmesan Stuffed Crust Pizzas for just $10.99 each!"
                                                    }
                                                  </span>
                                                </p>
                                              </span>
                                              <div className="cp-mt-tiny">
                                                <button
                                                  type="button"
                                                  aria-labelledby=":Rbdp6b5dmf6H1: :Rbdp6b5dmf6:"
                                                  id=":Rbdp6b5dmf6H1:"
                                                  className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                                >
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
                                        <button
                                          type="button"
                                          aria-labelledby=":Rbdp6b5dmf6H2: :Rbdp6b5dmf6:"
                                          className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed bg-neutral-white shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] text-text-secondary hover:bg-cool-gray-300 border border-transparent hover:border-cool-gray-700 focus:border-cool-gray-700 focus:shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] focus:bg-neutral-white active:bg-cool-gray-400 active:border-transparent px-medium py-small typo-label-4 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                        >
                                          <span id=":Rbdp6b5dmf6H2:">
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
                                              {
                                                "PRICES HIGHER FOR SOME LOCATIONS."
                                              }
                                            </strong>
                                            {
                                              "You must ask for this limited time offer. Prices, participation, delivery area, and charges may vary by store. 2-item minimum. Bone-in Wings and Handmade Pan will cost extra."
                                            }
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-shrink-0 snap-start w-[45%] flex-grow">
                                <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container">
                                  <div
                                    className="clickable-card rounded-lg active:outline active:outline-blue"
                                    data-testid="clickable-card"
                                  >
                                    <div className="grid h-full">
                                      <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                                        <source
                                          media="(min-width: 1000px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(0,708,2948,1307);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(0,708,2948,1307);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(0,708,2948,1307);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(0,708,2948,1307);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(min-width: 500px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(801,514,2484,1072);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(801,514,2484,1072);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(801,514,2484,1072);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(801,514,2484,1072);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(max-width: 500px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(1187,0,1604,2722);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(1187,0,1604,2722);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(1187,0,1604,2722);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(1187,0,1604,2722);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <img
                                          src="/site-assets/cms/assets/a42244cb-ee24-4231-b6cf-cfdfbf1f2bc40419.jpg?im=Crop,rect=(0,708,2948,1307);Resize=(1700),allowExpansion"
                                          alt="The perfect combo"
                                          loading="lazy"
                                          className="h-auto w-full rounded-lg object-cover"
                                        />
                                      </picture>
                                      <div className="col-start-1 row-start-1 flex items-end">
                                        <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                                          <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                            <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                              <h3
                                                className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny"
                                                id=":Rcdp6b5dmf6:"
                                              >
                                                <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                                  <span>
                                                    {"The perfect combo"}
                                                  </span>
                                                </span>{" "}
                                                <span className="block text-pretty text-accessible-blue typo-offer-headline-small @5xl:typo-offer-headline-large">
                                                  <span>
                                                    {"Get all of this for "}
                                                    <span className="text-accessible-red">
                                                      {"just $19.99."}
                                                    </span>
                                                  </span>
                                                </span>
                                              </h3>
                                              <span className="text-text-primary typo-body-2 @5xl:typo-body-1">
                                                <p>
                                                  <span>
                                                    {
                                                      "Get two medium 1-topping pizzas and two orders of 16-piece bread bites. Choose from savory flavors like Parmesan or Garlic or indulge with sweet Cinnamon."
                                                    }
                                                  </span>
                                                </p>
                                              </span>
                                              <div className="cp-mt-tiny">
                                                <button
                                                  type="button"
                                                  aria-labelledby=":Rcdp6b5dmf6H1: :Rcdp6b5dmf6:"
                                                  id=":Rcdp6b5dmf6H1:"
                                                  className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                                >
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
                                        <button
                                          type="button"
                                          aria-labelledby=":Rcdp6b5dmf6H2: :Rcdp6b5dmf6:"
                                          className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed bg-neutral-white shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] text-text-secondary hover:bg-cool-gray-300 border border-transparent hover:border-cool-gray-700 focus:border-cool-gray-700 focus:shadow-[0_2px_6px_0_rgba(120,84,49,0.10)] focus:bg-neutral-white active:bg-cool-gray-400 active:border-transparent px-medium py-small typo-label-4 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                        >
                                          <span id=":Rcdp6b5dmf6H2:">
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
                                              {
                                                "PRICES HIGHER FOR SOME LOCATIONS."
                                              }
                                            </strong>
                                            {
                                              " You mustÂ ask forÂ this limited time offer.Â Delivery charge and tax may apply. Prices, participation, delivery area, and charges mayÂ vary. Handmade Pan and Parmesan Stuffed Crust pizzas will be extra. No substitutionsÂ permitted. For details on pricing, contact your local store. Pricing for online ordersÂ available at checkout."
                                            }
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-shrink-0 snap-start w-[45%] flex-grow">
                                <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container">
                                  <div
                                    className="clickable-card rounded-lg active:outline active:outline-blue"
                                    data-testid="clickable-card"
                                  >
                                    <div className="grid h-full">
                                      <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                                        <source
                                          media="(min-width: 1000px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(74,144,1400,621);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(74,144,1400,621);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(74,144,1400,621);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(74,144,1400,621);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(min-width: 500px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(151,105,1200,749);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(151,105,1200,749);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(151,105,1200,749);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(151,105,1200,749);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <source
                                          media="(max-width: 500px)"
                                          sizes="(max-width: 1700px) 100vw, 1700px"
                                          srcSet="/site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(500,3,500,851);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(500,3,500,851);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(500,3,500,851);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27f2417.jpg?im=Crop,rect=(500,3,500,851);Resize=(1700),allowExpansion 1700w"
                                        />
                                        <img
                                          src="/site-assets/cms/assets/295ee22e-705d-47e3-8ad3-4ed180a8f27fb339.jpg?im=Crop,rect=(74,144,1400,621);Resize=(1700),allowExpansion"
                                          alt=""
                                          loading="lazy"
                                          className="h-auto w-full rounded-lg object-cover"
                                        />
                                      </picture>
                                      <div className="col-start-1 row-start-1 flex items-end">
                                        <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                                          <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                            <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                              <h3
                                                className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny"
                                                id=":Rddp6b5dmf6:"
                                              >
                                                <span className="block text-accessible-blue typo-offer-subhead-small @5xl:typo-offer-subhead-large">
                                                  <span>{"Local deals"}</span>
                                                </span>{" "}
                                                <span className="block text-pretty text-accessible-blue typo-offer-headline-small @5xl:typo-offer-headline-large">
                                                  <span>
                                                    {
                                                      "Find your local store's coupons."
                                                    }
                                                  </span>
                                                </span>
                                              </h3>
                                              <div className="cp-mt-tiny">
                                                <button
                                                  type="button"
                                                  aria-labelledby=":Rddp6b5dmf6H1: :Rddp6b5dmf6:"
                                                  id=":Rddp6b5dmf6H1:"
                                                  className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                                                >
                                                  {"See local deals"}
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="sm:flex-col mt-small flex items-center gap-x-small"></div>
                                </div>
                              </div>
                              <div className="w-x-large flex-shrink-0"></div>
                            </section>
                          </div>
                        </div>
                      </div>
                      <div className="lg:sh-hidden"></div>
                    </div>
                    <div className="sh-mx-auto sh-mt-large sh-w-full sh-max-w-screen-xl sh-px-regular xl:sh-px-large">
                      <div className="cp-flex cp-flex-col cp-gap-large">
                        <h2 className="cp-text-blue cp-typo-headline-2">
                          {"What's new"}
                        </h2>
                        <div className="flex flex-col rounded-lg bg-cool-gray-200 p-small @container">
                          <div
                            className="clickable-card rounded-lg active:outline active:outline-blue"
                            data-testid="clickable-card"
                          >
                            <div className="grid h-full">
                              <picture className="col-start-1 row-start-1 h-full overflow-hidden">
                                <source
                                  media="(min-width: 1000px)"
                                  sizes="(max-width: 1700px) 100vw, 1700px"
                                  srcSet="/site-assets/cms/assets/d2c2c0cf-a01a-4ada-af01-927c6ecc6f572b2c.jpg?im=Crop,rect=(0,1769,7271,1492);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/d2c2c0cf-a01a-4ada-af01-927c6ecc6f572b2c.jpg?im=Crop,rect=(0,1769,7271,1492);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/d2c2c0cf-a01a-4ada-af01-927c6ecc6f572b2c.jpg?im=Crop,rect=(0,1769,7271,1492);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/d2c2c0cf-a01a-4ada-af01-927c6ecc6f572b2c.jpg?im=Crop,rect=(0,1769,7271,1492);Resize=(1700),allowExpansion 1700w"
                                />
                                <source
                                  media="(min-width: 500px)"
                                  sizes="(max-width: 1700px) 100vw, 1700px"
                                  srcSet="/site-assets/cms/assets/d2c2c0cf-a01a-4ada-af01-927c6ecc6f572b2c.jpg?im=Crop,rect=(0,1769,5337,2071);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/d2c2c0cf-a01a-4ada-af01-927c6ecc6f572b2c.jpg?im=Crop,rect=(0,1769,5337,2071);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/d2c2c0cf-a01a-4ada-af01-927c6ecc6f572b2c.jpg?im=Crop,rect=(0,1769,5337,2071);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/d2c2c0cf-a01a-4ada-af01-927c6ecc6f572b2c.jpg?im=Crop,rect=(0,1769,5337,2071);Resize=(1700),allowExpansion 1700w"
                                />
                                <source
                                  media="(max-width: 500px)"
                                  sizes="(max-width: 1700px) 100vw, 1700px"
                                  srcSet="/site-assets/cms/assets/d2c2c0cf-a01a-4ada-af01-927c6ecc6f572b2c.jpg?im=Crop,rect=(1768,1194,3916,3694);Resize=(390),allowExpansion 390w, /site-assets/cms/assets/d2c2c0cf-a01a-4ada-af01-927c6ecc6f572b2c.jpg?im=Crop,rect=(1768,1194,3916,3694);Resize=(500),allowExpansion 500w, /site-assets/cms/assets/d2c2c0cf-a01a-4ada-af01-927c6ecc6f572b2c.jpg?im=Crop,rect=(1768,1194,3916,3694);Resize=(1000),allowExpansion 1000w, /site-assets/cms/assets/d2c2c0cf-a01a-4ada-af01-927c6ecc6f572b2c.jpg?im=Crop,rect=(1768,1194,3916,3694);Resize=(1700),allowExpansion 1700w"
                                />
                                <img
                                  src="/site-assets/cms/assets/d2c2c0cf-a01a-4ada-af01-927c6ecc6f572b2c.jpg?im=Crop,rect=(0,1769,7271,1492);Resize=(1700),allowExpansion"
                                  alt=""
                                  loading="lazy"
                                  className="h-auto w-full rounded-lg object-cover"
                                />
                              </picture>
                              <div className="col-start-1 row-start-1 flex items-end">
                                <div className="cp-flex cp-h-full cp-w-full cp-flex-col cp-justify-between">
                                  <div className="relative m-small mt-auto flex flex-col gap-small rounded-3xl bg-cool-gray-100/90 p-regular shadow-tile-card backdrop-blur-tile-card @sm:max-w-[19.5rem] @5xl:max-w-[30rem] @5xl:p-large">
                                    <div className="flex flex-col gap-tiny @5xl:gap-x-small">
                                      <h3
                                        className="@5xl:cp-gap-x-small cp-flex cp-flex-col cp-gap-tiny"
                                        id=":Rsqb5dmf6:"
                                      >
                                        <span className="block text-pretty text-accessible-blue typo-offer-headline-small @5xl:typo-offer-headline-large">
                                          <span>
                                            {"TRY OUR "}
                                            <span className="text-accessible-red">
                                              {"NEW"}
                                            </span>
                                            {" SLICE SAUCE"}
                                          </span>
                                        </span>
                                      </h3>
                                      <span className="text-text-primary typo-body-2 @5xl:typo-body-1">
                                        <p>
                                          <span>
                                            {
                                              "Creamy and zesty with a hint of Parmesan."
                                            }
                                          </span>
                                        </p>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sm:flex-col mt-small flex items-center gap-x-small cp-w-full cp-flex-col cp-items-start cp-self-start md:cp-flex-row md:cp-items-center">
                            <div className="cp-w-full cp-whitespace-nowrap md:cp-ml-auto md:cp-w-auto">
                              <button
                                type="button"
                                aria-labelledby=":Rsqb5dmf6H1: :Rsqb5dmf6:"
                                id=":Rsqb5dmf6H1:"
                                className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 @5xl:!px-large @5xl:!py-regular @5xl:!typo-label-2 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                              >
                                {"Order Now"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="bg-background-primary lg:flex lg:flex-col">
                <div className="flex w-full max-w-screen-xl flex-col gap-xx-large self-center px-medium pb-xx-large pt-x-large md:gap-mega-1 md:px-x-large md:pb-mega-1 lg:gap-mega-1 lg:pb-mega-1 lg:pt-mega-1">
                  <div className="rw-rounded-lg rw-bg-cool-gray-200">
                    <div className="rw-grid rw-grid-cols-1 rw-gap-regular md:rw-p-small lg:rw-grid-cols-[1fr_2fr]">
                      <div className="rw-flex rw-flex-col rw-items-center rw-justify-between rw-px-xx-large rw-py-x-large rw-text-center rw-gap-x-large lg:rw-items-start lg:rw-text-start">
                        <span className="rw-text-blue-600 rw-typo-display-3 lg:rw-typo-display-2">
                          {"Crumblez Rewards"}
                        </span>
                        <span className="rw-text-blue-600 rw-typo-display-3 lg:rw-typo-display-2">
                          {"Earn "}
                          <span className="rw-text-red">{"free"}</span>
                          {" Crumblez every 2 orders"}
                        </span>
                        <div className="rw-flex rw-w-full rw-max-w-sm rw-justify-center rw-space-x-regular">
                          <button
                            type="button"
                            className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:text-neutral-white [&:not([aria-disabled='true'])]:active:border-dark-blue [&:not([aria-disabled='true'])]:active:bg-dark-blue [&:not([aria-disabled='true'])]:active:text-neutral-white [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-neutral-white disabled:text-warm-gray-400 text-accessible-blue [&:not([aria-disabled='true'])]:focus:border-2 [&:not([aria-disabled='true'])]:focus:border-accessible-blue [&:not([aria-disabled='true'])]:hover:[box-shadow:0_4px_16px_0_rgba(0,105,167,0.35)] [&:not([aria-disabled='true'])]:active:border-brand-dark-blue [&:not([aria-disabled='true'])]:active:border-[3px] [&:not([aria-disabled='true'])]:active:bg-brand-dark-blue [&:not([aria-disabled='true'])]:active:text-text-invert [&:not([aria-disabled='true'])]:active:[box-shadow:none] hover:border-transparent hover:bg-accessible-blue [&:not([aria-disabled='true'])]:hover:text-text-invert hover:[box-shadow:none] [&:not([aria-disabled='true'])]:focus:border-accessible-blue [&:not([aria-disabled='true'])]:focus:text-accessible-blue [&:not([aria-disabled='true'])]:focus-visible:text-accessible-blue [&:not([aria-disabled='true'])]:focus:hover:text-text-invert [&:not([aria-disabled='true'])]:[box-shadow:0_0_0_2px_rgba(0,105,167,0.70),0_0_5px_2px_rgba(0,105,167,0.50)] [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(0,105,167,0.70),0_0_5px_4px_rgba(0,105,167,0.50)] disabled:border-2 disabled:border-warm-gray-400 disabled:!shadow-none disabled:bg-background-primary disabled:text-ui-disabled disabled:pointer-events-none [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] px-medium py-small typo-label-4 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                          >
                            {"Join Now"}
                          </button>
                          <button
                            type="button"
                            className="w-full rounded-full text-center outline-none duration-75 disabled:active:scale-100 [&:not([aria-disabled='true'])]:active:scale-95 flex items-center justify-center gap-small aria-disabled:cursor-not-allowed [&:not([aria-disabled='true'])]:hover:bg-wine [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:active:shadow-none disabled:border-warm-gray-400 disabled:bg-warm-gray-400 focus:shadow-button-primary text-text-invert bg-accessible-red [box-shadow:0_0_2px_0_rgba(255,73,73,0.40),1px_1px_10px_0_rgba(255,73,73,0.30)] [&:not([aria-disabled='true'])]:hover:bg-red-800 [&:not([aria-disabled='true'])]:active:bg-red-1000 [&:not([aria-disabled='true'])]:focus:bg-accessible-red [&:not([aria-disabled='true'])]:focus:[box-shadow:0_0_0_2px_#FFF,0_0_0_4px_rgba(255,0,0,0.70),0_0_5px_4px_rgba(255,0,0,0.50)] [&:not([aria-disabled='true'])]:active:focus:[box-shadow:none] [&[aria-disabled='true']]:shadow-none disabled:bg-warm-gray-400 disabled:text-text-invert disabled:[box-shadow:none] disabled:pointer-events-none px-medium py-small typo-label-4 relative active:after:content-[''] active:after:absolute active:after:inline-block active:after:inset-none active:after:scale-x-105 active:after:scale-y-110"
                          >
                            {"Sign In"}
                          </button>
                        </div>
                      </div>
                      <div className="rw-hidden lg:rw-flex">
                        <img
                          className="rw-h-[24rem] rw-w-full rw-object-contain"
                          alt=""
                          src="/site-assets/cms/assets/270b93c2-a629-4541-bfc0-b8d6b9a7320f6967.png?im=Resize%3D%28750%29"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="rw-flex rw-items-center rw-justify-center rw-rounded-b-lg rw-bg-cool-gray-200">
                      <span className="rw-p-small rw-font-medium rw-text-ui-dark-cool rw-typo-label-5">
                        {"See Crumblez Rewards"}
                        <button
                          type="button"
                          className="font-sans underline p-tiny font-bold text-ui-dark-cool hover:text-opacity-90"
                        >
                          {"Terms & Conditions"}
                        </button>
                      </span>
                    </div>
                  </div>
                  <BrowseMenuSection />
                </div>
              </div>
              <div
                id="root-toast-container"
                className="fixed top-none z-[61] mx-regular mt-mega-7 flex w-[calc(100vw-2rem)] flex-col-reverse md:right-none md:ml-none md:mr-x-large md:mt-mega-5 md:w-1/2 lg:ml-none lg:mr-mega-3 lg:w-1/3"
              ></div>
            </section>
          </main>
        </section>
      </div>
      <link rel="stylesheet" href="/site-assets/local-signin-modal.css" />
    </>
  );
}
