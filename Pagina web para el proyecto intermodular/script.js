/* ==========================================================================
   MAZCUFIT - OFFICIAL DYNAMIC BEHAVIOR (script.js)
   Features: Multilingual MPA, Shopping Cart Engine, Form Validation, LocalStorage
   ========================================================================== */

// --- 1. INTERNATIONALIZATION (DICCIONARIO DE IDIOMAS) ---
const translations = {
    es: {
        // Navigation Links
        "nav-about": "Quiénes Somos",
        "nav-join": "Membresía",
        "nav-location": "Instalaciones",
        "nav-shop": "Tienda",
        "nav-nutrition": "Menús",
        "nav-home": "Inicio",
        "btn-home-nav": "Mazcufit Club",

        // Hero Section (Home)
        "hero-slogan": "Tu evolución hacia un estilo de vida consciente, saludable y de vanguardia.",
        "hero-cta": "Comenzar Experiencia",
        "hero-cta-sec": "Asociarme Ahora",

        // Nosotros Section
        "about-subtitle": "NUESTRA ESENCIA",
        "about-title": "El Club de Bienestar y Fitness",
        "about-heading-1": "Redefiniendo el entrenamiento de precisión desde 2018",
        "about-p1": "En Mazcufit no creemos en soluciones temporales ni en dietas restrictivas. Entendemos el bienestar como una sinergia perfecta entre una nutrición personalizada, un entrenamiento físico inteligente y un descanso profundo que nutre cuerpo y mente.",
        "about-p2": "Nuestra misión es proporcionarte un espacio exclusivo y los conocimientos científicos avanzados necesarios para que alcances tu máximo rendimiento biológico y disfrutes de una longevidad verdaderamente saludable y vibrante.",
        "about-stat-members": "Miembros Activos",
        "about-stat-success": "Casos de Éxito",
        "about-stat-experts": "Especialistas",

        // Nosotros Pilares
        "pilar-title-1": "Nutrición de Precisión",
        "pilar-desc-1": "Planes de alimentación celular diseñados por expertos nutricionistas basados en tu perfil genético y estilo de vida.",
        "pilar-title-2": "Entrenamiento Consciente",
        "pilar-desc-2": "Clases grupales dirigidas y entrenadores personales que adaptan rutinas biomecánicas seguras y altamente eficaces.",
        "pilar-title-3": "Estilo de Vida Sostenible",
        "pilar-desc-3": "Un enfoque holístico que integra meditación guiada, spa reparador y hábitos de descanso de manera regenerativa.",

        // Registro / Form Section
        "join-subtitle": "SOLICITUD DE ADMISIÓN",
        "join-title": "Únete al Mazcufit Club",
        "join-intro": "Registra tus datos y un asesor se pondrá en contacto contigo para programar tu entrevista de admisión personalizada.",
        "form-label-name": "Nombre y Apellidos *",
        "form-label-email": "Correo Electrónico *",
        "form-label-phone": "Número de Teléfono *",
        "form-label-msg": "Objetivos de bienestar (Opcional)",
        "form-terms-1": "Acepto la política de privacidad y los",
        "form-terms-2": "términos de admisión",
        "form-btn-submit": "Enviar Solicitud de Membresía",
        "placeholder-name": "Ej: Sofía Alarcón Medina",
        "placeholder-email": "correo@ejemplo.com",
        "placeholder-phone": "Ej: 600123456",
        "placeholder-msg": "Cuéntanos brevemente qué deseas lograr...",

        // Form Validation Errors
        "err-name": "Por favor, introduce tu nombre y apellidos (mínimo 6 caracteres).",
        "err-email": "Introduce un correo electrónico válido.",
        "err-phone": "Introduce un teléfono válido de 9 dígitos.",
        "err-terms": "Debes aceptar los términos de admisión para continuar.",
        "join-success-title": "¡Bienvenido al Mazcufit Club!",
        "join-greeting": "Hola, {name}. Tu solicitud de admisión está registrada. Nos comunicaremos contigo en un plazo de 24 horas hábiles.",
        "join-logout-btn": "Cerrar Sesión",

        // Ubicacion & Instalaciones Section
        "location-subtitle": "NUESTRAS SEDES",
        "location-title": "Instalaciones Exclusivas",
        "gallery-tag-1": "SPA & REGENERACIÓN",
        "gallery-title-1": "Santuario Termal",
        "gallery-tag-2": "BIOMECÁNICA",
        "gallery-title-2": "Equipamiento Inteligente",
        "gallery-tag-3": "BIOMECÁNICA 2",
        "gallery-title-3": "Entrenamiento de Boxeo",
        "gallery-tag-4": "MENTE & CUERPO",
        "gallery-title-4": "Estudio de Meditación",

        // Tienda Section
        "shop-subtitle": "MAZCUFIT STORE",
        "shop-title": "Merchandising de Alta Gama",
        "shop-badge-premium": "PREMIUM",
        "shop-badge-best": "TOP VENTAS",
        "shop-badge-eco": "ECOLÓGICO",
        "prod-title-1": "Botella Térmica Mazcufit",
        "prod-desc-1": "Acero inoxidable mate de doble pared. Conserva el frío durante 24 horas y el calor por 12 horas.",
        "prod-title-2": "Camiseta Técnica Activa",
        "prod-desc-2": "Tejido reciclado de alto rendimiento, ultraligero y con tecnología de secado rápido inteligente.",
        "prod-title-3": "Bolsa Deportiva de Algodón",
        "prod-desc-3": "Algodón orgánico reforzado con costuras dobles. Gran capacidad y bolsillo de aislamiento húmedo.",
        "btn-add-cart": "Añadir al carrito",

        // Cart Drawer
        "cart-header-title": "Tu Carrito",
        "cart-empty-text": "Tu carrito está vacío.",
        "cart-btn-shop": "Ver Productos",
        "cart-total-label": "Total a pagar",
        "cart-btn-checkout": "Finalizar Compra",
        "toast-add-success": '"{name}" añadido al carrito.',
        "toast-checkout-success": "¡Compra finalizada con éxito! Te enviaremos un correo de confirmación.",
        "toast-logout": "Has cerrado sesión correctamente.",
        "toast-login": "¡Solicitud enviada! Has ingresado al Mazcufit Club.",

        // Menus Section
        "nutrition-subtitle": "ALIMENTACIÓN CONSCIENTE",
        "nutrition-title": "Planes Nutricionales Mazcufit",
        "nutrition-intro": "Un menú diario equilibrado diseñado por nuestros especialistas en nutrición celular para mantener tus niveles de energía constantes y promover la longevidad celular.",
        "tab-breakfast": "Desayuno",
        "tab-lunch": "Almuerzo",
        "tab-dinner": "Cena",

        "menu-bf-title": "Avena Proteica con Frutos Rojos y Semillas",
        "menu-bf-desc": "Avena hidratada en leche vegetal enriquecida con proteína limpia de suero. Coronada con fresas silvestres orgánicas, arándanos, semillas de chía para omega-3 y un toque de canela de Ceilán.",

        "menu-lu-title": "Arroz Basmati Integral con Pollo y Aguacate",
        "menu-lu-desc": "Arroz integral de grano largo cocido al vapor, acompañado de pechuga de pollo de corral a la plancha con finas hierbas y cubos de aguacate fresco para aportar ácidos grasos esenciales.",

        "menu-dn-title": "Lomo de Salmón al Horno con Espárragos y Calabacín",
        "menu-dn-desc": "Filete de salmón rico en Omega-3 sellado al horno sobre una base de finas rodajas de calabacín y espárragos verdes salteados, ideal para una digestión nocturna óptima y reparación muscular.",

        "menu-macro-title": "Composición de Macronutrientes",
        "macro-prot": "Proteínas",
        "macro-carb": "Carbohidratos",
        "macro-fat": "Grasas Saludables",

        // Footer Section
        "footer-desc": "El club del bienestar y fitness de lujo. Nutrición celular, bio-entrenamiento consciente y relajación profunda en un entorno de diseño sostenible y vanguardista.",
        "footer-col-links": "Accesos Rápidos",
        "footer-col-contact": "Contáctanos",
        "footer-contact-prompt": "¿Tienes preguntas o deseas agendar una visita privada a nuestras instalaciones? Escríbenos directamente:",
        "footer-rights": "Todos los derechos reservados.",
        "footer-legal-1": "Política de Privacidad",
        "footer-legal-2": "Términos de Uso"
    },
    en: {
        // Navigation Links
        "nav-about": "About Us",
        "nav-join": "Membership",
        "nav-location": "Facilities",
        "nav-shop": "Shop",
        "nav-nutrition": "Menus",
        "nav-home": "Home",
        "btn-home-nav": "Mazcufit Club",

        // Hero Section
        "hero-slogan": "Your evolution towards a conscious, healthy, and cutting-edge lifestyle.",
        "hero-cta": "Begin Experience",
        "hero-cta-sec": "Become a Member",

        // Nosotros Section
        "about-subtitle": "OUR ESSENCE",
        "about-title": "The Wellness and Fitness Club",
        "about-heading-1": "Redefining premium training since 2018",
        "about-p1": "At Mazcufit we do not believe in temporary solutions or restrictive diets. We understand wellness as a perfect synergy between personalized nutrition, smart physical training, and deep rest that nourishes body and mind.",
        "about-p2": "Our mission is to provide you with an exclusive space and the advanced scientific knowledge necessary for you to achieve your peak biological performance and enjoy a truly healthy and vibrant longevity.",
        "about-stat-members": "Active Members",
        "about-stat-success": "Success Cases",
        "about-stat-experts": "Specialists",

        // Nosotros Pilares
        "pilar-title-1": "Precision Nutrition",
        "pilar-desc-1": "Cellular meal plans designed by expert nutritionists based on your genetic profile and lifestyle.",
        "pilar-title-2": "Conscious Training",
        "pilar-desc-2": "Guided group classes and personal trainers who adapt safe and highly effective biomechanical routines.",
        "pilar-title-3": "Sustainable Lifestyle",
        "pilar-desc-3": "A holistic approach that integrates guided meditation, a restorative spa, and daily regenerative habits.",

        // Registro / Form Section
        "join-subtitle": "ADMISSION APPLICATION",
        "join-title": "Join Mazcufit Club",
        "join-intro": "Register your details and an advisor will contact you to schedule your personalized admission interview.",
        "form-label-name": "Full Name *",
        "form-label-email": "Email Address *",
        "form-label-phone": "Phone Number *",
        "form-label-msg": "Wellness Goals (Optional)",
        "form-terms-1": "I accept the privacy policy and the",
        "form-terms-2": "admission terms",
        "form-btn-submit": "Send Membership Application",
        "placeholder-name": "E.g.: Sophia Alarcon Medina",
        "placeholder-email": "email@example.com",
        "placeholder-phone": "E.g.: 600123456",
        "placeholder-msg": "Tell us briefly what you want to achieve...",

        // Form Validation Errors
        "err-name": "Please enter your full name (minimum 6 characters).",
        "err-email": "Please enter a valid email address.",
        "err-phone": "Please enter a valid 9-digit phone number.",
        "err-terms": "You must accept the admission terms to continue.",
        "join-success-title": "Welcome to Mazcufit Club!",
        "join-greeting": "Hello, {name}. Your admission application has been registered. We will contact you within 24 business hours.",
        "join-logout-btn": "Log Out",

        // Ubicacion & Instalaciones Section
        "location-subtitle": "OUR LOCATIONS",
        "location-title": "Exclusive Facilities",
        "gallery-tag-1": "SPA & REGENERATION",
        "gallery-title-1": "Thermal Sanctuary",
        "gallery-tag-2": "BIOMECHANICS",
        "gallery-title-2": "Smart Equipment",
        "gallery-tag-3": "BIOMECHANICS 2",
        "gallery-title-3": "Boxing Training",
        "gallery-tag-4": "MIND & BODY",
        "gallery-title-4": "Meditation Studio",

        // Tienda Section
        "shop-subtitle": "MAZCUFIT STORE",
        "shop-title": "High-End Merchandising",
        "shop-badge-premium": "PREMIUM",
        "shop-badge-best": "BEST SELLER",
        "shop-badge-eco": "ECO-FRIENDLY",
        "prod-title-1": "Mazcufit Thermal Bottle",
        "prod-desc-1": "Matte double-wall stainless steel. Keeps cold for 24 hours and hot for 12 hours.",
        "prod-title-2": "Active Tech T-Shirt",
        "prod-desc-2": "High-performance recycled fabric, ultralight with intelligent quick-drying technology.",
        "prod-title-3": "Cotton Sports Duffel Bag",
        "prod-desc-3": "Organic cotton reinforced with double stitching. Large capacity and wet insulation pocket.",
        "btn-add-cart": "Add to Cart",

        // Cart Drawer
        "cart-header-title": "Your Cart",
        "cart-empty-text": "Your cart is empty.",
        "cart-btn-shop": "Shop Products",
        "cart-total-label": "Total to pay",
        "cart-btn-checkout": "Complete Checkout",
        "toast-add-success": '"{name}" added to cart.',
        "toast-checkout-success": "Purchase successfully completed! We will send you a confirmation email.",
        "toast-logout": "You have logged out successfully.",
        "toast-login": "Application sent! You joined Mazcufit Club.",

        // Menus Section
        "nutrition-subtitle": "CONSCIOUS EATING",
        "nutrition-title": "Mazcufit Nutritional Plans",
        "nutrition-intro": "A balanced daily menu designed by our cellular nutrition specialists to keep your energy levels constant and promote cellular longevity.",
        "tab-breakfast": "Breakfast",
        "tab-lunch": "Lunch",
        "tab-dinner": "Dinner",

        "menu-bf-title": "Protein Oatmeal with Berries and Seeds",
        "menu-bf-desc": "Hydrated oatmeal in plant-based milk enriched with clean whey protein. Topped with wild organic strawberries, blueberries, chia seeds for omega-3, and a touch of Ceylon cinnamon.",

        "menu-lu-title": "Brown Basmati Rice with Chicken and Avocado",
        "menu-lu-desc": "Long-grain brown rice steamed, served with grilled free-range chicken breast seasoned with herbs and fresh avocado cubes for essential fatty acids.",

        "menu-dn-title": "Baked Salmon Fillet with Asparagus and Zucchini",
        "menu-dn-desc": "Omega-3 rich salmon fillet baked on a bed of thin zucchini slices and sautéed green asparagus, ideal for optimal night digestion and muscle repair.",

        "menu-macro-title": "Macronutrient Composition",
        "macro-prot": "Proteins",
        "macro-carb": "Carbohydrates",
        "macro-fat": "Healthy Fats",

        // Footer Section
        "footer-desc": "The luxury comprehensive wellness and fitness club. Cellular nutrition, conscious bio-training, and deep relaxation in a sustainable and cutting-edge design environment.",
        "footer-col-links": "Quick Links",
        "footer-col-contact": "Contact Us",
        "footer-contact-prompt": "Do you have questions or want to schedule a private tour of our facilities? Write to us directly:",
        "footer-rights": "All rights reserved.",
        "footer-legal-1": "Privacy Policy",
        "footer-legal-2": "Terms of Use"
    }
};

