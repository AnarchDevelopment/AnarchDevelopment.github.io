// Initialize Lucide icons
lucide.createIcons();

// Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
const brandLogo = document.getElementById('brand-logo');
const discordWidget = document.querySelector('.discord-widget');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileCloseBtn = document.querySelector('.mobile-close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileOverlay = document.querySelector('.mobile-overlay');
const mobileThemeIcon = document.querySelector('.sun-icon-mobile');
const mobileThemeText = document.querySelector('.theme-text-mobile');
const currentLangDisplay = document.getElementById('current-lang');
const langSelectors = document.querySelectorAll('.lang-selector');

// Translations
const translations = {
    es: {
        nav_clients: "Clients",
        client_amatayakul: "Amatayakul Client",
        client_aegleseeker: "Aegleseeker Client",
        nav_discord: "Discord",
        mobile_menu: "Menú",
        theme_light: "Cambiar a Claro",
        theme_dark: "Cambiar a Oscuro",
        hero_badge: "Bienvenido a",
        hero_bio: "Hacemos clients para Minecraft Windows 10 Edition beta 0.15.10 lol",
        hero_btn_clients: "Ver Clients",
        hero_btn_discord: "Únete a Discord",
        clients_title: "Nuestros Clients",
        amatayakul_desc: "Un client de utilidad PvP legítimo enfocado en el rendimiento y en mejorar tu experiencia de juego vanilla.",
        btn_get_client: "Obtener Client",
        aegleseeker_desc: "Un poderoso client hackeado con reach, expansión de hitbox y otros módulos para dominar la competencia.",
        community_title: "Comunidad",
        discord_join_title: "Únete a Anarch Development",
        discord_desc: "Conéctate con nuestros desarrolladores, obtén soporte y chatea con otros miembros.",
        btn_open_discord: "Abrir Discord",
        footer_text: "Anarch Development. Todos los derechos reservados."
    },
    en: {
        nav_clients: "Clients",
        client_amatayakul: "Amatayakul Client",
        client_aegleseeker: "Aegleseeker Client",
        nav_discord: "Discord",
        mobile_menu: "Menu",
        theme_light: "Switch to Light",
        theme_dark: "Switch to Dark",
        hero_badge: "Welcome to",
        hero_bio: "We make Minecraft Windows 10 Edition beta 0.15.10 clients lol",
        hero_btn_clients: "View Clients",
        hero_btn_discord: "Join Discord",
        clients_title: "Our Clients",
        amatayakul_desc: "A legit PvP utility client focused on seamless performance and enhancing your vanilla gameplay experience.",
        btn_get_client: "Get Client",
        aegleseeker_desc: "A powerful hacked client featuring reach, hitbox expansion, and various other modules to dominate the competition.",
        community_title: "Community",
        discord_join_title: "Join Anarch Development",
        discord_desc: "Connect with our developers, get support, and chat with other members.",
        btn_open_discord: "Open Discord",
        footer_text: "Anarch Development. All rights reserved."
    },
    pt: {
        nav_clients: "Clients",
        client_amatayakul: "Amatayakul Client",
        client_aegleseeker: "Aegleseeker Client",
        nav_discord: "Discord",
        mobile_menu: "Menu",
        theme_light: "Mudar para Claro",
        theme_dark: "Mudar para Escuro",
        hero_badge: "Bem-vindo à",
        hero_bio: "Nós fazemos clients de Minecraft Windows 10 Edition beta 0.15.10 lol",
        hero_btn_clients: "Ver Clients",
        hero_btn_discord: "Entrar no Discord",
        clients_title: "Nossos Clients",
        amatayakul_desc: "Um client utilitário PvP legítimo focado em desempenho e em melhorar sua experiência de jogo vanilla.",
        btn_get_client: "Obter Client",
        aegleseeker_desc: "Um poderoso client hackeado com reach, expansão de hitbox e vários outros módulos para dominar a competição.",
        community_title: "Comunidade",
        discord_join_title: "Junte-se à Anarch Development",
        discord_desc: "Conecte-se com nossos desenvolvedores, obtenha suporte e converse com outros membros.",
        btn_open_discord: "Abrir Discord",
        footer_text: "Anarch Development. Todos os direitos reservados."
    }
};

// State
let isDarkTheme = true;
let currentLang = 'es';

// Theme Initialization
function initTheme() {
    const savedTheme = localStorage.getItem('anarch-theme');
    
    // Default is dark
    if (savedTheme === 'light') {
        isDarkTheme = false;
    } else {
        isDarkTheme = true;
    }

    // i18n Initialization
    const savedLang = localStorage.getItem('anarch-lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    setLanguage(currentLang);

    applyTheme();
}

function applyTheme() {
    if (isDarkTheme) {
        document.documentElement.setAttribute('data-theme', 'dark');
        brandLogo.src = 'assets/anarch_dark.png';
        discordWidget.src = 'https://discord.com/widget?id=1503215502959317103&theme=dark';
        
        // Update Icons for Desktop
        document.querySelector('.sun-icon').style.display = 'none';
        document.querySelector('.moon-icon').style.display = 'block';

        // Update Icons for Mobile
        if(mobileThemeIcon) {
            mobileThemeIcon.setAttribute('data-lucide', 'moon');
        }
        if(mobileThemeText) {
            mobileThemeText.textContent = translations[currentLang].theme_light;
        }

    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        brandLogo.src = 'assets/anarch_light.png';
        discordWidget.src = 'https://discord.com/widget?id=1503215502959317103&theme=light';
        
        // Update Icons for Desktop
        document.querySelector('.sun-icon').style.display = 'block';
        document.querySelector('.moon-icon').style.display = 'none';

        // Update Icons for Mobile
        if(mobileThemeIcon) {
            mobileThemeIcon.setAttribute('data-lucide', 'sun');
        }
        if(mobileThemeText) {
            mobileThemeText.textContent = translations[currentLang].theme_dark;
        }
    }

    // Re-render mobile icon because we changed data-lucide
    lucide.createIcons();
}

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    localStorage.setItem('anarch-theme', isDarkTheme ? 'dark' : 'light');
    
    // Add simple animation class
    document.body.classList.add('theme-transitioning');
    applyTheme();
    
    setTimeout(() => {
        document.body.classList.remove('theme-transitioning');
    }, 300);
}

// Event Listeners
themeToggleBtn.addEventListener('click', toggleTheme);
if(mobileThemeToggleBtn) {
    mobileThemeToggleBtn.addEventListener('click', toggleTheme);
}

// Mobile Menu
function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
mobileCloseBtn.addEventListener('click', closeMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);

// i18n Functions
function setLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    localStorage.setItem('anarch-lang', lang);
    document.documentElement.lang = lang;
    
    if(currentLangDisplay) {
        currentLangDisplay.textContent = lang.toUpperCase();
    }

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update active state on mobile buttons
    langSelectors.forEach(btn => {
        if (btn.tagName === 'BUTTON') {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.remove('btn-outline');
                btn.classList.add('btn-primary');
            } else {
                btn.classList.add('btn-outline');
                btn.classList.remove('btn-primary');
            }
        }
    });
}

langSelectors.forEach(selector => {
    selector.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = e.currentTarget.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-item[href]').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize
initTheme();
