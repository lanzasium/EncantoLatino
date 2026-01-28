# Progetto di Redesign: Encanto Latino Premium

## 1. Information Architecture (IA)

La struttura attuale è "Single Page". Per aumentare la percezione di valore e la SEO, consigliamo di mantenere la fluidità di una One Page per la Home, ma di strutturare meglio i contenuti logici, eventualmente usando modali o sezioni ben distinte.

### Nuova Alberatura (Menu)
1.  **Home**: Visione d'insieme, emozioni, trust.
2.  **Trattamenti (Menu Dropdown)**:
    *   Sopracciglia (Laminazione, PMU, Henna)
    *   Ciglia (Lifting, Tintura)
    *   Labbra (PMU, Idratazione)
3.  **Shop & Routine** (Nuova Sezione): Prodotti consigliati, routine di mantenimento a casa.
4.  **Studio & Chi Sono**: Trust, filosofia, igiene.
5.  **Prenota (CTA Principale)**: Sempre visibile e in evidenza.

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
*   **Header**: Logo (più pulito), Menu, CTA "Prenota" (Gold filled).
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

### Pagina Prodotti Consigliati (Editorial Shop)
*   **Header**: "La Cura Continua a Casa".
*   **Layout**: Grid irregolare (stile rivista).
*   **Card Prodotto**:
    *   Immagine scontornata di alta qualità.
    *   Badge "Nicol's Choice".
    *   Testo: "Perché funziona" (breve paragrafo).
    *   CTA: "Acquista Ora".

### Pagina Chi Sono / Studio
*   **Hero**: Foto ritratto professionale in studio (non selfie).
*   **Story**: "Dalla passione latina alla precisione milanese".
*   **Certificazioni**: Griglia loghi o certificati incorniciati digitalmente.
*   **Igiene**: Icone vettoriali (Ago sterile, Mascherina, Autoclave).

---

## 4. Design System

### A. Palette Colori
**Opzione 1: "Ultra Minimal Premium" (Consigliata per look clinico-chic)**
*   **Background**: `#FAFAFA` (Off-white caldo) o `#FFFFFF`.
*   **Text**: `#1A1A1A` (Nero morbido) per titoli, `#4A4A4A` per body.
*   **Accent/Gold**: `#D4AF37` (Oro metallico, usato con parsimonia per linee sottili, bottoni).
*   **Secondary**: `#F5F0E6` (Beige chiarissimo per sfondi sezioni alterne).
*   *Vantaggio*: Pulizia estrema, fa risaltare le foto dei lavori (sopracciglia, labbra) senza distrazioni. Trasmette igiene assoluta.

**Opzione 2: "Calda Elegante" (Più vicina al brand attuale ma raffinata)**
*   **Background**: `#1C1B1B` (Nero caldo/Antracite).
*   **Text**: `#E0E0E0` (Bianco sporco).
*   **Accent**: `#C6A87C` (Sabbia dorata).
*   **Highlight**: `#8D2335` (Rosso scuro desaturato, richiamo al brand attuale ma meno "sangue", più "vino").
*   *Vantaggio*: Molto avvolgente, lussuoso, ideale per trattamenti serali o relax. Meno "clinico", più "SPA".

### B. Typography (Google Fonts)
*   **Headings**: *Tenor Sans* (Moderno, fashion, leggibile) oppure *Playfair Display* (Classico). Consigliato: **Tenor Sans** per un tocco più contemporaneo.
*   **Body**: *Manrope* o *Montserrat*. Manrope è eccellente per i numeri (prezzi, date) e molto leggibile su mobile.

### C. Componenti UI
*   **Bottoni**: Rettangolari, angoli leggermente smussati (4px), niente ombre pesanti (flat design o ghost button).
*   **Card**: Bordo sottilissimo (1px), molto spazio bianco (padding), nessuna ombra o ombra leggerissima al passaggio del mouse.
*   **Immagini**: Angoli vivi o leggermente arrotondati. Importante: Tutte con stesso filtro/tono.

### D. Spacing & Shadows
*   **Spacing**: Generoso. Almeno 80px-100px tra le sezioni desktop. "More whitespace = More premium".
*   **Shadows**: Soft. `box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);`

---

## 5. Microcopy & Conversion

*   **CTA Prenotazione**: Invece di "Invia", usa "Blocca il mio appuntamento" o "Riserva il tuo posto".
*   **Conferma**: "Grazie [Nome], il tuo momento di bellezza è quasi pronto. Ti scriverò su WhatsApp per confermare l'orario esatto."
*   **Gestione Paura Dolore**: "Fastidio minimo, utilizziamo tecniche delicate e anestetici topici sicuri."
*   **Durata**: "Prenditi 60 minuti per te. Nessuna fretta."
*   **Policy**: "Cancellazione gratuita fino a 24h prima. Flessibilità totale."
*   **Errore Form**: "Ops, sembra manchi il numero di telefono per confermarti l'orario."

---

## 6. Best Practices Conversion

1.  **Above the Fold Perfetto**: Titolo chiaro + Foto Emozionale + CTA Prenota. L'utente deve capire cosa fai in 3 secondi.
2.  **Sticky CTA Mobile**: Il bottone "Prenota" deve seguirti mentre scrolli su smartphone.
3.  **Riduzione Friction**: Niente registrazione obbligatoria. Solo Nome e Telefono.
4.  **Prova Sociale**: "Non credere a noi, credi alle nostre 500+ clienti". Recensioni reali con foto se possibile.
5.  **FAQ Strutturate**: Rispondere alle obiezioni prima che il cliente le formuli (prezzo, dolore, durata).

## 7. SEO & Performance

*   **H1/H2**: Struttura gerarchica (H1: Encanto Latino Milano, H2: Lash Lifting, H2: Trucco Permanente).
*   **Local SEO**: "Laminazione ciglia Milano", "PMU Milano centro". Inserire mappa e indirizzo testuale nel footer.
*   **Immagini**: WebP format, compresse, con alt text descrittivi ("risultato lash lifting occhio verde").
*   **Schema.org**: Implementare JSON-LD per `BeautySalon` e `Service` (già incluso nel codice proposto).
