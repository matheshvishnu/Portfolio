// Toggle Navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Sections Active Link
let sections = document.querySelectorAll("section"); // Selects all <section> elements
let navLinks = document.querySelectorAll("header nav a"); // Selects all navigation links

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    // Adjust offset for fixed header height to make section active when it's just below the header
    let offset = sec.offsetTop - 150; 
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Remove 'active' class from all nav links
      navLinks.forEach((links) => {
        links.classList.remove("active");
      });
      // Add 'active' class to the current section's corresponding nav link
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });

  // Sticky Header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle icon and navbar when click navbar link (for mobile menu)
  // This ensures the menu closes when a nav link is clicked or when scrolling
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Scroll Reveal Animations
// Initializes ScrollReveal with common options for smooth entry animations
ScrollReveal({
  // reset: true, // Set to true if you want elements to animate every time they enter the viewport
  distance: "80px", // Distance elements move from their origin
  duration: 2000, // Duration of the animation
  delay: 200, // Delay before the animation starts
});

// Reveal elements from the top
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });

// Reveal elements from the bottom, explicitly including .experience-box
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .experience-box, .contact form",
  { origin: "bottom" }
);

// Reveal elements from the left
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });

// Reveal elements from the right
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Typed JS for dynamic text effect in Home section
const typed = new Typed(".multiple-text", {
  strings: [
    "Software Developer",
    "AI/ML Enthusiast",
    "Full-stack Developer",
    "Problem Solver",
    "DevOps freak",
    "Project Coordinator",
    "Kabaddi Player",
    "Media Admin",
    "Karate Practitioner"
  ], // Dynamic strings for the typing effect
  typeSpeed: 100, // Typing speed
  backSpeed: 100, // Backspacing speed
  backDelay: 1000, // Delay before backspacing starts
  loop: true, // Loop the typing animation indefinitely
});
