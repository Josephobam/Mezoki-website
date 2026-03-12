// WhatsApp number for order/inquiry
const WHATSAPP_NUMBER = '2348130627292';

// List of product images and project images (should match actual files in folders)
const PRODUCT_IMAGES = [
  "Basin tap 2 (18k).webp",
  "Basing and mirror (170k).jpeg",
  "Basing Tap (8k).jpeg",
  "basing tap gold  (45k).jpg",
  "Basing Tap gold (45k).jpeg",
  "bathroom premium tap 1 (85k).jpg",
  "batthroom glass & washing basing (145k).jpeg",
  "Black- Stainless-Steel-Shower-Mixer (55k).webp",
  "Cabinet basing with mirror light (240k).jpeg",
  "Cabinet basing with mirror light (245k).jpeg",
  "Grail shower with screen & Shower Mixer (75k).webp",
  "Kitchen sink black (65k).jpeg",
  "shower room (350k).jpeg",
  "Silver Tap (28k).jpeg",
  "silver tap.jpeg",
  "silver taps.jpg",
  "T-UK_tap.jpg",
  "Wall conceal  tap 1 (75k).jpeg",
  "Washbasin (25k).webp",
  "washing_hand_base_1.jpeg",
  "wasing machine.jpeg",
  "Water closet (70k).jpeg",
  "wc 1.jpg",
  "wc 2.jpg",
  "wc 3.jpeg",
  "wc 4.jpeg",
  "wc 5.jpeg"
];

const PROJECT_IMAGES = [
  "second store 2.jpeg",
  "second store.jpeg",
  "store at onijemo.jpeg"
];

// Helper to parse product name and price from filename
function parseProductInfo(filename) {
  // Remove extension
  let name = filename.replace(/\.[^.]+$/, "");
  // Extract price in brackets (e.g. (18k) or (8500))
  let priceMatch = name.match(/\(([^)]+)\)/);
  let price = null;
  if (priceMatch) {
    let priceStr = priceMatch[1].replace(/k/i, "000").replace(/[^\d]/g, "");
    price = parseInt(priceStr, 10);
    name = name.replace(priceMatch[0], "").trim();
  }
  // Clean up name (replace underscores/dashes with spaces, capitalize)
  name = name.replace(/[_-]+/g, " ").replace(/\s+/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  return { name, price };
}

// Generate product cards for homepage and products page
function renderProductCards(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  PRODUCT_IMAGES.forEach((img, idx) => {
    const { name, price } = parseProductInfo(img);
    const imgSrc = `photos/Products/${img}`;
    let card = document.createElement('div');
    card.className = 'product-item';
    card.setAttribute('data-id', idx+1);
    card.setAttribute('data-name', name);
    if (price) card.setAttribute('data-price', price);

    card.innerHTML = `
      <div class="image-container">
        <img src="${imgSrc}" alt="${name}" loading="lazy">
        <button class="add-overlay-btn" title="Order via WhatsApp" aria-label="Order ${name}">
          <i class="fab fa-whatsapp" aria-hidden="true"></i>
        </button>
      </div>
      <h4>${name}</h4>
      ${price ? `<div class="product-price">Price: ₦${price.toLocaleString('en-NG')}</div>` : ''}
      <div class="product-actions">
        <button class="add-to-cart-btn-small whatsapp-order-btn" data-name="${name}" data-price="${price||''}">
          ${price ? 'Buy / Order' : 'Available'}
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  // WhatsApp order button handler
  container.querySelectorAll('.whatsapp-order-btn').forEach(btn => {
    btn.onclick = function() {
      const pname = btn.getAttribute('data-name');
      const pprice = btn.getAttribute('data-price');
      let msg = `Hello, I'm interested in: ${pname}`;
      if (pprice) msg += `\nPrice: ₦${Number(pprice).toLocaleString('en-NG')}`;
      else msg += `\nIs this product available? Please provide the price.`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    };
  });
}

// Generate project gallery cards
function renderProjectGallery(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  PROJECT_IMAGES.forEach((img, idx) => {
    const name = img.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const imgSrc = `photos/Projects/${img}`;
    let card = document.createElement('div');
    card.className = 'product-item';
    card.innerHTML = `
      <div class="image-container">
        <img src="${imgSrc}" alt="${name}" loading="lazy">
      </div>
      <h4>${name}</h4>
    `;
    container.appendChild(card);
  });
}

// On DOMContentLoaded, render dynamic product and project cards
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('dynamicProductCards')) {
    renderProductCards('dynamicProductCards');
  }
  if (document.getElementById('dynamicProjectGallery')) {
    renderProjectGallery('dynamicProjectGallery');
  }
});
/* ============================================================
   MEZOKI PLUMBING GROUP — script.js
   Clean, modular, production-grade JavaScript
   ============================================================ */

