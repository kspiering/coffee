// JavaScript: scroll event
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // z.B. ab 50px Scroll
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
