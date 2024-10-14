// Portfolio Video Hover Functionality
const videoBoxes = document.querySelectorAll('.video-box');

videoBoxes.forEach(box => {
    const video = box.querySelector('video');
    box.addEventListener('mouseover', () => {
        video.play();
    });
    box.addEventListener('mouseleave', () => {
        video.pause();
    });
});

// Filter Portfolio by Category
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.video-box');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.getAttribute('data-filter');
        portfolioItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Reveal on Scroll
const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
});

// Contact Form Validation (Basic)
// Initialize EmailJS
(function () {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    })
    .then(function(response) {
        alert('Your message has been sent successfully!');
        document.getElementById('contact-form').reset(); // Clear form after submission
    }, function(error) {
        alert('Failed to send your message, please try again later.');
    });
});
