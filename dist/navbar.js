export function initNavbar() {
    const navbar = document.querySelector(".navbar");
    if (!navbar)
        return;
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            navbar.classList.add("scrolled");
        }
        else {
            navbar.classList.remove("scrolled");
        }
    });
}
export function initMobileMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".menu-overlay");
    if (!menuToggle || !mobileMenu || !overlay)
        return;
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
        overlay?.classList.toggle("open");
        document.body.classList.toggle("menu-open");
    });
    overlay?.addEventListener("click", () => {
        mobileMenu?.classList.remove("open");
        overlay?.classList.remove("open");
        document.body.classList.remove("menu-open");
    });
    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            overlay.classList.remove("open");
            document.body.classList.remove("menu-open");
        });
    });
}
//# sourceMappingURL=navbar.js.map