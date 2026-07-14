"use client";

import { useEffect } from "react";

type OrderMethodModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const orderMethods = [
  {
    id: "delivery",
    title: "Delivery",
    description: "Get your order delivered to you, or to your door.",
    href: "/menu32f4?type=order_delivery",
    services: [],
  },
  {
    id: "carryout",
    title: "Carryout",
    description: "Pick-up your order at a nearby Domino's.",
    href: "/menu0e22?type=order_carryout",
    services: [
      { label: "Carside", icon: "car" },
      { label: "In-Store", icon: "store" },
      { label: "Pickup Window", icon: "window" },
    ],
  },
];

function ServiceIcon({ type }: { type: string }) {
  if (type === "store") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M2 6h12l-1.2-3.5H3.2L2 6Z" fill="#e31837" />
        <path d="M3 6h10v7H3V6Z" fill="#0b77bd" />
        <path d="M6.5 9h3v4h-3V9Z" fill="#fff" />
      </svg>
    );
  }

  if (type === "window") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M2 7h8.5l2.2 2H14v3H2V7Z" fill="#0b77bd" />
        <path d="M4 5h5v3H4V5Z" fill="#e31837" />
        <circle cx="5" cy="12" r="1.2" fill="#4a2500" />
        <circle cx="12" cy="12" r="1.2" fill="#4a2500" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2 9.5 4 6h6.8l2.7 3.5v3H2v-3Z" fill="#0b77bd" />
      <path d="M5 7h5l1.3 1.7H4.1L5 7Z" fill="#fff" />
      <circle cx="5" cy="12.5" r="1.2" fill="#4a2500" />
      <circle cx="12" cy="12.5" r="1.2" fill="#4a2500" />
    </svg>
  );
}

function GoogleMapPreview() {
  return (
    <iframe
      allowFullScreen
      className="order-method-google-map"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps?output=embed&q=United%20States&z=4"
      title="Google map for choosing delivery or carryout location"
    />
  );
}

export function OrderMethodModal({ isOpen, onClose }: OrderMethodModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("order-method-modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("order-method-modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="order-method-modal-layer">
      <button
        aria-label="Close order method dialog"
        className="order-method-modal-backdrop"
        type="button"
        onClick={onClose}
      />
      <div
        aria-labelledby="order-method-title"
        aria-modal="true"
        className="order-method-modal"
        role="dialog"
      >
        <div className="order-method-modal__header">
          <h2 id="order-method-title">Choose Delivery or Carryout</h2>
          <button
            aria-label="Close order method dialog"
            className="order-method-modal__close"
            type="button"
            onClick={onClose}
          >
            <span aria-hidden="true">x</span>
          </button>
        </div>

        <div className="order-method-modal__body">
          <aside className="order-method-modal__panel">
            <h3>How do you want your Domino's today?</h3>
            <div className="order-method-modal__options">
              {orderMethods.map((method) => (
                <button
                  className="order-method-card"
                  data-method={method.id}
                  key={method.id}
                  type="button"
                  onClick={() => {
                    window.location.href = method.href;
                  }}
                >
                  <span>
                    <strong>{method.title}</strong>
                    <span>{method.description}</span>
                  </span>
                  {method.services.length > 0 ? (
                    <span className="order-method-card__services">
                      {method.services.map((service) => (
                        <span className="order-method-card__service" key={service.label}>
                          <ServiceIcon type={service.icon} />
                          {service.label}
                        </span>
                      ))}
                    </span>
                  ) : null}
                  <span className="order-method-card__arrow" aria-hidden="true">
                    <svg viewBox="0 0 16 16">
                      <path
                        d="M6 4l4 4-4 4"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </aside>
          <section className="order-method-modal__map">
            <GoogleMapPreview />
          </section>
        </div>
      </div>
    </div>
  );
}
