// ============================================================
// MEZOKI PLUMBING GROUP — script.js
// Ultra-fast, responsive, 3D interactive, modular JavaScript
// ============================================================

'use strict';

const WHATSAPP_NUMBER = '2348130627292';

// ── PRODUCT CATALOG (All 51 Fixtures with WebP & Available Status) ──
const PRODUCTS = [
  // ── 🔥 NEW ARRIVALS (Newly added luxury products) ──────────
  { id: 1, file: 'Smart Digital Waterfall Kitchen Sink.webp', name: 'Smart Digital Waterfall Kitchen Sink', cat: 'sinks', isNew: true },
  { id: 2, file: 'Smart Matte Black Workstation Sink.webp', name: 'Smart Matte Black Workstation Sink', cat: 'sinks', isNew: true },
  { id: 3, file: 'Luxury Smart Jacuzzi Massage Bathtub.webp', name: 'Luxury Smart Jacuzzi Massage Bathtub', cat: 'baths', isNew: true },
  { id: 4, file: 'Concealed Conduit Rain Shower System.webp', name: 'Concealed Conduit Rain Shower System', cat: 'showers', isNew: true },
  { id: 5, file: 'Modern Bathroom Vanity Cabinet.webp', name: 'Modern Bathroom Vanity Cabinet with LED Mirror', cat: 'cabinets', isNew: true },
  { id: 6, file: 'Luxury Smart Wall-Hung Concealed WC.webp', name: 'Luxury Smart Wall-Hung Concealed WC Toilet', cat: 'toilets', isNew: true },
  { id: 7, file: 'Luxury Freestanding Bathtub with Mixer.webp', name: 'Luxury Freestanding Bathtub with Mixer Tap', cat: 'baths', isNew: true },
  { id: 8, file: 'Modern Oval Freestanding Bathtub.webp', name: 'Modern Oval Freestanding Soaking Bathtub', cat: 'baths', isNew: true },
  { id: 9, file: 'Classic Royal Clawfoot Bathtub.webp', name: 'Classic Royal Clawfoot Bathtub with Gold Legs', cat: 'baths', isNew: true },
  { id: 10, file: 'Modern Ceramic S-Trap WC Toilet.webp', name: 'Modern Ceramic S-Trap One-Piece WC Toilet', cat: 'toilets', isNew: true },

  // ── LUXURY & PREMIUM FIXTURES ─────────────────────────────
  { id: 11, file: 'Luxury Shower Room Glass Enclosure.webp', name: 'Luxury Shower Room Glass Enclosure', cat: 'showers', isNew: false },
  { id: 12, file: 'Cabinet Basin with LED Mirror Light Deluxe.webp', name: 'Cabinet Basin with LED Mirror Light Deluxe', cat: 'cabinets', isNew: false },
  { id: 13, file: 'Cabinet Basin with LED Mirror Light.webp', name: 'Cabinet Basin with LED Mirror Light', cat: 'cabinets', isNew: false },
  { id: 14, file: 'Basin and Mirror Cabinet Vanity.webp', name: 'Basin and Mirror Cabinet Vanity', cat: 'cabinets', isNew: false },
  { id: 15, file: 'Bathroom Glass and Washing Basin Set.webp', name: 'Bathroom Glass and Washing Basin Set', cat: 'cabinets', isNew: false },
  { id: 16, file: 'Bathroom Premium Mixer Tap.webp', name: 'Bathroom Premium Mixer Tap', cat: 'taps', isNew: false },
  { id: 17, file: 'Rain Shower with Screen and Mixer.webp', name: 'Rain Shower with Screen and Mixer', cat: 'showers', isNew: false },
  { id: 18, file: 'Wall Concealed Basin Tap.webp', name: 'Wall Concealed Basin Tap', cat: 'taps', isNew: false },
  { id: 19, file: 'Modern Water Closet Toilet.webp', name: 'Modern Water Closet Toilet', cat: 'toilets', isNew: false },
  { id: 20, file: 'Modern Black Kitchen Sink.webp', name: 'Modern Black Kitchen Sink', cat: 'sinks', isNew: false },
  { id: 21, file: 'Black Stainless Steel Shower Mixer.webp', name: 'Black Stainless Steel Shower Mixer', cat: 'showers', isNew: false },
  { id: 22, file: 'Luxury Gold Basin Tap.webp', name: 'Luxury Gold Basin Tap', cat: 'taps', isNew: false },
  { id: 23, file: 'Luxury Gold Basin Tap Elegance.webp', name: 'Luxury Gold Basin Tap Elegance', cat: 'taps', isNew: false },
  { id: 24, file: 'Polished Silver Basin Tap.webp', name: 'Polished Silver Basin Tap', cat: 'taps', isNew: false },
  { id: 25, file: 'Ceramic Countertop Washbasin.webp', name: 'Ceramic Countertop Washbasin', cat: 'basins', isNew: false },
  { id: 26, file: 'Basin Tap Classic.webp', name: 'Basin Tap Classic', cat: 'taps', isNew: false },
  { id: 27, file: 'Available Basin Mixer Tap 1.webp', name: 'Available Basin Mixer Tap 1', cat: 'taps', isNew: false },
  { id: 28, file: 'Available Basin Mixer Tap 2.webp', name: 'Available Basin Mixer Tap 2', cat: 'taps', isNew: false },
  { id: 29, file: 'Available Basin Mixer Tap 3.webp', name: 'Available Basin Mixer Tap 3', cat: 'taps', isNew: false },
  { id: 30, file: 'Available Basin Mixer Tap 4.webp', name: 'Available Basin Mixer Tap 4', cat: 'taps', isNew: false },
  { id: 31, file: 'Available Basin Mixer Tap 5.webp', name: 'Available Basin Mixer Tap 5', cat: 'taps', isNew: false },
  { id: 32, file: 'Modern Artistic Tap and Basin.webp', name: 'Modern Artistic Tap and Basin Set', cat: 'basins', isNew: false },
  { id: 33, file: 'Modern Tap Black.webp', name: 'Modern Tap Matte Black', cat: 'taps', isNew: false },
  { id: 34, file: 'Modern Silver Tap Black 2.webp', name: 'Modern Silver Tap Black 2', cat: 'taps', isNew: false },
  { id: 35, file: 'Modern Washing Hand Basin Artistic Black.webp', name: 'Modern Washing Hand Basin Artistic Black', cat: 'basins', isNew: false },
  { id: 36, file: 'Modern WC and Washing Basin.webp', name: 'Modern WC and Washing Basin Set', cat: 'toilets', isNew: false },
  { id: 37, file: 'White Modern Ceramic Basin.webp', name: 'White Modern Ceramic Basin', cat: 'basins', isNew: false },
  { id: 38, file: 'Washing Hand Basin 1.webp', name: 'Washing Hand Basin Model 1', cat: 'basins', isNew: false },
  { id: 39, file: 'Washing Hand Basin 2.webp', name: 'Washing Hand Basin Model 2', cat: 'basins', isNew: false },
  { id: 40, file: 'Modern Water Closet Model 1.webp', name: 'Modern Water Closet Model 1', cat: 'toilets', isNew: false },
  { id: 41, file: 'Modern Water Closet Model 2.webp', name: 'Modern Water Closet Model 2', cat: 'toilets', isNew: false },
  { id: 42, file: 'Modern Water Closet Model 3.webp', name: 'Modern Water Closet Model 3', cat: 'toilets', isNew: false },
  { id: 43, file: 'Modern Water Closet Model 4.webp', name: 'Modern Water Closet Model 4', cat: 'toilets', isNew: false },
  { id: 44, file: 'Modern Water Closet Model 5.webp', name: 'Modern Water Closet Model 5', cat: 'toilets', isNew: false },
  { id: 45, file: 'Silver Tap Chrome.webp', name: 'Silver Tap Chrome', cat: 'taps', isNew: false },
  { id: 46, file: 'Silver Tap Dual Set.webp', name: 'Silver Tap Dual Set', cat: 'taps', isNew: false },
  { id: 47, file: 'Silver Tap Model 2.webp', name: 'Silver Tap Model 2', cat: 'taps', isNew: false },
  { id: 48, file: 'T-UK Premium Tap.webp', name: 'T-UK Premium Tap', cat: 'taps', isNew: false },
  { id: 49, file: 'Plastic Tap 1.webp', name: 'Plastic Tap Model 1', cat: 'taps', isNew: false },
  { id: 50, file: 'Plastic Tap Standard.webp', name: 'Plastic Tap Standard', cat: 'taps', isNew: false },
  { id: 51, file: 'Washing Machine Angle Tap.webp', name: 'Washing Machine Angle Tap', cat: 'taps', isNew: false }
];

