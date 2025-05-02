/*
    Clayton
    script.js 
*/

// Simple alert when form is submitted
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        alert("Thank you for contacting Bingle Burger Bonanza! We'll get back to you probably never. Have a great day!! :)");
        event.preventDefault();
    });
});

// Change navigation color on hover
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("mouseover", function () {
        this.style.color = "#ffd700";
    });
    link.addEventListener("mouseout", function () {
        this.style.color = "blue";
    });
});