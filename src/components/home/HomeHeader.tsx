import Link from "next/link";

export function HomeHeader() {
  return (
    <>
    <header className="sh-sticky sh-top-none sh-z-20 sh-translate-y-none" data-testid="shell-navigation-bar">
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
          <Link aria-label="Domino's logo link, home or home page" className="sh-col-start-2 sh-row-start-1 sh-flex sh-items-center sh-justify-center sh-px-regular sh-py-small focus:sh-rounded-sm focus:sh-outline focus:sh-outline-1 focus:sh-outline-neutral-white" data-testid="domino-logo-button" href="/">
            <svg width="36" height="36" aria-hidden="true" viewBox="0 0 214.6 228.87" xmlns="http://www.w3.org/2000/svg" className="w-[2.25rem] h-[2.25rem] lg:w-jumbo lg:h-jumbo">
              <g>
                <path d="M210.79 62.11l-58.3-58.3a13 13 0 00-18.42 0L85.18 52.7 3.81 134.08a13 13 0 000 18.42l58.3 58.31a13 13 0 0018.42 0l72.94-72.95 57.32-57.32a13 13 0 000-18.42" fill="#fff"></path>
                <path d="M155.4 83.11a16.87 16.87 0 115-11.94 16.87 16.87 0 01-5 11.94m51.27-16.85L148.37 8a7.2 7.2 0 00-10.18 0l-63 63 68.47 68.47 63-63a7.2 7.2 0 000-10.18" fill="#ff0000"></path>
                <path d="M84.09 131.79a16.86 16.86 0 11-4.95 11.94 16.82 16.82 0 014.95-11.94M58.42 155a16.93 16.93 0 114.93-12 16.92 16.92 0 01-4.93 12M7.93 138.2a7.2 7.2 0 000 10.18l58.3 58.31a7.2 7.2 0 0010.18 0l63-63L70.93 75.2z" fill="#0090e2"></path>
              </g>
              <text fill="#fff" fontFamily="MyriadPro-Semibold, MyriadPro Semibold" fontSize="33.33" fontWeight="700" x="99.13" y="220.53">
                {"®"}
              </text>
            </svg>
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
    </>
  );
}
