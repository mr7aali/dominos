/* eslint-disable */
// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Pizza Delivery & Carryout, Pasta, Wings & More | Crumblez",
  "description": "Order pizza, pasta, sandwiches & more online for carryout or delivery from Crumblez. View menu, find locations, track orders. Sign up for Crumblez email & text offers to get great deals on your next order.",
  "alternates": {
    "canonical": "/en/content/biometric-data-policy"
  },
  "robots": "index"
};

export function ContentBiometricDataPolicyPage() {
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
                  {"Biometric Data Policy"}
                </h1>
              </div>
            </header>
            <div className="bg-background-primary lg:flex lg:flex-col">
              <div className="flex w-full max-w-screen-xl flex-col gap-xx-large self-center px-medium pb-xx-large pt-x-large md:gap-mega-1 md:px-x-large md:pb-mega-1 lg:gap-mega-1 lg:pb-mega-1 lg:pt-mega-1">
                <div className="sh-p-regular">
                  <div>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      <Link href="/content/terms-of-use" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Terms Of Use"}
                      </Link>
                      {" | "}
                      <Link href="/content/accessibility-policy" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Accessibility Policy"}
                      </Link>
                      {" | "}
                      <Link href="/content/privacy" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Privacy Policy"}
                      </Link>
                      {" | "}
                      <Link href="/content/gift-card-policy" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Gift Cards"}
                      </Link>
                      {" | "}
                      <Link href="/content/terms-of-use#california-transparency-in-supply-chains-act" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"CA Transparency In Supply Chains Act Disclosure"}
                      </Link>
                      {" | "}
                      <Link href="/content/biometric-data-policy" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Biometric Data Policy For Employees Of Crumblez LLC"}
                      </Link>
                    </p>
                    <h2 id="purpose" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Purpose"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"The purpose of this policy is to define the policy and procedures for the collection, use, safeguarding, storage, retention, and destruction of biometric data. It is the policy of Crumblez LLC and its parents, subsidiaries, and affiliates (the \"Company\") to protect, use, and store biometric data in accordance with all applicable laws including, but not limited to, the Illinois Biometric Information Privacy Act and the Colorado Privacy Act (C.R.S. §6-1-1306)."}
                    </p>
                    <h2 id="biometric-data-defined" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Biometric Data Defined"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"As used in this policy, biometric data includes \"biometric identifiers\" and \"biometric information.\""}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"\"Biometric identifier\" means data generated by the technological processing, measurement, or analysis of an individual's biological, physical, or behavioral characteristics, including but not limited to a retina or iris scan, fingerprint, voiceprint, scan of hand or face geometry, facial mapping, facial templates, or other unique biological, physical, or behavioral patterns or characteristics used to identify a specific individual, which can be processed for identification. Biometric identifiers do not include writing samples, written signatures, photographs (unless as described below), human biological samples used for valid scientific testing or screening, demographic data, tattoo descriptions, or physical descriptions such as height, weight, hair color, or eye color. Biometric identifiers do not include information captured from a patient in a health care setting or information collected, used, or stored for health care treatment, payment, or operations under the federal Health Insurance Portability and Accountability Act of 1996."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"\"Biometric information\" or \"Biometric Data\" means any information, regardless of how it is captured, converted, stored, or shared, based on an individual's biometric identifier that are used, or intended to be used, singly or in combination with each other or with other Personal Data, to identify an individual. Unless such data is used for identification purposes, \"Biometric information\" or \"Biometric Data\" does not include (a) a digital or physical photograph, (b) an audio or video recording, or (c) any data generated from a digital or physical photograph or an audio or video recording or other information derived from items or procedures excluded under the definition of biometric identifiers."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"\"Personal Data\" (a) means information that is linked or reasonably linkable to an identified or identifiable individual; and (b) does not include de-identified data or publicly available information."}
                    </p>
                    <h2 id="the-companys-collection-of-biometric-data" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"The Company's Collection of Biometric Data"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"The Company and its third-party vendor, UKG, which provides the Company's time and attendance software, collect, store, and use biometric data for the purpose of identifying employees and recording time entries when utilizing the Company's biometric timeclocks or timeclock attachments."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Biometric timeclocks are computer-based systems that scan an employee's finger or hand for purposes of identification. The computer system extracts unique data points and creates a unique mathematical representation used to verify the employee's identity; for example, when the employee arrives at or departs from the workplace."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"This data is collected, stored, and used to identify employees and record time."}
                    </p>
                    <h2 id="disclosure" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Disclosure"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"To the extent that the Company, and its third-party vendor UKG, collect, capture, or otherwise obtain biometric data relating to an employee, the Company:"}
                    </p>
                    <ol style={{ listStyleType: "upper-alpha" }} className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-decimal sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Will inform the employee about the collection, storage, and use of such biometric data;"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Will inform the employee of the specific purpose and length of time for which the biometric data is being collected, stored, and used;"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Will receive a written release executed by the employee (or his/her legally authorized representative) authorizing the Company, its third-party vendor(s), and/or the licensor(s) of the Company's time and attendance software to collect, store, and use the employee's biometric data for the specific purposes disclosed by the Company, and for the Company to provide such biometric data to its third-party vendor UKG; and"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                          {"Will not disclose, redisclose, or otherwise disseminate an employee's biometric data unless:"}
                        </p>
                        <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                          <li className="sh-text-ui-dark-cool sh-typo-body-1">
                            {"The employee or his/her legally authorized representative consents to such disclosure or redisclosure;"}
                          </li>
                          <li className="sh-text-ui-dark-cool sh-typo-body-1">
                            {"The disclosure or redisclosure completes a financial transaction requested or authorized by the employee or his/her legally authorized representative;"}
                          </li>
                          <li className="sh-text-ui-dark-cool sh-typo-body-1">
                            {"The disclosure or redisclosure is required by federal, state, or local law; or"}
                          </li>
                          <li className="sh-text-ui-dark-cool sh-typo-body-1">
                            {"The disclosure is required pursuant to a valid warrant or subpoena issued by a court of competent jurisdiction."}
                          </li>
                        </ul>
                      </li>
                    </ol>
                    <h2 id="retention-schedule" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Retention Schedule"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"The Company will retain employee biometric data only until, and will request that its third-party vendor UKG destroy such data when the first of the following occurs, unless such destruction is prohibited by law:"}
                    </p>
                    <ol style={{ listStyleType: "upper-alpha" }} className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-decimal sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"The date the initial purpose for collecting or obtaining such biometric data has been satisfied, such as the separation of the employee's employment with the Company or the Company ceasing to use biometric data; or "}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Within 24 months' of the employee's last interaction with the Company; or"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Within 45 days of the Company's determination that storage of the biometric identifier is no longer necessary, adequate, or relevant to the processing purpose"}
                      </li>
                    </ol>
                    <h2 id="data-storage-transmission-and-protection" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Data Storage, Transmission, and Protection"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"The Company will store, transmit, and protect biometric data using a reasonable standard of care. Such storage, transmission, and protection from disclosure will be performed in a manner that is the same as or more protective than the manner in which the Company stores, transmits, and protects from disclosure other confidential and sensitive information of the Company and its employees. The Company maintains a protocol for responding to data security incidents that could compromise the security of either biometric identifiers or biometric data, and will notify you in the event of any such data security incident."}
                    </p>
                    <h2 id="questions-or-accommodations" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Questions or Accommodations"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"If you have any questions or want to request an accommodation based on religious, cultural, medical, or other reasons, contact your PeopleFirst representative or the Team Member Service Center at (877) 921-8326."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
