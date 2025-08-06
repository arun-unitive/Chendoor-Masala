const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.getElementById("mainNav");
const toggler = document.querySelector(".navbar-toggler");
const hamburgerIcon = toggler.querySelector(".navbar-toggler-icon");
const closeIcon = toggler.querySelector(".close-icon");

// 1. Close navbar when nav-link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false,
    });
    bsCollapse.hide();
  });
});

// 2. Toggle icons (hamburger ↔ close)
navbarCollapse.addEventListener("show.bs.collapse", () => {
  hamburgerIcon.classList.add("d-none");
  closeIcon.classList.remove("d-none");
});

navbarCollapse.addEventListener("hide.bs.collapse", () => {
  hamburgerIcon.classList.remove("d-none");
  closeIcon.classList.add("d-none");
});

// 3. Close navbar when clicking outside
document.addEventListener("click", (event) => {
  const isNavbarOpen = toggler.getAttribute("aria-expanded") === "true";
  const isClickInsideNavbar = navbarCollapse.contains(event.target);
  const isClickOnToggler = toggler.contains(event.target);

  if (isNavbarOpen && !isClickInsideNavbar && !isClickOnToggler) {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false,
    });
    bsCollapse.hide();
  }
});

// Handle video modal
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("testimonialVideo");

videoModal.addEventListener("show.bs.modal", function (event) {
  const button = event.relatedTarget;
  const videoId = button.getAttribute("data-video");

  // You can replace these with actual video URLs
  const videoUrls = {
    albert: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    courtney: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    leslie: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    john: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    sarah: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    michael: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  };

  videoFrame.src = videoUrls[videoId] || "";
});

videoModal.addEventListener("hide.bs.modal", function () {
  videoFrame.src = "";
});

// Auto-play carousel
const carousel = new bootstrap.Carousel(
  document.getElementById("testimonialsCarousel"),
  {
    interval: 5000,
    wrap: true,
  }
);
