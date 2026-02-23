// Song Database with Cajon Notation (B = Bas, T = Ton, - = Rest)
const songDatabase = {
    'wszystko-co-mam': {
        title: 'Wszystko, co mam to gitara',
        tempo: '120 BPM',
        difficulty: 'Średni',
        notation: 'B - T - B - T - | B T T - B - T T | B - - T - - B T | B - T - B T T - | B - - T - T B - | B T - - B - T T | B T T T B - T - | B - T T B T - - | B T T - B T T T | B - - T B - T -',
        sections: [
            { label: 'Intro', start: 0, end: 15 },
            { label: 'Zwrotka', start: 16, end: 47 },
            { label: 'Refren', start: 48, end: 79 }
        ]
    },
    'hej-sokoly': {
        title: 'Hej, sokoły',
        tempo: '140 BPM',
        difficulty: 'Łatwy',
        notation: 'B - T - B - T - | B - T - B T - - | B - T - B - T T | B - - - B T - - | B T - T B T - T | B - T - B T T - | B T - T B T - T | B - - T B - - -',
        sections: [
            { label: 'Zwrotka', start: 0, end: 31 },
            { label: 'Refren', start: 32, end: 63 }
        ]
    },
    'krakowiak': {
        title: 'Krakowiak (Krakowiaczek)',
        tempo: '130 BPM',
        difficulty: 'Średni',
        notation: 'B T B T B T - - | B - T - B T T - | B T B T B - T - | B T - T B - - - | B T T - B T T - | B - T T B T - T | B T T - B T T - | B - - T B - - -',
        sections: [
            { label: 'Intro', start: 0, end: 31 },
            { label: 'Refren', start: 32, end: 63 }
        ]
    },
    'plonie-ognisko': {
        title: 'Płonie ognisko i szumią knieje',
        tempo: '110 BPM',
        difficulty: 'Średni',
        notation: 'B - - T - - B T | B - T T - - B - | B - - T - T B T | B - T - - - B - | B T T - B T T - | B - T T B - T T | B T T - B T - T | B - - T B - - -',
        sections: [
            { label: 'Zwrotka', start: 0, end: 31 },
            { label: 'Refren', start: 32, end: 63 }
        ]
    },
    'marsz-pierwszej-brygady': {
        title: 'Marsz Pierwszej Brygady',
        tempo: '130 BPM',
        difficulty: 'Trudny',
        notation: 'B T B T B T T T | B T B T B - T - | B T T - B T T - | B - T T B T - T | B T T T B - T T | B T - T B T T - | B T T T B T T T | B T B T B T T - | B T T T B T T T | B T B T B - - -',
        sections: [
            { label: 'Intro', start: 0, end: 15 },
            { label: 'Zwrotka', start: 16, end: 47 },
            { label: 'Refren', start: 48, end: 79 }
        ]
    },
    'szla-dzieweczka': {
        title: 'Szła dzieweczka',
        tempo: '100 BPM',
        difficulty: 'Łatwy',
        notation: 'B - T - B - T - | B - - T B - T - | B - T - B - T - | B - - - B T - - | B - T T B - T - | B - T - B T - - | B - T T B - T T | B - - T B - - -',
        sections: [
            { label: 'Zwrotka', start: 0, end: 31 },
            { label: 'Refren', start: 32, end: 63 }
        ]
    },
    'op-op-opole': {
        title: 'Op, op, opole',
        tempo: '135 BPM',
        difficulty: 'Łatwy',
        notation: 'B - T - B T - - | B T - T B - T - | B - T - B T - T | B - - T B - - - | B T T - B T T - | B - T T B T - - | B T T - B T T - | B - - T B - - -',
        sections: [
            { label: 'Zwrotka', start: 0, end: 31 },
            { label: 'Refren', start: 32, end: 63 }
        ]
    },
    'harcerska-dola': {
        title: 'Harcerska dola',
        tempo: '115 BPM',
        difficulty: 'Średni',
        notation: 'B - T - B T - - | B T - T B - T - | B - T T B - T - | B T - - B T T - | B T T - B T - T | B - T T B T T - | B T T - B T - T | B - T - B - - -',
        sections: [
            { label: 'Zwrotka', start: 0, end: 31 },
            { label: 'Refren', start: 32, end: 63 }
        ]
    },
    'rozkwitaly-paki-bialek': {
        title: 'Rozkwitały pąki białek',
        tempo: '105 BPM',
        difficulty: 'Średni',
        notation: 'B - - T - - B T | B - T - - T B - | B - - T - T B T | B T - - - - B - | B T - T B - T T | B - T T B T - - | B T - T B - T T | B - - T B - - -',
        sections: [
            { label: 'Zwrotka', start: 0, end: 31 },
            { label: 'Refren', start: 32, end: 63 }
        ]
    },
    'serce-w-plecaku': {
        title: 'Serce w plecaku',
        tempo: '125 BPM',
        difficulty: 'Łatwy',
        notation: 'B - T - B - T - | B T - - B T T - | B - T - B - T T | B - - T B - - - | B T T - B T T - | B - T T B - T T | B T T - B T T - | B - - T B - - -',
        sections: [
            { label: 'Zwrotka', start: 0, end: 31 },
            { label: 'Refren', start: 32, end: 63 }
        ]
    },
    'ponad-polami': {
        title: 'Ponad polami, lasami',
        tempo: '110 BPM',
        difficulty: 'Średni',
        notation: 'B - T T - - B T | B - - T - T B - | B T T - - T B T | B - T - - - B - | B T - T B T - T | B - T T B T T - | B T - T B T - T | B - - T B - - -',
        sections: [
            { label: 'Zwrotka', start: 0, end: 31 },
            { label: 'Refren', start: 32, end: 63 }
        ]
    },
    'wiatry-nam-spiewaja': {
        title: 'Wiatry nam śpiewają',
        tempo: '120 BPM',
        difficulty: 'Łatwy',
        notation: 'B - T - B - T - | B - T T B - T - | B - T - B T T - | B - - T B - - - | B T T - B T T - | B - T T B T - - | B T T - B T T T | B - - T B - - -',
        sections: [
            { label: 'Zwrotka', start: 0, end: 31 },
            { label: 'Refren', start: 32, end: 63 }
        ]
    },
    'szalala-w-polu': {
        title: 'Szalała w polu',
        tempo: '125 BPM',
        difficulty: 'Średni',
        notation: 'B T - T B - T - | B - T T B T - - | B T - T B - T T | B - - T B - - - | B T T - B T - T | B - T T B T T - | B T T - B T - T | B - - T B - - -',
        sections: [
            { label: 'Zwrotka', start: 0, end: 31 },
            { label: 'Refren', start: 32, end: 63 }
        ]
    },
    'red-is-the-rose': {
        title: 'Red is the Rose',
        tempo: '95 BPM',
        difficulty: 'Średni',
        notation: 'B - - T - - B T | B - T - - - B - | B - - T - T B - | B T - - - - B - | B T - T B - T - | B - T - B T - - | B T - T B - T T | B - - T B - - -',
        sections: [
            { label: 'Zwrotka', start: 0, end: 31 },
            { label: 'Refren', start: 32, end: 63 }
        ]
    }
};

