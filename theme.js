function toggleTheme() {
  const checkbox = document.getElementById("themeToggle");
  document.body.classList.toggle("light-mode", checkbox.checked);

  localStorage.setItem("theme", checkbox.checked ? "light" : "dark");
}

window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  const checkbox = document.getElementById("themeToggle");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    if (checkbox) checkbox.checked = true;
  }
};