# Czcionki / Fonts

## Dodawanie czcionki Museo Sans 500

Umieść tutaj plik czcionki Museo Sans 500 w formacie WOFF2 lub TTF.

### Instrukcje:

1. Pobierz czcionkę Museo Sans 500
2. Skopiuj plik do tego folderu
3. Zaktualizuj plik `styles.css` i zamień istniejący import na:

```css
@font-face {
    font-family: 'Museo Sans';
    src: url('assets/fonts/MuseoSans-500.woff2') format('woff2'),
         url('assets/fonts/MuseoSans-500.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}
```

4. Usuń lub zakomentuj linię z external CDN w `styles.css`

### Alternatywnie:

Jeśli nie masz dostępu do Museo Sans, w projekcie już używane są czcionki zastępcze:
- -apple-system
- BlinkMacSystemFont
- Segoe UI
- Arial

Te czcionki systemowe zapewniają dobry fallback i są dostępne na wszystkich systemach.
