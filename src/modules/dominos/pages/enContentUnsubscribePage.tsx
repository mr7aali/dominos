/* eslint-disable */
// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Pizza Delivery & Carryout, Pasta, Wings & More | Crumblez",
  "description": "Order pizza, pasta, sandwiches & more online for carryout or delivery from Crumblez. View menu, find locations, track orders. Sign up for Crumblez email & text offers to get great deals on your next order.",
  "alternates": {
    "canonical": "/en/content/unsubscribe"
  },
  "robots": "index"
};

export function EnContentUnsubscribePage() {
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
                <h1 className="text-blue typo-headline-1 lg:typo-display-1">
                  {"OPT - OUT"}
                </h1>
              </div>
            </header>
            <div className="bg-background-primary lg:flex lg:flex-col">
              <div className="flex w-full max-w-screen-xl flex-col gap-xx-large self-center px-medium pb-xx-large pt-x-large md:gap-mega-1 md:px-x-large md:pb-mega-1 lg:gap-mega-1 lg:pb-mega-1 lg:pt-mega-1">
                <div className="sh-p-regular">
                  <div>
                    <div className="sh-flex sh-w-full sh-flex-col sh-gap-large lg:sh-flex-row">
                      <div className="sh-min-w-0 sh-flex-1">
                        <h2 className="sh-mb-regular sh-mt-regular sh-text-blue sh-typo-subhead-2">
                          {"Email Opt-Out"}
                        </h2>
                        <form>
                          <p className="sh-mb-regular">
                            {"Please "}
                            <span className="sh-font-bold sh-uppercase">
                              {"remove"}
                            </span>
                            {" me from the email list. I do not wish to receive future email communication."}
                          </p>
                          <div>
                            <div className="md:sh-max-w-sm">
                              <div className="flex w-full flex-col gap-tiny" data-testid="input-field-email">
                                <div className="group flex h-mega-1 overflow-hidden rounded-xl bg-cool-gray-100 shadow-input hover:shadow-input-hover focus-within:shadow-input-focus focus-within:hover:shadow-input-focus active:shadow-input-focus hover:bg-cool-gray-200">
                                  <label className="relative flex w-full items-center gap-small px-small py-small">
                                    <input type="text" className="peer h-full w-full border-none bg-cool-gray-100 p-none px-small pt-small text-text-primary typo-body-1 focus:border-0 focus:outline-none focus:ring-0 selection:bg-blue-700 selection:text-neutral-white group-hover:bg-cool-gray-200" aria-required="true" autoComplete="email" name="email" placeholder=" " aria-labelledby=":R4kj5dmf6:" />
                                    <span aria-hidden="true" aria-required="false" className="pointer-events-none absolute ms-small -translate-y-small transition-transform typo-label-5 peer-placeholder-shown:translate-y-none peer-placeholder-shown:typo-body-1 peer-focus:peer-placeholder-shown:-translate-y-small peer-focus:peer-placeholder-shown:typo-label-5 text-text-secondary group-active:text-blue peer-placeholder-shown:text-text-tertiary peer-focus:text-blue peer-focus:peer-placeholder-shown:text-blue transition-transform group-active:peer-placeholder-shown:-translate-y-small group-active:peer-placeholder-shown:typo-label-5">
                                      <span id=":R4kj5dmf6:">
                                        {"Email Address:"}
                                      </span>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <fieldset className="sh-mt-regular">
                            <legend>
                              <span className="sh-font-bold sh-text-red" aria-hidden="true">
                                {"*"}
                              </span>
                              {"Reason:"}
                            </legend>
                            <div className="sh-mb-tiny sh-flex sh-items-center sh-gap-tiny">
                              <input name="reason" id="email-reason-1" required type="radio" value="0001" />
                              <label htmlFor="email-reason-1">
                                {"Communication too frequent"}
                              </label>
                            </div>
                            <div className="sh-mb-tiny sh-flex sh-items-center sh-gap-tiny">
                              <input name="reason" id="email-reason-2" required type="radio" value="0002" />
                              <label htmlFor="email-reason-2">
                                {"Communication not relevant to my interest or needs"}
                              </label>
                            </div>
                            <div className="sh-mb-tiny sh-flex sh-items-center sh-gap-tiny">
                              <input name="reason" id="email-reason-3" required type="radio" value="0003" />
                              <label htmlFor="email-reason-3">
                                {"No longer in a Crumblez delivery area"}
                              </label>
                            </div>
                            <div className="sh-mb-tiny sh-flex sh-items-center sh-gap-tiny">
                              <input name="reason" id="email-reason-4" required type="radio" value="0004" />
                              <label htmlFor="email-reason-4">
                                {"Other"}
                              </label>
                            </div>
                            <div className="sh-text-red" role="alert"></div>
                          </fieldset>
                          <div></div>
                          <div className="sh-my-regular">
                            <div></div>
                          </div>
                          <div></div>
                          <div className="sh-mb-regular sh-mt-regular sh-flex sh-flex-row sh-items-center sh-gap-tiny sh-text-ui-dark-cool sh-typo-label-5">
                            <span className="sh-text-red">
                              {"*"}
                            </span>
                            <span>
                              {"Indicates required field."}
                            </span>
                          </div>
                          <div className="sh-mb-regular sh-mt-regular sh-flex sh-flex-col sh-gap-regular md:sh-flex-row">
                            <Link href="/content/email-and-text-offers" className="sh-rounded-full sh-border-2 sh-border-blue sh-bg-neutral-white sh-px-large sh-py-regular sh-text-center sh-text-blue sh-outline-none sh-typo-label-2 hover:sh-bg-blue hover:sh-text-neutral-white">
                              {"Cancel"}
                            </Link>
                            <button type="submit" className="sh-rounded-full sh-border-2 sh-border-red sh-bg-red sh-px-large sh-py-regular sh-text-center sh-text-neutral-white sh-outline-none sh-typo-label-2 hover:sh-border-wine hover:sh-bg-wine">
                              {"Remove Me From The Email List"}
                            </button>
                          </div>
                        </form>
                      </div>
                      <hr className="sh-my-large lg:sh-hidden" />
                      <div className="sh-min-w-0 sh-flex-1">
                        <h2 className="sh-mb-regular sh-mt-regular sh-text-blue sh-typo-subhead-2">
                          {"Text Offers / Phone Opt-Out"}
                        </h2>
                        <form>
                          <p className="sh-mb-regular">
                            {"Please "}
                            <span className="sh-font-bold sh-uppercase">
                              {"remove"}
                            </span>
                            {" me from the Crumblez text offers messaging list. I do not wish to receive future text offer communication via CRUMBLEZ (366466)."}
                          </p>
                          <p className="sh-mb-regular">
                            {"If you are trying to unsubscribe from text ordering, you can disable that feature in your"}
                            {" "}
                            <Link href="/customer/profile">
                              {"Crumblez Profile"}
                            </Link>
                            {"."}
                          </p>
                          <div>
                            <div className="md:sh-max-w-sm">
                              <div className="flex w-full flex-col gap-tiny" data-testid="input-field-phone">
                                <div className="group flex h-mega-1 overflow-hidden rounded-xl bg-cool-gray-100 shadow-input hover:shadow-input-hover focus-within:shadow-input-focus focus-within:hover:shadow-input-focus active:shadow-input-focus hover:bg-cool-gray-200">
                                  <label className="relative flex w-full items-center gap-small px-small py-small">
                                    <input type="tel" className="peer h-full w-full border-none bg-cool-gray-100 p-none px-small pt-small text-text-primary typo-body-1 focus:border-0 focus:outline-none focus:ring-0 selection:bg-blue-700 selection:text-neutral-white group-hover:bg-cool-gray-200" aria-required="true" autoComplete="tel" name="phone" placeholder=" " aria-labelledby=":R4tj5dmf6:" />
                                    <span aria-hidden="true" aria-required="false" className="pointer-events-none absolute ms-small -translate-y-small transition-transform typo-label-5 peer-placeholder-shown:translate-y-none peer-placeholder-shown:typo-body-1 peer-focus:peer-placeholder-shown:-translate-y-small peer-focus:peer-placeholder-shown:typo-label-5 text-text-secondary group-active:text-blue peer-placeholder-shown:text-text-tertiary peer-focus:text-blue peer-focus:peer-placeholder-shown:text-blue transition-transform group-active:peer-placeholder-shown:-translate-y-small group-active:peer-placeholder-shown:typo-label-5">
                                      <span id=":R4tj5dmf6:">
                                        {"Phone Number:"}
                                      </span>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <fieldset className="sh-mt-regular">
                            <legend>
                              <span className="sh-font-bold sh-text-red" aria-hidden="true">
                                {"*"}
                              </span>
                              {"Reason:"}
                            </legend>
                            <div className="sh-mb-tiny sh-flex sh-items-center sh-gap-tiny">
                              <input name="reason" id="phone-reason-1" required type="radio" value="0001" />
                              <label htmlFor="phone-reason-1">
                                {"Communication too expensive"}
                              </label>
                            </div>
                            <div className="sh-mb-tiny sh-flex sh-items-center sh-gap-tiny">
                              <input name="reason" id="phone-reason-2" required type="radio" value="0002" />
                              <label htmlFor="phone-reason-2">
                                {"Communication too frequent"}
                              </label>
                            </div>
                            <div className="sh-mb-tiny sh-flex sh-items-center sh-gap-tiny">
                              <input name="reason" id="phone-reason-3" required type="radio" value="0003" />
                              <label htmlFor="phone-reason-3">
                                {"Communication not relevant to my interest or needs"}
                              </label>
                            </div>
                            <div className="sh-mb-tiny sh-flex sh-items-center sh-gap-tiny">
                              <input name="reason" id="phone-reason-4" required type="radio" value="0004" />
                              <label htmlFor="phone-reason-4">
                                {"No longer in a Crumblez delivery area"}
                              </label>
                            </div>
                            <div className="sh-mb-tiny sh-flex sh-items-center sh-gap-tiny">
                              <input name="reason" id="phone-reason-5" required type="radio" value="0005" />
                              <label htmlFor="phone-reason-5">
                                {"Other"}
                              </label>
                            </div>
                            <div className="sh-text-red" role="alert"></div>
                          </fieldset>
                          <div></div>
                          <div className="sh-my-regular">
                            <div></div>
                          </div>
                          <div></div>
                          <div className="sh-mb-regular sh-mt-regular sh-flex sh-flex-row sh-items-center sh-gap-tiny sh-text-ui-dark-cool sh-typo-label-5">
                            <span className="sh-text-red">
                              {"*"}
                            </span>
                            <span>
                              {"Indicates required field."}
                            </span>
                          </div>
                          <div className="sh-mb-regular sh-mt-regular sh-flex sh-flex-col sh-gap-regular md:sh-flex-row">
                            <Link href="/content/email-and-text-offers" className="sh-rounded-full sh-border-2 sh-border-blue sh-bg-neutral-white sh-px-large sh-py-regular sh-text-center sh-text-blue sh-outline-none sh-typo-label-2 hover:sh-bg-blue hover:sh-text-neutral-white">
                              {"Cancel"}
                            </Link>
                            <button type="submit" className="sh-rounded-full sh-border-2 sh-border-red sh-bg-red sh-px-large sh-py-regular sh-text-center sh-text-neutral-white sh-outline-none sh-typo-label-2 hover:sh-border-wine hover:sh-bg-wine">
                              {"Remove Me From Text Messaging List"}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <hr className="sh-my-large sh-border-gray-300" />
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                        {"Alternative Methods to Unsubscribe:"}
                      </strong>
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Text Messages"}
                        </strong>
                        {": You can also unsubscribe by texting "}
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"STOP"}
                        </strong>
                        {" to "}
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"CRUMBLEZ (366466)"}
                        </strong>
                        {" at any time."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Email"}
                        </strong>
                        {": Look for the unsubscribe link at the bottom of any marketing email you receive from Crumblez."}
                      </li>
                    </ul>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"If you need additional assistance, contact 1-800-366-4667 or you may "}
                      <a href="https://contactus.myastutesolutions.com/Dominos/index.html" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"click here"}
                      </a>
                      {" to send us an email.\nTo read our privacy policy, "}
                      <Link href="/content/privacy" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"click here"}
                      </Link>
                      {"."}
                    </p>
                  </div>
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
