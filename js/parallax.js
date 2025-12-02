window.addEventListener("scroll", () => {
  const OFFSET = window.scrollY;

  const bg = document.querySelector(".parallax-img");
  if (bg) {
    bg.style.transform = `translateY(${OFFSET * 0.3}px)`;
  }

  const orb = document.querySelector(".parallax-orb");
  if (orb) {
    orb.style.transform = `translate(${OFFSET * -1.2}px, ${OFFSET * 0.2}px)`;

  }
});