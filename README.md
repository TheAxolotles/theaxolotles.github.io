# CajonHarc - Nuty na Cajon dla Harcerzy

Minimalistyczna aplikacja webowa do nauki gry na cajonie z repertuarem polskich pieśni harcerskich.

## Funkcje

- **Repertuar pieśni** - 10 popularnych polskich pieśni harcerskich z pełnymi nutami
- **System filtrów** - Filtruj pieśni według poziomu trudności i kategorii
- **Nuty na kliknięcie** - Kliknij pieśń aby zobaczyć pełne nuty dla cajona
- **Tryb jasny/ciemny** - Przełączaj między motywami
- **Minimalistyczny design** - Zaokrąglone elementy, czyste linie, bez emoji
- **Responsywny** - Działa na wszystkich urządzeniach
- **Oficjalne kolory ZHP** (#82a427)

## System nut

Cajon uproszczony do **2 podstawowych dźwięków**:
- **B** = Bas (uderz środkiem dłoni w centrum)
- **T** = Ton (uderz palcami w górę, blisko krawędzi)
- **-** = Pauza (cisza)

## Szybki start

Otwórz `index.html` w przeglądarce.

## Klawisze skrótów

- `Ctrl/Cmd + K` - Szukaj pieśni
- `Ctrl/Cmd + B` - Zwiń/rozwiń menu
- `Ctrl/Cmd + T` - Przełącz motyw
- `ESC` - Zamknij modal

## Repertuar

### Pieśni harcerskie (10)
1. Wszystko, co mam to gitara (Średni)
2. Hej, sokoły (Łatwy)
3. Płonie ognisko i szumią knieje (Średni)
4. Marsz Pierwszej Brygady (Trudny)
5. Szła dzieweczka (Łatwy)
6. Harcerska dola (Średni)
7. Rozkwitały pąki białek (Średni)
8. Serce w plecaku (Łatwy)
9. Ponad polami, lasami (Średni)
10. Wiatry nam śpiewają (Łatwy)

Każda pieśń zawiera:
- Pełne nuty podzielone na sekcje (Intro, Zwrotka, Refren)
- Tempo w BPM
- Poziom trudności
- Notację dla cajona (tylko B i T)

## Struktura

```
theaxolotles.github.io/
├── index.html          # Struktura strony
├── styles.css          # Style z zaokrągleniami
├── script.js           # Logika + baza nut
├── assets/
│   ├── fonts/          # Folder na Museo Sans
│   └── zhp-logo.svg    # Logo ZHP
└── README.md
```

## Personalizacja

### Dodaj czcionkę Museo Sans 500

1. Umieść plik czcionki w `assets/fonts/`
2. Zaktualizuj import w `styles.css`:

```css
@font-face {
    font-family: 'Museo Sans';
    src: url('assets/fonts/MuseoSans-500.woff2') format('woff2');
    font-weight: 500;
}
```

### Zamień logo ZHP

Zastąp `assets/zhp-logo.svg` oficjalnym logo (zalecane 200x200px).

## Kolory ZHP

- Główny: `#82a427`
- Hover: `#6d8a21`

## Jak używać

1. **Przeglądaj** - Lista pieśni w sekcji "Pieśni"
2. **Filtruj** - Kliknij "Filtry" aby wybrać poziom trudności lub kategorię
3. **Szukaj** - Wpisz nazwę pieśni w pole wyszukiwania
4. **Kliknij** - Kliknij pieśń aby zobaczyć pełne nuty
5. **Graj** - Czytaj notację i graj na cajonie!

## Legenda nut

W modalach z nutami:
- **Zielony B** = Bas
- **Niebieski T** = Ton  
- **Szary -** = Pauza

Każda linia reprezentuje takt, każdy znak jedną ósemkę.

## Przyszłe funkcje

- [ ] Odtwarzacz audio
- [ ] Eksport nut do PDF
- [ ] Metronom
- [ ] Więcej pieśni
- [ ] Video tutoriale

## Czuwaj!

**Związek Harcerstwa Polskiego**