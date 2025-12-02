// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('submissionForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = {};
        
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Log submission data (in production, you'd send this to a backend)
        console.log('Submission Data:', data);

        // Create a formatted text version for easy copying
        const submissionText = formatSubmission(data);
        console.log('Formatted Submission:\n', submissionText);

        // Show success message
        form.style.display = 'none';
        successMessage.style.display = 'block';

        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Optional: Send to email or save to Google Sheets
        // You can integrate with FormSubmit, Netlify Forms, or other services
        
        // For now, we'll create a downloadable text file
        downloadSubmission(submissionText);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add subtle parallax effect to floating cards
    const floatingCards = document.querySelectorAll('.floating-card');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        floatingCards.forEach((card, index) => {
            const speed = 0.1 + (index * 0.05);
            card.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Form validation enhancement
    const requiredInputs = form.querySelectorAll('[required]');
    requiredInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.style.borderColor = 'hsl(0, 84%, 54%)';
            } else {
                this.style.borderColor = 'var(--color-primary)';
            }
        });

        input.addEventListener('input', function() {
            if (this.value.trim()) {
                this.style.borderColor = 'var(--color-border)';
            }
        });
    });

    // URL validation for video links
    const urlInputs = document.querySelectorAll('input[type="url"]');
    urlInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !isValidURL(this.value)) {
                this.style.borderColor = 'hsl(0, 84%, 54%)';
                showTooltip(this, 'Please enter a valid URL');
            }
        });
    });
});

// Format submission data for easy reading/storage
function formatSubmission(data) {
    let text = '=== VIDEO CREATOR SUBMISSION ===\n\n';
    
    text += '--- PERSONAL INFORMATION ---\n';
    text += `Name: ${data.fullName}\n`;
    text += `Email: ${data.email}\n`;
    text += `Portfolio: ${data.portfolio || 'Not provided'}\n\n`;
    
    text += '--- VIDEO SAMPLES ---\n\n';
    
    // Video 1
    if (data.video1) {
        text += 'VIDEO #1:\n';
        text += `Link: ${data.video1}\n`;
        text += `Tools: ${data.video1Tools}\n`;
        text += `Description: ${data.video1Description}\n\n`;
    }
    
    // Video 2
    if (data.video2) {
        text += 'VIDEO #2:\n';
        text += `Link: ${data.video2}\n`;
        text += `Tools: ${data.video2Tools || 'Not provided'}\n`;
        text += `Description: ${data.video2Description || 'Not provided'}\n\n`;
    }
    
    // Video 3
    if (data.video3) {
        text += 'VIDEO #3:\n';
        text += `Link: ${data.video3}\n`;
        text += `Tools: ${data.video3Tools || 'Not provided'}\n`;
        text += `Description: ${data.video3Description || 'Not provided'}\n\n`;
    }
    
    text += '--- ADDITIONAL INFORMATION ---\n';
    text += `Experience: ${data.experience}\n`;
    text += `Availability: ${data.availability}\n`;
    text += `Additional Info: ${data.additionalInfo || 'Not provided'}\n\n`;
    
    text += `Submitted: ${new Date().toLocaleString()}\n`;
    
    return text;
}

// Download submission as text file
function downloadSubmission(text) {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `submission_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// URL validation
function isValidURL(string) {
    try {
        const url = new URL(string);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
        return false;
    }
}

// Show tooltip (simple implementation)
function showTooltip(element, message) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = message;
    tooltip.style.cssText = `
        position: absolute;
        background: hsl(0, 84%, 54%);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    `;
    
    element.parentElement.style.position = 'relative';
    element.parentElement.appendChild(tooltip);
    
    setTimeout(() => {
        tooltip.remove();
    }, 3000);
}

// Add entrance animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.opportunity-card, .requirement-item, .video-submission'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ============================================
// OPTIONAL: Integration with form services
// ============================================

// Example: Send to FormSubmit (free service)
function sendToFormSubmit(data) {
    // Replace with your FormSubmit endpoint
    const formSubmitURL = 'https://formsubmit.co/your-email@example.com';
    
    fetch(formSubmitURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Example: Send to Google Sheets via Apps Script
function sendToGoogleSheets(data) {
    // Replace with your Google Apps Script web app URL
    const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
    
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Example: Send email notification
function sendEmailNotification(data) {
    // You can use EmailJS or similar service
    // https://www.emailjs.com/
    
    // emailjs.send('service_id', 'template_id', data)
    //     .then(response => {
    //         console.log('Email sent:', response);
    //     })
    //     .catch(error => {
    //         console.error('Email error:', error);
    //     });
}