// Current Language state
let currentLang = localStorage.getItem("mazcufit_lang") || "es";

// Set initial language selection state on buttons
document.querySelectorAll(".lang-btn").forEach(btn => {
    if (btn.getAttribute("data-lang") === currentLang) {
        btn.classList.add("active");
    } else {
        btn.classList.remove("active");
    }
});

// Switch language function
function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem("mazcufit_lang", lang);
    document.documentElement.lang = lang;

    // Translate standard texts
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Translate placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute("placeholder", translations[lang][key]);
        }
    });

    // Translate user greeting if logged in and element exists
    updateGreetingText();
}

// Bind language button clicks
document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        translatePage(lang);
    });
});

// Trigger initial translation
translatePage(currentLang);


// --- 2. STICKY NAVBAR & SCROLL BEHAVIOR ---
const header = document.querySelector(".header");
if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}


// --- 3. MOBILE HAMBURGER MENU NAV ---
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navMenu = document.getElementById("nav-menu");

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        mobileMenuBtn.classList.toggle("open");
        mobileMenuBtn.setAttribute("aria-expanded", isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && navMenu.classList.contains("open")) {
            navMenu.classList.remove("open");
            mobileMenuBtn.classList.remove("open");
            mobileMenuBtn.setAttribute("aria-expanded", "false");
        }
    });
}


