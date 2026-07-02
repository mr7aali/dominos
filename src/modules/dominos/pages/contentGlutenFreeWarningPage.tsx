/* eslint-disable */
// @ts-nocheck
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "Pizza Delivery & Carryout, Pasta, Wings & More | Crumblez",
  "description": "Order pizza, pasta, sandwiches & more online for carryout or delivery from Crumblez. View menu, find locations, track orders. Sign up for Crumblez email & text offers to get great deals on your next order.",
  "alternates": {
    "canonical": "/en/content/gluten-free-warning"
  },
  "robots": "index"
};

export function ContentGlutenFreeWarningPage() {
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
                  {"Gluten Free Warning"}
                </h1>
              </div>
            </header>
            <div className="bg-background-primary lg:flex lg:flex-col">
              <div className="flex w-full max-w-screen-xl flex-col gap-xx-large self-center px-medium pb-xx-large pt-x-large md:gap-mega-1 md:px-x-large md:pb-mega-1 lg:gap-mega-1 lg:pb-mega-1 lg:pt-mega-1">
                <div className="sh-p-regular">
                  <div>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      <Link href="/content/nutrition" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Nutrition"}
                      </Link>
                      {" | "}
                      <Link href="/content/ingredients" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Ingredients"}
                      </Link>
                      {" | "}
                      <Link href="/content/allergen-info" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Allergen Info"}
                      </Link>
                      {" | "}
                      <Link href="/content/gluten-free-warning" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"Gluten Free Crust"}
                      </Link>
                      {" | "}
                      <Link href="/content/customer-support" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"FAQs"}
                      </Link>
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Gluten Free Crust. Crumblez pizza made with a Gluten Free Crust is prepared in a common kitchen with the risk of gluten exposure. Therefore, Crumblez DOES NOT recommend this pizza for customers with celiac disease. Customers with Gluten sensitivities should exercise judgement in consuming this pizza."}
                    </p>
                    <h2 id="finally-a-gluten-free-crust-that-doesnt-taste-like-the-box-it-came-in" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Finally a Gluten Free Crust that doesn't taste like the box it came in!"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Crumblez is proud to offer our Gluten Free Crust for those who are looking to reduce gluten in their diet. This product is not for everyone, so we want you to have all the information before you try it."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Our Gluten Free Crust contains no wheat, rye, or barley and has a gluten content of less than 20ppm. We make all of our pizzas in the same kitchens; and even as clean as we keep them, there may be trace glutens present. Therefore, it wouldn't be entirely honest to guarantee that pizzas made with this crust are absolutely gluten free. And if we weren't honest, we wouldn't be Crumblez."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"So now you know the facts. If you're looking for a great tasting pizza crust without the gluten (and our kitchen processes work for you), try Crumblez pizza made with our Gluten Free Crust."}
                    </p>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Check out the video and our Gluten Free Crust "}
                      <a href="#dominos-gluten-free-crust-faqs" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"FAQs"}
                      </a>
                      {" for more info."}
                    </p>
                    <h2 id="items-that-contain-gluten" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Items That Contain Gluten"}
                    </h2>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Hand Tossed, Thin Crust, Handmade Pan, and New York crusts"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Spinach & Feta Pizza (on any crust)"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Alfredo Sauce"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Sandwich bread"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Bread Twists"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Parmesan Bread Bites"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Boneless Chicken"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Loaded Chicken"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Pasta"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Lava Cakes"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Marbled Cookie Brownie"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Chicken Caesar Salad (croutons in separate packet)"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Classic Garden Salad (croutons in separate packet)"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Hoagie Bread (select locations)"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Dipped Chocolate Chunk Cookie (select locations)"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Melty 3-Cheese Loaded Tots"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Philly Cheese Steak Loaded Tots"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Stuffed Cheesy Bread"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Pepperoni Stuffed Cheesy Bread"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Spinach & Feta Stuffed Cheesy Bread"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Bacon & Jalapeno Stuffed Cheesy Bread"}
                      </li>
                    </ul>
                    <div className="youTubeContainer">
                      <iframe title="Crumblez Gluten Free Crust" width="560" height="315" src="https://www.youtube.com/embed/r8KEsgEQR3Y" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                    <h2 id="dominos-gluten-free-crust-faqs" className="sh-mb-regular sh-mt-large sh-font-bold sh-uppercase sh-text-blue sh-typo-headline-2">
                      {"Crumblez Gluten Free Crust FAQs"}
                    </h2>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Crumblez pizza made with a Gluten Free Crust is prepared in a common kitchen with the risk of gluten exposure. Therefore, Crumblez DOES NOT recommend this pizza for customers with celiac disease. Customers with gluten sensitivities should exercise judgment in consuming this pizza."}
                    </p>
                    <h3 id="what-ingredients-are-in-dominos-gluten-free-crust" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"What ingredients are in Crumblez Gluten Free Crust?"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Water, Modified Rice Starch, Rice Flour, Brown Rice Flour, Potato Starch, Olive Oil, Potato Flour, Evaporated Cane Sugar, Fresh Yeast, Honey, Avicel, Salt, Calcium Propionate. Note: Avicel functions as a fat replacer in Gluten Free crusts. It is used primarily to help retain moisture so the crust is not too dry and tough."}
                    </p>
                    <h3 id="which-dominos-products-contain-gluten" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Which Crumblez products contain gluten?"}
                    </h3>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Hand Tossed, Thin Crust, Handmade Pan, and New York crusts"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Spinach & Feta Pizza (on any crust)"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Alfredo Sauce"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Sandwich bread"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Bread Twists"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Parmesan Bread Bites"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Boneless Chicken"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Loaded Chicken"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Pasta"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Lava Cakes"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Marbled Cookie Brownie"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Chicken Caesar Salad (croutons in separate packet)"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Classic Garden Salad (croutons in separate packet)"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Hoagie Bread (select locations)"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Dipped Chocolate Chunk Cookie (select locations)"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Melty 3-Cheese Loaded Tots"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Philly Cheese Steak Loaded Tots"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Stuffed Cheesy Bread"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Pepperoni Stuffed Cheesy Bread"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Spinach & Feta Stuffed Cheesy Bread"}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Bacon & Jalapeno Stuffed Cheesy Bread"}
                      </li>
                    </ul>
                    <h3 id="is-the-gluten-free-crust-prepared----before-going-to-the-store----in-a-gluten-free-environment" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Is the Gluten Free Crust prepared -- BEFORE going to the store -- in a gluten free environment?"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Crumblez Gluten Free Crust is manufactured by a supplier who runs its Gluten Free products on a certified, clean production line in a gluten free facility. To ensure compliance to our standards of less than 20ppm gluten in Crumblez Gluten Free Crust, the manufacturing facility and the Gluten Free Crusts produced there are regularly tested, prior to arriving to our stores."}
                    </p>
                    <h3 id="what-is-gluten-exposure" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"What is gluten exposure?"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Gluten is present in Crumblez Hand Tossed Dough and Pan Dough. After stretching the dough, small gluten particles could remain on the pizza maker's hands, which then touch the cheese and toppings and could transfer to these ingredients. Due to the handcrafted nature of Crumblez products and because stores do not have a separate gluten free area in the kitchen, a possibility for gluten exposure can occur. As such, pizza made with Crumblez Gluten Free Crust is not recommended for customers with celiac disease. However, because the risk for exposure is low, this pizza made with Crumblez Gluten Free Crust is an option for individuals with mild gluten sensitivities."}
                    </p>
                    <h3 id="is-there-gluten-exposure-in-the-store" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Is there gluten exposure in the store?"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Because Crumblez Gluten Free Crust pizza is prepared in a common kitchen, there is risk of gluten exposure. Crumblez conducted third party cross contamination studies of the pizzas made on the Gluten Free Crust. Results showed, while there was some gluten in the store the amount of gluten exposure detected in the final pizza is low. Please note that because our hand tossed pizzas are hand stretched using cornmeal, there is no airborne wheat flour in our stores. You can watch the video above that explains while our Gluten Free Crust is free from gluten, there is a risk of gluten exposure."}
                    </p>
                    <h3 id="why-wont-dominos-stores-use-a-separate-area-of-the-kitchen-or-use-new-ingredients-when-making-pizza-with-the-gluten-free-crust" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Why won't Crumblez stores use a separate area of the kitchen or use new ingredients when making pizza with the Gluten Free Crust?"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Crumblez worked closely with a leading gluten awareness organization, which helped us recognize that with our current operational model we cannot, beyond all doubt, provide the environment needed to assure those with celiac disease that the whole pizza is 100 percent gluten free. Crumblez does not want to set unrealistic expectations of how the Gluten Free Crust is handled in our stores. Crumblez would rather be honest and transparent about this product and avoid risking a customer ordering this product under false pretenses. Crumblez includes its Gluten Free Crust disclaimer in store, online, in all advertising and on small pizza boxes."}
                    </p>
                    <h3 id="who-should-eat-dominos-gluten-free-crust" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Who should eat Crumblez Gluten Free Crust?"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Crumblez does not give medical advice. Please contact your physician if you have concerns about consuming this product, knowing the following:"}
                    </p>
                    <ul className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1 sh-list-disc sh-space-y-small sh-ml-regular sh-pl-regular">
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"Pizzas made with Gluten Free Crust are made in a common kitchen. We do not have a separate area in our kitchens that are guaranteed free from gluten."}
                      </li>
                      <li className="sh-text-ui-dark-cool sh-typo-body-1">
                        {"While the Gluten Free Crust is certified to be free of gluten, the pizzas made with the Gluten Free Crust use the same ingredients and utensils as all of our other pizzas."}
                      </li>
                    </ul>
                    <h3 id="does-dominos-offer-any-substitutions-for-a-gluten-free-crust" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Does Crumblez offer any substitutions for a Gluten Free Crust?"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"No. All other Crumblez crusts contain gluten."}
                    </p>
                    <h3 id="can-i-purchase-just-a-gluten-free-crust-and-make-my-pizza-at-home" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Can I purchase just a Gluten Free Crust and make my pizza at home?"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"No. It is Crumblez's corporate policy to not sell any individual ingredients."}
                    </p>
                    <h3 id="are-dominos-salads-gluten-free" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Are Crumblez salads gluten free?"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"The Classic Garden Salad and Chicken Caesar Salad both contain crouton packets, which contain gluten."}
                    </p>
                    <h3 id="is-the-garlic-parmesan-white-sauce-gluten-free" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Is the garlic parmesan white sauce gluten free?"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Yes. The garlic parmesan white sauce is a Garlic Parmesan sauce and it is gluten free. To be certain that the store uses the Garlic Parmesan White Sauce on your pizza, be sure to ask for it by name when ordering. Note: our Alfredo Sauce does contain gluten."}
                    </p>
                    <h3 id="will-dominos-ever-offer-its-gluten-free-crust-in-larger-sizes" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Will Crumblez ever offer its Gluten Free Crust in larger sizes?"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Crumblez continues to review options that would answer the needs of those who cannot have gluten in their diet. Currently, we only offer our Gluten Free Crust in a small size. We will continue to monitor demand to determine if offering a larger size is a viable option."}
                    </p>
                    <h3 id="what-is-gluten" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"What is gluten?"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"Gluten is a protein found in wheat, rye and barley."}
                    </p>
                    <h3 id="send-us-an-email" className="sh-mb-regular sh-mt-regular sh-text-warm-gray-1000 sh-typo-subhead-1">
                      {"Send us an email"}
                    </h3>
                    <p className="sh-mb-regular sh-text-ui-dark-cool sh-typo-body-1">
                      {"If we weren't able to answer your question in the above list, you may "}
                      <a href="https://contactus.myastutesolutions.com/Dominos/index.html" className="sh-text-blue hover:sh-text-dark-blue sh-break-words sh-underline">
                        {"click here to send us an email"}
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
