// =======================
// THEME TOGGLE
// =======================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");

        themeToggle.innerHTML =
            document.body.classList.contains("light-theme")
                ? '<i class="fa-solid fa-sun"></i>'
                : '<i class="fa-solid fa-moon"></i>';
    });
}
function showToast(message){

    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// =======================
// ROADMAP ANIMATION
// =======================
// =======================
// ROADMAP ANIMATION
// =======================

const cards = document.querySelectorAll(".road-card");

function animateRoadmap() {

    cards.forEach((card) => {

        const rect = card.getBoundingClientRect();

        if (
            rect.top < window.innerHeight * 0.75
        ) {
            card.classList.add("active");
            card.classList.add("popped");
        }
    });
}

window.addEventListener("scroll", animateRoadmap);
animateRoadmap();
// =======================
// FEATURE CARD REVEAL
// =======================

const featureCards = document.querySelectorAll(".feature-card");

function revealCards() {
    featureCards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealCards);
revealCards();


// =======================
// FEATURE CARD CLICK
// =======================

featureCards.forEach(card => {
    card.addEventListener("click", () => {
        featureCards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
    });
});


// =======================
// ACTIVE NAV LINK
// =======================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active-link"));
        this.classList.add("active-link");
    });
});


// =======================
// AUTH MODAL SYSTEM
// =======================

const modal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");

const loginButtons = document.querySelectorAll(".login-btn");
const signupButtons = document.querySelectorAll(".signup-link");

const authForm = document.getElementById("authForm");
const authModeText = document.getElementById("authModeText");
const authSubmit = document.getElementById("authSubmit");
const authSwitch = document.getElementById("authSwitch");
const authSwitchText = document.getElementById("authSwitchText");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

let authMode = "signin";


// =======================
// LOCAL STORAGE
// =======================

function getUsers() {
    return JSON.parse(localStorage.getItem("skillhubUsers") || "[]");
}

function saveUsers(users) {
    localStorage.setItem("skillhubUsers", JSON.stringify(users));
}


// =======================
// AUTH MODE SWITCH
// =======================

function setAuthMode(mode) {

    authMode = mode;
    const isSignup = mode === "signup";

    authModeText.textContent = isSignup ? "Create Account" : "Sign In";
    authSubmit.textContent = isSignup ? "Sign Up" : "Sign In";
    authSwitch.textContent = isSignup ? "Sign In" : "Sign Up";
    authSwitchText.textContent = isSignup
        ? "Already have an account?"
        : "Don't have an account yet?";

    nameInput.style.display = isSignup ? "block" : "none";
    nameInput.required = isSignup;
}


// =======================
// OPEN MODAL
// =======================

function openAuthMode(mode) {
    setAuthMode(mode);
    authForm.reset();
    modal.classList.add("active");
    setTimeout(() => emailInput.focus(), 100);
}

loginButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        openAuthMode("signin");
    });
});

signupButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        openAuthMode("signup");
    });
});


// =======================
// CLOSE MODAL
// =======================

if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.classList.remove("active");
    });
}

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});


// =======================
// SWITCH LOGIN <-> SIGNUP
// =======================

authSwitch.addEventListener("click", () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
});


// =======================
// FORM SUBMIT
// =======================

authForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;
    const users = getUsers();

    const existingUser = users.find(u => u.email === email);

    if (authMode === "signup") {

        if (existingUser) {
           showToast("Account already exists. Please sign in.");
            setAuthMode("signin");
            return;
        }

        users.push({
            name: nameInput.value.trim(),
            email,
            password
        });

        saveUsers(users);
        showToast("Account created successfully!");
    }
    else {

        if (!existingUser || existingUser.password !== password) {
            showToast("Invalid email or password");
            return;
        }

        showToast(`Welcome back, ${existingUser.name || email}!`);
    }

    localStorage.setItem("skillhubCurrentUser", email);
    modal.classList.remove("active");
});


// =======================
// GOOGLE BUTTON
// =======================
const googleBtn = document.getElementById("googleLogin");

if (googleBtn) {
    googleBtn.addEventListener("click", () => {
        showToast("Google Sign-In coming soon 🚀");
    });
}

// INIT
setAuthMode("signin");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});
