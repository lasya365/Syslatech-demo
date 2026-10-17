
const header = document.querySelector("[data-header]");

if (header) {
  const mobileToggle = header.querySelector("[data-mobile-toggle]");
  const mainNav = header.querySelector("[data-main-nav]");
  const navItems = [...header.querySelectorAll("[data-nav-item]")];
  const dropdownTriggers = [
    ...header.querySelectorAll("[data-dropdown-trigger]"),
  ];

  const mobileBreakpoint = window.matchMedia("(max-width: 900px)");

  function closeDropdowns(exceptItem = null) {
    navItems.forEach((item) => {
      if (item === exceptItem) return;

      item.classList.remove("is-open");

      const trigger = item.querySelector("[data-dropdown-trigger]");
      trigger?.setAttribute("aria-expanded", "false");
    });
  }

  function closeMobileMenu() {
    header.classList.remove("menu-open");
    mobileToggle?.setAttribute("aria-expanded", "false");
    mobileToggle?.setAttribute("aria-label", "Open navigation menu");
    closeDropdowns();
  }

  function updateHeaderOnScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  // Transparent over the hero; teal-tinted white after scrolling.
  updateHeaderOnScroll();
  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });

  // Mobile menu toggle.
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

  // Dropdown buttons.
    // Keep desktop dropdowns open while hovering over their content.
  if (window.matchMedia("(min-width: 901px)").matches) {
    navItems.forEach((item) => {
      const trigger = item.querySelector("[data-dropdown-trigger]");

      item.addEventListener("pointerenter", () => {
        closeDropdowns(item);
        item.classList.add("is-open");
        trigger?.setAttribute("aria-expanded", "true");
      });

      item.addEventListener("pointerleave", () => {
        item.classList.remove("is-open");
        trigger?.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Close menus when clicking outside the header.
  document.addEventListener("click", (event) => {
    if (event.target instanceof Node && !header.contains(event.target)) {
      closeDropdowns();

      if (header.classList.contains("menu-open")) {
        closeMobileMenu();
      }
    }
  });
  
  // Close menus with Escape and restore focus.
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    const openItem = navItems.find((item) =>
      item.classList.contains("is-open")
    );

    const mobileMenuOpen = header.classList.contains("menu-open");

    if (!openItem && !mobileMenuOpen) return;

    closeDropdowns();

    if (mobileMenuOpen) {
      closeMobileMenu();
      mobileToggle?.focus();
      return;
    }

    openItem
      ?.querySelector("[data-dropdown-trigger]")
      ?.focus();
  });


  // Reset mobile menu state when returning to desktop width.
  mobileBreakpoint.addEventListener("change", (event) => {
    if (!event.matches) {
      closeMobileMenu();
    }
  });

  // Close the mobile navigation after following a link.
  mainNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileBreakpoint.matches) {
        closeMobileMenu();
      }
    });
  });
}
