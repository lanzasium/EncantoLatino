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
        card.className = 'card';

        const detailText = currentLang === 'it' ? service.detail.it : service.detail.en;
        const descText = currentLang === 'it' ? service.desc.it : service.desc.en;
        const btnText = currentLang === 'it' ? 'Prenota' : 'Book';

        card.innerHTML = `
          <div class="card-header">
            <div class="card-icon"><i class="fa-solid ${service.icon}"></i></div>
            <h3 class="card-title">${service.title}</h3>
          </div>
          <p class="card-desc">${descText}</p>

          <div class="card-meta">
             <small class="card-meta-text">
               <i class="fa-solid fa-check" style="margin-right: 4px;"></i> ${detailText}
             </small>
          </div>

          <div class="card-footer">
            <div class="card-price">${service.price} <small>${service.duration}</small></div>
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

    const grid = section.querySelector('.cards-grid');
    if (!grid) return;

    grid.innerHTML = ''; // Clear hardcoded content

    window.EncantoData.products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card card-centered';

        const descText = currentLang === 'it' ? product.desc.it : product.desc.en;
        const buyText = currentLang === 'it' ? 'Acquista' : 'Buy';

        card.innerHTML = `
         <div class="card-header">
            <div class="card-icon"><i class="fa-solid ${product.icon}"></i></div>
         </div>
         <h3 class="card-title">${product.title}</h3>

         <p class="card-desc" style="font-style: italic;">
            ${descText}
         </p>

         <div class="card-footer">
            <div class="card-price">${product.price}</div>
            <a href="#" class="btn btn-outline">
                ${buyText} <i class="fa-solid fa-external-link-alt" style="margin-left: 8px;"></i>
            </a>
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
