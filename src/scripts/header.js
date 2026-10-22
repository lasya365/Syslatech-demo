
const header = document.querySelector("[data-header]");

if (header) {
  const mobileToggle = header.querySelector("[data-mobile-toggle]");
  const mainNav = header.querySelector("[data-main-nav]");
  const navItems = [...header.querySelectorAll("[data-nav-item]")];
  const mobileBreakpoint = window.matchMedia("(max-width: 900px)");

  function closeDropdowns(exceptItem = null) {
    navItems.forEach((item) => {
      if (item === exceptItem) return;

      item.classList.remove("is-open");

      const trigger = item.querySelector("[data-dropdown-trigger]");
      trigger?.setAttribute("aria-expanded", "false");
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
    closeDropdowns(item);
    item.classList.add("is-open");

    const trigger = item.querySelector("[data-dropdown-trigger]");
    trigger?.setAttribute("aria-expanded", "true");
  }

  function toggleDropdown(item) {
    if (item.classList.contains("is-open")) {
      closeDropdowns();
    } else {
      openDropdown(item);
    }
  }

  // Keep the existing scroll effect.
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

  // Dropdown buttons work with both mouse and keyboard.
  navItems.forEach((item) => {
    const trigger = item.querySelector("[data-dropdown-trigger]");

    trigger?.addEventListener("click", () => {
      toggleDropdown(item);
    });

    // Keep hover behavior on desktop.
    item.addEventListener("pointerenter", () => {
      if (mobileBreakpoint.matches) return;
      openDropdown(item);
    });

    item.addEventListener("pointerleave", () => {
      if (mobileBreakpoint.matches) return;

      // Don't close while keyboard focus remains inside the dropdown.
      if (item.contains(document.activeElement)) return;

      item.classList.remove("is-open");
      trigger?.setAttribute("aria-expanded", "false");
    });

    // Close the dropdown when keyboard focus leaves the entire item.
    item.addEventListener("focusout", (event) => {
      const nextTarget = event.relatedTarget;

      if (nextTarget instanceof Node && item.contains(nextTarget)) {
        return;
      }

      if (!mobileBreakpoint.matches && !item.matches(":hover")) {
        item.classList.remove("is-open");
        trigger?.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Escape closes the most relevant open menu and restores focus.
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

  // Reset the mobile menu when switching to desktop width.
  mobileBreakpoint.addEventListener("change", (event) => {
    if (!event.matches) {
      closeMobileMenu();
    } else {
      closeDropdowns();
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
