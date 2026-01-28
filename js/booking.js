// Booking System Class
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
        if (!select || !window.EncantoData || !window.EncantoData.services) return;

        select.innerHTML = '<option value="">Seleziona...</option>';

        // Group by type (simplified logic: all in one or strict mapping)
        // Since our data structure is flat, we'll just add them.
        // Ideally we add a 'category' field to data.js, but let's infer or just list them.

        // Let's create two optgroups based on ID or title content
        const liftingGroup = document.createElement('optgroup');
        liftingGroup.label = "Lifting e Trattamenti";

        const pmuGroup = document.createElement('optgroup');
        pmuGroup.label = "Trucco Permanente";

        window.EncantoData.services.forEach(service => {
            const option = document.createElement('option');
            option.value = service.id;
            // Parse price integer from string like "€60" -> "60"
            const price = service.price.replace(/[^0-9]/g, '');
            option.setAttribute('data-price', price);
            option.textContent = `${service.title} - ${service.price}`;

            if (service.title.includes('PMU') || service.title.includes('Eyeliner') || service.title.includes('Microblading') || service.title.includes('Labbra')) {
                pmuGroup.appendChild(option);
            } else {
                liftingGroup.appendChild(option);
            }
        });

        select.appendChild(liftingGroup);
        select.appendChild(pmuGroup);
    }

    bindEvents() {
        const serviceSelect = document.getElementById('bookingService');
        if (serviceSelect) {
            serviceSelect.addEventListener('change', (e) => this.handleServiceChange(e));
        }

        const nextButtons = document.querySelectorAll('[data-action="next-step"]');
        nextButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const step = parseInt(e.currentTarget.dataset.target);
                this.goToStep(step);
            });
        });

        // Input validation listeners for real-time button state
        const inputs = document.querySelectorAll('#userName, #userPhone');
        inputs.forEach(input => {
            input.addEventListener('input', () => this.validateStep(this.currentStep));
        });

        const prevButtons = document.querySelectorAll('[data-action="prev-step"]');
        prevButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                 const step = parseInt(e.currentTarget.dataset.target);
                 this.goToStep(step);
            });
        });

        const form = document.getElementById('bookingForm');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleServiceChange(e) {
        this.updatePrice();
        this.renderDates();
        this.selectedService = e.target.value;
    }

    updatePrice() {
        const select = document.getElementById('bookingService');
        const priceDisplay = document.getElementById('bookingPrice');
        if (select && priceDisplay) {
            const option = select.options[select.selectedIndex];
            const price = option.getAttribute('data-price');
            if (price) priceDisplay.textContent = '€' + price;
        }
    }

    renderDates() {
        const container = document.getElementById('availableDates');
        if (!container) return;

        // Generate next 5 days
        const dates = [];
        const today = new Date();
        for (let i = 1; i <= 5; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);
            dates.push(d);
        }

        const daysMap = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];
        const monthsMap = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

        let html = '';
        dates.forEach((date, index) => {
            const dayName = daysMap[date.getDay()];
            const dayNum = date.getDate();
            const monthNum = monthsMap[date.getMonth()];

            // Skip sundays
            if (date.getDay() === 0) return;

            html += `
                <div class="booking-date-option" data-date="${date.toISOString()}" role="button" tabindex="0">
                    <span class="date-day">${dayName}</span>
                    <span class="date-num">${dayNum}/${monthNum}</span>
                </div>
            `;
        });

        container.innerHTML = html;
        this.bindDateSelection();
    }

    bindDateSelection() {
        const options = document.querySelectorAll('.booking-date-option');
        options.forEach(opt => {
            opt.addEventListener('click', () => {
                // Remove active from all
                options.forEach(o => o.classList.remove('active'));
                // Add active to clicked
                opt.classList.add('active');

                this.selectedDate = opt.getAttribute('data-date');
                this.selectedTime = null; // Reset time when date changes

                // Show time slots
                this.renderTimeSlots();
                this.validateStep(1);
            });
        });
    }

    renderTimeSlots() {
        // Find or create time slot container
        let timeContainer = document.getElementById('availableTimes');
        if (!timeContainer) {
            const dateContainer = document.getElementById('availableDates');
            timeContainer = document.createElement('div');
            timeContainer.id = 'availableTimes';
            timeContainer.className = 'time-slots-container';
            dateContainer.parentNode.insertBefore(timeContainer, dateContainer.nextSibling);
        }

        // Mock times
        const times = ['09:30', '11:00', '14:30', '16:00', '18:00'];

        let html = '<label class="form-label" style="margin-top: 1rem;">Orario Disponibile</label><div class="time-options-grid">';
        times.forEach(time => {
            html += `<div class="booking-time-option" data-time="${time}">${time}</div>`;
        });
        html += '</div>';

        timeContainer.innerHTML = html;

        // Bind time selection
        const timeOptions = timeContainer.querySelectorAll('.booking-time-option');
        timeOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                timeOptions.forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
                this.selectedTime = opt.getAttribute('data-time');
                this.validateStep(1);
            });
        });
    }

    validateStep(step) {
        let isValid = false;
        if (step === 1) {
            isValid = this.selectedService && this.selectedDate && this.selectedTime;
        } else if (step === 2) {
            const name = document.getElementById('userName').value;
            const phone = document.getElementById('userPhone').value;
            isValid = name.length > 2 && phone.length > 6;
        }

        const nextBtn = document.querySelector(`.booking-step[id="step-${step}"] [data-action="next-step"]`);
        if (nextBtn) {
            if (isValid) {
                nextBtn.classList.remove('disabled');
                nextBtn.style.opacity = '1';
                nextBtn.style.pointerEvents = 'auto';
            } else {
                // Keep clickable for toast feedback
                // nextBtn.style.opacity = '0.7';
            }
        }
        return isValid;
    }

    goToStep(step) {
        // Validation
        if (step === 2) {
            const service = document.getElementById('bookingService').value;
            if (!service) {
                window.EncantoUtils.showToast({ type: 'warning', message: 'Seleziona un servizio per continuare.' });
                return;
            }
            if (!this.selectedDate || !this.selectedTime) {
                window.EncantoUtils.showToast({ type: 'warning', message: 'Seleziona una data e un orario.' });
                return;
            }
        }

        if (step === 3) {
            const name = document.getElementById('userName').value;
            const phone = document.getElementById('userPhone').value;
            if (!name || !phone) {
                window.EncantoUtils.showToast({ type: 'warning', message: 'Inserisci Nome e Telefono.' });
                return;
            }
            this.updateSummary();
        }

        // Hide all steps
        document.querySelectorAll('.booking-step').forEach(el => el.classList.add('hidden'));

        // Show target step
        const target = document.getElementById(`step-${step}`);
        if(target) target.classList.remove('hidden');

        // Update dots
        document.querySelectorAll('.step-dot').forEach(el => {
            const s = parseInt(el.getAttribute('data-step'));
            if (s <= step) el.classList.add('active');
            else el.classList.remove('active');
        });

        this.currentStep = step;
    }

    updateSummary() {
        const serviceSelect = document.getElementById('bookingService');
        const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
        const price = document.getElementById('bookingPrice').textContent;
        const dateObj = new Date(this.selectedDate);

        document.getElementById('summaryService').textContent = serviceName.split('-')[0];
        document.getElementById('summaryDate').textContent = `${dateObj.toLocaleDateString()} alle ${this.selectedTime}`;
        document.getElementById('summaryName').textContent = document.getElementById('userName').value;
        document.getElementById('summaryPrice').textContent = price;
    }

    handleSubmit(e) {
        e.preventDefault();
        window.EncantoUtils.showToast({
            type: 'success',
            title: 'Richiesta Inviata',
            message: 'Ti confermerò l\'appuntamento su WhatsApp entro 24h.'
        });

        // Simulate redirect or reset
        setTimeout(() => window.location.reload(), 3000);
    }

    // External API to select service from other sections
    preselectService(serviceId) {
        const select = document.getElementById('bookingService');
        if (select) {
            select.value = serviceId;
            // Trigger change event manually
            const event = new Event('change');
            select.dispatchEvent(event);

            this.updatePrice();
            this.renderDates();

            const bookingSection = document.querySelector('#booking');
            if (bookingSection) bookingSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
};
