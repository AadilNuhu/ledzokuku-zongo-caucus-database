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

const textArray = ["Software Engineer","Web Developer", "Machine Learning Engineer"];
let textIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    if (textIndex === textArray.length) {
        textIndex = 0; // Reset to the first text
    }

    currentText = textArray[textIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    document.getElementById('typing-text').textContent = currentText.substring(0, charIndex);

    if (charIndex === currentText.length) {
        isDeleting = true;
    } else if (charIndex === 0) {
        isDeleting = false;
        textIndex++;
    }

    const typingSpeed = isDeleting ? 50 : 150; // Speed of typing and deleting
    setTimeout(type, typingSpeed);
}

// Start the typing animation
document.addEventListener('DOMContentLoaded', () => {
    type();
});