// Audio Context for Cajon Sounds
let audioContext = null;
let currentPlayInterval = null;

function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Generate realistic cajon sounds using Web Audio API - IMPROVED
function createBasSound() {
    if (!audioContext) initAudio();
    
    const duration = 0.5;
    const now = audioContext.currentTime;
    
    // Main bass oscillator - very deep
    const osc1 = audioContext.createOscillator();
    const gain1 = audioContext.createGain();
    const filter1 = audioContext.createBiquadFilter();
    
    osc1.connect(filter1);
    filter1.connect(gain1);
    gain1.connect(audioContext.destination);
    
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(55, now); // Lower frequency
    osc1.frequency.exponentialRampToValueAtTime(25, now + duration);
    
    filter1.type = 'lowpass';
    filter1.frequency.setValueAtTime(250, now);
    filter1.Q.setValueAtTime(1, now);
    
    gain1.gain.setValueAtTime(1.2, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + duration);
    
    // Body resonance with more presence
    const osc2 = audioContext.createOscillator();
    const gain2 = audioContext.createGain();
    const filter2 = audioContext.createBiquadFilter();
    
    osc2.connect(filter2);
    filter2.connect(gain2);
    gain2.connect(audioContext.destination);
    
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(110, now);
    osc2.frequency.exponentialRampToValueAtTime(60, now + duration);
    
    filter2.type = 'lowpass';
    filter2.frequency.setValueAtTime(350, now);
    filter2.Q.setValueAtTime(4, now);
    
    gain2.gain.setValueAtTime(0.5, now);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + duration);
    
    // Attack transient with noise
    const bufferSize = audioContext.sampleRate * 0.08;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.08));
    }
    
    const noise = audioContext.createBufferSource();
    const noiseGain = audioContext.createGain();
    const noiseFilter = audioContext.createBiquadFilter();
    
    noise.buffer = buffer;
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioContext.destination);
    
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(150, now);
    
    noiseGain.gain.setValueAtTime(0.8, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    
    // Sub bass for extra punch
    const osc3 = audioContext.createOscillator();
    const gain3 = audioContext.createGain();
    
    osc3.connect(gain3);
    gain3.connect(audioContext.destination);
    
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(35, now);
    osc3.frequency.exponentialRampToValueAtTime(20, now + 0.3);
    
    gain3.gain.setValueAtTime(0.7, now);
    gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    
    osc1.start(now);
    osc1.stop(now + duration);
    osc2.start(now);
    osc2.stop(now + duration);
    osc3.start(now);
    osc3.stop(now + 0.3);
    noise.start(now);
}

