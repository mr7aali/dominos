import Link from "next/link";

const footerGroups = [
  {
    title: "Order",
    links: [
      { href: "/menu", label: "Menu" },
      { href: "/deals", label: "Deals" },
      { href: "/tracker", label: "Tracker" }
    ]
  },
  {
    title: "Company",
    links: [
      { href: "/content/customer-support", label: "Customer Support" },
      { href: "/content/gift-cards", label: "Gift Cards" },
      { href: "/content/nutrition", label: "Nutrition" },
      { href: "/content/ingredients", label: "Ingredients" }
    ]
  },
  {
    title: "Legal",
    links: [
      { href: "/data-privacy-rights", label: "Do Not Sell or Share My Personal Information" },
      { href: "/content/privacy", label: "Privacy" },
      { href: "/content/terms-of-use", label: "Terms of Use" },
      { href: "/content/accessibility-policy", label: "Accessibility Policy" }
    ]
  }
];

export function SiteFooter() {
  return (
    <footer className="sh-bg-blue-800 sh-text-neutral-white">
      <div className="sh-m-auto sh-flex sh-w-full sh-max-w-screen-xl sh-flex-col sh-gap-xx-large sh-px-medium sh-py-xx-large md:sh-px-x-large lg:sh-px-mega-4">
        <div className="sh-grid sh-gap-large md:sh-grid-cols-3">
          {footerGroups.map((group) => (
            <section className="sh-flex sh-flex-col sh-gap-small" key={group.title}>
              <h2 className="sh-font-bold sh-typo-body-1">{group.title}</h2>
              <ul className="sh-flex sh-flex-col sh-gap-small sh-typo-body-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link className="sh-typo-body-2 sh-text-neutral-white sh-underline" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="sh-flex sh-flex-col sh-gap-small sh-typo-body-3">
          <p>
            Carryout and delivery availability, prices, participation, delivery areas, and charges may vary.
          </p>
          <p>
            If you are using a screen reader and are having problems using this website, please call{" "}
            <a className="sh-font-bold sh-text-neutral-white sh-underline" href="tel:8002524031">
              800-252-4031
            </a>{" "}
            for assistance.
          </p>
          <p>
            This site is protected by reCAPTCHA Enterprise and the Google{" "}
            <a
              className="sh-text-neutral-white sh-underline"
              href="https://policies.google.com/privacy"
              rel="noreferrer"
              target="_blank"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              className="sh-text-neutral-white sh-underline"
              href="https://policies.google.com/terms"
              rel="noreferrer"
              target="_blank"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