const PROJECT_IMAGES = [
  'second store 2.webp',
  'second store.webp',
  'store at onijemo.webp'
];

// ── State ────────────────────────────────────────────────────
let translations = {};
let currentLang  = localStorage.getItem('mezoki_lang') || 'en';
let cart         = JSON.parse(localStorage.getItem('mezoki_cart') || '[]');

// ── Helpers ──────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

/** Show a toast notification */
function showToast(message, type = 'success', duration = 2800) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'none';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ── Product Card HTML Generator (No Prices, Marked Available) ──
function createProductCardHTML(p) {
  const imgSrc = `photos/Products/${p.file}`;
  return `
    <div class="product-item" data-id="${p.id}" data-name="${p.name}" data-category="${p.cat}">
      <div class="image-container">
        ${p.isNew ? '<span class="new-badge"><i class="fas fa-sparkles"></i> NEW ARRIVAL</span>' : ''}
        <img src="${imgSrc}" alt="${p.name}" loading="lazy" decoding="async">
        <button type="button" class="add-overlay-btn whatsapp-order-btn" title="Order via WhatsApp" aria-label="Order ${p.name} via WhatsApp" data-name="${p.name}">
          <i class="fab fa-whatsapp" aria-hidden="true"></i>
        </button>
        <button type="button" class="add-overlay-btn add-to-cart-plus" title="Add to Cart" aria-label="Add ${p.name} to cart" data-id="${p.id}" data-name="${p.name}">
          <i class="fas fa-cart-plus" aria-hidden="true"></i>
        </button>
      </div>
      <div class="product-info-wrap">
        <h4>${p.name}</h4>
        <div class="product-price status-available">
          <span class="status-dot"></span> Available
        </div>
      </div>
      <div class="product-actions">
        <button type="button" class="add-to-cart-btn-small" data-id="${p.id}" data-name="${p.name}">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
        <button type="button" class="whatsapp-order-btn action-order-btn" data-name="${p.name}">
          <i class="fab fa-whatsapp"></i> Order via WhatsApp
        </button>
      </div>
    </div>
  `;
}

