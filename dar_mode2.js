const html = document.getElementById("indexPage");
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    html.setAttribute("data-bs-theme", "dark");
  } else {
    html.setAttribute("data-bs-theme", "light");
  }
});

const html2 = document.getElementById("outrosPage");
const checkbox2 = document.getElementById("checkbox");
checkbox2.addEventListener("change", () => {
  if (checkbox2.checked) {
    html2.setAttribute("data-bs-theme", "dark");
  } else {
    html2.setAttribute("data-bs-theme", "light");
  }
});