'use strict';

/* ── State ──────────────────────────────────────────────────── */
let translations  = {};
let currentLang   = localStorage.getItem('mezoki_lang') || 'en';
let cart          = JSON.parse(localStorage.getItem('mezoki_cart') || '[]');

/* ── Helpers ────────────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

/** Format a number as ₦1,234 */
function formatNaira(amount) {
  return '₦' + Number(amount).toLocaleString('en-NG');
}

/** Show a toast notification */
function showToast(message, type = 'success', duration = 2800) {
  // Remove existing toast if present
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

/* ── Language System ────────────────────────────────────────── */
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

  // Sync language dropdown(s)
  $$('#languageSwitch').forEach(sel => { sel.value = lang; });

  // Refresh cart UI for translated text
  updateCartUI();
}

function loadTranslations() {
  fetch('language.json')
    .then(res => {
      if (!res.ok) throw new Error('language.json not found');
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

/* ── Navbar: scroll shadow ──────────────────────────────────── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

/* ── Booking Modal ──────────────────────────────────────────── */
function initBookingModal() {
  const modal        = $('bookingModal');
  const form         = $('bookingForm');
  const serviceSelect = $('clientService');
  const feeDisplay   = $('feeDisplay');
  const feeInput     = $('serviceFee');

  if (!modal) return;

  const SERVICE_FEES = {
    'Emergency Service': 5000,
  };

  function setFee(val) {
    if (feeDisplay) feeDisplay.textContent = formatNaira(val);
    if (feeInput)   feeInput.value = val;
  }

  function openModal(presetService) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    if (presetService && serviceSelect) {
      serviceSelect.value = presetService;
      setFee(SERVICE_FEES[presetService] || 0);
    }

    // Stop quote button pulsing once opened
    const quoteBtn = $('requestQuoteBtn');
    if (quoteBtn) quoteBtn.classList.remove('flash');
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  // Service → fee
  if (serviceSelect) {
    serviceSelect.addEventListener('change', function () {
      setFee(SERVICE_FEES[this.value] || 0);
    });
  }

  // Form submit → WhatsApp
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
        `*New Booking — Mezoki Plumbing*\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Service: ${service}\n` +
        `Fee: ${fee}\n` +
        `Details: ${details || 'N/A'}`
      );
      window.open(`https://wa.me/2348130627292?text=${msg}`, '_blank');
      closeModal();
      form.reset();
      setFee(0);
      showToast('Booking sent via WhatsApp! ✓');
    });
  }

  // Open triggers
  document.addEventListener('click', function (e) {
    const tgt = e.target;
    if (!tgt) return;

    const id = tgt.id || (tgt.closest('[id]') ? tgt.closest('[id]').id : '');

    if (['requestQuoteBtn', 'bookServiceBtn'].includes(id) ||
        tgt.id === 'requestQuoteBtn' || tgt.id === 'bookServiceBtn') {
      e.preventDefault();
      openModal();
      return;
    }

    if (tgt.id === 'emergencyBtn' || tgt.closest('#emergencyBtn')) {
      e.preventDefault();
      openModal('Emergency Service');
      return;
    }

    // Close on backdrop or close button
    if (tgt === modal || tgt.classList.contains('close-btn')) {
      closeModal();
    }
  });

  // ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
  });
}

/* ── Emergency Dropdown ─────────────────────────────────────── */
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

/* ── Project Gallery Toggle ─────────────────────────────────── */
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

/* ── Quote Button Flash ─────────────────────────────────────── */
function initQuoteFlash() {
  const btn = $('requestQuoteBtn');
  if (btn) btn.classList.add('flash');
  const emer = $('emergencyBtn');
  if (emer) emer.classList.add('flash');
}

