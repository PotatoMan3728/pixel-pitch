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