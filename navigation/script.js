let navlinks = document.getElementById('nav-links');
document.getElementById('toggle-button').onclick = function(){
    console.log("Button Clicked")
    navlinks.classList.toggle('fade');
}