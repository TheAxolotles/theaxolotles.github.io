// Song Database with Cajon Notation (B = Bas, T = Ton, - = Rest)
const songDatabase = {
    'wszystko-co-mam': {
        title: 'Wszystko, co mam to gitara',
        tempo: '120 BPM',
        difficulty: 'Średni',
        notation: [
            { section: 'Intro', lines: [
                'B - T - B - T -',
                'B T T - B - T T'
            ]},
            { section: 'Zwrotka', lines: [
                'B - - T - - B T',
                'B - T - B T T -',
                'B - - T - T B -',
                'B T - - B - T T'
            ]},
            { section: 'Refren', lines: [
                'B T T T B - T -',
                'B - T T B T - -',
                'B T T - B T T T',
                'B - - T B - T -'
            ]}
        ]
    },
    'hej-sokoly': {
        title: 'Hej, sokoły',
        tempo: '140 BPM',
        difficulty: 'Łatwy',
        notation: [
            { section: 'Zwrotka', lines: [
                'B - T - B - T -',
                'B - T - B T - -',
                'B - T - B - T T',
                'B - - - B T - -'
            ]},
            { section: 'Refren', lines: [
                'B T - T B T - T',
                'B - T - B T T -',
                'B T - T B T - T',
                'B - - T B - - -'
            ]}
        ]
    },
    'plonie-ognisko': {
        title: 'Płonie ognisko i szumią knieje',
        tempo: '110 BPM',
        difficulty: 'Średni',
        notation: [
            { section: 'Zwrotka', lines: [
                'B - - T - - B T',
                'B - T T - - B -',
                'B - - T - T B T',
                'B - T - - - B -'
            ]},
            { section: 'Refren', lines: [
                'B T T - B T T -',
                'B - T T B - T T',
                'B T T - B T - T',
                'B - - T B - - -'
            ]}
        ]
    },
    'marsz-pierwszej-brygady': {
        title: 'Marsz Pierwszej Brygady',
        tempo: '130 BPM',
        difficulty: 'Trudny',
        notation: [
            { section: 'Intro', lines: [
                'B T B T B T T T',
                'B T B T B - T -'
            ]},
            { section: 'Zwrotka', lines: [
                'B T T - B T T -',
                'B - T T B T - T',
                'B T T T B - T T',
                'B T - T B T T -'
            ]},
            { section: 'Refren', lines: [
                'B T T T B T T T',
                'B T B T B T T -',
                'B T T T B T T T',
                'B T B T B - - -'
            ]}
        ]
    },
    'szla-dzieweczka': {
        title: 'Szła dzieweczka',
        tempo: '100 BPM',
        difficulty: 'Łatwy',
        notation: [
            { section: 'Zwrotka', lines: [
                'B - T - B - T -',
                'B - - T B - T -',
                'B - T - B - T -',
                'B - - - B T - -'
            ]},
            { section: 'Refren', lines: [
                'B - T T B - T -',
                'B - T - B T - -',
                'B - T T B - T T',
                'B - - T B - - -'
            ]}
        ]
    },
    'harcerska-dola': {
        title: 'Harcerska dola',
        tempo: '115 BPM',
        difficulty: 'Średni',
        notation: [
            { section: 'Zwrotka', lines: [
                'B - T - B T - -',
                'B T - T B - T -',
                'B - T T B - T -',
                'B T - - B T T -'
            ]},
            { section: 'Refren', lines: [
                'B T T - B T - T',
                'B - T T B T T -',
                'B T T - B T - T',
                'B - T - B - - -'
            ]}
        ]
    },
    'rozkwitaly-paki-bialek': {
        title: 'Rozkwitały pąki białek',
        tempo: '105 BPM',
        difficulty: 'Średni',
        notation: [
            { section: 'Zwrotka', lines: [
                'B - - T - - B T',
                'B - T - - T B -',
                'B - - T - T B T',
                'B T - - - - B -'
            ]},
            { section: 'Refren', lines: [
                'B T - T B - T T',
                'B - T T B T - -',
                'B T - T B - T T',
                'B - - T B - - -'
            ]}
        ]
    },
    'serce-w-plecaku': {
        title: 'Serce w plecaku',
        tempo: '125 BPM',
        difficulty: 'Łatwy',
        notation: [
            { section: 'Zwrotka', lines: [
                'B - T - B - T -',
                'B T - - B T T -',
                'B - T - B - T T',
                'B - - T B - - -'
            ]},
            { section: 'Refren', lines: [
                'B T T - B T T -',
                'B - T T B - T T',
                'B T T - B T T -',
                'B - - T B - - -'
            ]}
        ]
    },
    'ponad-polami': {
        title: 'Ponad polami, lasami',
        tempo: '110 BPM',
        difficulty: 'Średni',
        notation: [
            { section: 'Zwrotka', lines: [
                'B - T T - - B T',
                'B - - T - T B -',
                'B T T - - T B T',
                'B - T - - - B -'
            ]},
            { section: 'Refren', lines: [
                'B T - T B T - T',
                'B - T T B T T -',
                'B T - T B T - T',
                'B - - T B - - -'
            ]}
        ]
    },
    'wiatry-nam-spiewaja': {
        title: 'Wiatry nam śpiewają',
        tempo: '120 BPM',
        difficulty: 'Łatwy',
        notation: [
            { section: 'Zwrotka', lines: [
                'B - T - B - T -',
                'B - T T B - T -',
                'B - T - B T T -',
                'B - - T B - - -'
            ]},
            { section: 'Refren', lines: [
                'B T T - B T T -',
                'B - T T B T - -',
                'B T T - B T T T',
                'B - - T B - - -'
            ]}
        ]
    }
};

