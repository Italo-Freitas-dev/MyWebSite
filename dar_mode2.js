const html = document.getElementById("indexPage");
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    html.setAttribute("data-bs-theme", "dark");
  } else {
    html.setAttribute("data-bs-theme", "light");
  }
});