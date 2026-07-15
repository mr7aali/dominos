"use client";

import { FormEvent, useEffect, useState } from "react";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onStartOrder: () => void;
};

function BackIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <path
        d="M10 3 5 8l5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function CartModal({ isOpen, onClose, onStartOrder }: CartModalProps) {
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  useBodyScrollLock(isOpen, "shopping-cart-modal-open");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setIsPromoOpen(false);
      setPromoCode("");
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handlePromoSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="shopping-cart-modal-layer">
      <button
        aria-label="Close cart dialog"
        className="shopping-cart-modal-backdrop"
        type="button"
        onClick={onClose}
      />
      <section
        aria-labelledby="shopping-cart-title"
        aria-modal="true"
        className="shopping-cart-modal"
        role="dialog"
      >
        <header className="shopping-cart-modal__header">
          <button
            aria-label="Back"
            className="shopping-cart-modal__icon-button"
            type="button"
            onClick={onClose}
          >
            <BackIcon />
          </button>
          <h2 id="shopping-cart-title">Cart</h2>
          <button
            aria-label="Close cart dialog"
            className="shopping-cart-modal__icon-button"
            type="button"
            onClick={onClose}
          >
            <span aria-hidden="true">x</span>
          </button>
        </header>

        <div className="shopping-cart-modal__body">
          <section className="shopping-cart-modal__summary">
            <h3>Looks like your cart is empty.</h3>
            <p>
              Have a deal or promotion code?{" "}
              <button
                className="shopping-cart-modal__deal-button"
                type="button"
                onClick={() => setIsPromoOpen(true)}
              >
                Add deal
              </button>
            </p>
            {isPromoOpen ? (
              <form className="shopping-cart-promo" onSubmit={handlePromoSubmit}>
                <label className="shopping-cart-promo__field">
                  <span>Promo Code</span>
                  <input
                    name="promoCode"
                    value={promoCode}
                    onChange={(event) => setPromoCode(event.target.value)}
                  />
                </label>
                <button className="shopping-cart-promo__submit" type="submit">
                  Submit
                </button>
              </form>
            ) : null}
          </section>

          <footer className="shopping-cart-modal__footer">
            <button
              className="shopping-cart-modal__start"
              type="button"
              onClick={onStartOrder}
            >
              Start Your Order
            </button>
          </footer>
        </div>
      </section>
    </div>
  );
}