// ── Render Dynamic Product Cards ─────────────────────────────
function renderProductCards(containerId, filterCat = 'all', searchQuery = '', limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  let list = PRODUCTS;

  if (filterCat === 'new') {
    list = list.filter(p => p.isNew);
  } else if (filterCat !== 'all') {
    list = list.filter(p => p.cat === filterCat);
  }

  if (searchQuery && searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q));
  }

  if (limit) {
    list = list.slice(0, limit);
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; color: var(--blue-200);">
        <i class="fas fa-search" style="font-size: 2.2rem; margin-bottom: 14px; opacity: 0.6;"></i>
        <h4 style="font-size: 1.2rem; color: #fff; margin-bottom: 8px;">No matching products found</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">Try adjusting your search query or category filter.</p>
      </div>
    `;
    return;
  }

  let html = '';
  list.forEach(p => {
    html += createProductCardHTML(p);
  });
  container.innerHTML = html;
}

// ── Render New Arrivals (Homepage) ───────────────────────────
function renderNewArrivals(containerId, maxItems = 6) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  const newProducts = PRODUCTS.filter(p => p.isNew).slice(0, maxItems);
  let html = '';
  newProducts.forEach(p => {
    html += createProductCardHTML(p);
  });
  container.innerHTML = html;
}

// ── Initialize Category Filters & Live Search ────────────────
function initCatalogFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('productSearchInput');
  const container = document.getElementById('dynamicProductCards');
  if (!container) return;

  let currentCategory = 'all';
  let currentSearch = '';

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      renderProductCards('dynamicProductCards', currentCategory, currentSearch);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      currentSearch = e.target.value;
      renderProductCards('dynamicProductCards', currentCategory, currentSearch);
    });
  }
}

// ── Project Gallery ──────────────────────────────────────────
function renderProjectGallery(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  PROJECT_IMAGES.forEach(img => {
    const name = img.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const imgSrc = `photos/Projects/${img}`;
    const card = document.createElement('div');
    card.className = 'product-item';
    card.innerHTML = `
      <div class="image-container">
        <img src="${imgSrc}" alt="${name}" loading="lazy" decoding="async">
      </div>
      <div class="product-info-wrap">
        <h4>${name}</h4>
      </div>
    `;
    container.appendChild(card);
  });
}

// ── Language System ──────────────────────────────────────────
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mezoki_lang', lang);

  if (!translations[lang]) return;

  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang][key];
    if (!val) return;
    el.textContent = val;
    if (el.hasAttribute('title')) el.setAttribute('title', val);
  });

  $$('#languageSwitch').forEach(sel => { sel.value = lang; });
  updateCartUI();
}

function loadTranslations() {
  fetch('languages.json')
    .then(res => {
      if (!res.ok) throw new Error('languages.json not found');
      return res.json();
    })
    .then(data => {
      translations = data;
      applyLanguage(currentLang);
    })
    .catch(err => {
      console.warn('Translations not loaded:', err.message);
    });
}

// ── Navbar Scroll Effect ─────────────────────────────────────
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// ── Booking Modal ────────────────────────────────────────────
function initBookingModal() {
  const modal         = $('bookingModal');
  const form          = $('bookingForm');
  const serviceSelect = $('clientService');
  const feeDisplay    = $('feeDisplay');
  const feeInput      = $('serviceFee');

  if (!modal) return;

  const SERVICE_FEES = {
    'Emergency Service': '₦5,000',
  };

  function setFee(val) {
    if (feeDisplay) feeDisplay.textContent = val || '₦0';
    if (feeInput)   feeInput.value = val || '0';
  }

  function openModal(presetService) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    if (presetService && serviceSelect) {
      serviceSelect.value = presetService;
      setFee(SERVICE_FEES[presetService] || '₦0');
    }

    const quoteBtn = $('requestQuoteBtn');
    if (quoteBtn) quoteBtn.classList.remove('flash');
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (serviceSelect) {
    serviceSelect.addEventListener('change', function () {
      setFee(SERVICE_FEES[this.value] || '₦0');
    });
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name    = this.name.value.trim();
      const phone   = this.phone.value.trim();
      const service = this.service.value;
      const fee     = feeDisplay ? feeDisplay.textContent : '₦0';
      const details = this.details.value.trim();

      if (!name || !phone) {
        showToast('Please fill in all required fields.', 'error');
        return;
      }

      const msg = encodeURIComponent(
        `*New Service Booking — Mezoki Plumbing*\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Service: ${service}\n` +
        `Fee: ${fee}\n` +
        `Details: ${details || 'N/A'}`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
      closeModal();
      form.reset();
      setFee('₦0');
      showToast('Booking sent via WhatsApp! ✓');
    });
  }

  document.addEventListener('click', function (e) {
    const tgt = e.target;
    if (!tgt) return;

    const id = tgt.id || (tgt.closest('[id]') ? tgt.closest('[id]').id : '');

    if (['requestQuoteBtn', 'bookServiceBtn'].includes(id)) {
      e.preventDefault();
      openModal();
      return;
    }

    if (id === 'emergencyBtn' || id === 'emergencyServiceBtn' || tgt.closest('#emergencyBtn') || tgt.closest('#emergencyServiceBtn')) {
      e.preventDefault();
      openModal('Emergency Service');
      return;
    }

    if (tgt === modal || tgt.classList.contains('close-btn')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
  });
}

// ── Emergency Dropdown ───────────────────────────────────────
function initEmergencyDropdown() {
  const toggle   = $('requestToggle');
  const dropdown = $('ctaDropdown');
  if (!toggle || !dropdown) return;

  toggle.addEventListener('click', e => {
    e.stopPropagation();
    const open = dropdown.style.display === 'block';
    dropdown.style.display = open ? 'none' : 'block';
  });

  document.addEventListener('click', e => {
    if (!toggle.contains(e.target)) dropdown.style.display = 'none';
  });
}

// ── Project Gallery Toggle ───────────────────────────────────
function initGalleryToggle() {
  const btn  = $('toggleProductsBtn');
  const grid = $('productGrid');
  if (!btn || !grid) return;

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const hidden = grid.style.display === 'none' || grid.style.display === '';
    grid.style.display = hidden ? 'grid' : 'none';

    const lang = translations[currentLang] || {};
    this.textContent = hidden
      ? (lang.hideProjects || 'Hide Projects')
      : (lang.viewProjects  || 'View Our Projects');
  });
}

// ── Quote Button Flash ───────────────────────────────────────
function initQuoteFlash() {
  const btn = $('requestQuoteBtn');
  if (btn) btn.classList.add('flash');
  const emer = $('emergencyBtn');
  if (emer) emer.classList.add('flash');
}

// ── Cart & Inquiry System (No Price Math, Clean Inquiry Flow) ──
function saveCart() {
  localStorage.setItem('mezoki_cart', JSON.stringify(cart));
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function addToCart(id, name, qty = 1) {
  const existing = cart.find(i => String(i.id) === String(id));
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: String(id), name, qty: parseInt(qty) || 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`Added to cart: ${name}`);
}

function changeQty(id, delta) {
  const item = cart.find(i => String(i.id) === String(id));
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(i => String(i.id) !== String(id));
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  showToast('Cart cleared');
}

function updateCartUI() {
  const countEl        = document.querySelector('.cart-count');
  const itemsContainer = document.querySelector('.cart-items');
  const totalEl        = document.querySelector('.total-price');
  const checkoutBtn    = $('checkoutBtn');

  const count = cartCount();

  if (countEl) {
    countEl.textContent = count;
    countEl.style.display = count === 0 ? 'none' : 'flex';
  }

  if (itemsContainer) {
    itemsContainer.innerHTML = '';

    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div style="text-align: center; padding: 36px 16px; color: var(--text-secondary);">
          <i class="fas fa-shopping-cart" style="font-size: 2.2rem; opacity: 0.4; margin-bottom: 12px;"></i>
          <p style="font-size: 0.95rem;">Your cart is empty.</p>
        </div>
      `;
    } else {
      cart.forEach(item => {
        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-status" style="color: #34d399; font-size: 0.8rem; font-weight: 600; display: flex; align-items: center; gap: 5px; margin-top: 3px;">
              <i class="fas fa-check-circle"></i> Available
            </div>
          </div>
          <div class="cart-item-qty">
            <button type="button" class="qty-btn decrease" data-id="${item.id}" aria-label="Decrease">−</button>
            <span class="qty-btn-display">${item.qty}</span>
            <button type="button" class="qty-btn increase" data-id="${item.id}" aria-label="Increase">+</button>
          </div>
          <button type="button" class="remove-item" data-id="${item.id}" aria-label="Remove">&times;</button>
        `;
        itemsContainer.appendChild(row);
      });
    }
  }

  if (totalEl) {
    const parent = totalEl.closest('.cart-total');
    if (parent) {
      parent.innerHTML = `<span>Total Items:</span> <span style="color: var(--blue-200); font-weight: 700;">${count} item${count === 1 ? '' : 's'}</span>`;
    }
  }

  if (checkoutBtn) {
    checkoutBtn.disabled = cart.length === 0;
    checkoutBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Order / Inquire via WhatsApp';
  }
}

function initCart() {
  const cartFloatBtn = $('cartFloatBtn');
  const cartModal    = $('cartModal');
  const checkoutBtn  = $('checkoutBtn');

  document.addEventListener('click', function (e) {
    if (cartFloatBtn && (e.target === cartFloatBtn || cartFloatBtn.contains(e.target))) {
      if (cartModal) cartModal.style.display = 'flex';
      return;
    }

    if (cartModal && (e.target === cartModal || e.target.classList.contains('close-cart'))) {
      cartModal.style.display = 'none';
      return;
    }

    // Add to cart buttons
    const addBtn =
      e.target.classList.contains('add-to-cart-btn-small') ? e.target :
      e.target.closest('.add-to-cart-btn-small') ||
      (e.target.classList.contains('add-overlay-btn') && !e.target.classList.contains('whatsapp-order-btn') ? e.target : null) ||
      (e.target.closest('.add-overlay-btn') && !e.target.closest('.add-overlay-btn').classList.contains('whatsapp-order-btn') ? e.target.closest('.add-overlay-btn') : null);

    if (addBtn) {
      const itemEl = addBtn.closest('[data-id]');
      if (!itemEl) return;
      const id = itemEl.getAttribute('data-id') || addBtn.getAttribute('data-id');
      let name = itemEl.getAttribute('data-name') || addBtn.getAttribute('data-name');
      if (!name) {
        const h4 = itemEl.querySelector('h4');
        name = h4 ? h4.textContent.trim() : 'Plumbing Fixture';
      }
      addToCart(id, name, 1);
      return;
    }

    // WhatsApp Order Buttons on product cards
    const waBtn =
      e.target.classList.contains('whatsapp-order-btn') ? e.target :
      e.target.closest('.whatsapp-order-btn');

    if (waBtn) {
      e.preventDefault();
      const name = waBtn.getAttribute('data-name') ||
                   (waBtn.closest('[data-name]') ? waBtn.closest('[data-name]').getAttribute('data-name') : 'Plumbing Product');
      const text = encodeURIComponent(
        `*Product Order / Inquiry — Mezoki Plumbing*\n\n` +
        `Hello Mezoki Plumbing, I would like to order / inquire about:\n` +
        `*${name}*\n` +
        `Status: Available\n\n` +
        `Please confirm availability, price, and delivery details.`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
      return;
    }

    // Quantity buttons
    if (e.target.classList.contains('increase')) {
      changeQty(e.target.getAttribute('data-id'), 1);
      return;
    }
    if (e.target.classList.contains('decrease')) {
      changeQty(e.target.getAttribute('data-id'), -1);
      return;
    }

    // Remove item
    if (e.target.classList.contains('remove-item')) {
      removeFromCart(e.target.getAttribute('data-id'));
      return;
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && cartModal && cartModal.style.display === 'flex') {
      cartModal.style.display = 'none';
    }
  });

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) return;

      let message = '*New Order / Inquiry — Mezoki Plumbing*\n\n';
      message += 'I would like to order / inquire about the following items:\n\n';
      cart.forEach((item, index) => {
        message += `${index + 1}. *${item.name}* (Qty: ${item.qty}) — [Available]\n`;
      });
      message += `\nTotal Items: ${cartCount()}\n`;
      message += `Please confirm current pricing and delivery to my location.`;

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
      cart = [];
      saveCart();
      updateCartUI();
      if (cartModal) cartModal.style.display = 'none';
      showToast('Order inquiry sent via WhatsApp! ✓');
    });
  }

  const clearCartBtn = $('clearCartBtn');
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', clearCart);
  }

  $$('#languageSwitch').forEach(sel => {
    sel.value = currentLang;
    sel.addEventListener('change', function () {
      applyLanguage(this.value);
    });
  });

  updateCartUI();
}

// ── Contact Links ───────────────────────────────────────────
function initContactLinks() {
  const emailLink = document.getElementById('emailLink');
  if (emailLink) {
    emailLink.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = 'mailto:mosesowodeyi@gmail.com';
    });
  }
  const addressLink = document.getElementById('addressLink');
  if (addressLink) {
    addressLink.addEventListener('click', function (e) {
      e.preventDefault();
      window.open('https://www.google.com/maps/search/?api=1&query=No.+18A+Onijemo+street,+ogba+Lagos+Nigeria', '_blank');
    });
  }
}

// ── Mobile Navigation Drawer ────────────────────────────────
function initMobileNav() {
  const toggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  if (!toggle || !navMenu) return;

  toggle.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = navMenu.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  navMenu.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', e => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !toggle.contains(e.target)) {
      navMenu.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// ── 3D Tilt Effect on Desktop ────────────────────────────────
function init3DEffects() {
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.addEventListener('mousemove', e => {
      const card = e.target.closest('.product-item, .service-box, .video-card');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const tiltX = -(y / (rect.height / 2)) * 6.5;
      const tiltY = (x / (rect.width / 2)) * 6.5;
      card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-8px)`;
    });

    document.addEventListener('mouseout', e => {
      const card = e.target.closest('.product-item, .service-box, .video-card');
      if (card && (!e.relatedTarget || !card.contains(e.relatedTarget))) {
        card.style.transform = '';
      }
    });
  }
}

