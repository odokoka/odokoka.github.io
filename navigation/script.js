const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
    if (navbarLinks.className == "nav-links active") {
        navbarLinks.className = "nav-links inactive";
    } else {
        navbarLinks.className = "nav-links active";
    }
    
});