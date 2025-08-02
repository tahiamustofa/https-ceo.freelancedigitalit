// Services Section Animation
document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card-container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting && !entry.target.classList.contains("visible")) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 200); // 200ms delay for each card
          // observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  serviceCards.forEach((card) => {
    observer.observe(card);
  });
});