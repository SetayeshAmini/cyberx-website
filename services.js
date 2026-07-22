// Navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.custom-navbar');

    if (window.scrollY > 50) {
        navbar.style.padding = '8px 0';
        navbar.style.background = 'rgba(18, 24, 36, 0.92)';
        navbar.style.backdropFilter = 'blur(12px)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.background = '#121824';
        navbar.style.backdropFilter = 'none';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    }
});
// backgrond
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#8a2be2" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 130, "color": "#8a2be2", "opacity": 0.15, "width": 1 },
        "move": { "enable": true, "speed": 1.2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }
    },
    "retina_detect": true
});

// Smooth Scroll to Top Logic
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
// Fotter
const cyberForm = document.getElementById('cyberNewsletterForm');

if (cyberForm) {
    cyberForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const submitBtn = this.querySelector('.btn-cyber-send');

        submitBtn.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #00f0ff;"></i>';
        emailInput.value = '';
        emailInput.placeholder = 'Secure intelligence stream connected.';
        emailInput.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
            emailInput.placeholder = 'Enter security email...';
            emailInput.disabled = false;
        }, 4000);
    });
}


























// ----------  JS Services section ----------

(function () {
    'use strict';

    // ---------- HELPERS ----------
    const nsIsElementInViewport = (el, offset = 0.15) => {
        const rect = el.getBoundingClientRect();
        const winHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= winHeight - rect.height * offset;
    };

    const nsDebounce = (fn, delay = 100) => {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), delay);
        };
    };

    // ---------- FADE-IN ON SCROLL ----------
    const nsFadeElements = document.querySelectorAll('.ns-services-fade-in');

    const nsFadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ns-services-visible');
                nsFadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -20px 0px'
    });

    nsFadeElements.forEach(el => nsFadeObserver.observe(el));

    // ---------- TIMELINE SCROLL REVEAL ----------
    const nsTimelineSteps = document.querySelectorAll('.ns-services-timeline__step');

    const nsTimelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ns-services-timeline__step--visible');
                nsTimelineObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.25,
        rootMargin: '0px 0px -40px 0px'
    });

    nsTimelineSteps.forEach(step => nsTimelineObserver.observe(step));

    // ---------- COUNTER ANIMATION ----------
    const nsCounters = document.querySelectorAll('.ns-services-stat__number[data-ns-count]');
    let nsCountersAnimated = false;

    const nsAnimateCounters = () => {
        if (nsCountersAnimated) return;
        let anyVisible = false;
        nsCounters.forEach(counter => {
            if (nsIsElementInViewport(counter, 0.2)) anyVisible = true;
        });
        if (!anyVisible) return;

        nsCountersAnimated = true;
        nsCounters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-ns-count'));
            const isFloat = target % 1 !== 0;
            const duration = 2000;
            const startTime = performance.now();

            const update = (time) => {
                const progress = Math.min((time - startTime) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = eased * target;
                if (isFloat) {
                    counter.childNodes[0].textContent = value.toFixed(1);
                } else {
                    counter.childNodes[0].textContent = Math.floor(value);
                }
                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    if (isFloat) {
                        counter.childNodes[0].textContent = target.toFixed(1);
                    } else {
                        counter.childNodes[0].textContent = Math.floor(target);
                    }
                }
            };
            requestAnimationFrame(update);
        });
    };

    const nsCheckCounters = nsDebounce(() => {
        if (!nsCountersAnimated) nsAnimateCounters();
    }, 80);

    window.addEventListener('scroll', nsCheckCounters);
    window.addEventListener('load', () => {
        setTimeout(nsAnimateCounters, 300);
    });

    // ---------- MAGNETIC CTA BUTTON ----------
    const nsCtaBtn = document.getElementById('nsServicesCtaButton');
    if (nsCtaBtn) {
        nsCtaBtn.addEventListener('mousemove', (e) => {
            const rect = nsCtaBtn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const maxMove = 10;
            const moveX = (x / rect.width) * maxMove;
            const moveY = (y / rect.height) * maxMove;
            nsCtaBtn.style.transform =
                `translate(${moveX * 0.4}px, ${moveY * 0.4}px) scale(1.02)`;
        });

        nsCtaBtn.addEventListener('mouseleave', () => {
            nsCtaBtn.style.transform = 'translate(0, 0) scale(1)';
        });

        // Ripple effect
        nsCtaBtn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            ripple.style.cssText = `
                        position: absolute;
                        width: ${size}px;
                        height: ${size}px;
                        left: ${x}px;
                        top: ${y}px;
                        border-radius: 50%;
                        background: rgba(255,255,255,0.25);
                        transform: scale(0);
                        animation: nsServicesRipple 0.6s ease-out;
                        pointer-events: none;
                    `;
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 700);
        });
    }

    // Inject ripple keyframes
    if (!document.getElementById('nsServicesRippleStyle')) {
        const style = document.createElement('style');
        style.id = 'nsServicesRippleStyle';
        style.textContent = `
                    @keyframes nsServicesRipple {
                        to { transform: scale(4); opacity: 0; }
                    }
                `;
        document.head.appendChild(style);
    }

    // ---------- PARALLAX ON CARDS ----------
    const nsCards = document.querySelectorAll('.ns-services-card');
    nsCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            const rotateY = x * 4;
            const rotateX = -y * 4;
            card.style.transform =
                `perspective(800px) translateY(-10px) scale(1.01) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) translateY(0) scale(1) rotateX(0) rotateY(0)';
        });
    });

    console.log('🔐 Cybrex Services Section initialized (image-enhanced)');

})();


// ---------- End Js Services section ----------