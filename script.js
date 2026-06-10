// THEME TOGGLE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});


// ROADMAP ANIMATION

const cards = document.querySelectorAll(".road-card");
const plane = document.getElementById("plane");

function animateRoadmap() {

    let activeCard = null;

    cards.forEach(card => {

        const rect = card.getBoundingClientRect();

        if (
            rect.top < window.innerHeight * 0.55 &&
            rect.bottom > window.innerHeight * 0.3
        ) {
            activeCard = card;
        }

        card.classList.remove("active");

    });

    if (activeCard) {

        activeCard.classList.add("active");
const positions = [
    { left: "48%", top: "8%" },
    { left: "25%", top: "26%" },
    { left: "75%", top: "44%" },
    { left: "25%", top: "62%" },
    { left: "75%", top: "80%" }
];
cards.forEach((card, index) => {

    const rect = card.getBoundingClientRect();

    if (
        rect.top < window.innerHeight * 0.55 &&
        rect.bottom > window.innerHeight * 0.3
    ) {

        activeCard = card;

        plane.style.left = positions[index].left;
        plane.style.top = positions[index].top;

        plane.style.transform =
            index % 2 === 0
            ? "rotate(25deg)"
            : "rotate(-25deg)";
    }

});
    }

}

window.addEventListener("scroll", animateRoadmap);
animateRoadmap();


// FEATURE CARD REVEAL

const featureCards = document.querySelectorAll(".feature-card");

function revealCards() {

    featureCards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 100) {

            card.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealCards);
revealCards();


// FEATURE CARD CLICK EFFECT

featureCards.forEach(card => {

    card.addEventListener("click", () => {

        featureCards.forEach(c => {
            c.classList.remove("selected");
        });

        card.classList.add("selected");

    });

});


// SMOOTH ACTIVE NAVIGATION

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", function () {

        links.forEach(item => {
            item.classList.remove("active-link");
        });

        this.classList.add("active-link");

    });

});