function createTonSound() {
    if (!audioContext) initAudio();
    
    const duration = 0.25;
    const now = audioContext.currentTime;
    
    // Sharp high frequency
    const osc1 = audioContext.createOscillator();
    const gain1 = audioContext.createGain();
    const filter1 = audioContext.createBiquadFilter();
    
    osc1.connect(filter1);
    filter1.connect(gain1);
    gain1.connect(audioContext.destination);
    
    osc1.type = 'square';
    osc1.frequency.setValueAtTime(1500, now);
    osc1.frequency.exponentialRampToValueAtTime(500, now + duration);
    
    filter1.type = 'bandpass';
    filter1.frequency.setValueAtTime(2500, now);
    filter1.Q.setValueAtTime(8, now);
    
    gain1.gain.setValueAtTime(0.4, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + duration);
    
    // Mid range body
    const osc2 = audioContext.createOscillator();
    const gain2 = audioContext.createGain();
    const filter2 = audioContext.createBiquadFilter();
    
    osc2.connect(filter2);
    filter2.connect(gain2);
    gain2.connect(audioContext.destination);
    
    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(900, now);
    osc2.frequency.exponentialRampToValueAtTime(350, now + duration);
    
    filter2.type = 'highpass';
    filter2.frequency.setValueAtTime(600, now);
    filter2.Q.setValueAtTime(2, now);
    
    gain2.gain.setValueAtTime(0.25, now);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + duration);
    
    // Metallic overtones
    const osc3 = audioContext.createOscillator();
    const gain3 = audioContext.createGain();
    const filter3 = audioContext.createBiquadFilter();
    
    osc3.connect(filter3);
    filter3.connect(gain3);
    gain3.connect(audioContext.destination);
    
    osc3.type = 'square';
    osc3.frequency.setValueAtTime(3000, now);
    osc3.frequency.exponentialRampToValueAtTime(1800, now + duration * 0.7);
    
    filter3.type = 'highpass';
    filter3.frequency.setValueAtTime(2000, now);
    
    gain3.gain.setValueAtTime(0.15, now);
    gain3.gain.exponentialRampToValueAtTime(0.001, now + duration * 0.7);
    
    // Crisp attack noise
    const bufferSize = audioContext.sampleRate * 0.06;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.03));
    }
    
    const noise = audioContext.createBufferSource();
    const noiseGain = audioContext.createGain();
    const noiseFilter = audioContext.createBiquadFilter();
    
    noise.buffer = buffer;
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioContext.destination);
    
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.setValueAtTime(2000, now);
    noiseFilter.Q.setValueAtTime(3, now);
    
    noiseGain.gain.setValueAtTime(0.9, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
    
    osc1.start(now);
    osc1.stop(now + duration);
    osc2.start(now);
    osc2.stop(now + duration);
    osc3.start(now);
    osc3.stop(now + duration * 0.7);
    noise.start(now);
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
    if (svg) svg.setAttribute('d', 'M9 18l6-6-6-6');
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
    
    // Display notation as single combined line with section labels
    const notationDiv = document.createElement('div');
    notationDiv.className = 'notation-combined';
    
    const measures = song.notation.split(' | ');
    let beatCounter = 0; // Track current beat position
    
    measures.forEach((measure, index) => {
        const measureDiv = document.createElement('div');
        measureDiv.className = 'notation-measure';
        
        const beats = measure.split(' ');
        beats.forEach(beat => {
            // Check if this beat starts a new section
            if (song.sections) {
                const section = song.sections.find(s => s.start === beatCounter);
                if (section) {
                    const sectionLabel = document.createElement('span');
                    sectionLabel.className = 'section-label';
                    sectionLabel.textContent = section.label;
                    measureDiv.appendChild(sectionLabel);
                }
            }
            
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
            beatCounter++;
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
    
    // Stop playback when modal closes
    if (currentPlayInterval) {
        clearInterval(currentPlayInterval);
        currentPlayInterval = null;
        isPlaying = false;
        playModalBtn.textContent = '▶';
    }
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Play song notation as sound in modal
const playModalBtn = document.getElementById('playModalBtn');
let isPlaying = false;

playModalBtn.addEventListener('click', () => {
    if (!currentPlayingSong) return;
    
    // If playing, pause it
    if (isPlaying) {
        if (currentPlayInterval) {
            clearInterval(currentPlayInterval);
            currentPlayInterval = null;
        }
        isPlaying = false;
        playModalBtn.textContent = '▶';
        return;
    }
    
    // Start playing
    const song = songDatabase[currentPlayingSong];
    if (!song) return;
    
    initAudio();
    isPlaying = true;
    playModalBtn.textContent = '⏸';
    
    const notation = song.notation.replace(/\s*\|\s*/g, ' ').split(' ').filter(n => n);
    const tempo = parseInt(song.tempo);
    const beatDuration = 60000 / tempo; // milliseconds per beat
    
    let currentBeat = 0;
    currentPlayInterval = setInterval(() => {
        if (currentBeat >= notation.length) {
            clearInterval(currentPlayInterval);
            currentPlayInterval = null;
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
    const songItem = e.target.closest('.song-item');
    if (songItem && !e.target.closest('.favorite-btn')) {
        const songId = songItem.getAttribute('data-song');
        openModal(songId);
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
    
    // Technique cards - entire card is clickable
    const techniqueCard = e.target.closest('.technique-card[data-sound]');
    if (techniqueCard) {
        const sound = techniqueCard.getAttribute('data-sound');
        
        // Add animation
        techniqueCard.style.transform = 'scale(0.95)';
        setTimeout(() => {
            techniqueCard.style.transform = '';
        }, 150);
        
        initAudio();
        if (sound === 'bas') {
            createBasSound();
        } else if (sound === 'ton') {
            createTonSound();
        }
        return;
    }
    
    // Tutorial cards - open modal
    const tutorialCard = e.target.closest('.tutorial-card[data-tutorial]');
    if (tutorialCard) {
        const tutorialId = tutorialCard.getAttribute('data-tutorial');
        openTutorialModal(tutorialId);
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

// Tutorial Modal System
const tutorialModal = document.getElementById('tutorialModal');
const tutorialOverlay = document.getElementById('tutorialOverlay');
const tutorialClose = document.getElementById('tutorialClose');
const tutorialTitle = document.getElementById('tutorialTitle');
const tutorialBody = document.getElementById('tutorialBody');

const tutorialContent = {
    'podstawowe': {
        title: 'Podstawowe uderzenia',
        content: `
            <div class="tutorial-section">
                <h3>Poznaj dwie podstawowe techniki: Bas i Ton</h3>
                
                <div class="tutorial-technique">
                    <h4>🥁 Bas (B)</h4>
                    <p><strong>Pozycja:</strong> Środek dłoni w centrum płyty czołowej</p>
                    <p><strong>Technika:</strong> Dłoń całkowicie rozluźniona, uderzenie głębokie i mięsiste</p>
                    <p><strong>Dźwięk:</strong> To najgłębszy dźwięk cajona - taki jak stopa w perkusji (kick drum)</p>
                </div>
                
                <div class="tutorial-technique">
                    <h4>🎵 Ton (T)</h4>
                    <p><strong>Pozycja:</strong> Opuszki palców przy górnej krawędzi płyty</p>
                    <p><strong>Technika:</strong> Palce lekko napięte, szybkie i ostre uderzenie</p>
                    <p><strong>Dźwięk:</strong> Wysoki, ostry dźwięk - jak werbel (snare drum)</p>
                </div>
                
                <div class="tutorial-tip">
                    <strong>💡 Wskazówka:</strong><br>
                    Ćwicz naprzemiennie B-T-B-T aż poczujesz wyraźną różnicę w brzmieniu. 
                    Bas powinien brzmieć głęboko i ciepło, ton ostro i jasno.
                </div>
            </div>
        `
    },
    'pozycja': {
        title: 'Pozycja rąk',
        content: `
            <div class="tutorial-section">
                <h3>Prawidłowe ułożenie dłoni jest kluczowe</h3>
                
                <div class="tutorial-technique">
                    <h4>👐 Ręce</h4>
                    <p>Powinny być rozluźnione i naturalnie zaokrąglone</p>
                    <p><strong>Nie rób:</strong> Nie zaciskaj pięści ani nie rozciągaj płasko</p>
                    <p><strong>Rób:</strong> Wyobraź sobie, że trzymasz piłkę tenisową - taka powinna być krzywizna dłoni</p>
                </div>
                
                <div class="tutorial-technique">
                    <h4>💪 Nadgarstki</h4>
                    <p>Elastyczne, pozwalają na naturalny ruch. <strong>Nie blokuj ich!</strong></p>
                    <p>Nadgarstki powinny "oddychać" i poruszać się swobodnie w górę i w dół</p>
                </div>
                
                <div class="tutorial-technique">
                    <h4>💫 Ramiona i łokcie</h4>
                    <p>Ramiona swobodnie opuszczone, łokcie lekko rozstawione</p>
                    <p>Nie przyciskaj łokci do ciała - potrzebujesz przestrzeni do ruchu</p>
                </div>
                
                <div class="tutorial-tip">
                    <strong>💡 Ćwiczenie:</strong><br>
                    Potrząśnij rękami jak gdyby się ich pozbywał wody - to idealna rozluźniona pozycja!
                    Zapamiętaj to uczucie i staraj się je zachować podczas gry.
                </div>
            </div>
        `
    },
    'siedzenie': {
        title: 'Jak siedzieć',
        content: `
            <div class="tutorial-section">
                <h3>Ergonomiczna pozycja zapobiega bólom</h3>
                
                <div class="tutorial-technique">
                    <h4>🪑 Cajon</h4>
                    <p><strong>Pozycja:</strong> Siadaj centralnie, cajon lekko pochylony do tyłu (około 10-15°)</p>
                    <p><strong>Dlaczego:</strong> Pochylenie ułatwia dostęp do górnej części płyty i jest wygodniejsze</p>
                </div>
                
                <div class="tutorial-technique">
                    <h4>🦶 Stopy i kolana</h4>
                    <p><strong>Stopy:</strong> Płasko na podłodze, na szerokość bioder</p>
                    <p><strong>Kolana:</strong> Ugięte w kącie około 90°</p>
                    <p>Stabilna pozycja stóp = stabilna gra!</p>
                </div>
                
                <div class="tutorial-technique">
                    <h4>🧍 Plecy i tułów</h4>
                    <p><strong>Plecy:</strong> Proste ale nie sztywne</p>
                    <p><strong>Tułów:</strong> Lekko pochylony do przodu (maksymalnie 10-15°)</p>
                    <p><strong>Nie rób:</strong> Nie pochylaj się nadmiernie nad cajonem - to męczy!</p>
                </div>
                
                <div class="tutorial-technique">
                    <h4>📏 Wysokość</h4>
                    <p>Ręce powinny swobodnie sięgać górnej części płyty bez nadmiernego wyciągania</p>
                    <p>Jeśli musisz się bardzo wyciągać - użyj podkładki pod stopy lub wybierz niższy cajon</p>
                </div>
                
                <div class="tutorial-tip">
                    <strong>💡 Pamiętaj:</strong><br>
                    Dobra pozycja pozwala grać godzinami bez zmęczenia. 
                    Przestań co jakiś czas i się rozciągnij - Twoje ciało ci podziękuje!
                </div>
            </div>
        `
    },
    'nuty': {
        title: 'Czytanie nut',
        content: `
            <div class="tutorial-section">
                <h3>Nasz system notacji jest prosty i intuicyjny</h3>
                
                <div class="tutorial-technique">
                    <h4>📝 Podstawowe znaki</h4>
                    <p><strong>B</strong> = Bas (głęboki dźwięk, środek dłoni, centrum płyty)</p>
                    <p><strong>T</strong> = Ton (wysoki dźwięk, palce, góra płyty)</p>
                    <p><strong>-</strong> = Pauza (cisza, nie graj, liczone w rytmie)</p>
                    <p><strong>|</strong> = Separator taktów (wizualne oddzielenie, nie graj)</p>
                </div>
                
                <div class="tutorial-technique">
                    <h4>🔤 Zaawansowane oznaczenia</h4>
                    <p><strong>b, t</strong> (małe litery) = Cichsze/delikatniejsze uderzenia (ghost notes)</p>
                    <p>Używane do dodania niuansów i dynamiki</p>
                </div>
                
                <div class="tutorial-technique">
                    <h4>📖 Jak czytać</h4>
                    <p><strong>1.</strong> Zawsze od lewej do prawej</p>
                    <p><strong>2.</strong> Każdy znak zajmuje równy czas (równe odstępy)</p>
                    <p><strong>3.</strong> Tempo podane jest przy utworze (np. 120 BPM = 120 uderzeń na minutę)</p>
                    <p><strong>4.</strong> Separator | dzieli nuty na takty dla łatwiejszego czytania</p>
                </div>
                
                <div class="tutorial-tip">
                    <strong>💡 Przykład:</strong><br>
                    <code class="notation-example">B - T - B T - - | B T T - B - T T</code><br><br>
                    Czytaj: "Bas, pauza, Ton, pauza, Bas-Ton, pauza, pauza | Bas-Ton-Ton, pauza, Bas, pauza, Ton-Ton"<br>
                    Zachowuj stały rytm - pauzy są równie ważne jak uderzenia!
                </div>
            </div>
        `
    }
};

function openTutorialModal(tutorialId) {
    const tutorial = tutorialContent[tutorialId];
    if (!tutorial) return;
    
    tutorialTitle.textContent = tutorial.title;
    tutorialBody.innerHTML = tutorial.content;
    
    tutorialModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeTutorialModal() {
    tutorialModal.classList.remove('open');
    document.body.style.overflow = '';
}

tutorialClose.addEventListener('click', closeTutorialModal);
tutorialOverlay.addEventListener('click', closeTutorialModal);

// Exercise Cards - click to play
const exerciseCards = document.querySelectorAll('.exercise-card');
exerciseCards.forEach(card => {
    card.addEventListener('click', () => {
        const pattern = card.querySelector('.exercise-pattern').textContent;
        
        // Add animation
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
        
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
