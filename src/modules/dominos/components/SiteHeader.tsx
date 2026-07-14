"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuthModal } from "./auth";
import { CartModal } from "./cart";
import { OrderMethodModal } from "./order";

const navLinks = [
  { href: "/menu", label: "Menu", eventName: "Blue Nav - Menu" },
  { href: "/deals", label: "Deals", eventName: "Blue Nav - Deals" },
  {
    href: "/my-deals-and-rewards",
    label: "My Rewards",
    eventName: "Blue Nav - My Rewards",
  },
  { href: "/tracker", label: "Tracker", eventName: "Blue Nav - Tracker" },
];

export function SiteHeader() {
  const { openAuthModal } = useAuthModal();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderMethodOpen, setIsOrderMethodOpen] = useState(false);

  return (
    <>
      <header
        className="sh-sticky sh-top-none sh-z-20 sh-translate-y-none"
        data-testid="shell-navigation-bar"
      >
        <div className="sh-z-10 sh-bg-blue sh-text-lg sh-uppercase sh-text-neutral-white sh-transition-transform sh-clip-path-pizza-box">
          <nav
            aria-label="Main"
            className="sh-m-auto sh-grid sh-max-w-screen-xl sh-grid-cols-[1fr_auto_minmax(0,1fr)] sh-grid-rows-1 sh-items-center sh-p-x-small md:sh-px-regular lg:sh-px-xx-large xl:sh-px-mega-4"
          >
            <div className="sh-col-start-1 sh-row-start-1 lg:sh-hidden">
              <button
                aria-controls="menu-links order-online-link"
                aria-expanded="false"
                aria-haspopup="menu"
                aria-label="Menu"
                className="sh-flex sh-justify-start sh-p-regular"
                data-dpz-track-evt-name="Hamburger Menu"
                id="toggle-menu"
                type="button"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 16"
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sh-text-text-invert"
                >
                  <path
                    d="M1 1 H19 M1 8 H19 M1 15 H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </button>
            </div>

            <ul
              className="sh-col-span-3 sh-mt-x-small sh-grid sh-flex-1 sh-auto-rows-auto sh-grid-cols-2 md:sh-col-span-1 md:sh-my-regular lg:sh-flex sh-hidden"
              id="menu-links"
            >
              <li className="sh-col-span-2">
                <button
                  aria-haspopup="dialog"
                  className="sh-block sh-whitespace-nowrap sh-px-regular sh-py-small sh-text-left sh-typo-subhead-2 focus:sh-rounded-sm focus:sh-outline focus:sh-outline-1 focus:sh-outline-neutral-white lg:sh-typo-label-2"
                  data-dpz-track-evt-name="Blue Nav - Order Now"
                  type="button"
                  onClick={() => setIsOrderMethodOpen(true)}
                >
                  Order Now
                </button>
              </li>
              {navLinks.map((link) => (
                <li className="sh-col-span-2" key={link.href}>
                  <Link
                    className="sh-block sh-whitespace-nowrap sh-px-regular sh-py-small sh-typo-subhead-2 focus:sh-rounded-sm focus:sh-outline focus:sh-outline-1 focus:sh-outline-neutral-white lg:sh-typo-label-2"
                    data-dpz-track-evt-name={link.eventName}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              aria-label="Domino's logo link, home page"
              className="sh-col-start-2 sh-row-start-1 sh-flex sh-items-center sh-justify-center sh-px-regular sh-py-small focus:sh-rounded-sm focus:sh-outline focus:sh-outline-1 focus:sh-outline-neutral-white"
              data-testid="dominos-logo-button"
              href="/"
            >
              <img
                alt=""
                className="block w-[2.25rem] h-[2.25rem] object-contain lg:w-jumbo lg:h-jumbo"
                src="/logo.jpeg"
              />
            </Link>

            <div className="sh-col-start-3 sh-row-start-1 sh-flex sh-items-center sh-justify-end sh-px-regular sh-py-small sh-gap-medium xs:sh-gap-[8px]">
              <div className="sh-hidden sh-max-w-xs sh-flex-1 sh-justify-end sh-overflow-hidden lg:sh-flex lg:sh-p-[2px]">
                <div
                  className="clickable-card sv-flex sv-w-full sv-rounded-xl sv-bg-dark-blue sv-font-sans sv-text-sm sv-normal-case sv-text-neutral-white md:sv-w-1/2 lg:sv-w-full sv-p-x-small lg:sv-px-regular lg:sv-py-small active:outline active:outline-blue"
                  data-testid="clickable-card"
                >
                  <button type="button" className="sv-h-full sv-w-full">
                    <span className="sv-grid sv-grid-cols-[auto_1fr] sv-grid-rows-1 sv-items-center sv-justify-center sv-gap-x-x-small sv-font-bold">
                      <span>
                        <img
                          alt=""
                          className="block w-regular h-regular"
                          src="/site-assets/dpz-ecomm-makeline-ui-mfe/icons/modern/place--neutral-white.svg"
                        />
                      </span>
                      <span className="sv-truncate">Choose your location</span>
                    </span>
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="sh-truncate sh-flex sh-min-w-mega-1 sh-max-w-[67px] sh-items-center sh-justify-center sh-rounded-full sh-bg-neutral-white sh-px-regular sh-py-x-small sh-text-center sh-shadow-button-white sh-typo-label-3 sh-text-blue-800"
                onClick={() => openAuthModal("email")}
              >
                Sign In
              </button>
              <button
                aria-label="Open cart"
                className="site-header-cart-button"
                type="button"
                onClick={() => setIsCartOpen(true)}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path
                    d="M6.3 6h15.1l-1.7 8.1a2 2 0 0 1-2 1.6H9a2 2 0 0 1-2-1.6L5.4 4.3H2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <circle cx="9.5" cy="20" r="1.4" fill="currentColor" />
                  <circle cx="18" cy="20" r="1.4" fill="currentColor" />
                </svg>
                <span>0</span>
              </button>
              <div className="sh-w-xx-large" />
            </div>

            <div className="sh-col-span-3 sh-col-start-1 sh-row-start-4 sh-mx-regular sh-my-x-small sh-flex sh-items-center sh-justify-center empty:sh-hidden md:sh-col-span-3 md:sh-col-start-1 lg:sh-hidden" />
          </nav>
        </div>
      </header>

      <OrderMethodModal
        isOpen={isOrderMethodOpen}
        onClose={() => setIsOrderMethodOpen(false)}
      />
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onStartOrder={() => {
          setIsCartOpen(false);
          setIsOrderMethodOpen(true);
        }}
      />
    </>
  );
}
