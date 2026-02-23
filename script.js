// Song Database with Cajon Notation (B = Bas, T = Ton, - = Rest)
const songDatabase = {
    'wszystko-co-mam': {
        title: 'Wszystko, co mam to gitara',
        tempo: '120 BPM',
        difficulty: 'Średni',
        notation: 'B - T - B - T - | B T T - B - T T | B - - T - - B T | B - T - B T T - | B - - T - T B - | B T - - B - T T | B T T T B - T - | B - T T B T - - | B T T - B T T T | B - - T B - T -'
    },
    'hej-sokoly': {
        title: 'Hej, sokoły',
        tempo: '140 BPM',
        difficulty: 'Łatwy',
        notation: 'B - T - B - T - | B - T - B T - - | B - T - B - T T | B - - - B T - - | B T - T B T - T | B - T - B T T - | B T - T B T - T | B - - T B - - -'
    },
    'krakowiak': {
        title: 'Krakowiak (Krakowiaczek)',
        tempo: '130 BPM',
        difficulty: 'Średni',
        notation: 'B T B T B T - - | B - T - B T T - | B T B T B - T - | B T - T B - - - | B T T - B T T - | B - T T B T - T | B T T - B T T - | B - - T B - - -'
    },
    'plonie-ognisko': {
        title: 'Płonie ognisko i szumią knieje',
        tempo: '110 BPM',
        difficulty: 'Średni',
        notation: 'B - - T - - B T | B - T T - - B - | B - - T - T B T | B - T - - - B - | B T T - B T T - | B - T T B - T T | B T T - B T - T | B - - T B - - -'
    },
    'marsz-pierwszej-brygady': {
        title: 'Marsz Pierwszej Brygady',
        tempo: '130 BPM',
        difficulty: 'Trudny',
        notation: 'B T B T B T T T | B T B T B - T - | B T T - B T T - | B - T T B T - T | B T T T B - T T | B T - T B T T - | B T T T B T T T | B T B T B T T - | B T T T B T T T | B T B T B - - -'
    },
    'szla-dzieweczka': {
        title: 'Szła dzieweczka',
        tempo: '100 BPM',
        difficulty: 'Łatwy',
        notation: 'B - T - B - T - | B - - T B - T - | B - T - B - T - | B - - - B T - - | B - T T B - T - | B - T - B T - - | B - T T B - T T | B - - T B - - -'
    },
    'op-op-opole': {
        title: 'Op, op, opole',
        tempo: '135 BPM',
        difficulty: 'Łatwy',
        notation: 'B - T - B T - - | B T - T B - T - | B - T - B T - T | B - - T B - - - | B T T - B T T - | B - T T B T - - | B T T - B T T - | B - - T B - - -'
    },
    'harcerska-dola': {
        title: 'Harcerska dola',
        tempo: '115 BPM',
        difficulty: 'Średni',
        notation: 'B - T - B T - - | B T - T B - T - | B - T T B - T - | B T - - B T T - | B T T - B T - T | B - T T B T T - | B T T - B T - T | B - T - B - - -'
    },
    'rozkwitaly-paki-bialek': {
        title: 'Rozkwitały pąki białek',
        tempo: '105 BPM',
        difficulty: 'Średni',
        notation: 'B - - T - - B T | B - T - - T B - | B - - T - T B T | B T - - - - B - | B T - T B - T T | B - T T B T - - | B T - T B - T T | B - - T B - - -'
    },
    'serce-w-plecaku': {
        title: 'Serce w plecaku',
        tempo: '125 BPM',
        difficulty: 'Łatwy',
        notation: 'B - T - B - T - | B T - - B T T - | B - T - B - T T | B - - T B - - - | B T T - B T T - | B - T T B - T T | B T T - B T T - | B - - T B - - -'
    },
    'ponad-polami': {
        title: 'Ponad polami, lasami',
        tempo: '110 BPM',
        difficulty: 'Średni',
        notation: 'B - T T - - B T | B - - T - T B - | B T T - - T B T | B - T - - - B - | B T - T B T - T | B - T T B T T - | B T - T B T - T | B - - T B - - -'
    },
    'wiatry-nam-spiewaja': {
        title: 'Wiatry nam śpiewają',
        tempo: '120 BPM',
        difficulty: 'Łatwy',
        notation: 'B - T - B - T - | B - T T B - T - | B - T - B T T - | B - - T B - - - | B T T - B T T - | B - T T B T - - | B T T - B T T T | B - - T B - - -'
    },
    'szalala-w-polu': {
        title: 'Szalała w polu',
        tempo: '125 BPM',
        difficulty: 'Średni',
        notation: 'B T - T B - T - | B - T T B T - - | B T - T B - T T | B - - T B - - - | B T T - B T - T | B - T T B T T - | B T T - B T - T | B - - T B - - -'
    },
    'red-is-the-rose': {
        title: 'Red is the Rose',
        tempo: '95 BPM',
        difficulty: 'Średni',
        notation: 'B - - T - - B T | B - T - - - B - | B - - T - T B - | B T - - - - B - | B T - T B - T - | B - T - B T - - | B T - T B - T T | B - - T B - - -'
    }
};

