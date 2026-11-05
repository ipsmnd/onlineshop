// Slide-out category menu + profile dropdown
(function () {
  const sidemenu = document.getElementById("sidemenu");
  const dropdownBtn = document.getElementById("profile_dropdown");
  const dropdown = document.querySelector(".profilre_dropdown");

  // dim overlay behind the menu (tap to close)
  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  document.body.appendChild(overlay);

  function setMenu(open) {
    if (!sidemenu) return;
    sidemenu.classList.toggle("show", open);
    overlay.classList.toggle("show", open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  document.querySelectorAll(".showbtn").forEach((btn) => {
    btn.addEventListener("click", () => setMenu(!sidemenu.classList.contains("show")));
  });

  overlay.addEventListener("click", () => setMenu(false));

  if (dropdownBtn && dropdown) {
    dropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("toggle_profile_dropdown");
    });
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) dropdown.classList.remove("toggle_profile_dropdown");
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setMenu(false);
      if (dropdown) dropdown.classList.remove("toggle_profile_dropdown");
    }
  });
})();
