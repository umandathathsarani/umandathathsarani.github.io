// Setup Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Stop observing once it has appeared
            }
        });
    }, observerOptions);
    const elementsToAnimate = document.querySelectorAll('.fade-in, .scale-in');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Parallax Scrolling Effect for Hero Shapes
    const heroShapes = document.querySelector('.hero-shapes');
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        if (heroShapes) {
            heroShapes.style.transform = `translateY(${scrollY * 0.4}px)`;
        }
    });

    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    
    // Check local storage for theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        if (moonIcon && sunIcon) {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    }

    if (themeToggleBtn && moonIcon && sunIcon) {
        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'light') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'block';
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                moonIcon.style.display = 'block';
                sunIcon.style.display = 'none';
            }
        });
    }

    // Mobile Menu Toggle Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Contact Form Logic
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            
            window.location.href = `mailto:umathathsarani2003@gmail.com?subject=${subject}&body=${body}`;
        });
    }
});
