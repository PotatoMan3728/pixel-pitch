// Language translation functionality
const translations = {
    en: {
        // Navigation
        'Home': 'Home',
        'Contact': 'Contact',
        'Book Appointment': 'Book Appointment',

        // Hero Section
        'Transform Your Digital Presence': 'Transform Your Digital Presence',
        'Expert web solutions, social media management, and marketing strategies to elevate your business': 'Expert web solutions, social media management, and marketing strategies to elevate your business',
        'Get Started': 'Get Started',

        // Service Cards
        'VERTRIEB': 'SALES',
        'Ein starker Werbesatz im Vertrieb weckt Interesse, baut Vertrauen auf und bringt den Kunden zum Kauf.': 'A strong sales pitch builds interest, establishes trust, and drives customer purchases.',
        'SOCIAL MEDIA MANAGEMENT': 'SOCIAL MEDIA MANAGEMENT',
        'Social Media Management steuert Auftritt und Erfolg in sozialen Netzwerken.': 'Social Media Management drives presence and success across social networks.',
        'KREATIVES MARKETING': 'CREATIVE MARKETING',
        'Kreatives Marketing schafft Aufmerksamkeit und Emotionen.': 'Creative marketing generates attention and emotional connections.',
        'ANZEIGENGESTALTUNG': 'ADVERTISEMENT DESIGN',
        'Anzeigengestaltung sorgt für visuelle Aufmerksamkeit und klare Botschaften.': 'Advertisement design ensures visual impact and clear messaging.',
        'WEBSEITEN ENTWICKELN': 'WEBSITE DEVELOPMENT',
        'Webseiten entwickeln heißt, benutzerfreundliche und funktionale Online-Präsenzen zu schaffen.': 'Website development means creating user-friendly and functional online presences.',

        // CTA Section
        'Ready to Transform Your Business?': 'Ready to Transform Your Business?',
        'Let\'s work together to create your digital success story': 'Let\'s work together to create your digital success story',
        'Book a Consultation': 'Book a Consultation',

        // Footer
        'Your digital success partner': 'Your digital success partner',
        'Quick Links': 'Quick Links',
        'Services': 'Services',
        'About Us': 'About Us',
        'Contact': 'Contact',
        'Book Appointment': 'Book Appointment',
        'info@pixelandpitch.com': 'info@pixelandpitch.com',
        '123 Business Street, City, Country': '123 Business Street, City, Country',
        'All rights reserved.': 'All rights reserved.',

        // Contact Page
        'Get in Touch': 'Get in Touch',
        'We\'d love to hear from you': 'We\'d love to hear from you',
        'Send us a message and we\'ll respond as soon as possible': 'Send us a message and we\'ll respond as soon as possible',
        'Name': 'Name',
        'Email': 'Email',
        'Message': 'Message',
        'Send Message': 'Send Message',
        'Contact Information': 'Contact Information',
        'Phone': 'Phone',
        'Address': 'Address',
        'Follow Us': 'Follow Us',

        // Booking Page
        'Schedule a Consultation': 'Schedule a Consultation',
        'Book your free consultation today': 'Book your free consultation today',
        'Let\'s discuss your project and find the best solutions': 'Let\'s discuss your project and find the best solutions',
        'First Name': 'First Name',
        'Last Name': 'Last Name',
        'Phone Number': 'Phone Number',
        'Preferred Date': 'Preferred Date',
        'Preferred Time': 'Preferred Time',
        'Project Details': 'Project Details',
        'Tell us about your project': 'Tell us about your project',
        'Book Now': 'Book Now',
        'Morning': 'Morning',
        'Afternoon': 'Afternoon',
        'Evening': 'Evening'
    },
    de: {
        // Navigation
        'Home': 'Startseite',
        'Contact': 'Kontakt',
        'Book Appointment': 'Termin Buchen',

        // Hero Section
        'Transform Your Digital Presence': 'Transformieren Sie Ihre Digitale Präsenz',
        'Expert web solutions, social media management, and marketing strategies to elevate your business': 'Professionelle Weblösungen, Social Media Management und Marketingstrategien für Ihren Geschäftserfolg',
        'Get Started': 'Jetzt Starten',

        // Service Cards
        'VERTRIEB': 'VERTRIEB',
        'Ein starker Werbesatz im Vertrieb weckt Interesse, baut Vertrauen auf und bringt den Kunden zum Kauf.': 'Ein starker Werbesatz im Vertrieb weckt Interesse, baut Vertrauen auf und bringt den Kunden zum Kauf.',
        'SOCIAL MEDIA MANAGEMENT': 'SOCIAL MEDIA MANAGEMENT',
        'Social Media Management steuert Auftritt und Erfolg in sozialen Netzwerken.': 'Social Media Management steuert Auftritt und Erfolg in sozialen Netzwerken.',
        'KREATIVES MARKETING': 'KREATIVES MARKETING',
        'Kreatives Marketing schafft Aufmerksamkeit und Emotionen.': 'Kreatives Marketing schafft Aufmerksamkeit und Emotionen.',
        'ANZEIGENGESTALTUNG': 'ANZEIGENGESTALTUNG',
        'Anzeigengestaltung sorgt für visuelle Aufmerksamkeit und klare Botschaften.': 'Anzeigengestaltung sorgt für visuelle Aufmerksamkeit und klare Botschaften.',
        'WEBSEITEN ENTWICKELN': 'WEBSEITEN ENTWICKELN',
        'Webseiten entwickeln heißt, benutzerfreundliche und funktionale Online-Präsenzen zu schaffen.': 'Webseiten entwickeln heißt, benutzerfreundliche und funktionale Online-Präsenzen zu schaffen.',

        // CTA Section
        'Ready to Transform Your Business?': 'Bereit Ihr Unternehmen zu Transformieren?',
        'Let\'s work together to create your digital success story': 'Lassen Sie uns gemeinsam Ihre digitale Erfolgsgeschichte schreiben',
        'Book a Consultation': 'Beratungsgespräch Vereinbaren',

        // Footer
        'Your digital success partner': 'Ihr Partner für digitalen Erfolg',
        'Quick Links': 'Schnellzugriff',
        'Services': 'Leistungen',
        'About Us': 'Über Uns',
        'Contact': 'Kontakt',
        'Book Appointment': 'Termin Buchen',
        'info@pixelandpitch.com': 'info@pixelandpitch.com',
        '123 Business Street, City, Country': '123 Geschäftsstraße, Stadt, Land',
        'All rights reserved.': 'Alle Rechte vorbehalten.',

        // Contact Page
        'Get in Touch': 'Kontaktieren Sie Uns',
        'We\'d love to hear from you': 'Wir freuen uns von Ihnen zu hören',
        'Send us a message and we\'ll respond as soon as possible': 'Senden Sie uns eine Nachricht und wir melden uns schnellstmöglich bei Ihnen',
        'Name': 'Name',
        'Email': 'E-Mail',
        'Message': 'Nachricht',
        'Send Message': 'Nachricht Senden',
        'Contact Information': 'Kontaktinformationen',
        'Phone': 'Telefon',
        'Address': 'Adresse',
        'Follow Us': 'Folgen Sie Uns',

        // Booking Page
        'Schedule a Consultation': 'Beratungstermin Vereinbaren',
        'Book your free consultation today': 'Buchen Sie heute Ihre kostenlose Beratung',
        'Let\'s discuss your project and find the best solutions': 'Lassen Sie uns Ihr Projekt besprechen und die besten Lösungen finden',
        'First Name': 'Vorname',
        'Last Name': 'Nachname',
        'Phone Number': 'Telefonnummer',
        'Preferred Date': 'Wunschtermin',
        'Preferred Time': 'Wunschzeit',
        'Project Details': 'Projektdetails',
        'Tell us about your project': 'Erzählen Sie uns von Ihrem Projekt',
        'Book Now': 'Jetzt Buchen',
        'Morning': 'Vormittag',
        'Afternoon': 'Nachmittag',
        'Evening': 'Abend'
    }
};

