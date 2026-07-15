import Link from "next/link";

type MenuCategory = {
  href: string;
  id: string;
  label: string;
  isNew?: boolean;
  sources: {
    xl: string;
    lg: string;
    md: string;
    sm: string;
  };
};

const menuCategories: MenuCategory[] = [
  {
    href: "/menu/build-your-own",
    id: "BuildYourOwn",
    label: "Build Your Own",
    sources: {
      xl: "/site-assets/cms/assets/e981ac7d-12a0-4412-a5f3-f2da0c489d808b64.png?modified_on=2025-08-08T14%3A03%3A16.290Z&im=Resize%3D%28624%2C624%29%3BCrop%2Crect%3D%28202%2C206%2C431%2C431%29%2CallowExpansion",
      lg: "/site-assets/cms/assets/e981ac7d-12a0-4412-a5f3-f2da0c489d808b64.png?modified_on=2025-08-08T14%3A03%3A16.290Z&im=Resize%3D%28406%2C406%29%3BCrop%2Crect%3D%28132%2C134%2C280%2C280%29%2CallowExpansion",
      md: "/site-assets/cms/assets/e981ac7d-12a0-4412-a5f3-f2da0c489d808b64.png?modified_on=2025-08-08T14%3A03%3A16.290Z&im=Resize%3D%28333%2C333%29%3BCrop%2Crect%3D%28106%2C111%2C230%2C230%29%2CallowExpansion",
      sm: "/site-assets/cms/assets/e981ac7d-12a0-4412-a5f3-f2da0c489d808b64.png?modified_on=2025-08-08T14%3A03%3A16.290Z&im=Resize%3D%28333%2C333%29%3BCrop%2Crect%3D%28106%2C102%2C234%2C234%29%2CallowExpansion",
    },
  },
  {
    href: "/menu/specialty",
    id: "Specialty",
    label: "Specialty Pizzas",
    sources: {
      xl: "/site-assets/cms/assets/2050a7ae-c278-4d60-b984-0956367382cf2f79.png?modified_on=2024-07-30T12%3A23%3A51.406Z&im=Resize%3D%28624%2C624%29%3BCrop%2Crect%3D%28202%2C206%2C431%2C431%29%2CallowExpansion",
      lg: "/site-assets/cms/assets/2050a7ae-c278-4d60-b984-0956367382cf2f79.png?modified_on=2024-07-30T12%3A23%3A51.406Z&im=Resize%3D%28406%2C406%29%3BCrop%2Crect%3D%28132%2C134%2C280%2C280%29%2CallowExpansion",
      md: "/site-assets/cms/assets/2050a7ae-c278-4d60-b984-0956367382cf2f79.png?modified_on=2024-07-30T12%3A23%3A51.406Z&im=Resize%3D%28333%2C333%29%3BCrop%2Crect%3D%28106%2C111%2C230%2C230%29%2CallowExpansion",
      sm: "/site-assets/cms/assets/2050a7ae-c278-4d60-b984-0956367382cf2f79.png?modified_on=2024-07-30T12%3A23%3A51.406Z&im=Resize%3D%28333%2C333%29%3BCrop%2Crect%3D%28106%2C102%2C234%2C234%29%2CallowExpansion",
    },
  },
  {
    href: "/menu/bread",
    id: "Bread",
    label: "Breads",
    sources: {
      xl: "/site-assets/cms/assets/25702277-acad-4abb-8427-34b639f67ecd5cdd.png?modified_on=2024-12-02T17%3A09%3A35.142Z&im=Resize%3D%28512%2C512%29%3BCrop%2Crect%3D%28105%2C59%2C431%2C431%29%2CallowExpansion",
      lg: "/site-assets/cms/assets/25702277-acad-4abb-8427-34b639f67ecd5cdd.png?modified_on=2024-12-02T17%3A09%3A35.142Z&im=Resize%3D%28333%2C333%29%3BCrop%2Crect%3D%2869%2C42%2C280%2C280%29%2CallowExpansion",
      md: "/site-assets/cms/assets/25702277-acad-4abb-8427-34b639f67ecd5cdd.png?modified_on=2024-12-02T17%3A09%3A35.142Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2859%2C38%2C230%2C230%29%2CallowExpansion",
      sm: "/site-assets/cms/assets/25702277-acad-4abb-8427-34b639f67ecd5cdd.png?modified_on=2024-12-02T17%3A09%3A35.142Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2859%2C36%2C234%2C234%29%2CallowExpansion",
    },
  },
  {
    href: "/menu/wings",
    id: "Wings",
    label: "Chicken",
    sources: {
      xl: "/site-assets/cms/assets/52a5cd59-c19c-472d-b5b2-e8e0c6144408929e.png?modified_on=2024-12-02T17%3A11%3A10.571Z&im=Resize%3D%28519%2C519%29%3BCrop%2Crect%3D%2890%2C161%2C431%2C431%29%2CallowExpansion",
      lg: "/site-assets/cms/assets/52a5cd59-c19c-472d-b5b2-e8e0c6144408929e.png?modified_on=2024-12-02T17%3A11%3A10.571Z&im=Resize%3D%28337%2C337%29%3BCrop%2Crect%3D%2859%2C105%2C280%2C280%29%2CallowExpansion",
      md: "/site-assets/cms/assets/52a5cd59-c19c-472d-b5b2-e8e0c6144408929e.png?modified_on=2024-12-02T17%3A11%3A10.571Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2859%2C88%2C230%2C230%29%2CallowExpansion",
      sm: "/site-assets/cms/assets/52a5cd59-c19c-472d-b5b2-e8e0c6144408929e.png?modified_on=2024-12-02T17%3A11%3A10.571Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2859%2C85%2C234%2C234%29%2CallowExpansion",
    },
  },
  {
    href: "/menu/dessert",
    id: "Dessert",
    label: "Desserts",
    sources: {
      xl: "/site-assets/cms/assets/ae22b2e2-9f64-423f-98e7-df93821a49930515.png?modified_on=2024-07-26T20%3A08%3A08.048Z&im=Resize%3D%28413%2C413%29%3BCrop%2Crect%3D%2828%2C91%2C431%2C431%29%2CallowExpansion",
      lg: "/site-assets/cms/assets/ae22b2e2-9f64-423f-98e7-df93821a49930515.png?modified_on=2024-07-26T20%3A08%3A08.048Z&im=Resize%3D%28269%2C269%29%3BCrop%2Crect%3D%2818%2C59%2C280%2C280%29%2CallowExpansion",
      md: "/site-assets/cms/assets/ae22b2e2-9f64-423f-98e7-df93821a49930515.png?modified_on=2024-07-26T20%3A08%3A08.048Z&im=Resize%3D%28217%2C217%29%3BCrop%2Crect%3D%2815%2C46%2C230%2C230%29%2CallowExpansion",
      sm: "/site-assets/cms/assets/ae22b2e2-9f64-423f-98e7-df93821a49930515.png?modified_on=2024-07-26T20%3A08%3A08.048Z&im=Resize%3D%28217%2C217%29%3BCrop%2Crect%3D%2815%2C41%2C234%2C234%29%2CallowExpansion",
    },
  },
  {
    href: "/menu/pasta",
    id: "Pasta",
    label: "Oven-Baked Pastas",
    sources: {
      xl: "/site-assets/cms/assets/dec46cc9-7059-4004-8b32-14fc9465bac15a27.png?modified_on=2024-12-02T16%3A54%3A22.015Z&im=Resize%3D%28462%2C462%29%3BCrop%2Crect%3D%2877%2C133%2C431%2C431%29%2CallowExpansion",
      lg: "/site-assets/cms/assets/dec46cc9-7059-4004-8b32-14fc9465bac15a27.png?modified_on=2024-12-02T16%3A54%3A22.015Z&im=Resize%3D%28301%2C301%29%3BCrop%2Crect%3D%2850%2C87%2C280%2C280%29%2CallowExpansion",
      md: "/site-assets/cms/assets/dec46cc9-7059-4004-8b32-14fc9465bac15a27.png?modified_on=2024-12-02T16%3A54%3A22.015Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2850%2C101%2C230%2C230%29%2CallowExpansion",
      sm: "/site-assets/cms/assets/dec46cc9-7059-4004-8b32-14fc9465bac15a27.png?modified_on=2024-12-02T16%3A54%3A22.015Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2850%2C95%2C234%2C234%29%2CallowExpansion",
    },
  },
  {
    href: "/menu/sandwich",
    id: "Sandwich",
    label: "Oven-Baked Sandwiches",
    sources: {
      xl: "/site-assets/cms/assets/de67c289-a105-4ee3-a0ef-015aa5b73f4982af.png?modified_on=2026-04-27T21%3A57%3A21.647Z&im=Resize%3D%28517%2C517%29%3BCrop%2Crect%3D%28101%2C153%2C431%2C431%29%2CallowExpansion",
      lg: "/site-assets/cms/assets/de67c289-a105-4ee3-a0ef-015aa5b73f4982af.png?modified_on=2026-04-27T21%3A57%3A21.647Z&im=Resize%3D%28336%2C336%29%3BCrop%2Crect%3D%2866%2C99%2C280%2C280%29%2CallowExpansion",
      md: "/site-assets/cms/assets/de67c289-a105-4ee3-a0ef-015aa5b73f4982af.png?modified_on=2026-04-27T21%3A57%3A21.647Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2859%2C83%2C230%2C230%29%2CallowExpansion",
      sm: "/site-assets/cms/assets/de67c289-a105-4ee3-a0ef-015aa5b73f4982af.png?modified_on=2026-04-27T21%3A57%3A21.647Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2859%2C83%2C234%2C234%29%2CallowExpansion",
    },
  },
  {
    href: "/menu/g-salad",
    id: "GSalad",
    label: "Salads",
    sources: {
      xl: "/site-assets/cms/assets/7c90a9cc-9c70-4ff2-a030-f2a4fdfd9f55da56.png?modified_on=2024-12-02T17%3A58%3A35.453Z&im=Resize%3D%28462%2C462%29%3BCrop%2Crect%3D%2877%2C133%2C431%2C431%29%2CallowExpansion",
      lg: "/site-assets/cms/assets/7c90a9cc-9c70-4ff2-a030-f2a4fdfd9f55da56.png?modified_on=2024-12-02T17%3A58%3A35.453Z&im=Resize%3D%28301%2C301%29%3BCrop%2Crect%3D%2850%2C87%2C280%2C280%29%2CallowExpansion",
      md: "/site-assets/cms/assets/7c90a9cc-9c70-4ff2-a030-f2a4fdfd9f55da56.png?modified_on=2024-12-02T17%3A58%3A35.453Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2850%2C101%2C230%2C230%29%2CallowExpansion",
      sm: "/site-assets/cms/assets/7c90a9cc-9c70-4ff2-a030-f2a4fdfd9f55da56.png?modified_on=2024-12-02T17%3A58%3A35.453Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2850%2C95%2C234%2C234%29%2CallowExpansion",
    },
  },
  {
    href: "/menu/drinks",
    id: "Drinks",
    label: "Drinks",
    sources: {
      xl: "/site-assets/cms/assets/86aa18bc-ed6b-49d3-af01-a1302a4916d90354.png?modified_on=2024-12-02T17%3A08%3A17.596Z&im=Resize%3D%28431%2C431%29%3BCrop%2Crect%3D%280%2C0%2C431%2C431%29%2CallowExpansion",
      lg: "/site-assets/cms/assets/86aa18bc-ed6b-49d3-af01-a1302a4916d90354.png?modified_on=2024-12-02T17%3A08%3A17.596Z&im=Resize%3D%28280%2C280%29%3BCrop%2Crect%3D%280%2C0%2C280%2C280%29%2CallowExpansion",
      md: "/site-assets/cms/assets/86aa18bc-ed6b-49d3-af01-a1302a4916d90354.png?modified_on=2024-12-02T17%3A08%3A17.596Z&im=Resize%3D%28230%2C230%29%3BCrop%2Crect%3D%280%2C0%2C230%2C230%29%2CallowExpansion",
      sm: "/site-assets/cms/assets/86aa18bc-ed6b-49d3-af01-a1302a4916d90354.png?modified_on=2024-12-02T17%3A08%3A17.596Z&im=Resize%3D%28234%2C234%29%3BCrop%2Crect%3D%280%2C0%2C234%2C234%29%2CallowExpansion",
    },
  },
  {
    href: "/menu/sides",
    id: "Sides",
    isNew: true,
    label: "Extras",
    sources: {
      xl: "/site-assets/cms/assets/b25dd6b4-4327-4bbb-b37d-880e8eb30b93cdea.png?modified_on=2026-02-04T13%3A32%3A21.828Z&im=Resize%3D%28417%2C417%29%3BCrop%2Crect%3D%2832%2C116%2C431%2C431%29%2CallowExpansion",
      lg: "/site-assets/cms/assets/b25dd6b4-4327-4bbb-b37d-880e8eb30b93cdea.png?modified_on=2026-02-04T13%3A32%3A21.828Z&im=Resize%3D%28272%2C272%29%3BCrop%2Crect%3D%2821%2C76%2C280%2C280%29%2CallowExpansion",
      md: "/site-assets/cms/assets/b25dd6b4-4327-4bbb-b37d-880e8eb30b93cdea.png?modified_on=2026-02-04T13%3A32%3A21.828Z&im=Resize%3D%28272%2C272%29%3BCrop%2Crect%3D%2849%2C108%2C230%2C230%29%2CallowExpansion",
      sm: "/site-assets/cms/assets/b25dd6b4-4327-4bbb-b37d-880e8eb30b93cdea.png?modified_on=2026-02-04T13%3A32%3A21.828Z&im=Resize%3D%28272%2C272%29%3BCrop%2Crect%3D%2849%2C105%2C234%2C234%29%2CallowExpansion",
    },
  },
];

