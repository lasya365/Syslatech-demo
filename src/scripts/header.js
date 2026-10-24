
const header = document.querySelector("[data-header]");

if (header) {
  const mobileToggle = header.querySelector("[data-mobile-toggle]");
  const mainNav = header.querySelector("[data-main-nav]");
  const navItems = [...header.querySelectorAll("[data-nav-item]")];
  const mobileBreakpoint = window.matchMedia("(max-width: 900px)");

  const closeTimers = new Map();
  const CLOSE_DELAY = 180;

  function cancelClose(item) {
    const timer = closeTimers.get(item);

    if (timer !== undefined) {
      clearTimeout(timer);
      closeTimers.delete(item);
    }
  }

  function closeDropdown(item) {
    cancelClose(item);

    item.classList.remove("is-open");

    const trigger = item.querySelector("[data-dropdown-trigger]");
    trigger?.setAttribute("aria-expanded", "false");
  }

  function closeDropdowns(exceptItem = null) {
    navItems.forEach((item) => {
      if (item === exceptItem) return;
      closeDropdown(item);
    });
  }

  function closeMobileMenu({ returnFocus = false } = {}) {
    header.classList.remove("menu-open");

    mobileToggle?.setAttribute("aria-expanded", "false");
    mobileToggle?.setAttribute("aria-label", "Open navigation menu");

    closeDropdowns();

    if (returnFocus) {
      mobileToggle?.focus();
    }
  }

  function updateHeaderOnScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  function openDropdown(item) {
    cancelClose(item);
    closeDropdowns(item);

    item.classList.add("is-open");

    const trigger = item.querySelector("[data-dropdown-trigger]");
    trigger?.setAttribute("aria-expanded", "true");
  }

  function toggleDropdown(item) {
    cancelClose(item);

    if (item.classList.contains("is-open")) {
      closeDropdown(item);
    } else {
      openDropdown(item);
    }
  }

  function scheduleClose(item) {
    cancelClose(item);

    const timer = setTimeout(() => {
      closeTimers.delete(item);

      // Keep the menu open if the pointer or keyboard focus
      // is still inside this navigation item.
      if (
        item.matches(":hover") ||
        item.contains(document.activeElement)
      ) {
        return;
      }

      closeDropdown(item);
    }, CLOSE_DELAY);

    closeTimers.set(item, timer);
  }

  // Existing header scroll effect.
  updateHeaderOnScroll();

  window.addEventListener("scroll", updateHeaderOnScroll, {
    passive: true,
  });

  // Mobile navigation toggle.
  mobileToggle?.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");

    mobileToggle.setAttribute("aria-expanded", String(isOpen));
    mobileToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );

    if (!isOpen) {
      closeDropdowns();
    }
  });

  // Dropdown behavior for desktop, mouse, and keyboard.
  navItems.forEach((item) => {
    const trigger = item.querySelector("[data-dropdown-trigger]");

    trigger?.addEventListener("click", () => {
      toggleDropdown(item);
    });

    // Open the dropdown when the pointer enters its parent item.
    item.addEventListener("pointerenter", () => {
      if (mobileBreakpoint.matches) return;

      openDropdown(item);
    });

    // Delay closing to allow the pointer to reach the cards.
    item.addEventListener("pointerleave", () => {
      if (mobileBreakpoint.matches) return;

      if (item.contains(document.activeElement)) return;

      scheduleClose(item);
    });

    // Cancel closing if the pointer returns to the item.
    item.addEventListener("pointermove", () => {
      if (mobileBreakpoint.matches) return;

      cancelClose(item);
    });

    // Close after keyboard focus leaves the complete dropdown.
    item.addEventListener("focusout", (event) => {
      const nextTarget = event.relatedTarget;

      if (nextTarget instanceof Node && item.contains(nextTarget)) {
        return;
      }

      if (mobileBreakpoint.matches || item.matches(":hover")) {
        return;
      }

      scheduleClose(item);
    });
  });

  // Escape closes the open dropdown and restores focus.
  header.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    const openItem = navItems.find((item) =>
      item.classList.contains("is-open"),
    );

    if (openItem) {
      event.preventDefault();
      closeDropdowns();
      openItem.querySelector("[data-dropdown-trigger]")?.focus();
      return;
    }

    if (header.classList.contains("menu-open")) {
      event.preventDefault();
      closeMobileMenu({ returnFocus: true });
    }
  });

  // Close menus when clicking outside the header.
  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Node) || header.contains(event.target)) {
      return;
    }

    closeDropdowns();

    if (header.classList.contains("menu-open")) {
      closeMobileMenu();
    }
  });

  // Reset navigation when switching between mobile and desktop.
  mobileBreakpoint.addEventListener("change", (event) => {
    closeDropdowns();

    if (!event.matches) {
      closeMobileMenu();
    }
  });

  // Close mobile navigation after following a link.
  mainNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileBreakpoint.matches) {
        closeMobileMenu();
      }
    });
  });
}
