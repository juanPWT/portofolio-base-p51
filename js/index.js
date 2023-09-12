// dark mode
const checkbox = document.querySelector("#toggle");
const checkboxLg = document.querySelector("#toggle-lg");
const html = document.querySelector("html");

checkbox.addEventListener("click", () => {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
});
checkboxLg.addEventListener("click", () => {
  checkboxLg.checked
    ? html.classList.add("dark")
    : html.classList.remove("dark");
});

// end of drakmode
