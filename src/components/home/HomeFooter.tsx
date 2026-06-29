import Link from "next/link";

export function HomeFooter() {
  return (
    <>
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
    </>
  );
}
