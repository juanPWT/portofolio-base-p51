// dark mode
const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");

checkbox.addEventListener("click", () => {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
});

// end of drakmode
