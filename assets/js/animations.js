document.addEventListener("DOMContentLoaded", () => {
    // Custom Cyber Cursor
    const cursor = document.createElement('div');
    cursor.classList.add('cyber-cursor');
    const cursorTrail = document.createElement('div');
    cursorTrail.classList.add('cyber-cursor-trail');
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorTrail);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Slight delay for trail
        setTimeout(() => {
            cursorTrail.style.left = e.clientX + 'px';
            cursorTrail.style.top = e.clientY + 'px';
        }, 50);
    });

    // Expand cursor on hoverable elements
    const hoverElements = document.querySelectorAll('a, button, .project-card, .edu-card, .filter-btn');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovering');
        });
    });

    // tsParticles Config for AI Network Background
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load("particles-js", {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: "#6E56FF" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#FF56A5",
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "window",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 200, line_linked: { opacity: 0.6 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }
});
