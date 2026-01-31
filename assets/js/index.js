// Internal Monologue Theme JavaScript
// Minimalist zen editorial Ghost theme with dark/light mode toggle

// Import CSS
import "../css/index.css";

// Import JS modules
import menuOpen from "./menuOpen";
import infiniteScroll from "./infiniteScroll";
import themeToggle from "./themeToggle";

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    // Initialize mobile menu
    menuOpen();

    // Initialize infinite scroll
    infiniteScroll();

    // Initialize theme toggle
    themeToggle();
});
