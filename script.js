// Simple JavaScript to enhance functionality
console.log("Welcome to my portfolio!");

document.addEventListener('DOMContentLoaded', () => {
    // Back to top button functionality
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Form submission handling
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display an alert with the submitted information
        alert(`Thank you, ${name}! Your message has been sent.\nEmail: ${email}\nMessage: ${message}`);
        
        // Optionally, clear the form fields
        this.reset();
    });
});