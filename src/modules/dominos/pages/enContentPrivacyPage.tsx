/* eslint-disable */
// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Pizza Delivery & Carryout, Pasta, Wings & More | Crumblez",
  "description": "Order pizza, pasta, sandwiches & more online for carryout or delivery from Crumblez. View menu, find locations, track orders. Sign up for Crumblez email & text offers to get great deals on your next order.",
  "alternates": {
    "canonical": "/en/content/privacy"
  },
  "robots": "index"
};

export function EnContentPrivacyPage() {
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
                  <Link className="sh-block sh-whitespace-nowrap sh-px-regular sh-py-small sh-typo-subhead-2 focus:sh-rounded-sm focus:sh-outline focus:sh-outline-1 focus:sh-outline-neutral-white lg:sh-typo-label-2" data-dpz-track-evt-name="Blue Nav - Menu" href="/en/menu">
                    {"Menu"}
                  </Link>
                </li>
                <li className="sh-col-span-2">
                  <Link className="sh-block sh-whitespace-nowrap sh-px-regular sh-py-small sh-typo-subhead-2 focus:sh-rounded-sm focus:sh-outline focus:sh-outline-1 focus:sh-outline-neutral-white lg:sh-typo-label-2" data-dpz-track-evt-name="Blue Nav - Deals" href="/en/deals">
                    {"Deals"}
                  </Link>
                </li>
                <li className="sh-col-span-2">
                  <Link className="sh-block sh-whitespace-nowrap sh-px-regular sh-py-small sh-typo-subhead-2 focus:sh-rounded-sm focus:sh-outline focus:sh-outline-1 focus:sh-outline-neutral-white lg:sh-typo-label-2" data-dpz-track-evt-name="Blue Nav - My Rewards" href="/en/my-deals-and-rewards">
                    {"My Rewards"}
                  </Link>
                </li>
                <li className="sh-col-span-2">
                  <Link className="sh-block sh-whitespace-nowrap sh-px-regular sh-py-small sh-typo-subhead-2 focus:sh-rounded-sm focus:sh-outline focus:sh-outline-1 focus:sh-outline-neutral-white lg:sh-typo-label-2" data-dpz-track-evt-name="Blue Nav - Tracker" href="/en/tracker">
                    {"Tracker"}
                  </Link>
                </li>
              </ul>
              <Link aria-label="Crumblez logo link, home page" className="sh-col-start-2 sh-row-start-1 sh-flex sh-items-center sh-justify-center sh-px-regular sh-py-small focus:sh-rounded-sm focus:sh-outline focus:sh-outline-1 focus:sh-outline-neutral-white" data-testid="crumblez-logo-button" href="/en">
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
                  {"Privacy Policy"}
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
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                        {"Effective Date: April 13, 2026"}
                      </strong>
                    </p>
                    <h2 id="introduction" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Introduction"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"This Privacy Policy describes Crumblez data practices regarding information we collect about you and the choices available to you regarding such information. For purposes of this Privacy Policy, \""}
                      <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                        {"information"}
                      </strong>
                      {"\" or \""}
                      <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                        {"personal information"}
                      </strong>
                      {"\" means information relating to an identified or identifiable individual, and \""}
                      <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                        {"Crumblez"}
                      </strong>
                      {"\" refers to Crumblez LLC, the franchisor and data controller, and its subsidiaries."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"This Privacy Policy applies to information we collect where Crumblez controls the purposes and means of processing, specifically information collected:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Through our consumer websites (e.g., www.dominos.com) (\""}
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Web Sites"}
                        </strong>
                        {"\"), mobile apps (e.g., iOS and Android) (\""}
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Applications"}
                        </strong>
                        {"\"), voice-activated skills (e.g., Alexa) (\""}
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Skills"}
                        </strong>
                        {"\"), and any other online platform or service that links to this Privacy Policy (collectively, the \""}
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Service"}
                        </strong>
                        {".\")"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Through orders placed via the Service, by phone, or in-store at a franchisee location to the extent Crumblez (not the franchisee) determines the purposes and means of processing."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"From other sources, as described below, where we link or combine such information with information covered by this Privacy Policy."}
                      </li>
                    </ul>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"This Privacy Policy does not cover:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Data practices of our franchisees (each is a separate legal entity with its own privacy policy)."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Situations in which Crumblez processes information solely on behalf of its franchisees."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Third parties whose processing we do not control."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Recruitment, hiring, or employment-related information."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Information that has been anonymized, or where permitted by law, de-identified."}
                      </li>
                    </ul>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"See additional disclosures if you live in the following regions:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"US States"}
                        </strong>
                        {": "}
                        <a href="#california" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"California"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Colorado"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Connecticut"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Delaware"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Indiana"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Iowa"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Kentucky"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Maryland"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Minnesota"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Montana"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Nebraska"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"New Hampshire"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"New Jersey"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Oregon"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Rhode Island"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Tennessee"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Texas"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Utah"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Virginia"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"International"}
                        </strong>
                        {": "}
                        <a href="#eea-switzerland-and-the-uk" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"European Economic Area"}
                        </a>
                        {"; "}
                        <a href="#eea-switzerland-and-the-uk" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"United Kingdom"}
                        </a>
                        {"; "}
                        <a href="#eea-switzerland-and-the-uk" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Switzerland"}
                        </a>
                      </li>
                    </ul>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Your use of the Service is subject to our "}
                      <Link href="/content/terms-of-use" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Terms of Use"}
                      </Link>
                      {". For our contact details, see the "}
                      <a href="#contact-us" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Contact Us"}
                      </a>
                      {" section below."}
                    </p>
                    <h2 id="collection" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Collection"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"This section describes the information we collect and how we collect it."}
                    </p>
                    <h3 id="information-you-provide-to-dominos" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Information You Provide to Crumblez"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Crumblez collects information you provide directly to us. The categories of information we collect in this context include:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Contact Identifiers"}
                        </strong>
                        {", including your name, postal address, email address, and phone number."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Commercial or Transactions Information"}
                        </strong>
                        {", including records of products or services you purchased, obtained, or considered, such as your order details and coupons."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Account Credentials"}
                        </strong>
                        {", including your password and other information for authentication and account access."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Payment Information"}
                        </strong>
                        {", including your payment instrument number (such as a credit or debit card number), expiration date, and security code. This information is processed by our payment processors and tokenized."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Profile Information"}
                        </strong>
                        {", including your favorites and preferences."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Content"}
                        </strong>
                        {", including product reviews, feedback or other content you provide to us."}
                      </li>
                    </ul>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Examples of how Crumblez collects this information include:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Orders"}
                        </strong>
                        {". You can place an order via the Service, by phone, or in-store at a franchisee location. As part of this process, Crumblez may require you to provide your contact identifiers, commercial or transactions information, and payment information. If you place the order by phone or in-store at a franchisee location, the franchisee may also collect and process the information you provide in accordance with its own privacy policy."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Profile"}
                        </strong>
                        {". You can register a profile via the Service. As part of this process, Crumblez will require you to provide contact identifiers and account credentials. Crumblez may also ask you to fill out your profile using profile information and to save your payment information for future orders."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Crumblez Rewards"}
                        </strong>
                        {". You can join Crumblez Rewards by registering a profile via the Service. Crumblez will collect information you provide as indicated above."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Promotions"}
                        </strong>
                        {". In addition to Crumblez Rewards, Crumblez may offer other promotions (e.g., sweepstakes, contests, or surveys). To participate, you may be required to register a profile via the Service or separately provide information such as contact identifiers or content."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Order Tracking"}
                        </strong>
                        {". You can track your order and potentially communicate with your driver by providing your contact identifiers."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Customer Support"}
                        </strong>
                        {". You can contact our Customer Support team by email, through our online form, or by chatting with our Support Bot. When you contact us, you may be required to provide contact identifiers, commercial or transactions information, content, and other information in connection with your request."}
                      </li>
                    </ul>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Please do not provide information that we do not request."}
                    </p>
                    <h3 id="information-from-your-device" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Information from Your Device"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"When you use the Service, we and third parties we work with automatically collect information from your browser or device. The categories of information we automatically collect in this context include:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Device identifiers"}
                        </strong>
                        {", including your device's IP address, MAC address, and Ad ID."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Device information"}
                        </strong>
                        {", including your device's operating software and browser (e.g., type, version, and configuration), internet service provider, and regional and language settings."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Internet activity"}
                        </strong>
                        {", including information about your browsing history and interactions, such as the features you use, pages you visit, content, ads, and emails you view, purchases you make or consider, time of day you browse, and referring and exiting pages."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Non-precise location data"}
                        </strong>
                        {", such as location derived from an IP address or data that indicates a city or postal code level."}
                      </li>
                    </ul>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"This information is automatically collected through cookies and other tracking technologies incorporated into our Service, as described below:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Cookies"}
                        </strong>
                        {". Cookies are browser-based text files which are dropped on your browser when you visit a website, open or click on an email, or interact with an advertisement. There are various types of cookies, including session cookies (which are cookies that expire when you close your browser) and persistent cookies (which are cookies that do not expire until a set expiration date or you manually delete them). Cookies may be first party (which are cookies served directly by us) or third party (which are cookies served by third parties we work with)."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Pixels"}
                        </strong>
                        {". Pixels (also known as web beacons) are code embedded in a service. There are various types of pixels, including image pixels (which are one-pixel transparent images) and JavaScript pixels (which contain JavaScript code). Pixels are often used in conjunction with cookies. When you access a service that contains a pixel, the pixel may permit us or a third party to collect information from your browser or device, or to drop or read cookies on your browser."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"App technologies"}
                        </strong>
                        {". App technologies are technologies included in apps that are not browser-based like cookies. For example, our Applications may include Software Development Kits (SDKs), which are tools released by third parties that provide certain functionality. When you access our Applications, these technologies may permit us or a third party to collect information from your browser or device."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Device Fingerprinting"}
                        </strong>
                        {". Device fingerprinting is the process of analyzing and combining sets of data from your device, such as JavaScript objects and installed fonts, to create a \"fingerprint\" and uniquely identify your browser or device."}
                      </li>
                    </ul>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"We use these tracking technologies for a variety of purposes, including to help make our Service work, personalize your browsing experience, prevent fraud and assist with security, perform measurement and analytics, offer abandon cart functionality, and provide advertising (including targeted advertising)."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"To exercise choice around tracking technologies, see "}
                      <a href="#your-privacy-choices" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Your Privacy Choices"}
                      </a>
                      {" below."}
                    </p>
                    <h3 id="sensitive-information-from-your-device" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Sensitive Information from Your Device"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"With your consent, we and third parties we work with collect information that may be considered sensitive under applicable law from your browser or device as follows:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Precise Location Data"}
                        </strong>
                        {". We collect data that can precisely locate your device (e.g., latitude/longitude) with your consent. For example, you can give us access to your precise location data to help us determine your delivery address or share your location with your driver."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Voice and Audio Data"}
                        </strong>
                        {". We collect your voice and other audio data through the microphone on your device when you activate a voice-activated skill. We only maintain the voice and audio data long enough to complete your request and then immediately delete it."}
                      </li>
                    </ul>
                    <h3 id="information-from-our-franchisees" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Information from Our Franchisees"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"We collect information, such as contact identifiers and commercial or transactions information, from our franchisees when you place an order by phone or in‑store at their locations. Typically, we process this information on the franchisee's behalf to fulfill and support your order, in which case the franchisee's privacy policy applies (please review it for details). If Crumblez determines the purposes and means of processing that information, then this Privacy Policy applies."}
                    </p>
                    <h3 id="information-from-other-sources" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Information from Other Sources"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"We also collect information from other sources. The categories of other sources from which we collect information include:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Delivery Marketplaces"}
                        </strong>
                        {". If you place an order through a delivery marketplace, such as Uber Eats or DoorDash, we receive your contact identifiers and commercial or transactions information."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Social Media"}
                        </strong>
                        {". If you interact with our social media channels, we may collect information associated with your profile. If you publicly reference us (such as through a hashtag), we may feature your post in our Service or marketing materials."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Business Partners"}
                        </strong>
                        {". We receive information from business partners that offer co-branded services, sell or distribute our products, or engage in joint marketing or promotional activities."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Third Party Vendors"}
                        </strong>
                        {". We receive information from vendors that provide analytics, advertising, security, and fraud prevention services to us."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Data Providers"}
                        </strong>
                        {". We receive information from licensors of private and public databases."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Publicly Available Sources"}
                        </strong>
                        {". We collect information in the public domain."}
                      </li>
                    </ul>
                    <h3 id="information-we-infer" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Information We Infer"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"We infer new information from other information we collect, including to generate information about your likely preferences or other characteristics."}
                    </p>
                    <h2 id="purposes-for-collection-and-use" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Purposes for Collection and Use"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"We collect and use information for the following purposes:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Providing Services and Fulfilling Orders"}
                        </strong>
                        {". We collect and use information to operate and maintain the Service, manage your profile, process and track orders (including delivery and pickup), and provide customer support."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Personalization"}
                        </strong>
                        {". We collect and use information to tailor content, recommendations, and offers to your interests and past interactions."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Communications"}
                        </strong>
                        {". We collect and use information to send transactional messages (e.g., order confirmations, security alerts, policy updates). We also collect and use information to personalize and send marketing messages, including by email, and, where you opt-in, text and push notifications."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Analytics"}
                        </strong>
                        {". We collect and use information to understand trends, usage, and activities, for example through surveys you respond to and tracking technologies that we incorporate into the Service (such as Google Analytics)."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Improvements"}
                        </strong>
                        {". We collect and use information to develop new features, enhance functionality, and train our models and algorithms."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                          <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                            {"Advertising"}
                          </strong>
                          {". We collect and use information to advertise our products and services. Various third parties such as ad agencies, ad networks, publishers, social media platforms, and technology providers may be involved in this process. For example, we place ads on third party publisher websites and social media platforms. These ads incorporate tracking technologies to help serve the ads, measure their performance, detect ad fraud, limit the frequency of ads shown, and provide insights. If you visit our Service after seeing an ad on a third party service, tracking technologies on our Service help us attribute conversions and determine how effectively we use our ad budgets."}
                        </p>
                        <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                          {"Some of the advertising we engage in may be “targeted advertising,” which is the practice of showing you more relevant or personalized ads based on your activity collected over time and across non-affiliated services. Targeted advertising often involves us incorporating third party tracking technology into our Service or providing (often hashed) contact or device identifiers to a third party, which then matches common factor between our data and their data (or a partner’s data) to serve ads to you or individuals like you. For example, we incorporate the Meta pixel on our website to serve ads to audiences created by Meta based on the data we provide."}
                        </p>
                        <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                          {"We also use audience modeling services, where we and a partner each provide (often hashed) data to a technology provider. The technology provider then matches common factors between our and the partner’s data to allow us to gain insights into audience overlap and campaign effectiveness."}
                        </p>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Crumblez Rewards"}
                        </strong>
                        {". We collect and use information to provide you with Crumblez Rewards, including allowing you to redeem awards when you place an order. Please review the Crumblez Rewards Terms for details."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Promotions"}
                        </strong>
                        {". When you enter a promotion, we collect and use information to provide the promotion to you subject to any terms that specifically govern the promotion. By entering a promotion, you agree to the official terms that govern that promotion, and that, except where prohibited by applicable law, we, the sponsor, and related entities may use your name, voice and/or likeness in advertising or marketing materials."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Security and enforcement"}
                        </strong>
                        {". We collect and use information to prevent, detect, investigate, and address fraud, breach of policies or terms, or threats or harm."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"At your direction or with your consent"}
                        </strong>
                        {". We collect and use information for additional purposes where you direct us to use it in a certain way or with notice to you and your consent."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Non-personal information"}
                        </strong>
                        {". Sometimes we anonymize or deidentify information so it is no longer considered personal information under applicable law. Where we deidentify information, we commit to maintain and use the deidentified information in deidentified form and not attempt to reidentify it. We may use non-personal information for any purpose to the extent permitted by applicable law."}
                      </li>
                    </ul>
                    <h2 id="disclosure" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Disclosure"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"We disclose information we collect for the purposes described in this Privacy Policy. The categories of persons to whom we disclose information include:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Service Providers"}
                        </strong>
                        {". Crumblez discloses information to service providers that collect and process information on our behalf. This includes entities that help us with maintaining and operating our Service, payment processing, data analytics, marketing and advertising, and other business purposes. To the extent required by law, we contractually limit our service providers from retaining, using, or disclosing information for any purpose other than performing these functions, although we may permit them to use non-personal information for any purpose to the extent permitted by applicable law."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Third Party Vendors"}
                        </strong>
                        {". Some of the third parties we work with independently control the purposes and means of processing your information. For example, we disclose information to vendors that provide analytics, security, and fraud prevention services to us. We also disclose information to ad networks, technology providers, and other third parties that help provide targeted advertising."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Affiliates"}
                        </strong>
                        {". We disclose information to our affiliates and related entities, including where they act as our service providers subject to this Privacy Policy or use the information in accordance with their own privacy policies."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Franchisees"}
                        </strong>
                        {". We disclose information to our franchisees in connection with the services we provide to them. For example, we disclose information to process your orders, manage and administer your online accounts, handle inquiries and requests, market and advertise to you, and otherwise comply with applicable law. Franchisees are independent entities, and their processing of information is subject to their own privacy policies."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Delivery Marketplaces"}
                        </strong>
                        {". If you place an order through a delivery marketplace, such as Uber Eats or DoorDash, we disclose information for that marketplace to process and fulfill your order."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Business Partners"}
                        </strong>
                        {". We disclose information with our business partners in connection with offering you co-branded services, selling or distributing our products, or engaging in joint marketing or promotional activities."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Merger or Acquisition"}
                        </strong>
                        {". We disclose information in connection with, or during negotiations of, any proposed or actual merger, purchase, sale or any other type of acquisition or business combination of all or any portion of our assets, or transfer of all or a portion of our business to another business."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Security and Enforcement"}
                        </strong>
                        {". We disclose information to comply with the law or other legal process, and where required, in response to lawful requests by public authorities, including to meet national security or law enforcement requirements. We also disclose information to protect the rights, property, life, health, security and safety of us, the Service or anyone else."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"At Your Direction or With Your Consent"}
                        </strong>
                        {". We disclose information where you direct us to or with notice to you and your consent."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Non-personal information"}
                        </strong>
                        {". We may disclose non-personal information for any purpose to the extent permitted by applicable law."}
                      </li>
                    </ul>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"To exercise choice around our disclosures, see "}
                      <a href="#your-privacy-choices" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Your Privacy Choices"}
                      </a>
                      {" below."}
                    </p>
                    <h2 id="third-parties" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Third Parties"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Our Service may link to, or be incorporated into, websites and online services controlled by third parties. In addition, we may integrate technologies into our Service, including those disclosed in the "}
                      <a href="#collection" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Collection"}
                      </a>
                      {" section above, controlled by third parties. Except where third parties act as our service providers, they, and not us, control the purposes and means of processing any information they collect from you, and you should contact them directly to address any concerns you have about their processing. Third party data practices are subject to their own policies and disclosures, including what information they collect, your choices, and whether they store information in the U.S. or elsewhere. We encourage you to familiarize yourself with and consult their privacy policies and terms of use."}
                    </p>
                    <h2 id="your-privacy-choices" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Your Privacy Choices"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"This section describes the choices available to you regarding your information."}
                    </p>
                    <h3 id="profile" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Profile"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"If you have a profile with the Service, you can edit your profile through your profile settings. To delete your profile, you must contact us. See the "}
                      <a href="#contact-us" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Contact Us"}
                      </a>
                      {" section below. We will address your request in accordance with our data retention practices."}
                    </p>
                    <h3 id="browser-and-device-controls" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Browser and Device Controls"}
                    </h3>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Cookies and Pixels"}
                        </strong>
                        {". You may be able to manage cookies through your browser settings. When you manage cookies, pixels associated with such cookies may also be impacted. Please note that cookie management only applies to our Web Site. If you use multiple browsers, you will need to instruct each browser separately. If you delete or reset your cookies, you will need to reconfigure your settings. Your ability to limit cookies is subject to your browser settings and limitations."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"App Technologies"}
                        </strong>
                        {". Unlike cookies, app technologies cannot be controlled by your browser settings. For some platforms (like Apple iOS), we will only receive access to your device's Ad ID if you provide consent. You can reset your device's Ad ID through your device settings, which is designed to limit how the prior Ad ID can be used. See your device settings for details. You can stop all collection of information through an Application by uninstalling the Application."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Precise Location Technologies"}
                        </strong>
                        {". You can stop collection of precise location data within an app through your device settings or by uninstalling the Application."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Preference Signals"}
                        </strong>
                        {". Your browser or extension may allow you to automatically transmit a \"Do Not Track\" signal to online services you visit. Except where required by law, Crumblez does not respond to \"Do Not Track\" signals or other preference signals."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Third party opt-out tools"}
                        </strong>
                        {". Some third parties we work with offer their own opt-out tools related to information collected through cookies and pixels. To opt out of your information being used by Google Analytics, please visit "}
                        <a href="https://tools.google.com/dlpage/gaoptout" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://tools.google.com/dlpage/gaoptout"}
                        </a>
                        {". We are not responsible for the effectiveness of their tools."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Industry opt-out tools for targeted advertising"}
                        </strong>
                        {". Some third parties we work with are part of the National Advertising Initiative or follow the Digital Advertising Alliance's Self-Regulatory Principles for Online Behavioral Advertising, which offer their own opt-outs tools for targeted advertising. For details, visit "}
                        <a href="https://www.networkadvertising.org/choices/" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://www.networkadvertising.org/choices/"}
                        </a>
                        {" and "}
                        <a href="https://youradchoices.com/control" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://youradchoices.com/control"}
                        </a>
                        {". We are not responsible for the effectiveness of their tools."}
                      </li>
                    </ul>
                    <h3 id="communications" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Communications"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"You can opt-out of receiving certain communications from us as follows:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Emails"}
                        </strong>
                        {". To stop receiving marketing emails, follow the unsubscribe instructions near the bottom of such emails, or visit "}
                        <Link href="/content/unsubscribe" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://www.dominos.com/content/unsubscribe"}
                        </Link>
                        {" and complete the online form to be removed from email marketing lists. Please note that you cannot opt out of transactional emails."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Text Messages"}
                        </strong>
                        {". To stop receiving text messages that you have opted-in to, text STOP to 366466 or visit "}
                        <Link href="/content/unsubscribe" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://www.dominos.com/content/unsubscribe"}
                        </Link>
                        {" and complete the online form to be removed from the text messaging list."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Push Notifications"}
                        </strong>
                        {". If you have opted-in to receive push notifications on your device, you can opt-out by adjusting your device settings or uninstalling the app."}
                      </li>
                    </ul>
                    <h3 id="region-specific-choice" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Region-Specific Choice"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"See additional disclosures regarding your rights if you live in the following regions:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"US States"}
                        </strong>
                        {": "}
                        <a href="#california" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"California"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Colorado"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Connecticut"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Delaware"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Indiana"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Iowa"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Kentucky"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Maryland"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Minnesota"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Montana"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Nebraska"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"New Hampshire"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"New Jersey"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Oregon"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Rhode Island"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Tennessee"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Texas"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Utah"}
                        </a>
                        {"; "}
                        <a href="#colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Virginia"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"International"}
                        </strong>
                        {": "}
                        <a href="#eea-switzerland-and-the-uk" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"European Economic Area"}
                        </a>
                        {"; "}
                        <a href="#eea-switzerland-and-the-uk" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"United Kingdom"}
                        </a>
                        {"; "}
                        <a href="#eea-switzerland-and-the-uk" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Switzerland"}
                        </a>
                      </li>
                    </ul>
                    <h2 id="gift-cards" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Gift Cards"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"For details about how we process information for Gift Cards, please see our "}
                      <Link href="/content/gift-cards" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Gift Card Policy"}
                      </Link>
                      {"."}
                    </p>
                    <h2 id="international-transfer" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"International Transfer"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"We are based in the U.S. If you are located outside the U.S., please be aware that your information may be transferred to and processed in the U.S. and other jurisdictions. Data protection laws in the U.S. and other jurisdictions may be different from those of your country of residence. Where required by applicable law, we will provide appropriate safeguards for data transfers."}
                    </p>
                    <h2 id="children" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Children"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"The Service is not directed toward children under 16 years old. If you are a parent or guardian and believe we have collected information from children in violation of applicable law, please contact us as set out in the "}
                      <a href="#contact-us" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Contact Us"}
                      </a>
                      {" section below."}
                    </p>
                    <h2 id="security" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Security"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Crumblez maintains reasonable physical, electronic, and procedural safeguards to help guard your information from loss, theft, misuse and unauthorized access, disclosure, alteration, and destruction. Please be aware, however, that transmission via the internet cannot be completely protected, and we cannot guarantee the security of information about you."}
                    </p>
                    <h2 id="retention" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Retention"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"We retain information for the length of time that is reasonably necessary for the purpose for which it was collected, and as necessary to comply with our legal obligations, resolve disputes, prevent fraud, and enforce our agreements."}
                    </p>
                    <h2 id="changes-to-this-privacy-policy" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Changes to this Privacy Policy"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Crumblez reserves the right to modify or supplement this policy at any time. Any changes will be effective immediately upon posting of the revised Privacy Policy. Your continued use of our Service indicates your consent to the Privacy Policy then posted. If the changes are material, we may provide additional notice to you, such as through email or prominent notice on the Web Sites or Applications."}
                    </p>
                    <h2 id="contact-us" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Contact Us"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"If you have questions about our practices regarding your information or have trouble accessing this Privacy Policy, please contact us:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                          <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                            {"By Mail"}
                          </strong>
                          {":"}
                          <br />
                          {"Crumblez LLC"}
                          <br />
                          {"ATTN: Customer Care"}
                          <br />
                          {"30 Frank Lloyd Wright Drive, Ann Arbor MI 48105"}
                        </p>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                          <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                            {"By Email"}
                          </strong>
                          {":"}
                          <br />
                          <a href="mailto:privacy@dominos.com" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                            {"privacy@dominos.com"}
                          </a>
                        </p>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                          <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                            {"Through Our Form"}
                          </strong>
                          {":"}
                          <br />
                          <a href="https://contactus.myastutesolutions.com/Dominos/index.html" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                            {"Contact Us"}
                          </a>
                        </p>
                      </li>
                    </ul>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"The individual with primary responsibility for directing the policies and procedures under this Privacy Policy is Kelly Garcia, EVP—Chief Technology & Data Officer, who may be contacted through the postal and email addresses above."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"For International requests, you can also direct your request to "}
                      <a href="mailto:GDPR@dominos.com" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"GDPR@dominos.com"}
                      </a>
                      {"."}
                    </p>
                    <h2 id="region-specific-disclosures" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Region-Specific Disclosures"}
                    </h2>
                    <h3 id="california" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"California"}
                    </h3>
                    <h4 id="notice-at-collection" className="sh-mb-regular sh-mt-regular sh-text-blue sh-typo-subhead-2">
                      {"Notice at Collection"}
                    </h4>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"For residents of California, at or before the time of collection of your personal information, you have the right to receive notice of our data practices. Our data practices are as follows:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Collection."}
                        </strong>
                        {" The categories of personal information we have collected in the past 12 months and the categories of sources from which the personal information is collected are set out in the "}
                        <a href="#collection" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Collection"}
                        </a>
                        {" section above."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Purpose."}
                        </strong>
                        {" The specific business and commercial purposes for collecting and using personal information are set out in the "}
                        <a href="#purposes-for-collection-and-use" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Purposes for Collection and Use"}
                        </a>
                        {" section above."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Disclosure."}
                        </strong>
                        {" The categories of persons to whom personal information is disclosed, including service providers for business purposes, are set out in the "}
                        <a href="#disclosure" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Disclosure"}
                        </a>
                        {" section above. We disclose the categories of personal information listed in the "}
                        <a href="#collection" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Collection"}
                        </a>
                        {" section above to service providers for business purposes."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Sales and Shares."}
                        </strong>
                        {" Some of our disclosures of personal information may be considered a \"sale\" or “share” as those terms are defined under California privacy law. A “sale” is broadly defined to include a disclosure for something of value, and a “share” is broadly defined to include a disclosure for cross-context behavioral advertising. We collect, sell, or share the following categories of personal information for commercial purposes: contact identifiers, commercial or transactions information, characteristics or demographics, device identifiers, device information, internet activity, non-precise geolocation data and inferences drawn from any of the above. The categories of third parties to whom we may sell or share your personal information include, where applicable, vendors and other parties involved in cross-context behavioral advertising. We do not knowingly sell or share the personal information of minors under 16 years old who are California residents."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Sensitive Personal Information."}
                        </strong>
                        {" Some of the personal information we collect may be considered sensitive personal information under California law. For example, precise location data. We collect, use, and disclose sensitive personal information only for the permissible business purposes for sensitive personal information under California privacy law or without the purpose of inferring characteristics about consumers. We do not sell or share sensitive personal information."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Retention."}
                        </strong>
                        {" The criteria used to determine the period of time we retain your personal information is set out in the "}
                        <a href="#retention" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Retention"}
                        </a>
                        {" section above."}
                      </li>
                    </ul>
                    <h3 id="requests" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Requests"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"You have the right to exercise choice over your personal information as follows:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                          <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                            {"Verifiable Requests:"}
                          </strong>
                          {" You have the right to:"}
                        </p>
                        <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                          <li className="sh-text-ui-dark-cool sh-typo-body-1">
                            <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                              {"Know"}
                            </strong>
                            {" what personal information we have collected about you, specifically have the right to know the categories of sources from which personal information was collected, the business or commercial purposes for collecting, selling, or sharing personal information, the categories of personal information that we sold, shared, or disclosed for a business purpose, the categories of third parties to whom we disclosed personal information, and the specific pieces of personal information we have collected about you;"}
                          </li>
                          <li className="sh-text-ui-dark-cool sh-typo-body-1">
                            <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                              {"Correct"}
                            </strong>
                            {" inaccurate personal information we maintain about you; and"}
                          </li>
                          <li className="sh-text-ui-dark-cool sh-typo-body-1">
                            <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                              {"Delete"}
                            </strong>
                            {" personal information that we have collected from you."}
                          </li>
                        </ul>
                        <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                          {"These rights are verifiable rights, meaning that we need to verify your identity before fulfilling them. To exercise any of these rights, please submit a request through our form "}
                          <Link href="/data-privacy-rights" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                            {"here"}
                          </Link>
                          {" or call our toll free number at "}
                          <a href="tel:877-883-9641" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                            {"877-883-9641"}
                          </a>
                          {". If you have a profile with us, you can also correct certain of your information through your profile. We will confirm receipt of your request within 10 days. To verify your identity, we may require you to confirm receipt of an email sent to an email address that matches our records, provide us with details relating to your history with us, or provide additional information. If we cannot verify your identity, we may deny your request in accordance with applicable law."}
                        </p>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Sales and Shares."}
                        </strong>
                        {" You have the right to opt-out of us selling or sharing your personal information to third parties. To exercise this right, click "}
                        <Link href="/data-privacy-rights" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"CA Consumer Privacy Act"}
                        </Link>
                        {" to manage your technology preferences or turn on a recognized opt-out preference signal, such as "}
                        <a href="https://globalprivacycontrol.org/" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Global Privacy Control"}
                        </a>
                        {", in your browser or extension. Please note that when you opt-out through either of the above methods we do not know who you are within our systems, and your opt-out will apply only to information collected through tracking technologies on the specific browser from which you opt-out. If you delete or reset your cookies, or use a different browser or device, you will need to reconfigure your settings. If you are logged into your account when you submit the request, where required by law, we will apply the request to your account. If you want the opt-out to apply to information we have about you in our systems, such as your email address, please also submit a request through our "}
                        <Link href="/data-privacy-rights" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"CA Consumer Privacy Act"}
                        </Link>
                        {" form (specifying the right you wish to exercise)."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Shine the Light."}
                        </strong>
                        {" If you are a customer, you may request (i) a list of the categories of personal information disclosed by us to third parties during the immediately preceding calendar year for those third parties’ own direct marketing purposes; and (ii) a list of the categories of third parties to whom we disclosed such information. To make a request, please write us at the email or postal address set out in the "}
                        <a href="#contact-us" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Contact Us"}
                        </a>
                        {" section above and specify that you are making a “California Shine the Light Request.”"}
                      </li>
                    </ul>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"We have compiled metrics for the previous calendar year regarding the number of requests to know, requests to correct, requests to delete, and requests to opt out of sale and sharing that we received, complied with, and denied as well as the mean number of days within which we responded to each request. The metrics for 2026 are below."}
                    </p>
                    <table className="sh-my-large sh-border-cool-gray-600 sh-border-[1px] sh-w-full sh-table-auto sh-overflow-x-auto sh-block lg:sh-table">
                      <thead>
                        <tr>
                          <th style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal"></th>
                          <th style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"No. Received"}
                          </th>
                          <th style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"No. Complied"}
                          </th>
                          <th style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"No. Denied"}
                          </th>
                          <th style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"Mean Days to Respond"}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"Request to Know"}
                          </td>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"266"}
                          </td>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"266"}
                          </td>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"0"}
                          </td>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"5"}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"Request to Correct"}
                          </td>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"1"}
                          </td>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"0"}
                          </td>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"0"}
                          </td>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"2"}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"Request to Delete"}
                          </td>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"53,155"}
                          </td>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"53,155"}
                          </td>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"0"}
                          </td>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"42"}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"Request to Opt-out"}
                          </td>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"120,488"}
                          </td>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"120,488"}
                          </td>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"0"}
                          </td>
                          <td style={{ textAlign: "center" }} className="sh-border-cool-gray-600 sh-border-[1px] sh-p-tiny sh-whitespace-nowrap lg:sh-whitespace-normal">
                            {"5"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Your rights are subject to exceptions and our retention practices. You have the right not to be discriminated against for exercising your rights. To the extent permitted by law, rights requests must be exercised through the applicable designated method listed above. You may make a rights request using an authorized agent. Except for rights requests made by opt-out preference signal, we will require written and signed proof of the agent’s permission to do so and we may verify your identity directly with you."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Please note that Crumblez franchisees are independent entities and their processing of information is subject to their own privacy policies. If you wish to exercise any of these rights with respect to the processing of information by Crumblez franchisees, please visit your local franchise-owned and operated store location to effectuate your requests, and we will work with the franchisee to address your request to the extent required by applicable law."}
                    </p>
                    <h3 id="financial-incentives" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Financial Incentives"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Under the California privacy law, earned points in Crumblez Rewards loyalty program may be considered a financial incentive provided in exchange for the collection and retention of your personal information. The value of your personal information is based upon a comparison of the amount spent by loyalty program customers compared to similarly situated customers who do not participate in the loyalty program over a 12-month period and also includes the following considerations:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"categories of personal information collected;"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"transferability of such personal information;"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"the use of such personal information in connection with marketing activities; and/or"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"the volume of consumers enrolled in the loyalty program."}
                      </li>
                    </ul>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"We will update this over time as appropriate."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Note that you are provided with the material terms of the loyalty program when you join and are asked to provide your opt-in consent to participate, which you can withdraw from at any time. For further details of the loyalty program and its terms, including how to opt-in or withdraw your opt-in, refer to the loyalty program’s description and terms available at "}
                      <Link href="/en/my-deals-and-rewards" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"www.dominos.com/rewards"}
                      </Link>
                      {"."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"If you opt-out of the loyalty program, you can continue to receive most discounted prices by emailing us at "}
                      <a href="mailto:customercare@dominoscustomercare.com" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"customercare@dominoscustomercare.com"}
                      </a>
                      {"."}
                    </p>
                    <h3 id="colorado-connecticut-delaware-indiana-iowa-kentucky-maryland-minnesota-montana-nebraska-new-jersey-new-hampshire-oregon-rhode-island-tennessee-texas-utah-and-virginia" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Colorado, Connecticut, Delaware, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Jersey, New Hampshire, Oregon, Rhode Island, Tennessee, Texas, Utah, and Virginia"}
                    </h3>
                    <h4 id="data-practices" className="sh-mb-regular sh-mt-regular sh-text-blue sh-typo-subhead-2">
                      {"Data Practices"}
                    </h4>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"For residents of Colorado, Connecticut, Delaware, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, and Virginia, our practices regarding the collection, use, disclosure, and retention of your personal data are set out in the main Privacy Policy above."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Some of our disclosures of personal data may be considered a “sale” under applicable law, which is often defined to include a disclosure for something of value. We also may process your personal data for purposes of targeted advertising. We do not process personal data for purposes of profiling in furtherance of decisions that produce legal or similarly significant effects concerning consumers."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Some of the personal data we collect may be considered sensitive personal data under applicable law. For example, precise location data. We collect sensitive personal data with your consent."}
                    </p>
                    <h4 id="requests" className="sh-mb-regular sh-mt-regular sh-text-blue sh-typo-subhead-2">
                      {"Requests"}
                    </h4>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"You have the right to exercise choice over your data as follows:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                          <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                            {"Verifiable Requests:"}
                          </strong>
                          {" You have the right to:"}
                        </p>
                        <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                          <li className="sh-text-ui-dark-cool sh-typo-body-1">
                            <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                              {"Confirm"}
                            </strong>
                            {" whether or not we are processing your personal data"}
                          </li>
                          <li className="sh-text-ui-dark-cool sh-typo-body-1">
                            <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                              {"Access"}
                            </strong>
                            {" your personal data"}
                          </li>
                          <li className="sh-text-ui-dark-cool sh-typo-body-1">
                            <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                              {"Correct"}
                            </strong>
                            {" inaccuracies in your personal data"}
                          </li>
                          <li className="sh-text-ui-dark-cool sh-typo-body-1">
                            <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                              {"Delete"}
                            </strong>
                            {" your personal data;"}
                          </li>
                          <li className="sh-text-ui-dark-cool sh-typo-body-1">
                            <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                              {"Obtain"}
                            </strong>
                            {" a copy of your personal data that you previously provided to us in a portable and readily usable format."}
                          </li>
                        </ul>
                        <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                          {"If you are a Minnesota or Oregon resident, you also have the right to "}
                          <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                            {"obtain a list"}
                          </strong>
                          {" of the specific third parties to which we have disclosed personal data."}
                        </p>
                        <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                          {"If you are a Connecticut or Rhode Island resident, you also have the right to "}
                          <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                            {"obtain a list"}
                          </strong>
                          {" of the specific third parties to which we have sold personal information."}
                        </p>
                        <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                          {"If you are a Delaware or Maryland resident, you also have the right to "}
                          <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                            {"obtain a list"}
                          </strong>
                          {" of categories of third parties to which we have disclosed your personal data."}
                        </p>
                        <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                          {"These rights are verifiable rights, meaning that we need to verify your identity before fulfilling them. To exercise any of these rights, please submit a request through our form "}
                          <Link href="/data-privacy-rights" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                            {"here"}
                          </Link>
                          {" or call our toll free number at "}
                          <a href="tel:877-883-9641" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                            {"877-883-9641"}
                          </a>
                          {". If you have a profile with us, you can also correct certain of your information through your profile. We will confirm receipt of your request consistent with applicable law. To verify your identity, we may require you to confirm receipt of an email sent to an email address that matches our records, provide us with details relating to your history with us, or provide additional information. If we cannot verify your identity, we may deny your request in accordance with applicable law."}
                        </p>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Sales and Targeted Advertising."}
                        </strong>
                        {" You have the right to opt-out of us selling your personal data or processing your personal data for purposes of targeted advertising. To exercise this right, click "}
                        <Link href="/data-privacy-rights" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"here"}
                        </Link>
                        {" to manage your technology preferences or turn on a recognized opt-out preference signal, such as "}
                        <a href="https://globalprivacycontrol.org/" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Global Privacy Control"}
                        </a>
                        {", in your browser or extension. Please note that when you opt-out through either of the above methods we do not know who you are within our systems, and your opt-out will apply only to information collected through tracking technologies on the specific browser from which you opt-out. If you delete or reset your cookies, or use a different browser or device, you will need to reconfigure your settings. If you are logged into your account when you submit the request, where required by law, we will apply the request to your account. If you want the opt-out to apply to information we have about you in our systems, such as your email address, please also submit a request through our "}
                        <Link href="/data-privacy-rights" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"CA Consumer Privacy Act"}
                        </Link>
                        {" form (specifying the right you wish to exercise). "}
                        <span className="sh-text-blue">
                          {"We do not collect or use personal data to train large language models. However, when we sell personal data to third parties, they may use the data to train their own large language models. See their privacy policies for details."}
                        </span>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                          {"Consent."}
                        </strong>
                        {" You have the right to revoke consent previously given to us for the processing of your personal data. To revoke consent, write us at the email or postal address set out in the "}
                        <a href="#contact-us" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"Contact Us"}
                        </a>
                        {" section above (specifying the consent you wish to withdraw). If you withdraw consent, you may not be able to receive certain services related to that consent."}
                      </li>
                    </ul>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Your rights are subject to exceptions and our retention practices. You have the right not to be discriminated against for exercising any of your rights. To the extent permitted by law, rights requests must be exercised through the applicable designated methods listed above. You may make a rights request using an authorized agent. Except for rights requests made by opt out preference signal, we will require written and signed proof of the agent’s permission to do so and we may verify your identity directly with you."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Please note that Crumblez franchisees are independent entities and their processing of personal data is subject to their own privacy policies. If you wish to exercise any of these rights with respect to the processing of personal data by Crumblez franchisees, please visit your local franchise-owned and operated store location to effectuate your requests, and we will work with the franchisee to address your request to the extent required by applicable law."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"You have the right to appeal our decision in response to your request. To appeal, please write us at the email or postal address set out in the "}
                      <a href="#contact-us" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Contact Us"}
                      </a>
                      {" section above and specify what you wish to appeal. We will review and respond to your appeal in accordance with applicable law. If we deny your appeal, you may submit a complaint to your Attorney General as follows:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For Colorado residents: "}
                        <a href="https://coag.gov/file-complaint/" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://coag.gov/file-complaint/"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For Connecticut residents: "}
                        <a href="https://www.dir.ct.gov/ag/complaint/" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://www.dir.ct.gov/ag/complaint/"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For Delaware residents: "}
                        <a href="https://attorneygeneral.delaware.gov/fraud/cmu/complaint/" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://attorneygeneral.delaware.gov/fraud/cmu/complaint/"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For Indiana residents: "}
                        <a href="https://www.in.gov/attorneygeneral/consumer-protection-division/file-a-complaint/" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://www.in.gov/attorneygeneral/consumer-protection-division/file-a-complaint/"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For Iowa residents: "}
                        <a href="https://www.iowaattorneygeneral.gov/for-consumers/file-a-consumer-complaint/complaint-form" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://www.iowaattorneygeneral.gov/for-consumers/file-a-consumer-complaint/complaint-form"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For Kentucky residents: "}
                        <a href="https://www.ag.ky.gov/Resources/Consumer-Resources/Consumers/Pages/Consumer-Complaints.aspx" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://www.ag.ky.gov/Resources/Consumer-Resources/Consumers/Pages/Consumer-Complaints.aspx"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For Maryland residents: "}
                        <a href="https://www.marylandattorneygeneral.gov/Pages/CPD/Complaint.aspx" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://www.marylandattorneygeneral.gov/Pages/CPD/Complaint.aspx"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For Minnesota residents: "}
                        <a href="https://www.ag.state.mn.us/Office/Forms/ConsumerAssistanceRequestForm.pdf" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://www.ag.state.mn.us/Office/Forms/ConsumerAssistanceRequestForm.pdf"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For Montana residents: "}
                        <a href="https://dojmt.gov/consumer/" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://dojmt.gov/consumer/"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For Nebraska residents: "}
                        <a href="https://www.nebraska.gov/apps-ago-complaints/" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://www.nebraska.gov/apps-ago-complaints/"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For New Hampshire residents: "}
                        <a href="https://www.doj.nh.gov/citizens/consumer-protection-antitrust-bureau/consumer-complaints" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://www.doj.nh.gov/citizens/consumer-protection-antitrust-bureau/consumer-complaints"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For New Jersey residents: "}
                        <a href="https://www.njconsumeraffairs.gov/Pages/Consumer-Complaints.aspx" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://www.njconsumeraffairs.gov/Pages/Consumer-Complaints.aspx"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For Oregon residents: "}
                        <a href="https://justice.oregon.gov/consumercomplaints/" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://justice.oregon.gov/consumercomplaints/"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For Rhode Island residents: "}
                        <a href="https://riag.ri.gov/forms/consumer-complaint" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://riag.ri.gov/forms/consumer-complaint"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For Tennessee residents: "}
                        <a href="https://www.tn.gov/attorneygeneral/working-for-tennessee/consumer/file-a-complaint.html" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://www.tn.gov/attorneygeneral/working-for-tennessee/consumer/file-a-complaint.html"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For Texas residents: "}
                        <a href="https://oag.my.salesforce-sites.com/CPDOnlineForm" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://oag.my.salesforce-sites.com/CPDOnlineForm"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For Utah residents: "}
                        <a href="https://attorneygeneral.utah.gov/contact/complaint-form/" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://attorneygeneral.utah.gov/contact/complaint-form/"}
                        </a>
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"For Virginia residents: "}
                        <a href="https://www.oag.state.va.us/consumercomplaintform" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                          {"https://www.oag.state.va.us/consumercomplaintform"}
                        </a>
                      </li>
                    </ul>
                    <h3 id="eea-switzerland-and-the-uk" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"EEA, Switzerland, and the UK"}
                    </h3>
                    <h4 id="data-practices" className="sh-mb-regular sh-mt-regular sh-text-blue sh-typo-subhead-2">
                      {"Data Practices"}
                    </h4>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"For individuals located in the European Economic Area, Switzerland, or the United Kingdom, our practices regarding the collection, use, disclosure, and retention of your personal data are set out in the main Privacy Policy above."}
                    </p>
                    <h4 id="lawful-basis-for-processing" className="sh-mb-regular sh-mt-regular sh-text-blue sh-typo-subhead-2">
                      {"Lawful Basis for Processing"}
                    </h4>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Data protection laws in your region require a \"lawful basis\" for processing personal data. Our lawful bases include where: (a) you have given consent to the processing for one or more specific purposes, either to us or to our service providers, partners, or franchisees; (b) processing is necessary for the performance of a contract with you; (c) processing is necessary for compliance with a legal obligation; or (d) processing is necessary for the purposes of the legitimate interests pursued by us or a third party, and your interests and fundamental rights and freedoms do not override those interests. Some of our lawful bases for processing your information stem from our independent franchisees on whose behalf we provide services. Where applicable, we will transfer your personal data to third countries subject to appropriate safeguards, such as standard contractual clauses or Data Privacy Framework, as discussed below."}
                    </p>
                    <h4 id="requests" className="sh-mb-regular sh-mt-regular sh-text-blue sh-typo-subhead-2">
                      {"Requests"}
                    </h4>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"You have the right to access, rectify, or erase any personal data we have collected about you. You also have the right to data portability and the right to restrict or object to our processing of personal data we have collected about you. In addition, you have the right to ask us not to process your personal data (or provide it to third parties to process) for marketing purposes or purposes materially different than for which it was originally collected or subsequently authorized by you. You may withdraw your consent at any time for any data processing we do based on consent you have provided to us."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"To exercise any of these rights, submit a request through our form "}
                      <Link href="/data-privacy-rights" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"here"}
                      </Link>
                      {" or write us at the email or postal address set out in the "}
                      <a href="#contact-us" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Contact Us"}
                      </a>
                      {" section above (specifying the rights you wish to exercise)."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Please note that Crumblez franchisees are independent entities and their processing of personal data is subject to their own privacy policies. If you wish to exercise any of these rights with respect to the processing of personal data by Crumblez franchisees, please visit your local franchise-owned and operated store location to effectuate your requests, and we will work with the franchisee to address your request to the extent required by applicable law."}
                    </p>
                    <h4 id="complaints" className="sh-mb-regular sh-mt-regular sh-text-blue sh-typo-subhead-2">
                      {"Complaints"}
                    </h4>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"You have the right to lodge a complaint with the data protection regulator in your jurisdiction."}
                    </p>
                    <h4 id="data-transfer-and-data-privacy-framework" className="sh-mb-regular sh-mt-regular sh-text-blue sh-typo-subhead-2">
                      {"Data Transfer and Data Privacy Framework"}
                    </h4>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Crumblez LLC and its subsidiaries Crumblez Distribution LLC, Crumblez International Franchising Inc., and Crumblez International Payroll Services, Inc. (for this section collectively referred to as “Crumblez”) comply with the EU-U.S. Data Privacy Framework (EU-U.S. DPF), the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. Data Privacy Framework (Swiss-U.S. DPF) as set forth by the U.S. Department of Commerce. Crumblez has certified to the U.S. Department of Commerce that it adheres to the EU-U.S. Data Privacy Framework Principles (EU-U.S. DPF Principles) with regard to the processing of personal data received from the European Union in reliance on the EU-U.S. DPF and from the United Kingdom (and Gibraltar) in reliance on the UK Extension to the EU-U.S. DPF. Crumblez has certified to the U.S. Department of Commerce that it adheres to the Swiss-U.S. Data Privacy Framework Principles (Swiss-U.S. DPF Principles) with regard to the processing of personal data received from Switzerland in reliance on the Swiss-U.S. DPF. If there is any conflict between the terms in this Data Privacy Framework Notice and the EU-U.S. DPF Principles and/or the Swiss-U.S. DPF Principles, the DPF Principles shall govern. To learn more about the Data Privacy Framework (DPF) program, and to view our certification, please visit "}
                      <a href="https://www.dataprivacyframework.gov/" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"https://www.dataprivacyframework.gov/"}
                      </a>
                      {"."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Crumblez is responsible for the processing of personal data it receives under the DPF program and subsequently transfers to a third party acting as an agent on its behalf. Crumblez complies with the DPF Principles for all onward transfers of personal data from the EU, UK, and Switzerland, including the onward transfer liability provisions."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"The Federal Trade Commission has jurisdiction over Crumblez compliance with the EU-U.S. DPF, the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. DPF. In certain situations, Crumblez may be required to disclose personal data in response to lawful requests by public authorities, including to meet national security or law enforcement requirements."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"In compliance with the EU-U.S. DPF, the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. DPF, Crumblez commits to resolve DPF Principles-related complaints about our collection and use of your personal information. EU, UK, and Swiss individuals with inquiries or complaints regarding our handling of personal data received in reliance on the EU-U.S. DPF, the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. DPF should first contact Crumblez at: "}
                      <a href="mailto:privacy@dominos.com" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"privacy@dominos.com"}
                      </a>
                      {"."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"In compliance with the EU-U.S. DPF, the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. DPF, Crumblez commits to refer unresolved complaints concerning our handling of Non-HR personal data received in reliance on the EU-U.S. DPF, the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. DPF to JAMS, an alternative dispute resolution provider based in the United States. For clarity, Non-HR data includes all personal data processed by Crumblez on behalf of its customers. If you do not receive timely acknowledgment of your DPF Principles-related complaint from Crumblez, or if Crumblez has not addressed your DPF Principles-related complaint to your satisfaction, please visit "}
                      <a href="https://www.jamsadr.com/DPF-Dispute-Resolution" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"https://www.jamsadr.com/DPF-Dispute-Resolution"}
                      </a>
                      {" for more information or to file a complaint. The services of JAMS are provided at no cost to you."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"For complaints regarding DPF compliance not resolved by any of the other DPF mechanisms, you have the possibility, under certain conditions, to invoke binding arbitration. Further information can be found on the official DPF website at "}
                      <a href="https://www.dataprivacyframework.gov/" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"https://www.dataprivacyframework.gov/"}
                      </a>
                      {"."}
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
                          <Link className="sh-typo-body-2" href="/en/content/customer-support">
                            {"Customer Support"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/en/content/email-and-text-offers">
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
                          <Link className="sh-typo-body-2" href="/en/content/nutrition">
                            {"Nutrition"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/en/content/allergen-info">
                            {"Allergen Info"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/en/content/gluten-free-warning">
                            {"Gluten Free Warning"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/en/content/ingredients">
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
                          <Link className="sh-typo-body-2" href="/en/content/gift-cards">
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
                          <Link className="sh-typo-body-2" href="/en/content/carryout-insurance">
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
                          <Link className="sh-typo-body-2" href="/en/data-privacy-rights">
                            {"Do Not Sell or Share My Personal Information"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/en/content/privacy">
                            {"Privacy"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/en/content/terms-of-use">
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
                          <Link className="sh-typo-body-2" href="/en/content/customer-support">
                            {"Customer Support"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/en/content/email-and-text-offers">
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
                          <Link className="sh-typo-body-2" href="/en/content/nutrition">
                            {"Nutrition"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/en/content/allergen-info">
                            {"Allergen Info"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/en/content/gluten-free-warning">
                            {"Gluten Free Warning"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/en/content/ingredients">
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
                          <Link className="sh-typo-body-2" href="/en/content/gift-cards">
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
                          <Link className="sh-typo-body-2" href="/en/content/carryout-insurance">
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
                          <Link className="sh-typo-body-2" href="/en/data-privacy-rights">
                            {"Do Not Sell or Share My Personal Information"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/en/content/privacy">
                            {"Privacy"}
                          </Link>
                        </li>
                        <li>
                          <Link className="sh-typo-body-2" href="/en/content/terms-of-use">
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
