# Progetto di Redesign: Encanto Latino Premium

## 1. Information Architecture (IA)

La struttura attuale è "Single Page". Per aumentare la percezione di valore e la SEO, consigliamo di mantenere la fluidità di una One Page per la Home, ma di strutturare meglio i contenuti logici, eventualmente usando modali o sezioni ben distinte.

### Nuova Alberatura (Menu)
1.  **Home**: Visione d'insieme, emozioni, trust.
2.  **Trattamenti (Menu Dropdown)**:
    *   Sopracciglia (Laminazione, PMU, Henna)
    *   Ciglia (Lifting, Tintura)
    *   Labbra (PMU, Idratazione)
3.  **Shop & Preferiti** (Nuova Sezione): Prodotti consigliati, routine di mantenimento.
4.  **Studio & Chi Sono**: Trust, filosofia, igiene.
5.  **Prenota (CTA Principale)**: Sempre visibile.

---

## 2. User Journeys

### A. Intento: Prenotare un appuntamento (Goal: Speed & Confidence)
1.  **Entry**: Utente clicca "Prenota Ora" (Sticky su Mobile) o dalla Hero.
2.  **Step 1 (Servizio)**: Visualizza categorie chiare. Seleziona "Lash Lifting".
    *   *Micro-feedback*: "Ottima scelta! Durata: 60min".
3.  **Step 2 (Slot)**: Calendario visivo. Mostra solo giorni disponibili.
4.  **Step 3 (Dati)**: Form rapido (Nome, Tel, Email). Login opzionale.
5.  **Step 4 (Conferma)**: Riepilogo visivo + Messaggio rassicurante ("Ti confermerò entro 24h").
6.  **Exit**: Ricezione email/WhatsApp automatico.

### B. Intento: Scoprire un trattamento (Goal: Education & Desire)
1.  **Entry**: Naviga su "Trattamenti" o clicca una card in Home.
2.  **Scheda Servizio**:
    *   Foto Macro "Dopo" (Risultato).
    *   "Cos'è": Spiegazione semplice in 2 righe.
    *   "Fa per me?": Checklist (es. "Ideale se hai ciglia dritte").
    *   Prezzo e Durata ben visibili.
    *   **Trust**: Foto Prima/Dopo + Recensione specifica.
3.  **Action**: CTA "Prenota questo trattamento".

### C. Intento: Prodotti Sponsorizzati (Goal: Affiliate/Trust)
1.  **Entry**: Sezione "La Routine a Casa" o "I miei segreti".
2.  **Scheda Prodotto**: Non una lista e-commerce fredda, ma "Editoriale".
    *   Titolo: "Il siero che uso personalmente".
    *   Storytelling: "Perché lo amo".
    *   Utilizzo: "Come applicarlo per far durare il Lash Lift".
3.  **Action**: Button "Acquista su Amazon/Partner" (Affiliate link).

---

## 3. Wireframe Testuale (Sezioni Chiave)

### Home Page
*   **Header**: Logo (più pulito, meno fiamme animate per look premium), Menu, CTA "Prenota" (Gold filled).
*   **Hero Section**:
    *   *Background*: Video slow-motion macro (occhio, texture pelle, strumenti sterili) o Foto Hero desaturata elegante.
    *   *Headline*: "L'arte della dermopigmentazione a Milano."
    *   *Sub*: "Precisione clinica, anima latina. Riscopri la tua bellezza autentica."
    *   *CTA*: [Prenota Consulenza Gratuita] [Esplora Trattamenti]
*   **Trust Bar**: Loghi Certificazioni (minimal mono-colore), "500+ Clienti felici", "Materiali Sterili Monouso".
*   **Top Trattamenti (Grid)**: 3 Card in evidenza (Bestseller).
*   **Sezione "Editoriale" (Prodotti)**: "Mantieni i risultati a casa" -> Link allo Shop Curated.
*   **Social Proof**: Carosello recensioni eleganti + Link Instagram.
*   **Footer**: Minimal. Link rapidi, Copyright, Social Icons piccole.

### Pagina Prenotazione (Step-by-Step Overlay)
*   **Header**: "Configura il tuo momento di bellezza".
*   **Progress Bar**: Servizio > Data > Tuoi Dati > Fatto.
*   **Layout**: Colonna sinistra (Scelte), Colonna destra (Riepilogo live + Prezzo stimato).
*   **Bottom**: FAQ rapide (es. "Fa male?", "Quanto dura?").

---

## 4. Design System

### A. Palette Colori
**Opzione 1: "Ultra Minimal Premium" (Consigliata per look clinico-chic)**
*   **Background**: `#FAFAFA` (Off-white caldo) o `#FFFFFF`.
*   **Text**: `#1A1A1A` (Nero morbido) per titoli, `#4A4A4A` per body.
*   **Accent/Gold**: `#D4AF37` (Oro metallico, usato con parsimonia per linee sottili, bottoni).
*   **Secondary**: `#F5F0E6` (Beige chiarissimo per sfondi sezioni alterne).
*   *Vantaggio*: Pulizia estrema, fa risaltare le foto dei lavori.

**Opzione 2: "Calda Elegante" (Più vicina al brand attuale ma raffinata)**
*   **Background**: `#1C1B1B` (Nero caldo/Antracite) - Dark Mode nativa.
*   **Text**: `#E0E0E0` (Bianco sporco).
*   **Accent**: `#C6A87C` (Sabbia dorata).
*   **Highlight**: `#8D2335` (Rosso scuro desaturato, richiamo al brand attuale ma meno "sangue", più "vino").

### B. Typography (Google Fonts)
*   **Headings**: *Tenor Sans* (Moderno, fashion, leggibile) oppure *Playfair Display* (Classico, già in uso). Consigliato: **Tenor Sans** per un tocco più contemporaneo.
*   **Body**: *Manrope* o *Montserrat*. Manrope è molto moderno e leggibile per numeri e UI.

### C. Componenti UI
*   **Bottoni**: Rettangolari, angoli leggermente smussati (2px), niente ombre pesanti (flat design).
*   **Card**: Bordo sottilissimo (1px), molto spazio bianco (padding), nessuna ombra o ombra leggerissima al passaggio del mouse.
*   **Immagini**: Angoli vivi o leggermente arrotondati. Importante: Tutte con stesso filtro/tono.

---

## 5. Microcopy & Conversion

*   **CTA Prenotazione**: Invece di "Invia", usa "Blocca il mio appuntamento".
*   **Gestione Paura Dolore**: "Fastidio minimo, utilizziamo tecniche delicate."
*   **Durata**: "Prenditi 60 minuti per te."
*   **Policy**: "Cancellazione gratuita fino a 24h prima."
*   **Errore Form**: "Ops, sembra manchi il numero di telefono per confermarti l'orario."

## 6. Prossimi Passi Operativi

1.  **Refactoring Stile**: Aggiornare CSS per rimuovere "effetti fuoco" eccessivi e passare a look Minimal (Opzione 1 o 2).
2.  **Refactoring UX Prenotazione**: Trasformare il form attuale (lungo e verticale) in uno step-by-step visivo.
3.  **Sezione Prodotti**: Creare la nuova sezione con layout editoriale.
4.  **SEO**: Ottimizzare H1, H2 e meta description per keyword locali ("Laminazione Milano").
