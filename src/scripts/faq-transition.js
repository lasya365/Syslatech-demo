document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(
    'details[name="syslatech-faq"]'
  );

  faqItems.forEach((item) => {
    if (!(item instanceof HTMLDetailsElement)) return;
    const details = item;
    const answer = details.querySelector(".faq-answer-grid");

    if (!(answer instanceof HTMLElement)) return;

    // Keep the answer's content clipped during animation.
    answer.style.overflow = "hidden";
    answer.style.transition =
      "grid-template-rows 300ms ease-in-out";

    details.addEventListener("click", (event) => {
      const target = event.target;

      if (!(target instanceof Element) || !target.closest("summary")) return;

      event.preventDefault();

      if (details.open) {
        // Smoothly close the currently open answer.
        answer.style.gridTemplateRows = "1fr";

        requestAnimationFrame(() => {
          answer.style.gridTemplateRows = "0fr";
        });

        window.setTimeout(() => {
          details.open = false;
          answer.style.gridTemplateRows = "";
        }, 300);
      } else {
        // Close any other open FAQ first.
        faqItems.forEach((other) => {
          if (!(other instanceof HTMLDetailsElement)) return;
          const otherDetails = other;

          if (otherDetails !== details && otherDetails.open) {
            otherDetails.open = false;

            const otherAnswer = otherDetails.querySelector(".faq-answer-grid");

            if (otherAnswer instanceof HTMLElement) {
              otherAnswer.style.gridTemplateRows = "";
            }
          }
        });

        // Open the selected answer smoothly.
        details.open = true;
        answer.style.gridTemplateRows = "0fr";

        requestAnimationFrame(() => {
          answer.style.gridTemplateRows = "1fr";
        });
      }
    });
  });
});