// Main App Logic
let currentLang = 'it';
let bookingSystem;

document.addEventListener('DOMContentLoaded', () => {
    console.log('🔥 Encanto Latino - App Initialized');

    // Init Booking System
    if (window.BookingSystem) {
        bookingSystem = new window.BookingSystem();
    }

    // Render Content
    renderServices();
    renderProducts();

    // Update Copyright
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Bind Language Toggle
    const langBtn = document.getElementById('langToggle');
    if(langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }

    // Initial Language Setup
    updateLanguage();
});

function toggleLanguage() {
    currentLang = currentLang === 'it' ? 'en' : 'it';
    updateLanguage();
}

function updateLanguage() {
    const langToggleBtn = document.getElementById('langToggle');
    if (langToggleBtn) {
        langToggleBtn.textContent = currentLang.toUpperCase();
    }

    document.querySelectorAll('[data-it-text]').forEach(el => {
        const itText = el.getAttribute('data-it-text');
        const enText = el.getAttribute('data-en-text');
        if (itText && enText) {
            let text = currentLang === 'it' ? itText : enText;

            // Age replacement logic
            if (text.includes('{age}')) {
                const birthDate = new Date('2004-01-26');
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                text = text.replace('{age}', age);
            }
            el.textContent = text;
        }
    });

    document.querySelectorAll('[data-it-placeholder]').forEach(el => {
        const itPlaceholder = el.getAttribute('data-it-placeholder');
        const enPlaceholder = el.getAttribute('data-en-placeholder');
        if (itPlaceholder && enPlaceholder) {
            el.placeholder = currentLang === 'it' ? itPlaceholder : enPlaceholder;
        }
    });

    // Re-render dynamic content that depends on language
    renderServices();
    renderProducts();
}

function renderServices() {
    if (!window.EncantoData || !window.EncantoData.services) return;

    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const loading = document.getElementById('servicesLoading');
    if (loading) loading.style.display = 'none';

    window.EncantoData.services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';

        const detailText = currentLang === 'it' ? service.detail.it : service.detail.en;
        const descText = currentLang === 'it' ? service.desc.it : service.desc.en;
        const btnText = currentLang === 'it' ? 'Prenota' : 'Book';

        card.innerHTML = `
          <div class="service-card-header">
            <div class="service-card-icon"><i class="fa-solid ${service.icon}"></i></div>
            <h3 class="service-card-title">${service.title}</h3>
          </div>
          <p class="service-card-desc">${descText}</p>

          <div style="margin-top: auto; margin-bottom: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-light);">
             <small style="color: var(--gold); font-family: var(--font-body); font-weight: 600; letter-spacing: 0.03em;">
               <i class="fa-solid fa-check" style="margin-right: 4px;"></i> ${detailText}
             </small>
          </div>

          <div class="service-footer" style="border-top: none; padding-top: 0;">
            <div class="service-price">${service.price} <small>${service.duration}</small></div>
            <button class="btn btn-outline" data-service-id="${service.id}">
              ${btnText}
            </button>
          </div>
        `;

        // Add event listener to button
        const btn = card.querySelector('button');
        btn.addEventListener('click', () => {
             if (bookingSystem) bookingSystem.preselectService(service.id);
        });

        grid.appendChild(card);
    });
}

function renderProducts() {
    if (!window.EncantoData || !window.EncantoData.products) return;

    const section = document.getElementById('products');
    if (!section) return;

    const grid = section.querySelector('.services-grid');
    if (!grid) return;

    grid.innerHTML = ''; // Clear hardcoded content

    window.EncantoData.products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.style.cssText = 'padding: 0; background: var(--bg); border: none;';

        const descText = currentLang === 'it' ? product.desc.it : product.desc.en;
        const buyText = currentLang === 'it' ? 'Acquista' : 'Buy';

        card.innerHTML = `
         <div style="position: relative; padding-top: 100%; overflow: hidden; background: #2a2a2a;">
            <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: var(--gold); font-size: 3rem;">
               <i class="fa-solid ${product.icon}"></i>
            </div>
         </div>
         <div style="padding: 1.5rem 1rem;">
            <h3 class="service-card-title" style="font-size: 1.25rem; margin-bottom: 0.5rem;">${product.title}</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem; font-style: italic;">
               ${descText}
            </p>
            <div style="display: flex; justify-content: space-between; align-items: center;">
               <span style="color: var(--gold); font-weight: 700;">${product.price}</span>
               <a href="#" class="btn btn-outline" style="padding: 0.5rem 1rem; font-size: 0.85rem;">${buyText} <i class="fa-solid fa-external-link-alt" style="margin-left: 5px;"></i></a>
            </div>
         </div>
        `;
        grid.appendChild(card);
    });
}

// Window functions for legacy onclicks (logo)
window.scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