// Cookie management functions
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

let currentLang = sessionStorage.getItem('language') || 'de';

function translatePage(lang) {
    console.log('Starting translation to:', lang);
    const elements = document.querySelectorAll('[data-translate]');
    console.log('Found elements to translate:', elements.length);
    
    if (elements.length === 0) {
        console.warn('No elements with data-translate attribute found!');
        return;
    }
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        console.log('Processing element:', element);
        console.log('Translation key:', key);
        
        if (!key) {
            console.warn('Element has data-translate but no key:', element);
            return;
        }
        
        if (translations[lang] && translations[lang][key]) {
            const newText = translations[lang][key];
            console.log('Applying translation:', newText);
            element.textContent = newText;
        } else {
            console.warn('No translation found for key:', key, 'in language:', lang);
        }
    });
    
    console.log('Translation complete for language:', lang);
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', function() {
    const languageSwitcher = document.getElementById('languageSwitcher');
    const currentLangSpan = document.querySelector('.current-lang');

    console.log('Language switcher initialized');
    console.log('Current language:', currentLang);
    console.log('Language switcher element:', languageSwitcher);
    console.log('Current lang span:', currentLangSpan);

    // Set initial language
    currentLangSpan.textContent = currentLang.toUpperCase();
    translatePage(currentLang);

    if (languageSwitcher) {
        // Direct click handler
        languageSwitcher.onclick = function(e) {
            console.log('Direct click handler triggered');
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Current language before switch:', currentLang);
            
            currentLang = currentLang === 'de' ? 'en' : 'de';
            console.log('New language:', currentLang);
            
            // Store in sessionStorage instead of cookies
            sessionStorage.setItem('language', currentLang);
            currentLangSpan.textContent = currentLang.toUpperCase();
            
            // Translate immediately
            translatePage(currentLang);
        };

        console.log('Event listeners added to language switcher');
    } else {
        console.error('Language switcher button not found!');
    }
});

