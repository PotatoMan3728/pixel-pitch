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

