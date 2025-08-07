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
const reviewVideo = document.getElementById("reviewVideo");
const videoSource = reviewVideo.querySelector("source");

videoModal.addEventListener("show.bs.modal", function (event) {
  const button = event.relatedTarget;
  const videoId = button.getAttribute("data-video");

  // Local video file paths
  const videoUrls = {
    review1: "./assets/videos/review1.mp4",
    review2: "./assets/videos/review2.mp4",
    review3: "./assets/videos/review3.mp4",
  };

  // Set video source and load
  const selectedVideo = videoUrls[videoId] || "";
  videoSource.src = selectedVideo;
  reviewVideo.load(); // important!
  reviewVideo.play(); // autoplay after loading
});

// Clear video on modal close
videoModal.addEventListener("hide.bs.modal", function () {
  reviewVideo.pause();
  reviewVideo.currentTime = 0;
  videoSource.src = "";
});
