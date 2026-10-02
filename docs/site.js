const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");
const themeColor = document.querySelector('meta[name="theme-color"]');

const updateThemeControl = () => {
  const isLight = document.documentElement.dataset.theme === "light";
  themeToggle?.setAttribute("aria-pressed", String(isLight));
  themeToggle?.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  if (themeLabel) themeLabel.textContent = isLight ? "Dark" : "Light";
  if (themeColor) themeColor.content = isLight ? "#f8fbff" : "#020817";
};

updateThemeControl();
themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  if (nextTheme === "light") document.documentElement.dataset.theme = "light";
  else delete document.documentElement.dataset.theme;
  try { localStorage.setItem("lakedb-theme", nextTheme); } catch {}
  updateThemeControl();
});

const closeMenu = () => {
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Open navigation");
  nav?.classList.remove("is-open");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  nav?.classList.toggle("is-open", !isOpen);
});
nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest("[data-header]")) closeMenu();
});
window.matchMedia("(min-width: 801px)").addEventListener("change", closeMenu);

const lightbox = document.querySelector("[data-lightbox-dialog]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
document.querySelectorAll("[data-lightbox]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    if (!lightbox || !lightboxImage || !trigger.dataset.lightbox) return;
    lightboxImage.src = trigger.dataset.lightbox;
    lightboxImage.alt = trigger.querySelector("img")?.alt || "LakeDB product image";
    lightbox.showModal();
  });
});
document.querySelector("[data-lightbox-close]")?.addEventListener("click", () => lightbox?.close());
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

if ("IntersectionObserver" in window) {
  const links = [...(nav?.querySelectorAll('a[href^="#"]') || [])];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach((link) => {
      if (link.getAttribute("href") === `#${visible.target.id}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-15% 0px -55% 0px", threshold: [0, .1, .3] });
  sections.forEach((section) => observer.observe(section));
}

// Detection is a visual hint. Package architecture remains explicit and every
// download link is usable without JavaScript or platform guessing.
const userAgent = navigator.userAgent.toLowerCase();
const isMobile = /android|iphone|ipad|ipod/.test(userAgent) || (userAgent.includes("mac") && navigator.maxTouchPoints > 1);
const platform = isMobile ? "" : userAgent.includes("win") ? "windows" : userAgent.includes("mac") ? "mac" : userAgent.includes("linux") ? "linux" : "";
if (platform) {
  const card = document.querySelector(`[data-platform="${platform}"]`);
  if (card) {
    card.classList.add("is-detected");
    const hint = document.createElement("span");
    hint.className = "platform-detected";
    hint.textContent = "Your operating system";
    card.prepend(hint);
  }
}
