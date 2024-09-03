document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('show');
        // Optional: Toggle animation on the hamburger icon
        hamburger.classList.toggle('active');
    });
});

//Animation
window.addEventListener('load', function() {
    setTimeout(function() {
        // Hide the loader and show the content
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        // Restore scrolling
        document.body.style.overflow = 'auto';
    }, 3000); // 3 seconds
});
