import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Tracker | crumblez",
  description:
    "Track your order with crumblez tracker. Submit your phone number to check your order status.",
  alternates: {
    canonical: "/tracker",
  },
  robots: "index",
};

const footerColumns = [
  {
    title: "Our Company",
    links: ["Corporate", "About crumblez", "Jobs", "Customer Support", "Email & Text Offers", "World of crumblez"],
  },
  {
    title: "Our Pizza",
    links: ["Nutrition", "Allergen Info", "Gluten Free Warning", "Ingredients"],
  },
  {
    title: "Additional Services",
    links: ["Smart Slice School Lunch", "Large Business Orders", "Wedding Registry", "Fundraising", "Recycling", "Gift Cards", "Real Estate", "Carryout Insurance"],
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

function TrackerFooterLinks() {
  return (
    <section className="tracker-page__footer-links" aria-label="Footer links">
      <img alt="" className="tracker-page__footer-logo" src="/logo.jpeg" />
      <div className="tracker-page__footer-grid">
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
          <div className="tracker-page__download">
            <img alt="Download on the App Store" src="/site-assets/app-store-badge.svg" />
            <img alt="Get it on Google Play" src="/site-assets/google-play-badge.svg" />
          </div>
          <h3>Follow crumblez</h3>
          <div className="tracker-page__socials" aria-label="Social links">
            {["f", "ig", "x", "t"].map((label) => (
              <Link href="/" key={label}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrackerLegal() {
  return (
    <section className="tracker-page__legal" aria-label="Offer details">
      <div>
        {legalSections.map((section) => (
          <article key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
          </article>
        ))}
        <Link href="/content/accessibility-policy">Accessibility Policy</Link>
      </div>
      <div className="tracker-page__accordions">
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
  );
}

export function TrackerPage() {
  return (
    <main className="tracker-page">
      <section className="tracker-page__title-band">
        <h1>crumblez Tracker®</h1>
      </section>

      <section className="tracker-page__content" aria-labelledby="tracker-form-title">
        <div className="tracker-card">
          <div className="tracker-card__progress" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p className="tracker-card__patent">U.S. Patent #10,262,281</p>
          <div className="tracker-card__form-area">
            <h2 id="tracker-form-title">Enter your phone below to track your order</h2>
            <form className="tracker-form">
              <label className="tracker-form__field tracker-form__field--phone">
                <span>Phone</span>
                <input inputMode="tel" name="phone" placeholder="(888) 888-8888" />
              </label>
              <label className="tracker-form__field">
                <span>Extension</span>
                <input name="extension" placeholder="X23" />
              </label>
              <button type="submit">Track Order</button>
            </form>
            <p className="tracker-card__terms">
              By tracking your order you agree with our <Link href="/content/terms-of-use">Terms of Use</Link> and that you're at least 13 years old.
            </p>
            <p className="tracker-card__error">
              Oops. We weren't able to find any valid orders associated with that
              phone number. Could your order be associated with another phone
              number? Orders placed before today aren't available for feedback.
            </p>
          </div>
        </div>
        <p className="tracker-page__driver-note">
          Drivers carry less than $20 in change and checks are NOT accepted for online orders.
          Feeling generous? You can tip at the door.
        </p>
      </section>

      <TrackerFooterLinks />
      <TrackerLegal />
    </main>
  );
}
