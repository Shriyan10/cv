// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 10%';
        nav.style.background = 'rgba(5, 5, 5, 0.95)';
    } else {
        nav.style.padding = '1.5rem 10%';
        nav.style.background = 'rgba(5, 5, 5, 0.8)';
    }
});

// Custom Cursor Tracking
const cursor = document.querySelector('.custom-cursor');
const dot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';

    // Parallax hero background
    const hero = document.querySelector('.hero');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    hero.style.backgroundPosition = `calc(50% + ${xAxis}px) calc(50% + ${yAxis}px)`;
});

// Cursor hover effects
document.querySelectorAll('a, .glass, .cta-button').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2.5)';
        cursor.style.background = 'rgba(0, 212, 255, 0.1)';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'transparent';
    });
});
