
const buttons = document.querySelectorAll(".nav-button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const menu = document.getElementById(btn.dataset.dropdown);

    // close other menus
    document.querySelectorAll(".dropdown").forEach((m) => {
      if (m !== menu) m.classList.remove("show");
    });

    // toggle current
    menu.classList.toggle("show");
  });
});

// close on outside click
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown").forEach((m) => m.classList.remove("show"));
});
