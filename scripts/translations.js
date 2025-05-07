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
        'Vertrieb': 'Sales',
        'Social Media Management': 'Social Media Management',
        'Kreatives Marketing': 'Creative Marketing',
        'Anzeigengestaltung': 'Advertisement Design',
        'Webseiten Entwickeln': 'Website Development',
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
        'What to Expect': 'What to Expect',
        '30-minute personalized consultation': '30-minute personalized consultation',
        'Detailed analysis of your current digital presence': 'Detailed analysis of your current digital presence',
        'Custom strategy recommendations': 'Custom strategy recommendations',
        'Pricing and package information': 'Pricing and package information',
        'Full Name': 'Full Name',
        'Email': 'Email',
        'Phone Number': 'Phone Number',
        'Service Interest': 'Service Interest',
        'Select a service': 'Select a service',
        'Preferred Date': 'Preferred Date',
        'Preferred Time': 'Preferred Time',
        'Morning': 'Morning',
        'Afternoon': 'Afternoon',
        'Evening': 'Evening',
        'Additional Information': 'Additional Information',
        'Schedule Consultation': 'Schedule Consultation',
        'Subject': 'Subject',

        // About Us Section
        'Willkommen bei Pixel & Pitch – Ihrem Partner für digitales Marketing, Webentwicklung und Vertrieb!': 'Welcome to Pixel & Pitch – Your partner for digital marketing, web development, and sales!',
        'Wir sind ein kreatives und engagiertes Team, das sich darauf spezialisiert hat, Unternehmen durch innovative digitale Lösungen und maßgeschneiderte Vertriebsstrategien erfolgreich zu machen. Unser Ziel ist es, Ihre Marke online sichtbarer und attraktiver zu gestalten – und das mit einem klaren Fokus auf Ihre individuellen Bedürfnisse.': 'We are a creative and dedicated team specializing in making businesses successful through innovative digital solutions and tailored sales strategies. Our goal is to make your brand more visible and attractive online – with a clear focus on your individual needs.',
        'Warum Pixel & Pitch?': 'Why Pixel & Pitch?',
        'Weil wir mehr bieten als nur kreative Ideen – wir liefern Ergebnisse. Mit unserem breiten Fachwissen und unserer Leidenschaft für digitale Innovation arbeiten wir Hand in Hand mit unseren Kunden, um gemeinsam Erfolge zu feiern.': 'Because we offer more than just creative ideas – we deliver results. With our broad expertise and passion for digital innovation, we work hand in hand with our clients to celebrate success together.',
        'Lassen Sie uns gemeinsam Ihre digitale Präsenz auf das nächste Level heben!': 'Let us take your digital presence to the next level together!',
        'Kontaktieren Sie uns – Wir freuen uns darauf, Sie kennenzulernen!': 'Contact us – We look forward to meeting you!'
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
        'What to Expect': 'Was Sie Erwartet',
        '30-minute personalized consultation': '30-minütige persönliche Beratung',
        'Detailed analysis of your current digital presence': 'Detaillierte Analyse Ihrer aktuellen digitalen Präsenz',
        'Custom strategy recommendations': 'Individuelle Strategieempfehlungen',
        'Pricing and package information': 'Preis- und Paketinformationen',
        'Full Name': 'Vollständiger Name',
        'Email': 'E-Mail',
        'Phone Number': 'Telefonnummer',
        'Service Interest': 'Interessensgebiet',
        'Select a service': 'Wählen Sie einen Service',
        'Preferred Date': 'Bevorzugtes Datum',
        'Preferred Time': 'Bevorzugte Uhrzeit',
        'Morning': 'Vormittag',
        'Afternoon': 'Nachmittag',
        'Evening': 'Abend',
        'Additional Information': 'Zusätzliche Informationen',
        'Schedule Consultation': 'Beratungstermin Vereinbaren',
        'Subject': 'Betreff',

        // About Us Section
        'Willkommen bei Pixel & Pitch – Ihrem Partner für digitales Marketing, Webentwicklung und Vertrieb!': 'Welcome to Pixel & Pitch – Your partner for digital marketing, web development, and sales!',
        'Wir sind ein kreatives und engagiertes Team, das sich darauf spezialisiert hat, Unternehmen durch innovative digitale Lösungen und maßgeschneiderte Vertriebsstrategien erfolgreich zu machen. Unser Ziel ist es, Ihre Marke online sichtbarer und attraktiver zu gestalten – und das mit einem klaren Fokus auf Ihre individuellen Bedürfnisse.': 'We are a creative and dedicated team specializing in making businesses successful through innovative digital solutions and tailored sales strategies. Our goal is to make your brand more visible and attractive online – with a clear focus on your individual needs.',
        'Warum Pixel & Pitch?': 'Why Pixel & Pitch?',
        'Weil wir mehr bieten als nur kreative Ideen – wir liefern Ergebnisse. Mit unserem breiten Fachwissen und unserer Leidenschaft für digitale Innovation arbeiten wir Hand in Hand mit unseren Kunden, um gemeinsam Erfolge zu feiern.': 'Because we offer more than just creative ideas – we deliver results. With our broad expertise and passion for digital innovation, we work hand in hand with our clients to celebrate success together.',
        'Lassen Sie uns gemeinsam Ihre digitale Präsenz auf das nächste Level heben!': 'Let us take your digital presence to the next level together!',
        'Kontaktieren Sie uns – Wir freuen uns darauf, Sie kennenzulernen!': 'Contact us – We look forward to meeting you!'
    }
};

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
            
            // Handle select elements and their options
            if (element.tagName === 'SELECT') {
                const options = element.querySelectorAll('option');
                options.forEach(option => {
                    const optionKey = option.getAttribute('data-translate');
                    if (optionKey && translations[lang][optionKey]) {
                        option.textContent = translations[lang][optionKey];
                    }
                });
            } else {
                element.textContent = newText;
            }
        } else {
            console.warn('No translation found for key:', key, 'in language:', lang);
        }
    });
    
    console.log('Translation complete for language:', lang);
} 