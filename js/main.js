document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade In on Scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-padding').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                if (otherAnswer) otherAnswer.style.maxHeight = null;
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
    // --- EmailJS Form Submission Logic ---
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Email JS
            const serviceID = 'service_d9xavqz';
            const templateID = 'template_yeuwmdf';
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    alert('Your request has been successfully sent to Agrofert! Thank you.');
                    contactForm.reset();
                }, (error) => {
                    console.error('EmailJS failed to send:', error);
                    alert('FAILED to send message. Please check the console for details or try again later.');
                });
        });
    }

});
