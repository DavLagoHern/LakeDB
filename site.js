const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const lightbox = document.querySelector("[data-lightbox-dialog]");
const lightboxImage = document.querySelector("[data-lightbox-image]");

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  nav?.classList.toggle("is-open", !isOpen);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("is-open");
  });
});

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

document.querySelectorAll("[data-reveal]").forEach((element) => {
  if (revealObserver) revealObserver.observe(element);
  else element.classList.add("is-visible");
});

const openLightbox = (source, alt = "LakeDB product screenshot") => {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = source;
  lightboxImage.alt = alt;
  lightbox.showModal();
};

document.querySelectorAll("[data-lightbox]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const image = trigger.querySelector("img");
    openLightbox(trigger.dataset.lightbox, image?.alt);
  });
});

document.querySelector("[data-lightbox-close]")?.addEventListener("click", () => lightbox?.close());
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

const workflowImage = document.querySelector("[data-workflow-image]");
const workflowScreen = workflowImage?.closest("[data-lightbox]");

document.querySelectorAll("[data-shot]").forEach((step) => {
  step.addEventListener("click", () => {
    if (!workflowImage || !workflowScreen) return;
    document.querySelectorAll("[data-shot]").forEach((item) => item.classList.remove("is-active"));
    step.classList.add("is-active");
    workflowImage.style.opacity = "0";
    window.setTimeout(() => {
      workflowImage.src = step.dataset.shot;
      workflowImage.alt = step.dataset.alt;
      workflowScreen.dataset.lightbox = step.dataset.shot;
      workflowImage.style.opacity = "1";
    }, 160);
  });
});

const userAgent = navigator.userAgent.toLowerCase();
let platform = "";
let platformName = "";

if (userAgent.includes("win")) {
  platform = "windows";
  platformName = "Windows";
} else if (userAgent.includes("mac")) {
  platform = "mac";
  platformName = "macOS";
} else if (userAgent.includes("linux")) {
  platform = "linux";
  platformName = "Linux";
}

if (platform) {
  document.querySelector(`[data-platform="${platform}"]`)?.classList.add("is-detected");
  document.querySelectorAll("[data-download-label]").forEach((label) => {
    label.textContent = `Download for ${platformName}`;
  });
}
