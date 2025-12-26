document.addEventListener('DOMContentLoaded', function() {
    const getEl = (id) => document.getElementById(id);
    
    const elements = {
        quoteBtn: getEl('requestQuoteBtn'),
        modal: getEl('bookingModal'),
        form: getEl('bookingForm'),
        serviceSelect: getEl('clientService'),
        feeDisplay: getEl('feeDisplay'),
        feeInput: getEl('serviceFee'),
        toggleBtn: getEl('toggleProductsBtn'),
        productGrid: getEl('productGrid'),
        reqToggle: getEl('requestToggle'),
        dropdown: getEl('ctaDropdown')
    };

    // 1. Navbar Flashing
    if (elements.quoteBtn) elements.quoteBtn.classList.add('flash');

    // 2. Modal Logic
    const openModal = () => {
        elements.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        if (elements.quoteBtn) elements.quoteBtn.classList.remove('flash');
    };

    const closeModal = () => {
        elements.modal.style.display = 'none';
        document.body.style.overflow = '';
    };

    // 3. Global Click Events
    document.addEventListener('click', (e) => {
        if (['requestQuoteBtn', 'bookServiceBtn', 'emergencyBtn'].includes(e.target.id)) {
            e.preventDefault();
            openModal();
            if (e.target.id === 'emergencyBtn' && elements.serviceSelect) {
                elements.serviceSelect.value = 'Emergency Service'; // Matches the option value in your HTML
                updateFee('5,000');
            }
        }
        if (e.target === elements.modal || e.target.classList.contains('close-btn')) {
            closeModal();
        }
    });

    // 4. Dropdown Toggle
    if (elements.reqToggle && elements.dropdown) {
        elements.reqToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isVisible = elements.dropdown.style.display === 'block';
            elements.dropdown.style.display = isVisible ? 'none' : 'block';
        });
        document.addEventListener('click', () => {
            if (elements.dropdown) elements.dropdown.style.display = 'none';
        });
    }

    // 5. Fee Calculation Logic
    const updateFee = (val) => {
        if (elements.feeDisplay) elements.feeDisplay.textContent = '₦' + val;
        if (elements.feeInput) elements.feeInput.value = val.replace(',', '');
    };

    if (elements.serviceSelect) {
        elements.serviceSelect.addEventListener('change', function() {
            updateFee(this.value === 'Emergency Service' ? '5,000' : '0');
        });
    }

    // 6. Project Gallery Toggle
    if (elements.toggleBtn && elements.productGrid) {
        elements.toggleBtn.addEventListener('click', () => {
            const isHidden = elements.productGrid.style.display === 'none';
            elements.productGrid.style.display = isHidden ? 'grid' : 'none';
            elements.toggleBtn.textContent = isHidden ? 'Hide Projects' : 'View Our Projects';
        });
    }

    // 7. NEW: WhatsApp Form Submission
    if (elements.form) {
        elements.form.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the form from traditional refreshing/emailing

            // Collect values from the form inputs
            const name = this.querySelector('input[name="name"]').value;
            const phone = this.querySelector('input[name="phone"]').value;
            const service = elements.serviceSelect.value;
            const fee = elements.feeDisplay ? elements.feeDisplay.textContent : '₦0';
            const details = this.querySelector('textarea[name="details"]').value;

            // Your WhatsApp Number
            const whatsappNumber = "2348130627292";

            // Construct the message (using %0A for line breaks)
            const message = `*New Booking - Mezoki Plumbing*%0A%0A` +
                            `*Client Name:* ${name}%0A` +
                            `*Phone Number:* ${phone}%0A` +
                            `*Service:* ${service}%0A` +
                            `*Consultation Fee:* ${fee}%0A` +
                            `*Details:* ${details}`;

            // Open WhatsApp in a new tab
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
            window.open(whatsappURL, '_blank');

            // Optional: Close modal and reset form
            closeModal();
            this.reset();
            updateFee('0');
        });
    }
});