// Audio Context for Cajon Sounds
let audioContext = null;
let basSound = null;
let tonSound = null;

function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Generate realistic cajon sounds using Web Audio API
function createBasSound() {
    if (!audioContext) initAudio();
    
    const duration = 0.3;
    const now = audioContext.currentTime;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(80, now);
    oscillator.frequency.exponentialRampToValueAtTime(40, now + duration);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, now);
    
    gainNode.gain.setValueAtTime(0.8, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);
    
    oscillator.start(now);
    oscillator.stop(now + duration);
}

function createTonSound() {
    if (!audioContext) initAudio();
    
    const duration = 0.15;
    const now = audioContext.currentTime;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(800, now);
    oscillator.frequency.exponentialRampToValueAtTime(400, now + duration);
    
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(600, now);
    
    gainNode.gain.setValueAtTime(0.5, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);
    
    oscillator.start(now);
    oscillator.stop(now + duration);
}

// Favorites Management
let favorites = JSON.parse(localStorage.getItem('cajon-favorites') || '[]');

function toggleFavorite(songId) {
    const index = favorites.indexOf(songId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(songId);
    }
    localStorage.setItem('cajon-favorites', JSON.stringify(favorites));
    updateFavoriteButtons();
}

function updateFavoriteButtons() {
    document.querySelectorAll('.song-item').forEach(item => {
        const songId = item.getAttribute('data-song');
        const btn = item.querySelector('.favorite-btn');
        if (btn) {
            btn.textContent = favorites.includes(songId) ? '★' : '☆';
            btn.classList.toggle('active', favorites.includes(songId));
        }
    });
}

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
    const svg = sidebarToggle.querySelector('.toggle-svg path');
    if (sidebar.classList.contains('collapsed')) {
        svg.setAttribute('d', 'M9 18l6-6-6-6');
    } else {
        svg.setAttribute('d', 'M15 18l-6-6 6-6');
    }
    localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
});

const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
if (sidebarCollapsed) {
    sidebar.classList.add('collapsed');
    const svg = sidebarToggle.querySelector('.toggle-svg path');
    svg.setAttribute('d', 'M9 18l6-6-6-6');
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
        
        item.style.display = (matchesDifficulty && matchesCategory) ? 'flex' : 'none';
    });
}

// Show only favorites
const favoritesBtn = document.getElementById('favoritesBtn');
let showingFavoritesOnly = false;