/* ── Cart System ────────────────────────────────────────────── */
function saveCart() {
  localStorage.setItem('mezoki_cart', JSON.stringify(cart));
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function addToCart(id, name, price, qty = 1) {
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, name, price: parseFloat(price), qty: parseInt(qty) });
  }
  saveCart();
  updateCartUI();
  showToast(`Added to cart: ${name}`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const countEl       = document.querySelector('.cart-count');
  const itemsContainer = document.querySelector('.cart-items');
  const totalEl       = document.querySelector('.total-price');
  const checkoutBtn   = $('checkoutBtn');

  // Badge count
  if (countEl) {
    const n = cartCount();
    countEl.textContent = n;
    countEl.style.display = n === 0 ? 'none' : 'flex';
  }

  // Items list
  if (itemsContainer) {
    itemsContainer.innerHTML = '';

    if (cart.length === 0) {
      const msg = (translations[currentLang] || {}).emptyCart || 'Your cart is empty';
      const p = document.createElement('p');
      p.className = 'empty-cart';
      p.textContent = msg;
      itemsContainer.appendChild(p);
    } else {
      cart.forEach(item => {
        const key  = 'product' + item.id;
        const name = (translations[currentLang] || {})[key] || item.name;
        const row  = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
          <div class="cart-item-info">
            <div class="cart-item-name">${name}</div>
            <div class="cart-item-price">${formatNaira(item.price * item.qty)}</div>
          </div>
          <div class="cart-item-qty">
            <button class="qty-btn decrease" data-id="${item.id}" aria-label="Decrease">−</button>
            <span class="qty-btn-display">${item.qty}</span>
            <button class="qty-btn increase" data-id="${item.id}" aria-label="Increase">+</button>
          </div>
          <button class="remove-item" data-id="${item.id}" aria-label="Remove">&times;</button>
        `;
        itemsContainer.appendChild(row);
      });
    }
  }

  // Total
  if (totalEl) totalEl.textContent = cartTotal().toLocaleString('en-NG');

  // Checkout button
  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;
}

function initCart() {
  const cartFloatBtn = $('cartFloatBtn');
  const cartModal    = $('cartModal');
  const checkoutBtn  = $('checkoutBtn');

  // Open cart
  document.addEventListener('click', function (e) {
    if (cartFloatBtn && (e.target === cartFloatBtn || cartFloatBtn.contains(e.target))) {
      if (cartModal) cartModal.style.display = 'flex';
      return;
    }

    // Close cart
    if (cartModal) {
      if (e.target === cartModal || e.target.classList.contains('close-cart')) {
        cartModal.style.display = 'none';
        return;
      }
    }

    // Add to cart (small button or overlay button)
    const addBtn =
      e.target.classList.contains('add-to-cart-btn-small') ? e.target :
      e.target.closest('.add-to-cart-btn-small') ||
      (e.target.classList.contains('add-overlay-btn') ? e.target : null) ||
      e.target.closest('.add-overlay-btn');

    if (addBtn) {
      const itemEl = addBtn.closest('[data-id]');
      if (!itemEl) return;
      const id    = itemEl.getAttribute('data-id');
      let name  = itemEl.getAttribute('data-name');
      let price = parseFloat(itemEl.getAttribute('data-price'));
      // Fallbacks for missing data
      if (!name) {
        const h4 = itemEl.querySelector('h4');
        name = h4 ? h4.textContent.trim() : 'Product';
      }
      if (!price || isNaN(price)) {
        const priceEl = itemEl.querySelector('.product-price');
        if (priceEl) {
          const match = priceEl.textContent.replace(/[^\d]/g, '');
          price = match ? parseFloat(match) : 0;
        } else {
          price = 0;
        }
      }
      const qtyEl = itemEl.querySelector('.qty-input');
      const qty   = qtyEl ? parseInt(qtyEl.value) || 1 : 1;
      addToCart(id, name, price, qty);
      return;
    }

    // Quantity change
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

  // Close on ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && cartModal && cartModal.style.display === 'flex') {
      cartModal.style.display = 'none';
    }
  });

  // Checkout
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) return;

      let message = '*New Order — Mezoki Plumbing*\n\n';
      cart.forEach(item => {
        const key  = 'product' + item.id;
        const name = (translations[currentLang] || {})[key] || item.name;
        message += `• ${name} ×${item.qty} — ${formatNaira(item.price * item.qty)}\n`;
      });
      message += `\n*Total: ${formatNaira(cartTotal())}*`;

      window.open(`https://wa.me/2348130627292?text=${encodeURIComponent(message)}`, '_blank');

      // Clear after checkout
      cart = [];
      saveCart();
      updateCartUI();
      if (cartModal) cartModal.style.display = 'none';
      showToast('Order sent via WhatsApp! ✓');
    });
  }

  // Sync language switchers
  $$('#languageSwitch').forEach(sel => {
    sel.value = currentLang;
    sel.addEventListener('change', function () {
      applyLanguage(this.value);
    });
  });

  // Initial render
  updateCartUI();
}

/* ── Email & Address Link Handlers ─────────────────────────── */
function initContactLinks() {
  const emailLink = document.getElementById('emailLink');
  if (emailLink) {
    emailLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'mailto:mosesowodeyi@gmail.com';
    });
  }
  const addressLink = document.getElementById('addressLink');
  if (addressLink) {
    addressLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.open('https://www.google.com/maps/search/?api=1&query=No.+18A+Onijemo+street,+ogba+Lagos+Nigeria', '_blank');
    });
  }
}

/* ── Bootstrap ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initQuoteFlash();
  initEmergencyDropdown();
  initBookingModal();
  initGalleryToggle();
  initCart();
  initContactLinks();
  loadTranslations();
});