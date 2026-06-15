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
//IntersectionObserver
const counters = document.querySelectorAll(".counter");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const counter = entry.target;
            const target = parseInt(counter.dataset.target);
            let count = 0;
            const increment = target /100;
            const updatecounter = () => {
                count += increment;
                if(count < target){
                    counter.textContent = Math.ceil(count);
                    requestAnimationFrame(updatecounter);
                }
                else{
                    counter.textContent = target.toLocaleString();
                }
            };
            updatecounter();
            observer.unobserve(counter);
        }
    });
});
counters.forEach(counter => {
    observer.observe(counter);
});
// fade-in
const sections = document.querySelectorAll(".fade-section");
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});
sections.forEach(section => {
    sectionObserver.observe(section);
});
// Barre filtrage
const filtre = document.getElementById("floatingSelectGrid");
if(filtre){
    filtre.addEventListener("change", () => {
        const categorieChoisie = filtre.value;
        const cartes = document.querySelectorAll(".freelance-card");
        cartes.forEach(carte => {
            const categorieCarte = carte.dataset.category;
            console.log("Choisie :", categorieChoisie);
            console.log("Carte :", categorieCarte)
            if(categorieChoisie === "all" || categorieCarte === categorieChoisie){
                carte.style.display = "";
            }
            else{
                carte.style.display = "none";
            }
        });
    });
}
// Affichage de l'erreur sur la page contact
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const addresse = document.getElementById("addresse").value.trim();
    let valide = true;
    document.getElementById("prenomError").textContent = "";
    document.getElementById("nomError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("telephoneError").textContent = "";
    document.getElementById("addresseError").textContent = "";
    if(prenom === ""){
        document.getElementById("prenomError").textContent = "Le prenom est obligatoire";
        valide = false;
    }
    if(nom === ""){
        document.getElementById("nomError").textContent = "Le nom est obligatoire";
        valide = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        document.getElementById("emailError").textContent = "Adresse email invalide";
        valide = false;
    }
    if(message.length < 20){
        document.getElementById("messageError").textContent = "Le message doit contenir au moins 20 caractères";
        valide = false;
    }
    if(telephone === ""){
        document.getElementById("telephoneError").textContent = "Le numero est invalide"; 
        valide = false;
    }
    if(addresse === ""){
        document.getElementById("addresseError").textContent = "L'addresse est invalide";
        valide = false;
    }
    if(valide){
        document.getElementById("successMessage").classList.remove("d-none");
    }
    if(valide){
        document.getElementById("successMessage").classList.remove("d-none");
        form.reset();
    }
    const cancelBtn = document.getElementById("cancelBtn");
    cancelBtn.addEventListener("click", () => {
        form.reset();
        document.getElementById("prenomError").textContent = "";
    document.getElementById("nomError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("telephoneError").textContent = "";
    document.getElementById("addresseError").textContent = "";

    document.getElementById("successMessage").classList.add("d-none");
    });
});