favoritesBtn.addEventListener('click', () => {
    showingFavoritesOnly = !showingFavoritesOnly;
    favoritesBtn.classList.toggle('active', showingFavoritesOnly);
    
    const songItems = document.querySelectorAll('.song-item');
    songItems.forEach(item => {
        const songId = item.getAttribute('data-song');
        if (showingFavoritesOnly) {
            item.style.display = favorites.includes(songId) ? 'flex' : 'none';
        } else {
            item.style.display = 'flex';
            applyFilters();
        }
    });
});

// Sorting
const sortSelect = document.getElementById('sortSelect');

sortSelect.addEventListener('change', () => {
    const sortValue = sortSelect.value;
    if (sortValue === 'default') return;
    
    const songsList = document.querySelector('.songs-list');
    const songItems = Array.from(songsList.querySelectorAll('.song-item'));
    
    songItems.sort((a, b) => {
        const titleA = a.querySelector('.song-title').textContent;
        const titleB = b.querySelector('.song-title').textContent;
        const diffA = a.getAttribute('data-difficulty');
        const diffB = b.getAttribute('data-difficulty');
        
        const diffOrder = { 'latwy': 1, 'sredni': 2, 'trudny': 3 };
        
        switch(sortValue) {
            case 'title-asc':
                return titleA.localeCompare(titleB, 'pl');
            case 'title-desc':
                return titleB.localeCompare(titleA, 'pl');
            case 'difficulty-asc':
                return diffOrder[diffA] - diffOrder[diffB];
            case 'difficulty-desc':
                return diffOrder[diffB] - diffOrder[diffA];
            default:
                return 0;
        }
    });
    
    songItems.forEach(item => songsList.appendChild(item));
});

