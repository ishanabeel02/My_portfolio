/***********************
 Setup On Load
************************/
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    // Make the header take up the whole screen
    document.querySelector(".header").style.height = window.innerHeight + "px";

    // Set the colour palette according to the user's current time
    const current = new Date();
    const user_hour = current.getHours();
    if ((user_hour > 7) && (user_hour < 16)) dayMode();
    else if ((user_hour >= 16) && (user_hour <= 21)) eveningMode();
    else nightMode();
})

/***********************
 Display Mode
************************/
function dayMode() {
    document.documentElement.style.setProperty('--bg', '#F9FAFB');
    document.documentElement.style.setProperty('--font', '#2C3E50');
    document.documentElement.style.setProperty('--primary', '#FFFFFF');
    document.documentElement.style.setProperty('--secondary', '#FFFFFF');
    document.documentElement.style.setProperty('--headline', '#fff');
    document.documentElement.style.setProperty('--sky-top', '#00b3ff');
    document.documentElement.style.setProperty('--sky-bottom', '#b1e8ff');
    document.documentElement.style.setProperty('--stars-bright', '#00b3ff');
    document.documentElement.style.setProperty('--stars-normal', '#00b3ff');
    document.documentElement.style.setProperty('--stars-variation', '#edfaffff');
    document.documentElement.style.setProperty('--cards', '#b5bfc4');
    document.documentElement.style.setProperty('--shadow-primary', '#00000014');
    document.documentElement.style.setProperty('--shadow-cards', '#616466');
    document.documentElement.style.setProperty('--anchor', '#1D4ED8');
    document.documentElement.style.setProperty('--intro-avatar-bg', 'url(images/main-portrait-day.png)');
    document.documentElement.style.setProperty('--nav-bg', 'url("images/day-nav.png")');
    document.documentElement.style.setProperty('--side-left-bg', '#7e9bea');
    document.documentElement.style.setProperty('--side-right-bg', '#93adf6');
}

function eveningMode() {
    document.documentElement.style.setProperty('--bg', '#FDF3E7');
    document.documentElement.style.setProperty('--font', '#4B2E2E');
    document.documentElement.style.setProperty('--primary', '#FCE7F3');
    document.documentElement.style.setProperty('--secondary', '#FCE7F3');
    document.documentElement.style.setProperty('--headline', '#fff');
    document.documentElement.style.setProperty('--sky-top', '#ff879f');
    document.documentElement.style.setProperty('--sky-bottom', '#ffe3e9');
    document.documentElement.style.setProperty('--stars-bright', '#ffafc7');
    document.documentElement.style.setProperty('--stars-normal', '#ffbbd4e1');
    document.documentElement.style.setProperty('--stars-variation', '#ffffffb3');
    document.documentElement.style.setProperty('--cards', '#f0e2d2');
    document.documentElement.style.setProperty('--shadow-primary', '#c2185b26');
    document.documentElement.style.setProperty('--shadow-cards', '#f0bf84');
    document.documentElement.style.setProperty('--anchor', '#C2185B');
    document.documentElement.style.setProperty('--intro-avatar-bg', 'url(images/main-portrait-evening.png)');
    document.documentElement.style.setProperty('--nav-bg', 'url("images/pink-nav.png")');
    document.documentElement.style.setProperty('--side-left-bg', '#f1b7ce');
    document.documentElement.style.setProperty('--side-right-bg', '#f8b8d1');
}

function nightMode() {
    document.documentElement.style.setProperty('--bg', '#2f3c4dff');
    document.documentElement.style.setProperty('--font', '#E6EDF3');
    document.documentElement.style.setProperty('--primary', '#161B22');
    document.documentElement.style.setProperty('--secondary', '#161B22');
    document.documentElement.style.setProperty('--headline', '#240d4f');
    document.documentElement.style.setProperty('--sky-top', '#040f19');
    document.documentElement.style.setProperty('--sky-bottom', '#152247');
    document.documentElement.style.setProperty('--stars-bright', '#fff692');
    document.documentElement.style.setProperty('--stars-normal', '#f1eba6');
    document.documentElement.style.setProperty('--stars-variation', '#d8fcff');
    document.documentElement.style.setProperty('--cards', '#766c89');
    document.documentElement.style.setProperty('--shadow-primary', '#3ddc9726');
    document.documentElement.style.setProperty('--shadow-cards', '#3ddc9726');
    document.documentElement.style.setProperty('--anchor', '#3DDC97');
    document.documentElement.style.setProperty('--intro-avatar-bg', 'url(images/main-portrait-night.png)');
    document.documentElement.style.setProperty('--nav-bg', 'url("images/dark-nav.png")');
    document.documentElement.style.setProperty('--side-left-bg', 'url("images/sidebar-left-dark.png")');
    document.documentElement.style.setProperty('--side-right-bg', 'url("images/sidebar-right-dark.png")');
}

/***********************
 Analog Wall Clock
************************/
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