// --- 4. MEMBERSHIP FORM VALIDATION & LOCAL STORAGE LOGIN ---
const form = document.getElementById("membership-form");
const loginPanel = document.getElementById("login-state-active");
const logoutBtn = document.getElementById("logout-btn");
const userGreetingMsg = document.getElementById("user-greeting-msg");

// Input elements
const nameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const termsInput = document.getElementById("terms");

// Error elements
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const termsError = document.getElementById("terms-error");

// Set dynamic greeting text based on logged in user and language
function updateGreetingText() {
    const savedName = localStorage.getItem("mazcufit_user");
    if (savedName && userGreetingMsg) {
        const greetingTemplate = translations[currentLang]["join-greeting"] || "Hola, {name}.";
        userGreetingMsg.textContent = greetingTemplate.replace("{name}", savedName);
    }
}

// Check logged in state on load
function checkLoginState() {
    if (!form || !loginPanel) return; // Skip if elements don't exist on this page
    const savedName = localStorage.getItem("mazcufit_user");
    if (savedName) {
        form.classList.add("hidden");
        loginPanel.classList.remove("hidden");
        updateGreetingText();
    } else {
        form.classList.remove("hidden");
        loginPanel.classList.add("hidden");
    }
}

// Real-time validation validators
function validateName() {
    if (!nameInput) return false;
    const val = nameInput.value.trim();
    if (val.length < 6) {
        nameInput.closest(".form-group").classList.add("invalid");
        nameInput.closest(".form-group").classList.remove("valid");
        if (nameError) nameError.textContent = translations[currentLang]["err-name"];
        return false;
    } else {
        nameInput.closest(".form-group").classList.remove("invalid");
        nameInput.closest(".form-group").classList.add("valid");
        if (nameError) nameError.textContent = "";
        return true;
    }
}

