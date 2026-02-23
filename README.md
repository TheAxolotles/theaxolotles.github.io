# 🥁 CajonHarc - Nuty na Cajon dla Harcerzy

Nowoczesna aplikacja webowa do nauki gry na cajonie z repertuarem polskich pieśni harcerskich.

## ✨ Funkcje

- **📚 Biblioteka pieśni** - Najpopularniejsze polskie pieśni harcerskie z nutami na cajon
- **🎓 Samouczki** - Nauka podstawowych technik gry na cajonie
- **💪 Ćwiczenia** - Rozwijaj swoje umiejętności z dedykowanymi ćwiczeniami
- **🎨 Tryb jasny/ciemny** - Przełączaj między motywami dla maksymalnego komfortu
- **📱 Responsywny design** - Działa na wszystkich urządzeniach
- **⚜️ Styl harcerski** - Oficjalne kolory ZHP (#82a427) i motywy skautowe

## 🚀 Rozpoczęcie

Otwórz plik `index.html` w przeglądarce. To wszystko!

## 🎹 Skróty klawiszowe

- `Ctrl/Cmd + K` - Szukaj pieśni
- `Ctrl/Cmd + B` - Zwiń/rozwiń menu boczne
- `Ctrl/Cmd + T` - Przełącz motyw

## 🎨 Personalizacja

### Dodanie własnej czcionki Museo Sans 500

1. Pobierz czcionkę Museo Sans 500
2. Umieść pliki czcionki w folderze `assets/fonts/`
3. Zaktualizuj @import w `styles.css`:

```css
@font-face {
    font-family: 'Museo Sans';
    src: url('assets/fonts/MuseoSans-500.woff2') format('woff2');
    font-weight: 500;
}
```

### Zmiana logo ZHP

Zamień plik `assets/zhp-logo.svg` na oficjalne logo ZHP. Zalecane wymiary: 200x200px.

## 📁 Struktura projektu

```
theaxolotles.github.io/
├── index.html          # Główna struktura strony
├── styles.css          # Style z motywami jasnym/ciemnym
├── script.js           # Interaktywność i przełączanie motywów
├── assets/
│   └── zhp-logo.svg    # Logo ZHP (zastąp oficjalnym)
└── README.md           # Ta dokumentacja
```

## 🎵 Legenda nut

- **B** - Bas (środek cajona)
- **T** - Ton (góra, blisko krawędzi)
- **S** - Slap (szybkie uderzenie w krawędź)
- **g** - Ghost note (ciche uderzenie)

## 🏕️ Kategorie

### Pieśni harcerskie
- Wszystko, co mam to gitara
- Hej, sokoły
- Płonie ognisko i szumią knieje
- Marsz Pierwszej Brygady
- Szła dzieweczka
- Harcerska dola
- Rozkwitały pąki białek
- Serce w plecaku

### Jak grać
Podstawowe techniki:
- Uderzenia bazowe (bas, ton, slap)
- Pozycja rąk i ciała
- Czytanie nut dla cajona

### Ćwiczenia
- Podstawowy rytm 4/4
- Szybkie slappy
- Akcenty dynamiczne

### Techniki gry
- Bas (B)
- Ton (T)
- Slap (S)
- Ghost Note (g)

## 🎨 Kolory ZHP

- Główny zielony: `#82a427`
- Zielony hover: `#6d8a21`
- Ciemny zielony: `#5a7019`

## 🔮 Przyszłe funkcje

- [ ] Odtwarzacz audio z nagraniami
- [ ] Interaktywne nuty ze wskazówkami
- [ ] System ulubionych pieśni
- [ ] Eksport nut do PDF
- [ ] Metronom zintegrowany
- [ ] Filtrowanie po poziomie trudności
- [ ] Tryb nauki krok po kroku

## 📝 Licencja

Projekt stworzony dla społeczności harcerskiej ZHP.

## 🏕️ Czuwaj!

**⚜️ Związek Harcerstwa Polskiego ⚜️**