// Import all modules
import { translations, translatePage } from './translations.js';
import { initializeNavigation } from './navigation.js';
import { initializeAnimations } from './animations.js';
import { initializeForms } from './forms.js';
import { setCookie, getCookie, showNotification } from './utils.js';

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation and language switcher
    initializeNavigation();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize forms
    initializeForms();
    
    // Check for saved language preference
    const savedLanguage = sessionStorage.getItem('language') || 'de';
    if (savedLanguage === 'en') {
        translatePage('en');
    }
}); 

// Remove the toggleAboutContent function and related console logs
// function toggleAboutContent() {
//     console.log('See More button clicked');
//     const aboutContent = document.getElementById('aboutContent');
//     const seeMoreBtn = document.getElementById('seeMoreBtn');
//     if (aboutContent.style.display === 'none') {
//         aboutContent.style.display = 'block';
//         seeMoreBtn.textContent = 'See Less';
//         console.log('Content shown');
//     } else {
//         aboutContent.style.display = 'none';
//         seeMoreBtn.textContent = 'See More';
//         console.log('Content hidden');
//     }
// }

// Remove the global attachment of the function
// window.toggleAboutContent = toggleAboutContent;

