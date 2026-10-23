const section = document.querySelector(".testimonials-section");

if (section) {
  const cards = Array.from(
    section.querySelectorAll(".testimonial-card")
  );

  const dots = Array.from(
    section.querySelectorAll(".testimonial-dot")
  );

  const previousButton = section.querySelector(".testimonial-prev");
  const nextButton = section.querySelector(".testimonial-next");

  const total = cards.length;

  // Start with David Johnson in the center.
  let currentIndex = 1;
  let isAnimating = false;

  // Keep the index within the available testimonials.
  function getIndex(index) {
    return (index + total) % total;
  }

  // Update the visible cards and active pagination dot.
  function updateCarousel(animate = true) {
    cards.forEach((card, index) => {
      const difference =
        (index - currentIndex + total) % total;

      let position = "hidden";

      if (difference === total - 1) {
        position = "left";
      } else if (difference === 0) {
        position = "center";
      } else if (difference === 1) {
        position = "right";
      }

      if (!animate) {
        card.classList.add("no-transition");
      }

      card.dataset.position = position;

      card.setAttribute(
        "aria-current",
        String(position === "center")
      );
    });

    dots.forEach((dot, index) => {
      dot.setAttribute(
        "aria-current",
        String(index === currentIndex)
      );
    });

    if (!animate) {
      // Apply the new positions before transitions resume.
      void section.offsetWidth;

      requestAnimationFrame(() => {
        cards.forEach((card) => {
          card.classList.remove("no-transition");
        });
      });
    }
  }

  // Move forward or backward by one testimonial.
  function move(direction) {
    if (isAnimating) return;

    isAnimating = true;

    currentIndex = getIndex(currentIndex + direction);

    updateCarousel();

    // Prevent overlapping animations from rapid clicks.
    window.setTimeout(() => {
      isAnimating = false;
    }, 900);
  }

  // Previous arrow.
  previousButton?.addEventListener("click", () => {
    move(-1);
  });

  // Next arrow.
  nextButton?.addEventListener("click", () => {
    move(1);
  });

  // Allow users to select any testimonial directly.
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      if (isAnimating || index === currentIndex) return;

      currentIndex = index;
      updateCarousel(false);
    });
  });

  // =====================================
  // Swipe support for touch devices
  // =====================================

  let startX = null;

  section.addEventListener("pointerdown", (e) => {
    // Detect touch and stylus input, not mouse clicks.
    if (e.pointerType !== "mouse") {
      startX = e.clientX;
    }
  });

  section.addEventListener("pointerup", (e) => {
    if (startX === null) return;

    const dx = e.clientX - startX;
    startX = null;

    // Ignore small movements to avoid accidental swipes.
    if (Math.abs(dx) > 40) {
      move(dx < 0 ? 1 : -1);
    }
  });

  // Reset if the browser interrupts the pointer interaction.
  section.addEventListener("pointercancel", () => {
    startX = null;
  });

  // Clear the starting point if the pointer leaves the section.
  section.addEventListener("pointerleave", () => {
    startX = null;
  });

  // Set the initial layout.
  updateCarousel(false);
}
