document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('show');
        // Optional: Toggle animation on the hamburger icon
        hamburger.classList.toggle('active');
    });
});

