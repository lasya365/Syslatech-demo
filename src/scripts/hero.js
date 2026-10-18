const carousel = document.querySelector(".hero-carousel");

  if (carousel && !carousel.hasAttribute("data-initialized")) {
    carousel.setAttribute("data-initialized", "true");

    const slides = Array.from(carousel.querySelectorAll(".slide"));
    const dots = Array.from(carousel.querySelectorAll(".dot"));
    const previous = carousel.querySelector(".previous");
    const next = carousel.querySelector(".next");

    let current = 0;
    let timer;

    function showSlide(index) {
      current = (index + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === current);
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === current);

        if (i === current) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }
      });
    }

    function startTimer() {
      window.clearInterval(timer);
      timer = window.setInterval(() => {
        showSlide(current + 1);
      }, 5000);
    }

    previous?.addEventListener("click", () => {
      showSlide(current - 1);
      startTimer();
    });

    next?.addEventListener("click", () => {
      showSlide(current + 1);
      startTimer();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        startTimer();
      });
    });

    carousel.addEventListener("mouseenter", () => {
      window.clearInterval(timer);
    });

    carousel.addEventListener("mouseleave", startTimer);

    showSlide(0);
    startTimer();
  }