function validateEmail() {
    if (!emailInput) return false;
    const val = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) {
        emailInput.closest(".form-group").classList.add("invalid");
        emailInput.closest(".form-group").classList.remove("valid");
        if (emailError) emailError.textContent = translations[currentLang]["err-email"];
        return false;
    } else {
        emailInput.closest(".form-group").classList.remove("invalid");
        emailInput.closest(".form-group").classList.add("valid");
        if (emailError) emailError.textContent = "";
        return true;
    }
}

function validatePhone() {
    if (!phoneInput) return false;
    const val = phoneInput.value.trim();
    const phoneRegex = /^[0-9]{9}$/;
    if (!phoneRegex.test(val)) {
        phoneInput.closest(".form-group").classList.add("invalid");
        phoneInput.closest(".form-group").classList.remove("valid");
        if (phoneError) phoneError.textContent = translations[currentLang]["err-phone"];
        return false;
    } else {
        phoneInput.closest(".form-group").classList.remove("invalid");
        phoneInput.closest(".form-group").classList.add("valid");
        if (phoneError) phoneError.textContent = "";
        return true;
    }
}

function validateTerms() {
    if (!termsInput) return false;
    if (!termsInput.checked) {
        if (termsError) termsError.textContent = translations[currentLang]["err-terms"];
        return false;
    } else {
        if (termsError) termsError.textContent = "";
        return true;
    }
}

