"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { AuthStep, SignInModal } from "./SignInModal";

type AuthModalContextValue = {
  openAuthModal: (step?: Extract<AuthStep, "email" | "signup">) => void;
};

const AuthModalContext = createContext<AuthModalContextValue | null>(null);

export function AuthModalProvider({ children }: { children: ReactNode }) {
  const [initialStep, setInitialStep] = useState<Extract<AuthStep, "email" | "signup">>("email");
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo<AuthModalContextValue>(
    () => ({
      openAuthModal: (step = "email") => {
        setInitialStep(step);
        setIsOpen(true);
      },
    }),
    [],
  );

  return (
    <AuthModalContext.Provider value={value}>
      {children}
      <SignInModal
        initialStep={initialStep}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const value = useContext(AuthModalContext);

  if (!value) {
    throw new Error("useAuthModal must be used inside AuthModalProvider.");
  }

  return value;
}
