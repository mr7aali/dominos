import Link from "next/link";
import type { Metadata } from "next";
import { RewardsAuthActions } from "../components/auth";

export const metadata: Metadata = {
  title: "crumblez Rewards | crumblez",
  description:
    "Join crumblez Rewards to earn points toward free food and member deals.",
  alternates: {
    canonical: "/my-deals-and-rewards",
  },
  robots: "index",
};

const heroToppings = [
  "/site-assets/cms/assets/4344cc7a-695f-4f22-8f83-5d4065d06f3377e7.png",
  "/site-assets/cms/assets/9d3473c5-4883-4ecf-a1dd-3f93799ee17f9d0a.png",
  "/site-assets/cms/assets/71840f38-b957-4807-bac3-5e42945a62be6822.png",
];

const footerColumns = [
  {
    title: "Our Company",
    links: ["Corporate", "About Domino's", "Jobs", "Customer Support", "Email & Text Offers"],
  },
  {
    title: "Our Pizza",
    links: ["Nutrition", "Allergen Info", "Gluten Free Warning", "Ingredients"],
  },
  {
    title: "Additional Services",
    links: ["Smart Slice School Lunch", "Large Business Orders", "Wedding Registry", "Fundraising", "Gift Cards"],
  },
  {
    title: "Legal",
    links: ["Do Not Sell or Share My Personal Information", "Privacy", "Terms of Use"],
  },
];

const legalSections = [
  {
    title: "Mix & Match Offer Details",
    text:
      "You must choose this limited time offer. Prices, participation, delivery area, and charges may vary by store. Minimum purchase and delivery charges may apply.",
  },
  {
    title: "Weeklong Carryout Offer Details",
    text:
      "Carryout only. You must choose this limited time offer. Prices and participation may vary. Size availability varies by crust type.",
  },
  {
    title: "Perfect Combo Offer Details",
    text:
      "You must choose this limited time offer. Delivery charge and tax may apply. Prices, participation, delivery area, and charges may vary.",
  },
  {
    title: "Offer Details",
    text:
      "Any delivery charge is not a tip paid to your driver. Drivers carry less than $20. Minimum purchase required for delivery.",
  },
];

function RewardsBrand() {
  return (
    <div className="rewards-page-brand" aria-label="crumblez Rewards">
      <img alt="" src="/logo.jpeg" />
      <span>
        <strong>crumblez</strong>
        <strong>Rewards</strong>
      </span>
    </div>
  );
}

export function MyDealsAndRewardsPage() {
  return (
    <main className="rewards-page">
      <section className="rewards-page__masthead">
        <RewardsBrand />
      </section>

      <section className="rewards-page__hero" aria-labelledby="rewards-hero-title">
        <div className="rewards-page__hero-copy">
          <RewardsBrand />
          <h1 id="rewards-hero-title">Soccer Shootout</h1>
          <p>
            Download the crumblez app to play for your chance to score bonus
            points or a deal worth cheering about on your next order.
          </p>
          <div className="rewards-page__store-buttons">
            <img alt="Download on the App Store" src="/site-assets/app-store-badge.svg" />
            <img alt="Get it on Google Play" src="/site-assets/google-play-badge.svg" />
          </div>
        </div>
        <div className="rewards-page__field" aria-hidden="true">
          {heroToppings.map((src, index) => (
            <img
              alt=""
              className={`rewards-page__floating-food rewards-page__floating-food--${index + 1}`}
              key={src}
              src={src}
            />
          ))}
        </div>
      </section>
      <p className="rewards-page__fine-print">
        No purchase necessary. Reward members only. See rules and offer details
        for redemption limitations.
      </p>

      <section className="rewards-page__join" aria-labelledby="rewards-join-title">
        <div className="rewards-page__join-copy">
          <RewardsBrand />
          <h2 id="rewards-join-title">
            Earn free crumblez every 2 orders
          </h2>
          <RewardsAuthActions />
        </div>
        <div className="rewards-page__food-row" aria-hidden="true">
          {[
            "/site-assets/cms/assets/9d3473c5-4883-4ecf-a1dd-3f93799ee17f9d0a.png",
            "/site-assets/cms/assets/4344cc7a-695f-4f22-8f83-5d4065d06f3377e7.png",
            "/site-assets/cms/assets/71840f38-b957-4807-bac3-5e42945a62be6822.png",
          ].map((src) => (
            <img alt="" key={src} src={src} />
          ))}
        </div>
        <p>
          See crumblez Rewards <Link href="/content/terms-of-use">Terms & Conditions</Link>
        </p>
      </section>

      <section className="rewards-page__footer-links" aria-label="Footer links">
        <img alt="" className="rewards-page__footer-logo" src="/logo.jpeg" />
        <div className="rewards-page__footer-grid">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((item) => (
                  <li key={item}>
                    <Link href="/content/customer-support">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3>Download the App</h3>
            <div className="rewards-page__download">
              <img alt="Download on the App Store" src="/site-assets/app-store-badge.svg" />
              <img alt="Get it on Google Play" src="/site-assets/google-play-badge.svg" />
            </div>
            <h3>Follow crumblez</h3>
            <div className="rewards-page__socials" aria-label="Social links">
              {["f", "ig", "x", "t"].map((label) => (
                <Link href="/" key={label}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rewards-page__legal" aria-label="Offer details">
        <div>
          {legalSections.map((section) => (
            <article key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
        <div className="rewards-page__accordions">
          {["Allergen Warning", "crumblez Rewards", "Our Guarantee", "Delivery and Carryout Insurance", "Pizza Near Me"].map(
            (item) => (
              <button key={item} type="button">
                {item}
                <svg aria-hidden="true" viewBox="0 0 16 16">
                  <path
                    d="M4 6l4 4 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            ),
          )}
          <p>
            This site is protected by reCAPTCHA Enterprise and the Google Privacy
            Policy and Terms of Service apply.
          </p>
        </div>
      </section>
    </main>
  );
}
