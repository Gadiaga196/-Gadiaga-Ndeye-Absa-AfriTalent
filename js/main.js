// Dark mode & Local storage
const mobileBtn = document.getElementById("theme-toggle-mobile");
const desktopBtn = document.getElementById("theme-toggle-desktop");

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const darkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    const icon = darkMode
        ? '<i class="bi bi-sun-fill"></i>'
        : '<i class="bi bi-moon-fill"></i>';
    mobileBtn.innerHTML = icon;
    desktopBtn.innerHTML = icon;
}
mobileBtn.addEventListener("click", toggleTheme);
desktopBtn.addEventListener("click", toggleTheme);
// Navbar au scroll
const navbar = document.getElementById("mainNavbar");
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if(window.scrollY > 50){
        navbar.classList.add("navbar-scrolled");
    }
    else{
        navbar.classList.remove("navbar-scrolled");
    }
});

// Boutton retour en haut
const backToTop = document.getElementById("backToTop");
console.log(backToTop);
window.addEventListener("scroll", () => {
    if(window.scrollY > 300) {
        backToTop.style.display = "block";
    }
    else{
        backToTop.style.display = "none";
    }
});
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

console.log("JavaScript chargé !");