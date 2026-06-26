(function () {
  var modal;
  var panel;
  var lastFocusedElement;

  function buildModal() {
    if (modal) return modal;

    modal = document.createElement("div");
    modal.className = "local-signin-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "local-signin-modal-title");
    modal.innerHTML = [
      '<button class="local-signin-modal__overlay" type="button" aria-label="Close sign in"></button>',
      '<aside class="local-signin-modal__panel">',
      '  <header class="local-signin-modal__header">',
      '    <h2 class="local-signin-modal__title" id="local-signin-modal-title">Sign In</h2>',
      '    <button class="local-signin-modal__close" type="button" aria-label="Close sign in">&times;</button>',
      "  </header>",
      '  <div class="local-signin-modal__body">',
      '    <form class="local-signin-modal__form" action="customer/profile.html">',
      '      <label class="local-signin-modal__field">Email',
      '        <input class="local-signin-modal__input" name="email" type="email" autocomplete="email" required>',
      "      </label>",
      '      <label class="local-signin-modal__field">Password',
      '        <input class="local-signin-modal__input" name="password" type="password" autocomplete="current-password" required>',
      "      </label>",
      '      <button class="local-signin-modal__submit" type="submit">Sign In</button>',
      "    </form>",
      '    <div class="local-signin-modal__links">',
      '      <a class="local-signin-modal__link" href="customer/profile.html">Create a Domino\'s profile</a>',
      '      <a class="local-signin-modal__link" href="customer/profile.html">Forgot password?</a>',
      "    </div>",
      '    <p class="local-signin-modal__note">This local HTTrack copy can show the sign-in drawer, but live authentication still requires Domino\'s online services.</p>',
      "  </div>",
      "</aside>"
    ].join("");

    document.body.appendChild(modal);
    panel = modal.querySelector(".local-signin-modal__panel");
    modal.querySelector(".local-signin-modal__overlay").addEventListener("click", closeModal);
    modal.querySelector(".local-signin-modal__close").addEventListener("click", closeModal);
    modal.querySelector(".local-signin-modal__form").addEventListener("submit", function (event) {
      event.preventDefault();
    });

    return modal;
  }

  function getFocusableElements() {
    return Array.prototype.slice.call(
      modal.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')
    );
  }

  function openModal() {
    buildModal();
    lastFocusedElement = document.activeElement;
    modal.classList.add("is-open");
    document.body.classList.add("local-signin-modal-lock");
    document.addEventListener("keydown", handleKeydown);
    setTimeout(function () {
      var firstInput = modal.querySelector(".local-signin-modal__input");
      if (firstInput) firstInput.focus();
    }, 0);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    document.body.classList.remove("local-signin-modal-lock");
    document.removeEventListener("keydown", handleKeydown);
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  function handleKeydown(event) {
    if (event.key === "Escape") {
      closeModal();
      return;
    }

    if (event.key !== "Tab" || !panel) return;

    var focusable = getFocusableElements();
    if (!focusable.length) return;

    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function isSignInButton(element) {
    return (
      element &&
      element.tagName === "BUTTON" &&
      element.closest(".local-signin-modal") === null &&
      element.textContent.trim().replace(/\s+/g, " ").toLowerCase() === "sign in"
    );
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest("button");
    if (!isSignInButton(button)) return;

    event.preventDefault();
    event.stopPropagation();
    openModal();
  }, true);
})();