export function MenuCategoryGrid() {
  return (
    <ul className="pd-grid pd-auto-cols-fr pd-auto-rows-fr pd-grid-cols-2 pd-gap-regular md:pd-grid-cols-4 lg:pd-grid-cols-6">
      {menuCategories.map((category) => (
        <li className="" key={category.href}>
          <MenuCategoryCard category={category} />
        </li>
      ))}
    </ul>
  );
}

export function BrowseMenuSection() {
  return (
    <section className="home-browse-menu sh-flex sh-flex-col sh-gap-large">
      <h2 className="sh-text-blue-600 sh-typo-headline-2">{"Browse Menu"}</h2>
      <article>
        <MenuCategoryGrid />
      </article>
    </section>
  );
}

function MenuCategoryCard({ category }: { category: MenuCategory }) {
  return (
    <div
      className="clickable-card flex h-full flex-col overflow-hidden rounded-lg text-ui-extra-dark-cool outline-dark-blue bg-cool-gray-200 hover:border-ui-medium-cool focus:outline-2 active:outline-blue hover:outline hover:outline-1 hover:outline-cool-gray-700 active:outline-2 active:hover:outline-2 aspect-square active:outline active:outline-blue"
      data-testid="clickable-card"
    >
      <div className="relative flex flex-1 items-end justify-start overflow-visible">
        {category.isNew ? <NewBadge /> : null}
        <picture className="absolute min-h-full min-w-full max-w-full">
          <source
            data-testid={`${category.id}-source-xl`}
            srcSet={category.sources.xl}
            media="(min-width: 1700px)"
          />
          <source
            data-testid={`${category.id}-source-lg`}
            srcSet={category.sources.lg}
            media="(min-width: 1000px)"
          />
          <source
            data-testid={`${category.id}-source-md`}
            srcSet={category.sources.md}
            media="(min-width: 500px)"
          />
          <img
            alt=""
            className="absolute"
            data-testid={`${category.id}-img-sm`}
            draggable="false"
            loading="lazy"
            src={category.sources.sm}
          />
        </picture>
      </div>
      <div className="z-[5] bg-cool-gray-200 bg-opacity-70">
        <Link
          className="text-left flex items-end justify-start outline-none typo-label-2 mx-regular mb-small lg:typo-label-1 lg:mx-medium lg:mb-medium z-10"
          href={category.href}
        >
          {category.label}
        </Link>
      </div>
    </div>
  );
}

function NewBadge() {
  return (
    <div className="z-10 mx-regular mt-small flex items-end justify-start self-start text-left outline-none typo-label-2 lg:mx-medium lg:mt-medium lg:typo-label-1">
      <span className="inline-flex max-w-full items-center justify-center h-large border [background:linear-gradient(#191919,#191919)_padding-box,var(--gradient-gold)_border-box] rounded-[3.6px] border-transparent shadow-gold">
        <span className="inline-flex overflow-hidden overflow-ellipsis whitespace-nowrap !leading-[0.86] px-x-small typo-label-4 bg-gradient-gold bg-clip-text text-transparent">
          {"NEW!"}
        </span>
      </span>
    </div>
  );
}
