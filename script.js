// Loading Animation
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 1000);
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('.icon');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('scroll-progress').style.width = scrollPercent + '%';
});

// Floating Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// Cursor Glow Effect
const cursorGlow = document.createElement('div');
cursorGlow.id = 'cursor-glow';
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX - 10 + 'px';
    cursorGlow.style.top = e.clientY - 10 + 'px';
});

// Fade-in Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Form Submission (Basic - just prevent default for demo)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! (Đây là demo, form chưa được gửi thực tế)');
    contactForm.reset();
});

// Add hover effects for skill bars (animate on hover)
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const progressBar = item.querySelector('.skill-progress');
        progressBar.style.transform = 'scaleX(1.05)';
    });

    item.addEventListener('mouseleave', () => {
        const progressBar = item.querySelector('.skill-progress');
        progressBar.style.transform = 'scaleX(1)';
    });
});

// Add loading animation for project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('animate-in');
});

// CSS for animate-in class (added via JS for dynamic delay)
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideUp 0.6s ease-out forwards;
        opacity: 0;
        transform: translateY(30px);
    }

    @keyframes slideUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);