# Encanto Latino - Website Redesign

Questo progetto è stato rifatto per garantire modularità, performance e un'estetica premium coerente.

## Struttura dei File

*   `index.html`: La struttura principale della pagina. Collega tutti i moduli.
*   `css/style.css`: Foglio di stile unico. Contiene tutte le variabili del Design System (colori, spaziature, tipografia) e gli stili dei componenti.
*   `js/`: Cartella contenente la logica JavaScript modularizzata.
    *   `js/data.js`: Contiene i dati dei servizi e dei prodotti. Modifica questo file per aggiornare i prezzi o le descrizioni.
    *   `js/booking.js`: Gestisce l'intera logica del wizard di prenotazione (step, validazione, orari).
    *   `js/utils.js`: Funzioni di utilità (es. notifiche Toast).
    *   `js/main.js`: Il punto di ingresso che inizializza l'app, gestisce la lingua e il rendering.

## Funzionalità Chiave

1.  **Design System Premium**: Colori e spaziature sono centralizzati in `css/style.css`. Modificare le variabili `:root` per cambiare il tema.
2.  **Booking Wizard Avanzato**: Sistema a 3 step con selezione data e orario dinamico.
3.  **Supporto Offline**: Il sito funziona perfettamente aprendo `index.html` direttamente dal browser (nessun server locale richiesto), grazie alla rimozione dei moduli ES6 che causano problemi CORS.
4.  **Mobile First**: CTA "Prenota Ora" fissa in basso su mobile per massimizzare le conversioni.

## Come Modificare

*   **Cambiare Prezzi/Servizi**: Apri `js/data.js`.
*   **Cambiare Colori**: Apri `css/style.css` e modifica la sezione `:root`.
*   **Modificare Testi Statici**: Modifica direttamente `index.html`.
