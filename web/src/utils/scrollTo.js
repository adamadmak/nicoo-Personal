export function scrollTo(id, setActiveNav, setMenuOpen) {
  const el = document.getElementById(id.toLowerCase());
  if (el) el.scrollIntoView({ behavior: "smooth" });
  setActiveNav(id);
  setMenuOpen(false);
}