// Bind events if elements exist
if (form) {
    if (nameInput) nameInput.addEventListener("blur", validateName);
    if (emailInput) emailInput.addEventListener("blur", validateEmail);
    if (phoneInput) phoneInput.addEventListener("blur", validatePhone);
    if (termsInput) termsInput.addEventListener("change", validateTerms);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Trigger all validations
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isTermsValid = validateTerms();

        if (isNameValid && isEmailValid && isPhoneValid && isTermsValid) {
            // Show submission loading spinner
            const submitBtn = document.getElementById("submit-btn");
            const btnText = submitBtn ? submitBtn.querySelector(".btn-text") : null;
            const spinner = submitBtn ? submitBtn.querySelector(".spinner") : null;

            if (btnText && spinner) {
                btnText.classList.add("hidden");
                spinner.classList.remove("hidden");
            }
            if (submitBtn) submitBtn.disabled = true;

            // Simulate network latency (1.5 seconds)
            setTimeout(() => {
                const userName = nameInput.value.trim();
                localStorage.setItem("mazcufit_user", userName);

                // Re-render state
                checkLoginState();

                if (btnText && spinner) {
                    btnText.classList.remove("hidden");
                    spinner.classList.add("hidden");
                }
                if (submitBtn) submitBtn.disabled = false;

                // Clear inputs
                form.reset();
                document.querySelectorAll(".form-group").forEach(group => group.classList.remove("valid", "invalid"));

                // Trigger Success Toast
                showToast(translations[currentLang]["toast-login"], "success");
            }, 1500);
        }
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("mazcufit_user");
        checkLoginState();
        showToast(translations[currentLang]["toast-logout"], "success");
    });
}

// Run initial login state check
checkLoginState();


// --- 5. E-COMMERCE SHOPPING CART ENGINE ---

