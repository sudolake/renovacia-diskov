// Shared behaviour for index.html and cennik.html

// mobile menu
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
if (menuBtn && menu) {
  const setMenu = open => {
    menu.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.innerHTML = `<i class="ph ph-${open ? "x" : "list"}"></i>`;
  };
  menuBtn.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  menu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
}

// reveal on scroll: elements already on screen at load reveal right away
const revealIO = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll(".rv").forEach(el => {
  if (el.getBoundingClientRect().top < innerHeight) el.classList.add("in"); else revealIO.observe(el);
});
