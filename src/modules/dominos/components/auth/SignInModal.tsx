"use client";

import { FormEvent, useEffect, useState } from "react";

type SignInModalProps = {
  initialStep?: AuthStep;
  isOpen: boolean;
  onClose: () => void;
};

export type AuthStep = "email" | "password" | "signup";

const signupFields = [
  {
    id: "email",
    label: "Email*",
    errorLabel: "Email",
    type: "email",
    autoComplete: "email",
  },
  {
    id: "password",
    label: "Password (8 to 40 characters)*",
    errorLabel: "Password",
    type: "password",
    autoComplete: "new-password",
  },
  {
    id: "confirmPassword",
    label: "Re-enter password*",
    errorLabel: "Re-enter password",
    type: "password",
    autoComplete: "new-password",
  },
  {
    id: "firstName",
    label: "First Name*",
    errorLabel: "First Name",
    type: "text",
    autoComplete: "given-name",
  },
  {
    id: "lastName",
    label: "Last Name*",
    errorLabel: "Last Name",
    type: "text",
    autoComplete: "family-name",
  },
  {
    id: "phone",
    label: "Phone Number*",
    errorLabel: "Phone Number",
    type: "tel",
    autoComplete: "tel",
  },
] satisfies Array<{
  id: string;
  label: string;
  errorLabel: string;
  type: "email" | "password" | "tel" | "text";
  autoComplete: string;
}>;

type SignupFieldId = (typeof signupFields)[number]["id"];

const emptySignupValues = signupFields.reduce(
  (values, field) => ({
    ...values,
    [field.id]: "",
  }),
  {} as Record<SignupFieldId, string>,
);

function EyeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path
        d="M2.5 10s2.7-4.5 7.5-4.5 7.5 4.5 7.5 4.5-2.7 4.5-7.5 4.5S2.5 10 2.5 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="10" cy="10" r="2.2" fill="currentColor" />
    </svg>
  );
}

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

function RewardsBrand() {
  return (
    <div className="sign-in-rewards" aria-label="crumblez Rewards">
      <img
        alt=""
        aria-hidden="true"
        className="sign-in-rewards__logo"
        src="/logo.jpeg"
      />
      <span className="sign-in-rewards__text">
        <strong>crumblez</strong>
        <strong>Rewards</strong>
      </span>
    </div>
  );
}