// Products Catalog Configuration
const productsCatalog = {
    1: {
        nameEs: "Botella Térmica Mazcufit",
        nameEn: "Mazcufit Thermal Bottle",
        price: 34.90,
        icon: "fa-bottle-water",
        class: "bottle-placeholder"
    },
    2: {
        nameEs: "Camiseta Técnica Activa",
        nameEn: "Active Tech T-Shirt",
        price: 29.90,
        icon: "fa-shirt",
        class: "shirt-placeholder"
    },
    3: {
        nameEs: "Bolsa Deportiva de Algodón",
        nameEn: "Cotton Sports Duffel Bag",
        price: 45.00,
        icon: "fa-bag-shopping",
        class: "bag-placeholder"
    }
};

// Cart state array: [{ id, qty }]
let cart = JSON.parse(localStorage.getItem("mazcufit_cart")) || [];

// Cart Elements
const cartBtn = document.getElementById("cart-btn");
const cartCloseBtn = document.getElementById("cart-close-btn");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartItemsContainer = document.getElementById("cart-items");
const cartBadge = document.getElementById("cart-badge");
const cartTotalPrice = document.getElementById("cart-total-price");
const cartFooter = document.getElementById("cart-footer");
const cartEmpty = document.getElementById("cart-empty");
const checkoutBtn = document.getElementById("checkout-btn");

// Open Cart Drawer
function openCart() {
    if (cartDrawer && cartOverlay) {
        cartDrawer.classList.add("open");
        cartOverlay.classList.add("open");
        document.body.style.overflow = "hidden"; // Lock page scroll
    }
}

// Close Cart Drawer
function closeCart() {
    if (cartDrawer && cartOverlay) {
        cartDrawer.classList.remove("open");
        cartOverlay.classList.remove("open");
        document.body.style.overflow = ""; // Restore scroll
    }
}

if (cartBtn) cartBtn.addEventListener("click", openCart);
if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCart);
if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

// Add Item To Cart
function addToCart(productId) {
    const id = parseInt(productId);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ id, qty: 1 });
    }

    saveCart();
    renderCart();

    // Play badge animation pulse
    if (cartBadge) {
        cartBadge.classList.add("anim-pulse");
        setTimeout(() => cartBadge.classList.remove("anim-pulse"), 500);
    }

    // Show dynamic addition Toast success
    const prodName = currentLang === "es" ? productsCatalog[id].nameEs : productsCatalog[id].nameEn;
    const toastTemplate = translations[currentLang]["toast-add-success"] || '"{name}" added to cart.';
    showToast(toastTemplate.replace("{name}", prodName), "success");
}

// Modify Quantities
function updateQty(id, delta) {
    const item = cart.find(item => item.id === id);
    if (!item) return;

    item.qty += delta;

    if (item.qty <= 0) {
        // Remove item from cart completely
        cart = cart.filter(item => item.id !== id);
    }

    saveCart();
    renderCart();
}

// Delete Item
function deleteItem(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
}

// Save to LocalStorage
function saveCart() {
    localStorage.setItem("mazcufit_cart", JSON.stringify(cart));
}

// Render Cart HTML items
function renderCart() {
    if (!cartItemsContainer || !cartBadge) return; // Skip rendering if layout is missing

    const itemsHTML = [];
    let subtotal = 0;
    let totalItems = 0;

    cart.forEach(item => {
        const prod = productsCatalog[item.id];
        if (!prod) return;

        const name = currentLang === "es" ? prod.nameEs : prod.nameEn;
        const totalItemPrice = (prod.price * item.qty).toFixed(2);
        subtotal += prod.price * item.qty;
        totalItems += item.qty;

        itemsHTML.push(`
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-img-placeholder visual-placeholder ${prod.class}">
                    <i class="fa-solid ${prod.icon}" style="font-size: 1.5rem; opacity: 0.25;"></i>
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${name}</h4>
                    <span class="cart-item-price">${prod.price.toFixed(2)} €</span>
                    <div class="cart-item-controls">
                        <div class="quantity-selector">
                            <button class="qty-btn btn-minus" onclick="updateQty(${item.id}, -1)">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <span class="qty-val">${item.qty}</span>
                            <button class="qty-btn btn-plus" onclick="updateQty(${item.id}, 1)">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        <button class="item-delete-btn" onclick="deleteItem(${item.id})" aria-label="Eliminar artículo">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        `);
    });

    // Update floating Badge
    cartBadge.textContent = totalItems;

    if (cart.length === 0) {
        if (cartEmpty) cartEmpty.classList.remove("hidden");
        if (cartFooter) cartFooter.classList.add("hidden");

        // Remove old items elements if any
        document.querySelectorAll(".cart-drawer .cart-item").forEach(el => el.remove());
    } else {
        if (cartEmpty) cartEmpty.classList.add("hidden");
        if (cartFooter) cartFooter.classList.remove("hidden");

        // Remove old items elements first to clean render
        document.querySelectorAll(".cart-drawer .cart-item").forEach(el => el.remove());

        // Inject new items
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = itemsHTML.join("");
        while (tempDiv.firstChild) {
            cartItemsContainer.appendChild(tempDiv.firstChild);
        }

        // Update total sum
        if (cartTotalPrice) cartTotalPrice.textContent = `${subtotal.toFixed(2)} €`;
    }
}

