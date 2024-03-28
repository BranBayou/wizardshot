// Handle Mobile Menu

const hamburgerMenu = document.getElementById('hamburger-menu');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerMenu.addEventListener('click', (e) => {
    hamburgerMenu.classList.add('hidden');
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
        mobileMenu.classList.add('slide-right');
    }, 50);
    closeBtn.classList.remove('hidden');
});

closeBtn.addEventListener('click', (e) => {
    mobileMenu.classList.remove('slide-right');
    setTimeout(() => {
        closeMobileMenu();
    }, 500);
});

function closeMobileMenu() {
    hamburgerMenu.classList.remove('hidden');
    mobileMenu.classList.add('hidden');
    closeBtn.classList.add('hidden');
    mobileMenu.classList.remove('slide-right');
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        closeMobileMenu();
    }
});