// Smooth scrolling for anchor links
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

// Handle navbar active states
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        // Remove active class from all links
        link.classList.remove('active');
        
        // Add active class to current page link
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });
});

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

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Form validation and handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Validate form
        let isValid = true;
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.classList.add('error');
                
                // Add shake animation
                input.classList.add('shake');
                setTimeout(() => {
                    input.classList.remove('shake');
                }, 500);
            } else {
                input.classList.remove('error');
            }
        });
        
        if (!isValid) return;
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Send form data to email using FormSubmit service
        fetch('https://formsubmit.co/ramika3718@gmail.com', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Show success message with animation
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                contactForm.appendChild(successMessage);
                
                // Reset form after delay
                setTimeout(() => {
                    contactForm.reset();
                    successMessage.remove();
                }, 3000);
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Show error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'There was an error sending your message. Please try again later.';
            contactForm.appendChild(errorMessage);
            
            // Remove error message after delay
            setTimeout(() => {
                errorMessage.remove();
            }, 3000);
        })
        .finally(() => {
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        });
    });
}

// Booking form handling
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(bookingForm);
        const data = Object.fromEntries(formData);
        
        // Validate form
        let isValid = true;
        const inputs = bookingForm.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.classList.add('error');
                
                // Add shake animation
                input.classList.add('shake');
                setTimeout(() => {
                    input.classList.remove('shake');
                }, 500);
            } else {
                input.classList.remove('error');
            }
        });
        
        if (!isValid) return;
        
        // Show loading state
        const submitButton = bookingForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Booking...';
        submitButton.disabled = true;
        
        // Send form data to email using FormSubmit service
        fetch('https://formsubmit.co/ramika3718@gmail.com', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Show success message with animation
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Thank you for booking! We will confirm your appointment shortly.';
                bookingForm.appendChild(successMessage);
                
                // Reset form after delay
                setTimeout(() => {
                    bookingForm.reset();
                    successMessage.remove();
                }, 3000);
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Show error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'There was an error booking your appointment. Please try again later.';
            bookingForm.appendChild(errorMessage);
            
            // Remove error message after delay
            setTimeout(() => {
                errorMessage.remove();
            }, 3000);
        })
        .finally(() => {
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        });
    });
}

// Set minimum date for booking form to today
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
}

// Add hover effect to service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add styles for success and error messages
const messageStyles = document.createElement('style');
messageStyles.textContent = `
    .success-message {
        background-color: var(--color-accent);
        color: var(--color-text-light);
        padding: 1rem;
        border-radius: 5px;
        margin-top: 1rem;
        text-align: center;
        animation: fadeIn 0.5s ease-out;
    }
    
    .error-message {
        background-color: #e57373;
        color: var(--color-text-light);
        padding: 1rem;
        border-radius: 5px;
        margin-top: 1rem;
        text-align: center;
        animation: fadeIn 0.5s ease-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .error {
        border-color: #e57373 !important;
    }
    
    .shake {
        animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
    }
    
    @keyframes shake {
        10%, 90% { transform: translate3d(-1px, 0, 0); }
        20%, 80% { transform: translate3d(2px, 0, 0); }
        30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
        40%, 60% { transform: translate3d(4px, 0, 0); }
    }
`;
document.head.appendChild(messageStyles);

// Form Handling
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            // Collect form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // Simulate API call (replace with actual API endpoint)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success message
            showNotification('Message sent successfully!', 'success');
            form.reset();
        } catch (error) {
            showNotification('Error sending message. Please try again.', 'error');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
});

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '1rem 2rem',
        borderRadius: '5px',
        backgroundColor: type === 'success' ? '#4CAF50' : '#f44336',
        color: 'white',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        zIndex: '1000',
        animation: 'slideIn 0.5s ease-out'
    });

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease-in';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Add animation keyframes
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(animationStyles);

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.feature-card, .video-placeholder').forEach(el => {
    observer.observe(el);
}); 