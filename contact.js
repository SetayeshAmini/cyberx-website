// Navbar
window.addEventListener('scroll', function() {
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
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
// Fotter
const cyberForm = document.getElementById('cyberNewsletterForm');

if (cyberForm) {
    cyberForm.addEventListener('submit', function(e) {
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