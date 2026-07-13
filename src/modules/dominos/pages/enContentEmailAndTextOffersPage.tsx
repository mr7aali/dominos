/* eslint-disable */
// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Pizza Delivery & Carryout, Pasta, Wings & More | Crumblez",
  "description": "Order pizza, pasta, sandwiches & more online for carryout or delivery from Crumblez. View menu, find locations, track orders. Sign up for Crumblez email & text offers to get great deals on your next order.",
  "alternates": {
    "canonical": "/en/content/email-and-text-offers"
  },
  "robots": "index"
};

export function EnContentEmailAndTextOffersPage() {
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
                  {"Email and Text Offers"}
                </h1>
              </div>
            </header>
            <div className="bg-background-primary lg:flex lg:flex-col">
              <div className="flex w-full max-w-screen-xl flex-col gap-xx-large self-center px-medium pb-xx-large pt-x-large md:gap-mega-1 md:px-x-large md:pb-mega-1 lg:gap-mega-1 lg:pb-mega-1 lg:pt-mega-1">
                <div className="sh-p-regular">
                  <div>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"  Crumblez delivers terrific coupons, online only deals and local money-saving offers through email and text messaging."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"  Sign up today to be the first to get these great offers."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"  SPAM-FREE ZONE. There is zero spam and your email address and phone number are never shared or sold by Crumblez LLC."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"  You may unsubscribe from Crumblez email and text offers at any time by "}
                      <Link href="/content/unsubscribe" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"clicking here"}
                      </Link>
                      {"."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"  If you are trying to enroll in text ordering, you can sign up in your "}
                      <Link href="/customer/profile" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Crumblez Profile"}
                      </Link>
                      {"."}
                    </p>
                    <form id="email-and-text-offers-form" className="sh-mt-regular sh-flex sh-flex-col sh-gap-regular sh-w-1/2">
                      <h4 id="select-how-you-would-like-to-receive-dominos-offers" className="sh-mb-regular sh-mt-regular sh-text-blue sh-typo-subhead-2">
                        {"Select how you would like to receive Crumblez offers:"}
                      </h4>
                      <div className="sh-flex sh-flex-row sh-gap-small">
                        <div className="sh-flex sh-gap-tiny sh-items-center">
                          <input type="radio" name="offerType" value="email_and_text" />
                          <label className="sh-text-ui-dark-cool sh-typo-body-1">
                            {"Email & Text"}
                          </label>
                        </div>
                        <div className="sh-flex sh-gap-tiny sh-items-center">
                          <input className="sh-flex" type="radio" name="offerType" value="email" />
                          <label className="sh-text-ui-dark-cool sh-typo-body-1">
                            {"Email Offers"}
                          </label>
                        </div>
                        <div className="sh-flex sh-gap-tiny sh-items-center">
                          <input className="sh-flex sh-gap-tiny sh-items-center" type="radio" name="offerType" value="text" />
                          <label className="sh-text-ui-dark-cool sh-typo-body-1">
                            {"Text Offers"}
                          </label>
                        </div>
                      </div>
                      <h4 id="enter-your-information-here" className="sh-mb-regular sh-mt-regular sh-text-blue sh-typo-subhead-2">
                        {"Enter your information here"}
                      </h4>
                      <div className="sh-w-full sh-flex sh-flex-row sh-gap-tiny sh-items-center">
                        <label htmlFor="email">
                          <span className="sh-text-red">
                            {"*"}
                          </span>
                        </label>
                        <input className="sh-mb-tiny sh-w-full" type="email" name="email" placeholder="Enter your email address" aria-required="true" />
                        {"  "}
                      </div>
                      <div className="sh-w-full sh-flex sh-flex-row sh-gap-tiny sh-items-center">
                        <label htmlFor="email">
                          <span className="sh-text-red">
                            {"*"}
                          </span>
                        </label>
                        <input className="sh-mb-tiny sh-w-full" type="email" name="confirmEmail" placeholder="Confirm email address" aria-required="true" />
                        {"  "}
                      </div>
                      <div className="sh-w-full sh-flex sh-flex-row sh-gap-tiny sh-items-center">
                        <label htmlFor="phone">
                          <span className="sh-text-red">
                            {"*"}
                          </span>
                        </label>
                        <input className="sh-mb-tiny sh-w-full" type="number" name="phone" placeholder="Mobile Number" aria-required="true" />
                        {"  "}
                      </div>
                      <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                        {"  Enter/Confirm your address\n  Used to determine your local Crumblez store"}
                      </p>
                      <div className="sh-w-full sh-flex sh-flex-row sh-gap-tiny sh-items-center">
                        <label htmlFor="address">
                          <span className="sh-text-red">
                            {"*"}
                          </span>
                        </label>
                        <input className="sh-mb-tiny sh-w-full" type="text" name="streetAddress" placeholder="Street address" />
                        {"  "}
                      </div>
                      <div className="sh-w-full sh-flex sh-flex-row sh-gap-tiny sh-items-center">
                        <label htmlFor="address">
                          <span className="sh-text-red">
                            {"*"}
                          </span>
                        </label>
                        <input className="sh-mb-tiny sh-w-full" type="text" name="city" placeholder="City" />
                        {"  "}
                      </div>
                      <div className="sh-w-full sh-flex sh-flex-row sh-gap-tiny sh-items-center">
                        <label htmlFor="region">
                          <span className="sh-text-red">
                            {"*"}
                          </span>
                        </label>
                        <select name="region" id="region" aria-required="true" className="sh-text-ui-dark-cool sh-typo-body-1 sh-w-full">
                          <option value="">
                            {"State"}
                          </option>
                          <option value="AK">
                            {"AK"}
                          </option>
                          <option value="AL">
                            {"AL"}
                          </option>
                          <option value="AR">
                            {"AR"}
                          </option>
                          <option value="AZ">
                            {"AZ"}
                          </option>
                          <option value="CA">
                            {"CA"}
                          </option>
                          <option value="CO">
                            {"CO"}
                          </option>
                          <option value="CT">
                            {"CT"}
                          </option>
                          <option value="DC">
                            {"DC"}
                          </option>
                          <option value="DE">
                            {"DE"}
                          </option>
                          <option value="FL">
                            {"FL"}
                          </option>
                          <option value="GA">
                            {"GA"}
                          </option>
                          <option value="HI">
                            {"HI"}
                          </option>
                          <option value="IA">
                            {"IA"}
                          </option>
                          <option value="ID">
                            {"ID"}
                          </option>
                          <option value="IL">
                            {"IL"}
                          </option>
                          <option value="IN">
                            {"IN"}
                          </option>
                          <option value="KS">
                            {"KS"}
                          </option>
                          <option value="KY">
                            {"KY"}
                          </option>
                          <option value="LA">
                            {"LA"}
                          </option>
                          <option value="MA">
                            {"MA"}
                          </option>
                          <option value="MD">
                            {"MD"}
                          </option>
                          <option value="ME">
                            {"ME"}
                          </option>
                          <option value="MI">
                            {"MI"}
                          </option>
                          <option value="MN">
                            {"MN"}
                          </option>
                          <option value="MO">
                            {"MO"}
                          </option>
                          <option value="MS">
                            {"MS"}
                          </option>
                          <option value="MT">
                            {"MT"}
                          </option>
                          <option value="NC">
                            {"NC"}
                          </option>
                          <option value="ND">
                            {"ND"}
                          </option>
                          <option value="NE">
                            {"NE"}
                          </option>
                          <option value="NH">
                            {"NH"}
                          </option>
                          <option value="NJ">
                            {"NJ"}
                          </option>
                          <option value="NM">
                            {"NM"}
                          </option>
                          <option value="NV">
                            {"NV"}
                          </option>
                          <option value="NY">
                            {"NY"}
                          </option>
                          <option value="OH">
                            {"OH"}
                          </option>
                          <option value="OK">
                            {"OK"}
                          </option>
                          <option value="OR">
                            {"OR"}
                          </option>
                          <option value="PA">
                            {"PA"}
                          </option>
                          <option value="RI">
                            {"RI"}
                          </option>
                          <option value="SC">
                            {"SC"}
                          </option>
                          <option value="SD">
                            {"SD"}
                          </option>
                          <option value="TN">
                            {"TN"}
                          </option>
                          <option value="TX">
                            {"TX"}
                          </option>
                          <option value="UT">
                            {"UT"}
                          </option>
                          <option value="VT">
                            {"VT"}
                          </option>
                          <option value="VA">
                            {"VA"}
                          </option>
                          <option value="WA">
                            {"WA"}
                          </option>
                          <option value="WV">
                            {"WV"}
                          </option>
                          <option value="WI">
                            {"WI"}
                          </option>
                          <option value="WY">
                            {"WY"}
                          </option>
                        </select>
                        {"  "}
                      </div>
                      <div className="sh-w-full sh-flex sh-flex-row sh-gap-tiny sh-items-center">
                        <label htmlFor="zip-code">
                          <span className="sh-text-red">
                            {"*"}
                          </span>
                        </label>
                        <input className="sh-mb-tiny sh-w-full" type="text" name="zip-code" placeholder="Zip Code" />
                        {"  "}
                      </div>
                      {"  "}
                    </form>
                    <br />
                    {"\n"}
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"  SMS Terms & Conditions"}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"  By subscribing, you consent to receiving up to 6 SMS or MMS marketing messages per month from 366466. Message and data rates may apply. To opt out of Crumblez text messaging program, send the word STOP to CRUMBLEZ (366466) at any time. You understand and agree that text messages sent to your mobile phone/device may be generated using automated technology. Your consent to receive text messages is not required to make a purchase."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"  For help or information on this program send "}
                      <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                        {"HELP"}
                      </strong>
                      {" to 366466."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"  For additional assistance, contact 1-800-366-4667 or you may "}
                      <a href="https://contactus.myastutesolutions.com/Dominos/index.html" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"click here"}
                      </a>
                      {" to send us an email."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"  "}
                      <strong className="sh-font-semibold sh-text-ui-extra-dark-cool">
                        {"Supported Carriers"}
                      </strong>
                      {": AT&T, Verizon Wireless, Sprint, T-Mobile (T-Mobile is not liable for delayed or undelivered messages), Boost, Carolina West, Cellcom, Cricket, C-Spire, Google Voice, MetroPCS, nTelos, Rural Carrier Group, Tier 2/3 Carrier Group, U.S. Cellular, Virgin Mobile"}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"  To read our privacy policy, "}
                      <Link href="/content/privacy" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"click here"}
                      </Link>
                      {"."}
                    </p>
                    <div className="sh-my-regular">
                      <div></div>
                    </div>
                    <div className="sh-mt-regular sh-flex sh-flex-row sh-gap-regular sh-mb-regular">
                      <Link href="/menu" className="sh-border-blue sh-text-blue sh-bg-neutral-white sh-px-large sh-py-regular sh-typo-label-2 sh-rounded-full sh-border-2 sh-text-center sh-outline-none hover:sh-bg-blue hover:sh-text-neutral-white sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Cancel"}
                      </Link>
                      <button form="email-and-text-offers-form" type="submit" className="sh-border-red sh-bg-red sh-text-neutral-white sh-px-large sh-py-regular sh-typo-label-2 sh-rounded-full sh-border-2 sh-text-center sh-outline-none hover:sh-border-wine hover:sh-bg-wine">
                        {"Sign Me Up\n"}
                      </button>
                      {"  "}
                    </div>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"  A text message will be sent to confirm your participation."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"  You must reply YES to confirm your subscription to complete the sign-up process."}
                    </p>
                    <div className="sh-flex sh-flex-row sh-gap-tiny sh-items-center sh-typo-label-5 sh-text-ui-dark-cool">
                      <span className="sh-text-red">
                        {"*"}
                      </span>
                      <span>
                        {"Indicates required field."}
                      </span>
                      {"  "}
                    </div>
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
