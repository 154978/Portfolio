document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            alert('Thank you for your message, ' + this.name.value + '! I will get back to you soon.');
            this.reset();
        });
    }
});