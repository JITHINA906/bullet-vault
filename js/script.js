/* ===========================================
   BulletVault - script.js
=========================================== */

console.log("BulletVault Loaded Successfully 🚀");

/* Welcome Message */

window.addEventListener("load", () => {
    setTimeout(() => {
        alert("🏍 Welcome to BulletVault!\nExplore our latest Royal Enfield motorcycles.");
    }, 500);
});


/* Book Now Buttons */

const bookButtons = document.querySelectorAll(".btn-small");

bookButtons.forEach(button => {
    button.addEventListener("click", function (e) {

        if (button.textContent.includes("Book")) {

            alert("Redirecting to Booking Page...");

        }

    });
});


/* Card Hover Animation */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
    });

});


/* Scroll Animation */

window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 350;

        if (top > offset) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";

        }

    });

});


/* Initial Animation */

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "0.8s ease";

});


/* Contact Button */

const contactButton = document.querySelector(".contact-btn");

if(contactButton){

contactButton.addEventListener("click",()=>{

alert("Thank you! We'll contact you shortly.");

});

}