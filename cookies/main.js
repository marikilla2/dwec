// Selecting the buttons from the DOM
const lightBtn = document.getElementById("light");
const darkBtn = document.getElementById("dark");

// document.querySelector("#light");
// document.querySelector("#dark");
/**
 * Applies a theme to the page.
 * @param {String} theme
 */
function applyTheme(theme) {
  if (theme === "light") {
    document.body.style.background = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.background = "black";
    document.body.style.color = "white";
  }
}

/**
 * Gets the value of a cookie by its name.
 * @param {String} name - The cookie name.
 * @returns {String|null} - The cookie value, or null if it is not found.
 */
function getCookie(name) {
  console.log(document.cookie);
  // Se explicará de forma más detallada en unos temas más adelante:

  // const foundCookie = document.cookie
  //   .split("; ")
  //   .find((cookie) => cookie.split("=")[0] === name);

  // return foundCookie ? foundCookie.split("=")[1] : null;
}

/**
 * Sets the value of a cookie.
 * @param {String} name - The cookie name.
 * @param {String} value - The cookie value.
 */
darkBtn.addEventListener("click", () => {
  applyTheme("dark");
  document.cookie = "theme=dark";
});

/**
 * Sets the value of a cookie.
 * @param {String} name - The cookie name.
 * @param {String} value - The cookie value.
 */
lightBtn.addEventListener("click", () => {
  applyTheme("light");
  document.cookie = "theme=light";
});

// Check if a theme is saved in the cookies and apply it. First time.
const savedTheme = getCookie("theme");

if (savedTheme !== null) {
  applyTheme(savedTheme);
}
