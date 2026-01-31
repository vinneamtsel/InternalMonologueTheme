/**
 * Theme Toggle Module
 * Handles dark/light mode switching with localStorage persistence
 */

const THEME_KEY = "internal-monologue-theme";
const THEME_DARK = "dark";
const THEME_LIGHT = "light";

/**
 * Get the current theme from localStorage or system preference
 * @returns {string} The current theme ('dark' or 'light')
 */
function getTheme() {
    // Check localStorage first
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme) {
        return storedTheme;
    }

    // Fall back to system preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return THEME_DARK;
    }

    return THEME_LIGHT;
}

/**
 * Set the theme on the document
 * @param {string} theme - The theme to set ('dark' or 'light')
 */
function setTheme(theme) {
    const root = document.documentElement;

    if (theme === THEME_DARK) {
        root.setAttribute("data-theme", THEME_DARK);
    } else {
        root.setAttribute("data-theme", THEME_LIGHT);
    }

    // Store preference
    localStorage.setItem(THEME_KEY, theme);

    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
}

/**
 * Toggle between dark and light themes
 */
function toggleTheme() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    setTheme(newTheme);
}

/**
 * Initialize theme toggle functionality
 */
function themeToggle() {
    // Apply initial theme
    const initialTheme = getTheme();
    setTheme(initialTheme);

    // Find all theme toggle buttons
    const toggleButtons = document.querySelectorAll(".gh-theme-toggle");

    toggleButtons.forEach((button) => {
        // Remove any existing listeners to prevent duplicates
        button.removeEventListener("click", handleToggle);
        // Add click listener
        button.addEventListener("click", handleToggle);
    });

    // Listen for system preference changes
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQuery.addEventListener("change", (e) => {
            // Only update if user hasn't set a preference
            if (!localStorage.getItem(THEME_KEY)) {
                setTheme(e.matches ? THEME_DARK : THEME_LIGHT);
            }
        });
    }
}

/**
 * Handle toggle button click
 * @param {Event} e - Click event
 */
function handleToggle(e) {
    e.preventDefault();
    toggleTheme();
}

export default themeToggle;
export { getTheme, setTheme, toggleTheme };
