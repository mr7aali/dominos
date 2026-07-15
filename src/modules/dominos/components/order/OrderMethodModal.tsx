"use client";

import { useEffect, useMemo, useState } from "react";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";

type OrderMethodModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type OrderMethodId = "delivery" | "carryout";

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
] satisfies Array<{
  id: OrderMethodId;
  title: string;
  description: string;
  href: string;
  services: Array<{ label: string; icon: string }>;
}>;

const addressFields = [
  {
    id: "addressType",
    label: "Address Type",
    kind: "select",
    defaultValue: "House",
    options: ["House", "Apartment", "Business", "Hotel"],
  },
  {
    id: "streetAddress",
    label: "Street Address",
    kind: "input",
    defaultValue: "",
  },
  {
    id: "suite",
    label: "Suite/Apt",
    kind: "input",
    defaultValue: "",
  },
  {
    id: "zipCode",
    label: "ZIP Code",
    kind: "input",
    defaultValue: "1212",
  },
  {
    id: "city",
    label: "City",
    kind: "input",
    defaultValue: "Dhaka",
  },
  {
    id: "state",
    label: "State",
    kind: "select",
    defaultValue: "Dhaka Division",
    options: ["Dhaka Division", "Chattogram Division", "Rajshahi Division", "Sylhet Division"],
  },
] satisfies Array<
  | {
      id: string;
      label: string;
      kind: "input";
      defaultValue: string;
    }
  | {
      id: string;
      label: string;
      kind: "select";
      defaultValue: string;
      options: string[];
    }
>;

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

function GoogleMapPreview({ query, zoom }: { query: string; zoom: number }) {
  return (
    <iframe
      allowFullScreen
      className="order-method-google-map"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps?output=embed&q=${encodeURIComponent(query)}&z=${zoom}`}
      title="Google map for choosing delivery or carryout location"
    />
  );
}

function ChevronDownIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <path
        d="M3.5 6 8 10.5 12.5 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8" cy="8" r="1.8" fill="currentColor" />
      <path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function OrderAddressForm({
  selectedMethod,
  onMethodChange,
  onUseLocation,
}: {
  selectedMethod: OrderMethodId;
  onMethodChange: (method: OrderMethodId) => void;
  onUseLocation: () => void;
}) {
  const selectedOrderMethod = useMemo(
    () => orderMethods.find((method) => method.id === selectedMethod) ?? orderMethods[0],
    [selectedMethod],
  );

  return (
    <form
      className="order-method-form"
      onSubmit={(event) => {
        event.preventDefault();
        window.location.href = selectedOrderMethod.href;
      }}
    >
      <div className="order-method-tabs" role="tablist" aria-label="Order method">
        {orderMethods.map((method) => (
          <button
            aria-selected={selectedMethod === method.id}
            className="order-method-tab"
            key={method.id}
            role="tab"
            type="button"
            onClick={() => {
              onMethodChange(method.id);
            }}
          >
            {method.title}
          </button>
        ))}
      </div>

      <button className="order-method-location" type="button" onClick={onUseLocation}>
        <LocationIcon />
        Use My Location
      </button>

      <div className="order-method-fields">
        {addressFields.map((field) => (
          <label className="order-method-field" key={field.id}>
            <span>{field.label}</span>
            {field.kind === "select" ? (
              <span className="order-method-field__select-wrap">
                <select name={field.id} defaultValue={field.defaultValue}>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon />
              </span>
            ) : (
              <input name={field.id} defaultValue={field.defaultValue} />
            )}
          </label>
        ))}
      </div>

      <button className="order-method-submit" type="submit">
        Continue for {selectedMethod === "delivery" ? "Delivery" : "Carryout"}
      </button>
    </form>
  );
}

export function OrderMethodModal({ isOpen, onClose }: OrderMethodModalProps) {
  const [mapQuery, setMapQuery] = useState("United States");
  const [mapZoom, setMapZoom] = useState(4);
  const [selectedMethod, setSelectedMethod] = useState<OrderMethodId | null>(null);

  useBodyScrollLock(isOpen, "order-method-modal-open");

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
      setMapQuery("United States");
      setMapZoom(4);
      setSelectedMethod(null);
    }
  }, [isOpen]);

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      setMapQuery(`${position.coords.latitude},${position.coords.longitude}`);
      setMapZoom(14);
    });
  };

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
          <aside
            className={
              selectedMethod
                ? "order-method-modal__panel order-method-modal__panel--form"
                : "order-method-modal__panel"
            }
          >
            {selectedMethod ? (
              <OrderAddressForm
                selectedMethod={selectedMethod}
                onMethodChange={setSelectedMethod}
                onUseLocation={handleUseLocation}
              />
            ) : (
              <>
                <h3>How do you want your Domino's today?</h3>
                <div className="order-method-modal__options">
                  {orderMethods.map((method) => (
                    <button
                      className="order-method-card"
                      data-method={method.id}
                      key={method.id}
                      type="button"
                      onClick={() => {
                        setSelectedMethod(method.id);
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
              </>
            )}
          </aside>
          <section className="order-method-modal__map">
            <GoogleMapPreview query={mapQuery} zoom={mapZoom} />
          </section>
        </div>
      </div>
    </div>
  );
}
