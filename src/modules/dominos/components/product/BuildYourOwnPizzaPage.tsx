"use client";

import { useMemo, useState } from "react";
import { DominosPageShell } from "../page-shell";

type Choice = {
  label: string;
  meta?: string;
  selected?: boolean;
  disabled?: boolean;
  image?: string;
  pattern?: string;
  price?: number;
};

type OptionSection = {
  title: string;
  note?: string;
  kind?: "radio" | "checkbox";
  columns?: "compact" | "wide";
  choices: Choice[];
};

const pizzaImages = {
  buildYourOwn:
    "/site-assets/cms/assets/e981ac7d-12a0-4412-a5f3-f2da0c489d808b64.png?modified_on=2025-08-08T14%3A03%3A16.290Z&im=Resize%3D%28333%2C333%29%3BCrop%2Crect%3D%28106%2C102%2C234%2C234%29%2CallowExpansion",
  specialty:
    "/site-assets/cms/assets/2050a7ae-c278-4d60-b984-0956367382cf2f79.png?modified_on=2024-07-30T12%3A23%3A51.406Z&im=Resize%3D%28624%2C624%29%3BCrop%2Crect%3D%28202%2C206%2C431%2C431%29%2CallowExpansion",
  bread:
    "/site-assets/cms/assets/25702277-acad-4abb-8427-34b639f67ecd5cdd.png?modified_on=2024-12-02T17%3A09%3A35.142Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2859%2C36%2C234%2C234%29%2CallowExpansion",
  chicken:
    "/site-assets/cms/assets/52a5cd59-c19c-472d-b5b2-e8e0c6144408929e.png?modified_on=2024-12-02T17%3A11%3A10.571Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2859%2C85%2C234%2C234%29%2CallowExpansion",
  sandwich:
    "/site-assets/cms/assets/de67c289-a105-4ee3-a0ef-015aa5b73f4982af.png?modified_on=2026-04-27T21%3A57%3A21.647Z&im=Resize%3D%28281%2C281%29%3BCrop%2Crect%3D%2859%2C83%2C234%2C234%29%2CallowExpansion",
  dessert:
    "/site-assets/cms/assets/ae22b2e2-9f64-423f-98e7-df93821a49930515.png?modified_on=2024-07-26T20%3A08%3A08.048Z&im=Resize%3D%28217%2C217%29%3BCrop%2Crect%3D%2815%2C41%2C234%2C234%29%2CallowExpansion",
};

const crusts: Choice[] = [
  { label: "Hand Tossed", selected: true, image: pizzaImages.buildYourOwn },
  { label: "Parmesan Stuffed Crust", image: pizzaImages.specialty, price: 2.99 },
  { label: "Handmade Pan", image: pizzaImages.bread, price: 1.49 },
  { label: "Crunchy Thin Crust", image: pizzaImages.sandwich },
  { label: "New York Style", image: pizzaImages.chicken, price: 1 },
  { label: "Gluten Free Crust", image: pizzaImages.dessert, price: 2 },
];

