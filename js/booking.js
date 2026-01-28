window.BookingSystem = class BookingSystem {
    constructor() {
        this.currentStep = 1;
        this.selectedService = null;
        this.selectedDate = null;
        this.selectedTime = null;
        this.init();
    }

    init() {
        this.populateServices();
        this.bindEvents();
    }

    populateServices() {
        const select = document.getElementById('bookingService');
        if (!select || !window.EncantoData) return;

        select.innerHTML = '<option value="">Seleziona Esperienza...</option>';

        window.EncantoData.services.forEach(service => {
            const option = document.createElement('option');
            option.value = service.id;
            option.setAttribute('data-price', service.price.replace(/[^0-9]/g, ''));
            option.textContent = `${service.title} — ${service.price}`;
            select.appendChild(option);
        });
    }

    bindEvents() {
        // Service Change
        const serviceSelect = document.getElementById('bookingService');
        if (serviceSelect) {
            serviceSelect.addEventListener('change', (e) => {
                this.selectedService = e.target.value;
                this.updatePricePreview();
                this.renderDates(); // Show dates only after service is picked
            });
        }

        // Navigation Buttons
        document.querySelectorAll('[data-action="next-step"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const step = parseInt(e.currentTarget.dataset.target);
                if (this.validateStep(this.currentStep)) {
                    this.goToStep(step);
                }
            });
        });

        document.querySelectorAll('[data-action="prev-step"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const step = parseInt(e.currentTarget.dataset.target);
                this.goToStep(step);
            });
        });

        // Form Submit
        const form = document.getElementById('bookingForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.finishBooking();
            });
        }
    }

    updatePricePreview() {
        const select = document.getElementById('bookingService');
        const priceDisplay = document.getElementById('bookingPrice');
        if (select && priceDisplay) {
            if (select.value === "") {
                priceDisplay.textContent = "€0";
                return;
            }
            const option = select.options[select.selectedIndex];
            const price = option.getAttribute('data-price');
            // Animate price change
            priceDisplay.style.opacity = 0;
            setTimeout(() => {
                priceDisplay.textContent = '€' + price;
                priceDisplay.style.opacity = 1;
            }, 200);
        }
    }

    renderDates() {
        const container = document.getElementById('availableDates');
        if (!container) return;

        container.innerHTML = '';

        // Generate next 6 days excluding Sundays (example logic)
        const today = new Date();
        const daysMap = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];

        for (let i = 1; i <= 6; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);
            if (d.getDay() === 0) continue; // Skip Sunday

            const div = document.createElement('div');
            div.className = 'date-card';
            div.innerHTML = `
                <div style="font-size:0.7rem; text-transform:uppercase; color:var(--text-muted);">${daysMap[d.getDay()]}</div>
                <div style="font-size:1.2rem; font-weight:600;">${d.getDate()}</div>
            `;

            div.addEventListener('click', () => {
                document.querySelectorAll('.date-card').forEach(c => c.classList.remove('selected'));
                div.classList.add('selected');
                this.selectedDate = d.toISOString();

                // Show Times
                this.renderTimes();
            });

            container.appendChild(div);
        }
    }

    renderTimes() {
        const container = document.getElementById('timeSlotContainer');
        const grid = document.getElementById('availableTimes');
        container.classList.remove('hidden');
        grid.innerHTML = '';

        const slots = ['09:00', '10:30', '12:00', '14:30', '16:00', '18:00'];

        slots.forEach(time => {
            const div = document.createElement('div');
            div.className = 'date-card'; // Reuse style
            div.textContent = time;

            div.addEventListener('click', () => {
                document.querySelectorAll('#availableTimes .date-card').forEach(c => c.classList.remove('selected'));
                div.classList.add('selected');
                this.selectedTime = time;
                // Scroll to bottom to show Next button
                div.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            });

            grid.appendChild(div);
        });
    }

    validateStep(step) {
        if (step === 1) {
            if (!this.selectedService) {
                this.showToast('Seleziona un trattamento per continuare.');
                return false;
            }
            if (!this.selectedDate) {
                this.showToast('Seleziona una data.');
                return false;
            }
            if (!this.selectedTime) {
                this.showToast('Seleziona un orario.');
                return false;
            }
        }
        if (step === 2) {
            const name = document.getElementById('userName').value;
            const phone = document.getElementById('userPhone').value;
            if (name.length < 3 || phone.length < 5) {
                this.showToast('Inserisci i tuoi dati correttamente.');
                return false;
            }
        }
        return true;
    }

    goToStep(step) {
        // Hide all steps
        document.querySelectorAll('[id^="step-"]').forEach(el => {
            el.classList.add('hidden');
            el.classList.remove('fade-in'); // Reset animation
        });

        // Show target
        const target = document.getElementById(`step-${step}`);
        target.classList.remove('hidden');
        target.classList.add('fade-in');

        // Update dots
        document.querySelectorAll('.step-indicator').forEach(dot => {
            const s = parseInt(dot.dataset.step);
            dot.classList.remove('active', 'completed');
            if (s === step) dot.classList.add('active');
            if (s < step) dot.classList.add('completed');
        });

        this.currentStep = step;

        if (step === 3) this.updateSummary();
    }

    updateSummary() {
        const select = document.getElementById('bookingService');
        const price = document.getElementById('bookingPrice').textContent;
        const dateObj = new Date(this.selectedDate);

        document.getElementById('summaryService').textContent = select.options[select.selectedIndex].text.split('—')[0];
        document.getElementById('summaryDate').textContent = `${dateObj.getDate()}/${dateObj.getMonth()+1} ore ${this.selectedTime}`;
        document.getElementById('summaryPrice').textContent = price;
    }

    finishBooking() {
        const name = document.getElementById('userName').value;
        // Mock success
        const btn = document.querySelector('#step-3 button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = "Confermato!";
        btn.classList.add('btn-primary');

        this.showToast(`Grazie ${name}, a breve riceverai la conferma.`);

        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }

    showToast(msg) {
        // Simple alert replacement or stick to toast system from utils
        if (window.EncantoUtils) {
            window.EncantoUtils.showToast({ message: msg, type: 'warning' });
        } else {
            alert(msg);
        }
    }

    preselectService(id) {
        const select = document.getElementById('bookingService');
        select.value = id;
        select.dispatchEvent(new Event('change'));
        document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    }
};