// Search Functionality
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const songItems = document.querySelectorAll('.song-item');
    
    songItems.forEach(item => {
        const title = item.querySelector('.song-title').textContent.toLowerCase();
        const currentDisplay = item.style.display;
        
        if (title.includes(searchTerm)) {
            item.style.display = currentDisplay === 'none' ? currentDisplay : 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

// Modal System
const modal = document.getElementById('sheetModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
let currentPlayingSong = null;

function openModal(songId) {
    const song = songDatabase[songId];
    if (!song) return;
    
    currentPlayingSong = songId;
    modalTitle.textContent = song.title;
    document.getElementById('sheetTempo').textContent = song.tempo;
    document.getElementById('sheetDifficulty').textContent = song.difficulty;
    
    const notationContent = document.getElementById('notationContent');
    notationContent.innerHTML = '';
    
    // Display notation as single combined line
    const notationDiv = document.createElement('div');
    notationDiv.className = 'notation-combined';
    
    const measures = song.notation.split(' | ');
    measures.forEach((measure, index) => {
        const measureDiv = document.createElement('div');
        measureDiv.className = 'notation-measure';
        
        const beats = measure.split(' ');
        beats.forEach(beat => {
            const beatSpan = document.createElement('span');
            beatSpan.className = 'beat';
            beatSpan.textContent = beat;
            
            if (beat === 'B') beatSpan.classList.add('bas');
            else if (beat === 'T') beatSpan.classList.add('ton');
            else if (beat === '-') beatSpan.classList.add('rest');
            else if (beat.toLowerCase() === 'b' || beat.toLowerCase() === 't') {
                beatSpan.classList.add('soft');
            }
            
            measureDiv.appendChild(beatSpan);
        });
        
        if (index < measures.length - 1) {
            const separator = document.createElement('span');
            separator.className = 'measure-separator';
            separator.textContent = '|';
            measureDiv.appendChild(separator);
        }
        
        notationDiv.appendChild(measureDiv);
    });
    
    notationContent.appendChild(notationDiv);
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    currentPlayingSong = null;
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Play song notation as sound
const playModalBtn = document.getElementById('playModalBtn');
let isPlaying = false;

playModalBtn.addEventListener('click', () => {
    if (isPlaying || !currentPlayingSong) return;
    
    const song = songDatabase[currentPlayingSong];
    if (!song) return;
    
    initAudio();
    isPlaying = true;
    playModalBtn.textContent = '⏸';
    
    const notation = song.notation.replace(/\s*\|\s*/g, ' ').split(' ').filter(n => n);
    const tempo = parseInt(song.tempo);
    const beatDuration = 60000 / tempo; // milliseconds per beat
    
    let currentBeat = 0;
    const playInterval = setInterval(() => {
        if (currentBeat >= notation.length) {
            clearInterval(playInterval);
            isPlaying = false;
            playModalBtn.textContent = '▶';
            return;
        }
        
        const beat = notation[currentBeat];
        if (beat === 'B') createBasSound();
        else if (beat === 'T') createTonSound();
        
        currentBeat++;
    }, beatDuration);
});

// Song Item Clicks and Actions
document.addEventListener('click', (e) => {
    // Song item click (open modal)
    const songItem = e.target.closest('.song-item:not(.play-btn):not(.favorite-btn)');
    if (songItem && !e.target.closest('.song-actions')) {
        const songId = songItem.getAttribute('data-song');
        openModal(songId);
        return;
    }
    
    // Play button click
    if (e.target.closest('.play-btn')) {
        e.stopPropagation();
        const songItem = e.target.closest('.song-item');
        const songId = songItem.getAttribute('data-song');
        const song = songDatabase[songId];
        
        if (!song) return;
        
        initAudio();
        const notation = song.notation.replace(/\s*\|\s*/g, ' ').split(' ').filter(n => n);
        const tempo = parseInt(song.tempo);
        const beatDuration = 60000 / tempo;
        
        let currentBeat = 0;
        const playInterval = setInterval(() => {
            if (currentBeat >= notation.length) {
                clearInterval(playInterval);
                return;
            }
            
            const beat = notation[currentBeat];
            if (beat === 'B') createBasSound();
            else if (beat === 'T') createTonSound();
            
            currentBeat++;
        }, beatDuration);
        return;
    }
    
    // Favorite button click
    if (e.target.closest('.favorite-btn')) {
        e.stopPropagation();
        const songItem = e.target.closest('.song-item');
        const songId = songItem.getAttribute('data-song');
        toggleFavorite(songId);
        return;
    }
    
    // Sound test buttons in techniques
    if (e.target.closest('.sound-test-btn')) {
        const card = e.target.closest('.technique-card');
        const sound = card.getAttribute('data-sound');
        
        initAudio();
        if (sound === 'bas') {
            createBasSound();
        } else if (sound === 'ton') {
            createTonSound();
        }
        return;
    }
    
    // Video card clicks
    if (e.target.closest('.video-card')) {
        const videoCard = e.target.closest('.video-card');
        const videoId = videoCard.getAttribute('data-video');
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
        return;
    }
});

// Tutorial & Exercise Cards
const tutorialCards = document.querySelectorAll('.tutorial-card');
tutorialCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        alert(`${title}\n\n${card.querySelector('p').textContent}`);
    });
});

const exerciseCards = document.querySelectorAll('.exercise-card');
exerciseCards.forEach(card => {
    card.addEventListener('click', () => {
        const pattern = card.querySelector('.exercise-pattern').textContent;
        const title = card.querySelector('h3').textContent;
        
        initAudio();
        const notation = pattern.split(' ').filter(n => n);
        
        let currentBeat = 0;
        const playInterval = setInterval(() => {
            if (currentBeat >= notation.length) {
                clearInterval(playInterval);
                return;
            }
            
            const beat = notation[currentBeat];
            if (beat === 'B') createBasSound();
            else if (beat === 'T') createTonSound();
            
            currentBeat++;
        }, 400); // Fixed tempo for exercises
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

// Initialize favorites on page load
updateFavoriteButtons();

// Console Message
console.log('%cCajonHarc - Nuty na Cajon', 'color: #82a427; font-size: 18px; font-weight: bold;');
console.log('Skróty: Ctrl+K (szukaj), Ctrl+B (menu), Ctrl+T (motyw), ESC (zamknij)');
