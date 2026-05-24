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
const desktopThemeIcon = document.querySelector('.sun-icon');
const desktopMoonIcon = document.querySelector('.moon-icon');

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
        nav_home: "Inicio",
        info_badge: "Info Client",
        info_description_amatayakul: "Amatayakul es un client para Minecraft Windows 10 Edition Beta 0.15.10, diseñado específicamente para esta versión. El proyecto oficial recomienda reportar bugs en Discord a zhenrikepvp_ (Henrike).",
        info_description_aegleseeker: "Aegleseeker es un framework interno que hookea DirectX 11 y muestra una interfaz ImGui en el juego. Ofrece una arquitectura modular con features avanzadas como reach, hitbox, AutoSprint, Motion Blur y FPS overlay.",
        info_back: "Volver",
        info_repo_button: "Repo oficial",
        info_details_title: "Detalles",
        info_official_details_title: "Detalles oficiales",
        info_details_text_amatayakul: "El repo de Amatayakul describe el proyecto como un client específico para Minecraft Windows 10 Edition Beta 0.15.10. La información oficial del proyecto lo posiciona como una versión adaptada a esa build de MCPE.",
        info_item_mcpe_version: "Cliente para Minecraft Windows 10 Edition Beta 0.15.10",
        info_item_compatibility: "Enfocado en compatibilidad con la versión beta indicada",
        info_item_bug_report: "Se recomienda reportar bugs en Discord a zhenrikepvp_ (Henrike)",
        info_item_repo: "Repo oficial: AnarchDevelopment/AmatayakulDLL",
        info_repo_features_title: "Características del repo",
        info_details_text_aegleseeker: "El repositorio describe a Aegleseeker como un cliente interno con gancho de DirectX 11, interfaz ImGui y un sistema de módulos completo para combate, movimiento, visuales y utilidades.",
        info_license_label: "Licencia:",
        info_item_dx11_hook: "Hook de DirectX 11 con acceso a frame-level",
        info_item_imgui: "Interfaz ImGui arrastrable y con pestañas",
        info_item_modularity: "Modularidad: Combat, Movement, Visuals, Misc",
        info_item_features: "Funciones clave: Reach, Hitbox, AutoSprint, Timer, FullBright, Unlock FPS, Motion Blur",
        info_item_visuals: "Visuales avanzados: Render Info, Keystrokes, Watermark",
        info_item_requirements: "Requiere Windows 10+ x64 y GPU compatible con DirectX 11",
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
        nav_home: "Home",
        info_badge: "Client Info",
        info_description_amatayakul: "Amatayakul is a client for Minecraft Windows 10 Edition Beta 0.15.10, designed specifically for this version. The official project recommends reporting bugs on Discord to zhenrikepvp_ (Henrike).",
        info_description_aegleseeker: "Aegleseeker is an internal framework that hooks DirectX 11 and shows an in-game ImGui interface. It provides a modular architecture with advanced features like reach, hitbox, AutoSprint, Motion Blur, and FPS overlay.",
        info_back: "Back",
        info_repo_button: "Official repo",
        info_details_title: "Details",
        info_official_details_title: "Official details",
        info_details_text_amatayakul: "The Amatayakul repo describes the project as a client specific to Minecraft Windows 10 Edition Beta 0.15.10. The official project information positions it as a version adapted to that MCPE build.",
        info_item_mcpe_version: "Client for Minecraft Windows 10 Edition Beta 0.15.10",
        info_item_compatibility: "Focused on compatibility with the specified beta version",
        info_item_bug_report: "Report bugs on Discord to zhenrikepvp_ (Henrike)",
        info_item_repo: "Official repo: AnarchDevelopment/AmatayakulDLL",
        info_repo_features_title: "Repo features",
        info_details_text_aegleseeker: "The repository describes Aegleseeker as an internal client with a DirectX 11 hook, ImGui interface, and a full module system for combat, movement, visuals, and utilities.",
        info_license_label: "License:",
        info_item_dx11_hook: "DirectX 11 hook with frame-level access",
        info_item_imgui: "Draggable ImGui interface with tabs",
        info_item_modularity: "Modularity: Combat, Movement, Visuals, Misc",
        info_item_features: "Key features: Reach, Hitbox, AutoSprint, Timer, FullBright, Unlock FPS, Motion Blur",
        info_item_visuals: "Advanced visuals: Render Info, Keystrokes, Watermark",
        info_item_requirements: "Requires Windows 10+ x64 and a DirectX 11 compatible GPU",
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
        nav_home: "Início",
        info_badge: "Info do Client",
        info_description_amatayakul: "Amatayakul é um client para Minecraft Windows 10 Edition Beta 0.15.10, projetado especificamente para esta versão. O projeto oficial recomenda relatar bugs no Discord para zhenrikepvp_ (Henrike).",
        info_description_aegleseeker: "Aegleseeker é um framework interno que hookeia DirectX 11 e exibe uma interface ImGui no jogo. Ele oferece uma arquitetura modular com recursos avançados como reach, hitbox, AutoSprint, Motion Blur e overlay de FPS.",
        info_back: "Voltar",
        info_repo_button: "Repositório oficial",
        info_details_title: "Detalhes",
        info_official_details_title: "Detalhes oficiais",
        info_details_text_amatayakul: "O repo de Amatayakul descreve o projeto como um client específico para Minecraft Windows 10 Edition Beta 0.15.10. A informação oficial do projeto o posiciona como uma versão adaptada para essa build do MCPE.",
        info_item_mcpe_version: "Client para Minecraft Windows 10 Edition Beta 0.15.10",
        info_item_compatibility: "Focado em compatibilidade com a versão beta indicada",
        info_item_bug_report: "Recomenda-se relatar bugs no Discord para zhenrikepvp_ (Henrike)",
        info_item_repo: "Repositório oficial: AnarchDevelopment/AmatayakulDLL",
        info_repo_features_title: "Recursos do repo",
        info_details_text_aegleseeker: "O repositório descreve o Aegleseeker como um client interno com hook de DirectX 11, interface ImGui e um sistema completo de módulos para combate, movimento, visuais e utilitários.",
        info_license_label: "Licença:",
        info_item_dx11_hook: "Hook de DirectX 11 com acesso em nível de frame",
        info_item_imgui: "Interface ImGui arrastável com abas",
        info_item_modularity: "Modularidade: Combat, Movement, Visuals, Misc",
        info_item_features: "Funcionalidades principais: Reach, Hitbox, AutoSprint, Timer, FullBright, Unlock FPS, Motion Blur",
        info_item_visuals: "Visuais avançados: Render Info, Keystrokes, Watermark",
        info_item_requirements: "Requer Windows 10+ x64 e GPU compatível com DirectX 11",
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

    if (!savedTheme) {
        localStorage.setItem('anarch-theme', 'dark');
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
        if (brandLogo) {
            brandLogo.src = 'assets/anarch_dark.png';
        }
        if (discordWidget) {
            discordWidget.src = 'https://discord.com/widget?id=1503215502959317103&theme=dark';
        }
        
        // Update Icons for Desktop
        if (desktopThemeIcon) {
            desktopThemeIcon.style.display = 'none';
        }
        if (desktopMoonIcon) {
            desktopMoonIcon.style.display = 'block';
        }

        // Update Icons for Mobile
        if(mobileThemeIcon) {
            mobileThemeIcon.setAttribute('data-lucide', 'moon');
        }
        if(mobileThemeText) {
            mobileThemeText.textContent = translations[currentLang].theme_light;
        }

    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (brandLogo) {
            brandLogo.src = 'assets/anarch_light.png';
        }
        if (discordWidget) {
            discordWidget.src = 'https://discord.com/widget?id=1503215502959317103&theme=light';
        }
        
        // Update Icons for Desktop
        if (desktopThemeIcon) {
            desktopThemeIcon.style.display = 'block';
        }
        if (desktopMoonIcon) {
            desktopMoonIcon.style.display = 'none';
        }

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
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
}
if(mobileThemeToggleBtn) {
    mobileThemeToggleBtn.addEventListener('click', toggleTheme);
}

// Mobile Menu
function openMobileMenu() {
    if (mobileMenu) mobileMenu.classList.add('active');
    if (mobileOverlay) mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
}
if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileMenu);
}
if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
}

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