// Bind products Add to Cart buttons
document.querySelectorAll(".btn-add-cart").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        addToCart(id);
    });
});

// Checkout action
if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) return;

        // Show loader state on button
        checkoutBtn.disabled = true;
        const oldText = checkoutBtn.textContent;
        checkoutBtn.textContent = currentLang === "es" ? "Procesando..." : "Processing...";

        setTimeout(() => {
            // Clear cart
            cart = [];
            saveCart();
            renderCart();
            closeCart();

            // Restore button state
            checkoutBtn.disabled = false;
            checkoutBtn.textContent = oldText;

            // Trigger Success Toast
            showToast(translations[currentLang]["toast-checkout-success"], "success");
        }, 1500);
    });
}

// Initial Cart Render
renderCart();


// --- 6. INTERACTIVE TABS SWITCHER FOR NUTRITIONAL PLANS ---
function switchTab(targetTab) {
    // Update Active Button states
    document.querySelectorAll(".tab-btn").forEach(btn => {
        if (btn.getAttribute("data-tab") === targetTab || btn.id === `tab-${targetTab}`) {
            btn.classList.add("active");
            btn.setAttribute("aria-selected", "true");
        } else {
            btn.classList.remove("active");
            btn.setAttribute("aria-selected", "false");
        }
    });

    // Update Active Panels states
    document.querySelectorAll(".tab-panel").forEach(panel => {
        if (panel.getAttribute("id") === `${targetTab}-panel`) {
            panel.classList.add("active");
        } else {
            panel.classList.remove("active");
        }
    });
}

// Bind click listeners dynamically
document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab");
        if (targetTab) {
            switchTab(targetTab);
        }
    });
});

// Expose globally for inline onclick handlers
window.switchTab = switchTab;


// --- 7. PREMIUM TOAST NOTIFICATION ENGINE ---
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    // Create toast element
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let iconClass = "fa-solid fa-circle-check";
    if (type === "warning") {
        iconClass = "fa-solid fa-triangle-exclamation";
    }

    toast.innerHTML = `
        <i class="${iconClass} toast-icon"></i>
        <span class="toast-msg">${message}</span>
    `;

    container.appendChild(toast);

    // Auto dismiss after 4 seconds
    setTimeout(() => {
        toast.classList.add("toast-fadeout");
        // Remove from DOM after transition finishes
        toast.addEventListener("animationend", (e) => {
            if (e.animationName === "slideOutToast") {
                toast.remove();
            }
        });
    }, 4000);
}

// Global exposure for onClick handlers from dynamic HTML elements
window.updateQty = updateQty;
window.deleteItem = deleteItem;


