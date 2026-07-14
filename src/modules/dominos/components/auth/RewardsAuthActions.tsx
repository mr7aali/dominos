"use client";

import { useAuthModal } from "./AuthModalProvider";

export function RewardsAuthActions() {
  const { openAuthModal } = useAuthModal();

  return (
    <div className="rewards-page__actions">
      <button
        className="rewards-page__button rewards-page__button--outline"
        type="button"
        onClick={() => openAuthModal("signup")}
      >
        Join Now
      </button>
      <button
        className="rewards-page__button rewards-page__button--red"
        type="button"
        onClick={() => openAuthModal("email")}
      >
        Sign In
      </button>
    </div>
  );
}