// Theme Management
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeText = document.querySelector('.theme-text');

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
    themeText.textContent = theme === 'dark' ? 'Motyw jasny' : 'Motyw ciemny';
}

// Sidebar Toggle
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
});

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
        
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        contentSections.forEach(section => {
            section.classList.toggle('active', section.getAttribute('data-section') === sectionName);
        });
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Filter System
const filterBtn = document.getElementById('filterBtn');
const filterPanel = document.getElementById('filterPanel');
const filterCheckboxes = document.querySelectorAll('.filter-checkbox');

filterBtn.addEventListener('click', () => {
    filterPanel.classList.toggle('open');
    filterBtn.classList.toggle('active');
});

filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
});

function applyFilters() {
    const selectedDifficulties = Array.from(document.querySelectorAll('.filter-checkbox[data-filter="difficulty"]:checked'))
        .map(cb => cb.value);
    const selectedCategories = Array.from(document.querySelectorAll('.filter-checkbox[data-filter="category"]:checked'))
        .map(cb => cb.value);
    
    const songItems = document.querySelectorAll('.song-item');
    
    songItems.forEach(item => {
        const difficulty = item.getAttribute('data-difficulty');
        const category = item.getAttribute('data-category');
        
        const matchesDifficulty = selectedDifficulties.includes(difficulty);
        const matchesCategory = selectedCategories.includes(category);
        
        item.style.display = (matchesDifficulty && matchesCategory) ? 'block' : 'none';
    });
}

// Search Functionality
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const songItems = document.querySelectorAll('.song-item');
    
    songItems.forEach(item => {
        const title = item.querySelector('.song-title').textContent.toLowerCase();
        item.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
});

// Modal System
const modal = document.getElementById('sheetModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

function openModal(songId) {
    const song = songDatabase[songId];
    if (!song) return;
    
    modalTitle.textContent = song.title;
    document.getElementById('sheetTempo').textContent = song.tempo;
    document.getElementById('sheetDifficulty').textContent = song.difficulty;
    
    const notationContent = document.getElementById('notationContent');
    notationContent.innerHTML = '';
    
    song.notation.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'notation-section';
        
        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'notation-section-title';
        sectionTitle.textContent = section.section;
        sectionDiv.appendChild(sectionTitle);
        
        section.lines.forEach(line => {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'notation-line';
            
            line.split('').forEach(char => {
                const beat = document.createElement('span');
                beat.className = 'beat';
                beat.textContent = char;
                
                if (char === 'B') beat.classList.add('bas');
                else if (char === 'T') beat.classList.add('ton');
                else if (char === '-') beat.classList.add('rest');
                
                lineDiv.appendChild(beat);
            });
            
            sectionDiv.appendChild(lineDiv);
        });
        
        notationContent.appendChild(sectionDiv);
    });
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Song Item Clicks
const songItems = document.querySelectorAll('.song-item');
songItems.forEach(item => {
    item.addEventListener('click', () => {
        const songId = item.getAttribute('data-song');
        openModal(songId);
    });
});

// Tutorial & Exercise Cards
const tutorialCards = document.querySelectorAll('.tutorial-card');
tutorialCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        alert(`Otwieranie: ${title}\n\nTa sekcja zostanie wkrótce rozbudowana!`);
    });
});

const exerciseCards = document.querySelectorAll('.exercise-card');
exerciseCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        alert(`Otwieranie: ${title}\n\nTa sekcja zostanie wkrótce rozbudowana!`);
    });
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        sidebar.classList.toggle('collapsed');
    }
    
    if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        themeToggle.click();
    }
    
    if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
    }
});

// Console Message
console.log('%cCajonHarc - Nuty na Cajon', 'color: #82a427; font-size: 18px; font-weight: bold;');
console.log('%cCzuwaj!', 'color: #82a427; font-size: 14px;');
console.log('Skróty: Ctrl+K (szukaj), Ctrl+B (menu), Ctrl+T (motyw), ESC (zamknij)');