// --- 8. REGISTRATION WALL CONTROLLER (BLOQUEO INICIAL OBLIGATORIO) ---
function initRegistrationWall() {
    const isRegistrado = localStorage.getItem("mazcufit_registrado") === "true";
    const regLink = document.querySelector('a[href="registro.html"]');

    if (isRegistrado) {
        // Hide "Registro / Membresía" in Navbar if already registered
        if (regLink) {
            const liParent = regLink.closest("li");
            if (liParent) {
                liParent.style.display = "none";
            }
        }
        return; // Proceed without displaying the wall
    }

    // Freeze page scrolling
    document.body.style.overflow = "hidden";

    // Inject the Modal Overlay
    const wallOverlay = document.createElement("div");
    wallOverlay.id = "registration-wall-overlay";
    wallOverlay.className = "reg-wall-overlay";

    // Multi-language text templates
    const introText = currentLang === "es"
        ? "Para acceder a las instalaciones, rutinas de entrenamiento y menús saludables de Mazcufit, debes completar tu registro inicial obligatorio."
        : "To access Mazcufit's facilities, workout routines, and healthy meals, you must complete your initial mandatory registration.";

    const nameLabel = currentLang === "es" ? "Nombre y Apellidos *" : "Full Name *";
    const namePlaceholder = currentLang === "es" ? "Ej: Sofía Alarcón Medina" : "E.g.: Sophia Alarcon Medina";

    const emailLabel = currentLang === "es" ? "Correo Electrónico *" : "Email Address *";
    const phoneLabel = currentLang === "es" ? "Número de Teléfono *" : "Phone Number *";
    const btnLabel = currentLang === "es" ? "Registrarme e Ingresar" : "Register and Enter";

    wallOverlay.innerHTML = `
        <div class="reg-wall-card">
            <div class="reg-wall-logo">
                <img src="img/logo.png" alt="Mazcufit Logo" class="hero-logo-large" onerror="this.onerror=null; this.outerHTML='<svg class=\'hero-logo-large\' viewBox=\'0 0 200 200\'><circle cx=\'100\' cy=\'100\' r=\'90\' stroke=\'var(--color-border-focus)\' stroke-width=\'12\' fill=\'none\'/><path d=\'M60,75 L100,140 L140,75\' stroke=\'var(--color-border-focus)\' stroke-width=\'12\' fill=\'none\'/></svg>'">
                <h2 class="reg-wall-title">MAZCUFIT</h2>
            </div>
            <p class="reg-wall-intro">${introText}</p>
            <form id="wall-registration-form" novalidate>
                <div class="form-group">
                    <label>${nameLabel}</label>
                    <input type="text" id="wall-name" required placeholder="${namePlaceholder}">
                    <span class="error-msg" id="wall-name-error"></span>
                </div>
                <div class="form-group">
                    <label>${emailLabel}</label>
                    <input type="email" id="wall-email" required placeholder="correo@ejemplo.com">
                    <span class="error-msg" id="wall-email-error"></span>
                </div>
                <div class="form-group">
                    <label>${phoneLabel}</label>
                    <input type="tel" id="wall-phone" required placeholder="Ej: 600123456" pattern="[0-9]{9}">
                    <span class="error-msg" id="wall-phone-error"></span>
                </div>
                <button type="submit" class="btn btn-primary full-width" style="margin-top: 10px;">${btnLabel}</button>
            </form>
        </div>
    `;

    document.body.appendChild(wallOverlay);

    // Validation logic for the injected form
    const wallForm = document.getElementById("wall-registration-form");
    const wallNameInput = document.getElementById("wall-name");
    const wallEmailInput = document.getElementById("wall-email");
    const wallPhoneInput = document.getElementById("wall-phone");

    const wallNameError = document.getElementById("wall-name-error");
    const wallEmailError = document.getElementById("wall-email-error");
    const wallPhoneError = document.getElementById("wall-phone-error");

    wallForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let isValid = true;

        // Name Validation
        const nameVal = wallNameInput.value.trim();
        if (nameVal.length < 6) {
            wallNameError.textContent = translations[currentLang]["err-name"];
            isValid = false;
        } else {
            wallNameError.textContent = "";
        }

        // Email Validation
        const emailVal = wallEmailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailVal)) {
            wallEmailError.textContent = translations[currentLang]["err-email"];
            isValid = false;
        } else {
            wallEmailError.textContent = "";
        }

        // Phone Validation
        const phoneVal = wallPhoneInput.value.trim();
        const phoneRegex = /^[0-9]{9}$/;
        if (!phoneRegex.test(phoneVal)) {
            wallPhoneError.textContent = translations[currentLang]["err-phone"];
            isValid = false;
        } else {
            wallPhoneError.textContent = "";
        }

        if (isValid) {
            // Save state
            localStorage.setItem("mazcufit_registrado", "true");
            localStorage.setItem("mazcufit_user", nameVal);

            // Animate wall out
            wallOverlay.classList.add("fade-out");

            // Restore scroll
            document.body.style.overflow = "";

            setTimeout(() => {
                wallOverlay.remove();

                // Hide Navbar link
                if (regLink) {
                    const liParent = regLink.closest("li");
                    if (liParent) {
                        liParent.style.display = "none";
                    }
                }

                // Show dynamic greeting if form exists on the current page
                checkLoginState();

                // Toast greeting
                showToast(translations[currentLang]["toast-login"], "success");
            }, 500);
        }
    });
}

// Execute registration wall controller on load
initRegistrationWall();

