document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Global Data
    if (window.EncantoData) {
        initServices();
        initProducts();
    } else {
        console.error('Data module not loaded');
    }

    // 2. Initialize Booking System
    if (window.BookingSystem) {
        window.bookingApp = new window.BookingSystem();
    }

    // 3. Scroll Reveal Animation
    initScrollReveal();
});

function initServices() {
    const container = document.getElementById('servicesGrid');
    if (!container) return;

    container.innerHTML = '';

    // We limit to top 6 or show all? Let's show all but styled elegantly
    const services = window.EncantoData.services || [];

    services.forEach((service, index) => {
        // Stagger animation delay
        const delay = index * 100;

        const card = document.createElement('div');
        card.className = 'service-card fade-in';
        card.style.animationDelay = `${delay}ms`;

        // Icon mapping (simple)
        let iconClass = 'fa-star';
        if (service.title.includes('Lash')) iconClass = 'fa-eye';
        if (service.title.includes('Brows') || service.title.includes('Sopracciglia')) iconClass = 'fa-feather'; // feather looks like brow hair
        if (service.title.includes('Labbra')) iconClass = 'fa-heart'; // lips

        card.innerHTML = `
            <div class="service-icon"><i class="fa-solid ${iconClass}"></i></div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-desc">${service.description}</p>
            <span class="service-price">${service.price}</span>
            <button class="btn btn-outline" style="margin-top: 1.5rem; padding: 0.5rem 1.5rem; font-size: 0.8rem;"
                onclick="window.bookingApp.preselectService('${service.id}')">
                Prenota
            </button>
        `;

        container.appendChild(card);
    });
}

function initProducts() {
    const container = document.getElementById('productsGrid');
    if (!container) return;

    // Use window.EncantoData.products if available, else mock strictly for design demo
    // The previous data.js had products. Let's assume it does.
    const products = window.EncantoData.products || [];

    // If empty (maybe data.js isn't fully populated), mock some for visual check
    if (products.length === 0) {
        // Mocking for the sake of the design preview if data is missing
        // This ensures the "Shop Editoriale" section doesn't look broken
    }

    container.innerHTML = '';

    products.forEach((prod, index) => {
        const delay = index * 100;
        const card = document.createElement('div');
        card.className = 'product-card fade-in';
        card.style.animationDelay = `${delay}ms`;

        card.innerHTML = `
            <div class="product-image">
                <!-- Placeholder if no image -->
                <img src="${prod.image || 'images/logo.png'}" alt="${prod.name}">
            </div>
            <h4 class="product-title">${prod.name}</h4>
            <p class="text-muted" style="font-size: 0.85rem; margin-bottom: 1rem;">${prod.desc || 'Trattamento esclusivo per la cura domiciliare.'}</p>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto;">
                <span class="text-gold" style="font-weight:600;">${prod.price || '€??'}</span>
                <a href="${prod.link || '#'}" class="product-action">Acquista</a>
            </div>
        `;

        container.appendChild(card);
    });
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Select elements to reveal
    document.querySelectorAll('.section-title, .section-subtitle, .hero-content').forEach(el => {
        // Ensure initial state is set in CSS or here
        // We set simple animation classes in CSS, but let's force opacity 0 if not animating
        // Actually, we use CSS animations for Hero. Let's apply to generic sections.
        if (!el.classList.contains('hero-content')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s ease-out';
            observer.observe(el);
        }
    });
}