const sections: OptionSection[] = [
  {
    title: "Size",
    note: "Hand Tossed is not available in X-Large",
    choices: [
      { label: "Small", meta: "10\"" },
      { label: "Medium", meta: "12\"", price: 0.75 },
      { label: "Large", meta: "14\"", selected: true, price: 1.5 },
      { label: "X-Large", meta: "16\"", disabled: true, price: 2.5 },
    ],
  },
  {
    title: "Crust Seasoning",
    choices: [
      { label: "Garlic Crust Seasoning", selected: true },
      { label: "No Garlic Crust Seasoning" },
    ],
  },
  {
    title: "Sauce",
    columns: "wide",
    choices: [
      { label: "Robust Inspired Tomato Sauce", meta: "Normal", selected: true, pattern: "tomato" },
      { label: "Honey BBQ Sauce", pattern: "bbq" },
      { label: "Garlic Parmesan Sauce", pattern: "cream" },
      { label: "Alfredo Sauce", pattern: "alfredo" },
      { label: "Ranch", pattern: "ranch" },
      { label: "No Sauce" },
    ],
  },
  {
    title: "Cheese",
    columns: "wide",
    choices: [
      { label: "Cheese", meta: "Normal", selected: true, pattern: "cheese" },
      { label: "No Cheese" },
    ],
  },
  {
    title: "Meats",
    kind: "checkbox",
    columns: "wide",
    choices: [
      { label: "Ham", pattern: "ham", price: 1.25 },
      { label: "Beef", pattern: "beef", price: 1.25 },
      { label: "Pepperoni", pattern: "pepperoni", price: 1.25 },
      { label: "Italian Sausage", pattern: "sausage", price: 1.25 },
      { label: "Premium Chicken", pattern: "chicken", price: 1.75 },
      { label: "Bacon", pattern: "bacon", price: 1.5 },
      { label: "Philly Steak", pattern: "steak", price: 1.75 },
    ],
  },
  {
    title: "Veggies & More",
    kind: "checkbox",
    columns: "wide",
    choices: [
      { label: "Hot Buffalo Sauce", pattern: "buffalo", price: 0.75 },
      { label: "Garlic", pattern: "garlic", price: 0.75 },
      { label: "Jalapeno Peppers", pattern: "jalapeno", price: 0.75 },
      { label: "Onions", pattern: "onion", price: 0.75 },
      { label: "Banana Peppers", pattern: "banana", price: 0.75 },
      { label: "Diced Tomatoes", pattern: "tomato-pieces", price: 0.75 },
      { label: "Black Olives", pattern: "olive", price: 0.75 },
      { label: "Mushrooms", pattern: "mushroom", price: 0.75 },
      { label: "Pineapple", pattern: "pineapple", price: 0.75 },
      { label: "Green Peppers", pattern: "green-pepper", price: 0.75 },
      { label: "Spinach", pattern: "spinach", price: 0.75 },
    ],
  },
  {
    title: "Add-On Cheeses",
    kind: "checkbox",
    columns: "wide",
    choices: [
      { label: "Shredded Provolone Cheese", pattern: "provolone", price: 1 },
      { label: "Cheddar Cheese Blend", pattern: "cheddar", price: 1 },
      { label: "Feta Cheese", pattern: "feta", price: 1 },
      { label: "Shredded Parmesan Asiago", pattern: "asiago", price: 1 },
    ],
  },
];

const dippingCups: Choice[] = [
  { label: "Slice Sauce Dipping Cup", meta: "NEW", pattern: "cup-slice", price: 0.75 },
  { label: "Hot Buffalo Dipping Cup", pattern: "cup-buffalo", price: 0.75 },
  { label: "Sweet Mango Habanero Dipping Cup", pattern: "cup-mango", price: 0.75 },
  { label: "Honey BBQ Dipping Cup", pattern: "cup-bbq", price: 0.75 },
  { label: "Ranch Dipping Cup", pattern: "cup-ranch", price: 0.75 },
  { label: "Blue Cheese Dipping Cup", pattern: "cup-blue", price: 0.75 },
  { label: "Garlic Dipping Cup", pattern: "cup-garlic", price: 0.75 },
  { label: "Marinara Dipping Cup", pattern: "cup-marinara", price: 0.75 },
];

function defaultRadioSelections() {
  return sections.reduce<Record<string, string>>((acc, section) => {
    if (section.kind !== "checkbox") {
      acc[section.title] =
        section.choices.find((choice) => choice.selected)?.label ?? section.choices[0]?.label ?? "";
    }

    return acc;
  }, {});
}

function optionKey(sectionTitle: string, choiceLabel: string) {
  return `${sectionTitle}:${choiceLabel}`;
}

function money(value: number) {
  return `$${value.toFixed(2)}`;
}

export function BuildYourOwnPizzaPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedCrust, setSelectedCrust] = useState(
    crusts.find((crust) => crust.selected)?.label ?? crusts[0].label,
  );
  const [radioSelections, setRadioSelections] = useState(defaultRadioSelections);
  const [checkedOptions, setCheckedOptions] = useState<Set<string>>(() => new Set());
  const [checkedDips, setCheckedDips] = useState<Set<string>>(() => new Set());
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [cartMessage, setCartMessage] = useState("");

  const selectedExtras = useMemo(
    () =>
      sections
        .filter((section) => section.kind === "checkbox")
        .flatMap((section) =>
          section.choices
            .filter((choice) => checkedOptions.has(optionKey(section.title, choice.label)))
            .map((choice) => ({ ...choice, sectionTitle: section.title })),
        ),
    [checkedOptions],
  );

  const selectedDips = useMemo(
    () => dippingCups.filter((cup) => checkedDips.has(cup.label)),
    [checkedDips],
  );

  const total = useMemo(() => {
    const basePrice = 9.99;
    const crustPrice = crusts.find((crust) => crust.label === selectedCrust)?.price ?? 0;
    const radioPrice = sections.reduce((sum, section) => {
      if (section.kind === "checkbox") return sum;
      const selected = section.choices.find((choice) => choice.label === radioSelections[section.title]);
      return sum + (selected?.price ?? 0);
    }, 0);
    const extrasPrice = selectedExtras.reduce((sum, choice) => sum + (choice.price ?? 0), 0);
    const dipPrice = selectedDips.reduce((sum, choice) => sum + (choice.price ?? 0), 0);

    return (basePrice + crustPrice + radioPrice + extrasPrice + dipPrice) * quantity;
  }, [quantity, radioSelections, selectedCrust, selectedDips, selectedExtras]);

  function updateQuantity(nextQuantity: number) {
    setQuantity(Math.max(1, Math.min(20, nextQuantity)));
  }

  function selectRadio(sectionTitle: string, choice: Choice) {
    if (choice.disabled) return;
    setRadioSelections((current) => ({ ...current, [sectionTitle]: choice.label }));
    setCartMessage("");
  }

  function toggleOption(sectionTitle: string, choice: Choice) {
    if (choice.disabled) return;
    const key = optionKey(sectionTitle, choice.label);
    setCheckedOptions((current) => {
      const next = new Set(current);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
    setCartMessage("");
  }

  function toggleDip(choice: Choice) {
    setCheckedDips((current) => {
      const next = new Set(current);
      if (next.has(choice.label)) {
        next.delete(choice.label);
      } else {
        next.add(choice.label);
      }
      return next;
    });
    setCartMessage("");
  }

  function handleAddToCart() {
    setCartMessage(`${quantity} custom pizza${quantity > 1 ? "s" : ""} added to cart.`);
  }

  return (
    <DominosPageShell>
      <div className="build-pizza-page">
        <Hero onAddToCart={handleAddToCart} total={total} />
        <div className="build-pizza-page__content">
          <aside className="build-pizza-page__rail">
            <div className="build-pizza-page__rail-card">Pizza</div>
          </aside>
          <form className="build-pizza-page__form" onSubmit={(event) => event.preventDefault()}>
            <Quantity quantity={quantity} updateQuantity={updateQuantity} />
            <CrustSection
              selectedCrust={selectedCrust}
              setSelectedCrust={(crust) => {
                setSelectedCrust(crust);
                setCartMessage("");
              }}
            />
            {sections.map((section) => (
              <OptionSection
                checkedOptions={checkedOptions}
                key={section.title}
                radioSelections={radioSelections}
                section={section}
                selectRadio={selectRadio}
                toggleOption={toggleOption}
              />
            ))}
            <details className="build-pizza-page__details">
              <summary>Special Instructions</summary>
              <textarea
                aria-label="Special Instructions"
                onChange={(event) => setSpecialInstructions(event.target.value)}
                rows={3}
                value={specialInstructions}
              />
            </details>
            <DippingCups checkedDips={checkedDips} toggleDip={toggleDip} />
            <ItemSummary
              cartMessage={cartMessage}
              quantity={quantity}
              radioSelections={radioSelections}
              selectedCrust={selectedCrust}
              selectedDips={selectedDips}
              selectedExtras={selectedExtras}
              specialInstructions={specialInstructions}
              total={total}
              onAddToCart={handleAddToCart}
            />
          </form>
        </div>
      </div>
    </DominosPageShell>
  );
}

function Hero({ onAddToCart, total }: { onAddToCart: () => void; total: number }) {
  return (
    <header className="build-pizza-hero">
      <div className="build-pizza-hero__copy">
        <p>Pizza</p>
        <h1>Pizza</h1>
        <span>A custom pizza made to order. Choose from any of our delicious crust styles, including Handmade Pan.</span>
        <button type="button" onClick={onAddToCart}>
          Add to Cart - {money(total)}
        </button>
      </div>
      <img alt="Pizza preview" src={pizzaImages.specialty} />
    </header>
  );
}

function Quantity({
  quantity,
  updateQuantity,
}: {
  quantity: number;
  updateQuantity: (quantity: number) => void;
}) {
  return (
    <section className="build-option-section">
      <h2>Quantity</h2>
      <div className="build-quantity">
        <span>Quantity</span>
        <div>
          <button aria-label="Decrease quantity" type="button" onClick={() => updateQuantity(quantity - 1)}>
            -
          </button>
          <strong>{quantity}</strong>
          <button aria-label="Increase quantity" type="button" onClick={() => updateQuantity(quantity + 1)}>
            +
          </button>
        </div>
      </div>
    </section>
  );
}

function CrustSection({
  selectedCrust,
  setSelectedCrust,
}: {
  selectedCrust: string;
  setSelectedCrust: (crust: string) => void;
}) {
  return (
    <section className="build-option-section">
      <h2>Crusts</h2>
      <div className="build-crust-grid">
        {crusts.map((crust) => {
          const isSelected = selectedCrust === crust.label;

          return (
            <label className={isSelected ? "is-selected" : ""} key={crust.label}>
              <span>
                {crust.label}
                {crust.price ? <em> +{money(crust.price)}</em> : null}
              </span>
              <input
                checked={isSelected}
                name="crust"
                onChange={() => setSelectedCrust(crust.label)}
                type="radio"
              />
              <img alt="" src={crust.image} />
            </label>
          );
        })}
      </div>
    </section>
  );
}

function OptionSection({
  checkedOptions,
  radioSelections,
  section,
  selectRadio,
  toggleOption,
}: {
  checkedOptions: Set<string>;
  radioSelections: Record<string, string>;
  section: OptionSection;
  selectRadio: (sectionTitle: string, choice: Choice) => void;
  toggleOption: (sectionTitle: string, choice: Choice) => void;
}) {
  const inputType = section.kind === "checkbox" ? "checkbox" : "radio";

  return (
    <section className="build-option-section">
      <h2>{section.title}</h2>
      {section.note ? <p>{section.note}</p> : null}
      <div className={`build-choice-grid build-choice-grid--${section.columns ?? "compact"}`}>
        {section.choices.map((choice) => {
          const isChecked =
            section.kind === "checkbox"
              ? checkedOptions.has(optionKey(section.title, choice.label))
              : radioSelections[section.title] === choice.label;

          return (
            <label
              className={`${isChecked ? "is-selected" : ""} ${choice.disabled ? "is-disabled" : ""}`}
              key={choice.label}
            >
              {choice.pattern ? <span className={`build-choice-pattern build-choice-pattern--${choice.pattern}`} /> : null}
              <span className="build-choice-copy">
                <strong>{choice.label}</strong>
                {choice.meta || choice.price ? (
                  <em>
                    {choice.meta}
                    {choice.meta && choice.price ? " " : ""}
                    {choice.price ? `+${money(choice.price)}` : ""}
                  </em>
                ) : null}
              </span>
              <input
                checked={isChecked}
                disabled={choice.disabled}
                name={section.title}
                onChange={() =>
                  section.kind === "checkbox"
                    ? toggleOption(section.title, choice)
                    : selectRadio(section.title, choice)
                }
                type={inputType}
              />
            </label>
          );
        })}
      </div>
    </section>
  );
}

function DippingCups({
  checkedDips,
  toggleDip,
}: {
  checkedDips: Set<string>;
  toggleDip: (choice: Choice) => void;
}) {
  return (
    <section className="build-option-section">
      <h2>Add Dipping Cups</h2>
      <p>Additional charges apply.</p>
      <div className="build-dip-grid">
        {dippingCups.map((cup) => {
          const isChecked = checkedDips.has(cup.label);

          return (
            <label className={isChecked ? "is-selected" : ""} key={cup.label}>
              <span>{cup.label}</span>
              <em>
                {cup.meta ? `${cup.meta} ` : ""}
                +{money(cup.price ?? 0)}
              </em>
              <input checked={isChecked} onChange={() => toggleDip(cup)} type="checkbox" />
              <span className={`build-dip-cup build-choice-pattern--${cup.pattern}`} />
            </label>
          );
        })}
      </div>
    </section>
  );
}

function ItemSummary({
  cartMessage,
  quantity,
  radioSelections,
  selectedCrust,
  selectedDips,
  selectedExtras,
  specialInstructions,
  total,
  onAddToCart,
}: {
  cartMessage: string;
  quantity: number;
  radioSelections: Record<string, string>;
  selectedCrust: string;
  selectedDips: Choice[];
  selectedExtras: Array<Choice & { sectionTitle: string }>;
  specialInstructions: string;
  total: number;
  onAddToCart: () => void;
}) {
  return (
    <section className="build-pizza-page__summary">
      <h2>Item Summary</h2>
      <div className="build-pizza-summary-card">
        <div>
          <strong>{quantity} custom pizza{quantity > 1 ? "s" : ""}</strong>
          <span>{selectedCrust}</span>
          <span>{radioSelections.Size}</span>
          <span>{radioSelections.Sauce}</span>
          <span>{radioSelections.Cheese}</span>
          {selectedExtras.length ? <span>{selectedExtras.map((choice) => choice.label).join(", ")}</span> : null}
          {selectedDips.length ? <span>Dips: {selectedDips.map((choice) => choice.label).join(", ")}</span> : null}
          {specialInstructions.trim() ? <span>Instructions: {specialInstructions.trim()}</span> : null}
        </div>
        <strong>{money(total)}</strong>
      </div>
      <button type="button" onClick={onAddToCart}>
        Add to Cart
      </button>
      {cartMessage ? <p className="build-pizza-page__cart-message" role="status">{cartMessage}</p> : null}
      <p>
        Learn more about what products contain allergens on our{" "}
        <a href="/content/allergen-info">allergen page</a>.
      </p>
    </section>
  );
}