// ── Water Effect Upon Page Load ──────────────────────────────
function initWaterLoader() {
  const overlay = document.createElement('div');
  overlay.className = 'water-loader-overlay';
  overlay.innerHTML = `
    <div class="water-loader-stage">
      <div class="water-drop"></div>
      <div class="water-ripple r1"></div>
      <div class="water-ripple r2"></div>
      <div class="water-ripple r3"></div>
    </div>
    <div class="water-loader-brand">
      <div class="water-loader-title">Mezoki Plumbing</div>
      <div class="water-loader-tag">Pure Flow • Quality & Reliability</div>
    </div>
  `;
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.classList.add('fade-out');
    setTimeout(() => overlay.remove(), 550);
  }, 1350);
}

// ── Ambient Background Water Bubbles ─────────────────────────
function initWaterBubbles() {
  const container = document.createElement('div');
  container.className = 'water-bubbles-bg';
  const bubbleCount = window.innerWidth < 640 ? 10 : 18;

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'water-bubble';
    const size = Math.random() * 18 + 8;
    const left = Math.random() * 100;
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * 8;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${delay}s`;

    container.appendChild(bubble);
  }
  document.body.prepend(container);
}

// ── Interactive Hydro-Ripple on Clicks ───────────────────────
function initWaterClickRipple() {
  document.addEventListener('click', e => {
    const target = e.target.closest('.cta-btn, .product-item, .service-box, .logo, .whatsapp-float, .cart-float-btn, .filter-btn');
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'water-click-ripple';

    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
}

// ── Bootstrap ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initWaterLoader();
  initWaterBubbles();
  initWaterClickRipple();
  initNavbar();
  initMobileNav();
  init3DEffects();
  initQuoteFlash();
  initEmergencyDropdown();
  initBookingModal();
  initGalleryToggle();
  initCart();
  initContactLinks();
  loadTranslations();

  // Dynamic Product Catalog Render
  renderNewArrivals('dynamicNewArrivalsHome', 6);
  renderProductCards('dynamicProductCardsHome', 'all', '', 8);
  renderProductCards('dynamicProductCards', 'all', '');
  initCatalogFilters();
  renderProjectGallery('dynamicProjectGallery');
});
