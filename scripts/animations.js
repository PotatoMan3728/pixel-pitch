// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .feature, .info-card, .contact-info, .contact-form, .booking-form, .booking-info');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
};

// Add animation class to CSS
const style = document.createElement('style');
style.textContent = `
    .service-card, .feature, .info-card, .contact-info, .contact-form, .booking-form, .booking-info {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .service-card.animate, .feature.animate, .info-card.animate, 
    .contact-info.animate, .contact-form.animate, .booking-form.animate, .booking-info.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .service-card:nth-child(2), .feature:nth-child(2) {
        transition-delay: 0.2s;
    }
    
    .service-card:nth-child(3), .feature:nth-child(3) {
        transition-delay: 0.4s;
    }
    
    .service-card:nth-child(4), .feature:nth-child(4) {
        transition-delay: 0.6s;
    }
`;
document.head.appendChild(style);

// Run animation on scroll
window.addEventListener('scroll', animateOnScroll);
// Run once on page load
window.addEventListener('load', animateOnScroll); 