export function SignInModal({ initialStep = "email", isOpen, onClose }: SignInModalProps) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [signupErrors, setSignupErrors] = useState<
    Partial<Record<SignupFieldId, string>>
  >({});
  const [signupValues, setSignupValues] =
    useState<Record<SignupFieldId, string>>(emptySignupValues);
  const [step, setStep] = useState<AuthStep>("email");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("sign-in-modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("sign-in-modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    setEmailError("");
    setSignupErrors({});
    setSignupValues(emptySignupValues);
    setShowPassword(false);

    if (isOpen) {
      setStep(initialStep);
      return;
    }

    setStep("email");
  }, [initialStep, isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleEmailSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      setEmailError("Email is required.");
      return;
    }

    setEmailError("");
    setStep("password");
  };

  const handleBack = () => {
    setSignupErrors({});
    setShowPassword(false);
    setStep("email");
  };

  const handleSignupSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = signupFields.reduce(
      (errors, field) => {
        if (!signupValues[field.id].trim()) {
          errors[field.id] = `${field.errorLabel} is required.`;
        }

        return errors;
      },
      {} as Partial<Record<SignupFieldId, string>>,
    );

    setSignupErrors(nextErrors);
  };

  return (
    <div className="sign-in-modal-layer">
      <button
        aria-label="Close sign in dialog"
        className="sign-in-modal-backdrop"
        type="button"
        onClick={onClose}
      />
      <section
        aria-labelledby="sign-in-title"
        aria-modal="true"
        className={`sign-in-modal sign-in-modal--${step}`}
        role="dialog"
      >
        <header className="sign-in-modal__header">
          {step !== "email" ? (
            <button
              aria-label="Back to email"
              className="sign-in-modal__icon-button"
              type="button"
              onClick={handleBack}
            >
              <BackIcon />
            </button>
          ) : (
            <span />
          )}
          <h2 id="sign-in-title">
            {step === "signup" ? "Sign up" : "Sign In"}
          </h2>
          <button
            aria-label="Close sign in dialog"
            className="sign-in-modal__icon-button"
            type="button"
            onClick={onClose}
          >
            <span aria-hidden="true">x</span>
          </button>
        </header>

        {step === "email" ? (
          <>
            <div className="sign-in-modal__hero">
              <RewardsBrand />
              <p>Join today and start earning points toward FREE Domino's.</p>
            </div>
            <form
              className="sign-in-modal__content"
              noValidate
              onSubmit={handleEmailSubmit}
            >
              <p className="sign-in-modal__prompt">
                Already have an account? Sign in!
              </p>
              <div className="sign-in-field-group">
                <label
                  className={[
                    "sign-in-field",
                    "sign-in-field--floating",
                    email.trim() ? "sign-in-field--filled" : "",
                    emailError ? "sign-in-field--error" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span>Email</span>
                  <input
                    aria-describedby={
                      emailError ? "sign-in-email-error" : undefined
                    }
                    aria-invalid={emailError ? "true" : "false"}
                    autoComplete="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (emailError) {
                        setEmailError("");
                      }
                    }}
                  />
                </label>
                {emailError ? (
                  <p className="sign-in-field-error" id="sign-in-email-error">
                    <span aria-hidden="true">!</span>
                    {emailError}
                  </p>
                ) : null}
              </div>
              <button className="sign-in-primary" type="submit">
                Continue
              </button>
              <div className="sign-in-divider">
                <span>or</span>
              </div>
              <button
                className="sign-in-secondary"
                type="button"
                onClick={() => setStep("signup")}
              >
                Join Now
              </button>
            </form>
          </>
        ) : null}

        {step === "password" ? (
          <form
            className="sign-in-modal__content sign-in-modal__content--password"
            onSubmit={(event) => event.preventDefault()}
          >
            <h3>Finish signing in</h3>
            <p className="sign-in-modal__email">{email}</p>
            <label className="sign-in-field sign-in-field--password">
              <span>Password</span>
              <input
                autoComplete="current-password"
                name="password"
                required
                type={showPassword ? "text" : "password"}
              />
              <button
                aria-label={showPassword ? "Hide password" : "Show password"}
                type="button"
                onClick={() => setShowPassword((current) => !current)}
              >
                <EyeIcon />
              </button>
            </label>
            <a className="sign-in-forgot" href="/customer/profile">
              Forgot password
            </a>
            <button className="sign-in-primary" type="submit">
              Keep Me Signed In
            </button>
            <button className="sign-in-secondary" type="submit">
              Sign In For This Order
            </button>
            <div className="sign-in-divider">
              <span>or</span>
            </div>
            <button className="sign-in-secondary" type="button">
              Sign In Without a Password
            </button>
          </form>
        ) : null}

        {step === "signup" ? (
          <form
            className="sign-in-modal__content sign-in-modal__content--signup"
            noValidate
            onSubmit={handleSignupSubmit}
          >
            <p className="sign-in-signup-intro">
              Join today and start earning points toward FREE Domino's every two
              orders.
            </p>
            <h3>Finish signing up</h3>
            <p className="sign-in-modal__prompt">
              All fields marked with an asterisk ( * ) are required.
            </p>
            <div className="sign-in-signup-fields">
              {signupFields.map((field) => (
                <div className="sign-in-field-group" key={field.id}>
                  <label
                    className={[
                      "sign-in-field",
                      "sign-in-field--signup",
                      "sign-in-field--floating",
                      field.type === "password"
                        ? "sign-in-field--password-input"
                        : "",
                      signupValues[field.id].trim()
                        ? "sign-in-field--filled"
                        : "",
                      signupErrors[field.id] ? "sign-in-field--error" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <span>{field.label}</span>
                    <input
                      aria-describedby={
                        signupErrors[field.id]
                          ? `signup-${field.id}-error`
                          : undefined
                      }
                      aria-invalid={signupErrors[field.id] ? "true" : "false"}
                      autoComplete={field.autoComplete}
                      name={field.id}
                      type={
                        field.type === "password" && showPassword
                          ? "text"
                          : field.type
                      }
                      value={signupValues[field.id]}
                      onChange={(event) => {
                        setSignupValues((current) => ({
                          ...current,
                          [field.id]: event.target.value,
                        }));
                        if (signupErrors[field.id]) {
                          setSignupErrors((current) => {
                            const nextErrors = { ...current };
                            delete nextErrors[field.id];
                            return nextErrors;
                          });
                        }
                      }}
                    />
                    {field.type === "password" ? (
                      <button
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        type="button"
                        onClick={() => setShowPassword((current) => !current)}
                      >
                        <EyeIcon />
                      </button>
                    ) : null}
                  </label>
                  {signupErrors[field.id] ? (
                    <p
                      className="sign-in-field-error"
                      id={`signup-${field.id}-error`}
                    >
                      <span aria-hidden="true">!</span>
                      {signupErrors[field.id]}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
            <label className="sign-in-checkbox">
              <input defaultChecked name="emailOptIn" type="checkbox" />
              <span>Yes, I would like to receive emails from Domino's</span>
            </label>
            <p className="sign-in-terms">
              By enrolling, you agree to comply with the{" "}
              <a href="/content/terms-of-use">Terms & Conditions</a> of Domino's
              Rewards, as well as our general{" "}
              <a href="/content/terms-of-use">Terms of Use</a> and that you are
              at least 13 years old.
            </p>
            <button className="sign-in-primary" type="submit">
              Sign Up
            </button>
          </form>
        ) : null}
      </section>
    </div>
  );
}
