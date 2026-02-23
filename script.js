// Theme Management
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = document.querySelector('.theme-icon');
const themeText = document.querySelector('.theme-text');

// Load saved theme or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeButton(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
    if (theme === 'dark') {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Motyw jasny';
    } else {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Motyw ciemny';
    }
}

// Sidebar Toggle
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    const isCollapsed = sidebar.classList.contains('collapsed');
    localStorage.setItem('sidebarCollapsed', isCollapsed);
});

// Load sidebar state
const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
if (sidebarCollapsed) {
    sidebar.classList.add('collapsed');
}

// Navigation
const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const sectionName = item.getAttribute('data-section');
        
        // Update active nav item
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        // Show corresponding content section
        contentSections.forEach(section => {
            if (section.getAttribute('data-section') === sectionName) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Search Functionality
const searchInput = document.getElementById('searchInput');
const songCards = document.querySelectorAll('.song-card');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    songCards.forEach(card => {
        const title = card.querySelector('.song-title').textContent.toLowerCase();
        const meta = card.querySelector('.song-meta').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || meta.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

// Song Card Click Handlers
songCards.forEach(card => {
    const playBtn = card.querySelector('.play-btn');
    
    playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const songName = card.getAttribute('data-song');
        openSongSheet(songName);
    });
    
    card.addEventListener('click', () => {
        const songName = card.getAttribute('data-song');
        openSongSheet(songName);
    });
});

function openSongSheet(songName) {
    // Placeholder for opening song sheet modal/page
    alert(`Otwieranie nut dla: ${songName}\n\nTa funkcjonalność zostanie dodana wkrótce!`);
}

// Tutorial Cards
const tutorialCards = document.querySelectorAll('.tutorial-card');
tutorialCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        alert(`Otwieranie samouczka: ${title}\n\nTa funkcjonalność zostanie dodana wkrótce!`);
    });
});

// Exercise Cards
const exerciseCards = document.querySelectorAll('.exercise-card');
exerciseCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        alert(`Otwieranie ćwiczenia: ${title}\n\nTa funkcjonalność zostanie dodana wkrótce!`);
    });
});

// Technique Cards
const techniqueCards = document.querySelectorAll('.technique-card');
techniqueCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        alert(`Otwieranie techniki: ${title}\n\nTa funkcjonalność zostanie dodana wkrótce!`);
    });
});

// Filter Button
const filterBtn = document.getElementById('filterBtn');
filterBtn.addEventListener('click', () => {
    alert('Panel filtrów zostanie dodany wkrótce!');
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Ctrl/Cmd + B for sidebar toggle
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        sidebar.classList.toggle('collapsed');
    }
    
    // Ctrl/Cmd + T for theme toggle
    if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        themeToggle.click();
    }
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Console greeting
console.log('%c🏕️ CajonHarc - Nuty na Cajon 🥁', 'color: #82a427; font-size: 20px; font-weight: bold;');
console.log('%cCzuwaj! ⚜️', 'color: #82a427; font-size: 16px;');
console.log('%cSkróty klawiszowe:', 'color: #82a427; font-weight: bold;');
console.log('Ctrl/Cmd + K - Szukaj');
console.log('Ctrl/Cmd + B - Pokaż/Ukryj menu');
console.log('Ctrl/Cmd + T - Zmień motyw');
