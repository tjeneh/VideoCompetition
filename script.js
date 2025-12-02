document.addEventListener('DOMContentLoaded', function () {
    // ==================== Form Handling ====================
    const form = document.getElementById('applicationForm');
    const successMessage = document.getElementById('successMessage');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;

            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Get form data
            const formData = new FormData(form);

            // Send to FormSubmit
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        // Show success message with animation
                        form.style.opacity = '0';
                        setTimeout(() => {
                            form.style.display = 'none';
                            successMessage.style.display = 'block';
                            // Trigger reflow
                            void successMessage.offsetWidth;
                            successMessage.style.opacity = '1';
                            successMessage.style.transform = 'translateY(0)';
                        }, 300);
                    } else {
                        alert('Oops! There was a problem submitting your form. Please try again.');
                        submitBtn.textContent = originalBtnText;
                        submitBtn.disabled = false;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Oops! There was a problem submitting your form. Please try again.');
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }

    // ==================== Smooth Scrolling ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==================== Scroll Animations ====================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll('.card, .feature-card, .step-item, .timeline-item, .section-header, .hero-content');

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        // Add staggered delay for grid items
        if (el.classList.contains('card') || el.classList.contains('feature-card')) {
            el.style.transitionDelay = `${(index % 3) * 0.1}s`;
        }
        observer.observe(el);
    });

    // Add visible class styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // ==================== Parallax / Mouse Move Effect ====================
    const bgGradient1 = document.querySelector('.bg-gradient-1');
    const bgGradient2 = document.querySelector('.bg-gradient-2');

    if (bgGradient1 && bgGradient2) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            bgGradient1.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
            bgGradient2.style.transform = `translate(${-x * 20}px, ${-y * 20}px)`;
        });
    }
});
