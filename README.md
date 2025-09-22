# Campo Minato

## Obiettivi

- Sviluppare logica base in js
- Manipolare il DOM
- Sfruttare strumenti di debug
- Reagire agli eventi (es. click)
- Costruire una griglia in html/css

## Argomenti da ripassare

- Array e funzioni in JavaScript
- Manipolazione del DOM
- Gestione degli eventi
- Logica condizionale e cicli
- Le funzioni

## Esercizi propedeutici

<aside>
🏋️‍♀️

**Manipolazione DOM Base**

- Genera una griglia di elementi HTML con numeri progressivi
- Rendi ogni elemento cliccabile e aggiorna un contatore ogni volta che viene effettuato un click valido

**Generazione Array Random**

- Crea un array contenente numeri casuali non ripetuti
- Scrivi una funzione per verificare se un valore è presente in un array
</aside>

## Consegna

<aside>
📚 **nome repo:** `campo-minato`
****

Ti cimenterai nella creazione del famoso gioco Campo Minato. Il tuo obiettivo è permettere all’utente di scoprire celle cercando di evitare le bombe nascoste.

### Funzionalità di Base

**🎮 Il gioco deve:**

1. Presentare una griglia di gioco 7x7 (49 celle)
2. Permettere all’utente di:
    - Cliccare sulle celle per scoprirle
    - Vedere il punteggio durante la partita
    - Ricevere feedback quando colpisce una bomba

**⚠️ Note Importanti:**

- Le bombe sono 16 e vengono generate casualmente all’inizio del gioco
- Assicurati che le bombe non vengano duplicate nella generazione
- La partita termina quando il giocatore clicca su una bomba o quando raggiunge il punteggio massimo

🚀 **Bonus 1 - Game Over Avanzato:**

- Mostra tutte le bombe quando perdi
- Impedisci il click sulle celle dopo la fine del gioco
- Mostra un messaggio appropriato (vittoria/sconfitta)

🚀 **Bonus 2 - Livelli di Difficoltà:**

- Aggiungi la selezione del livello di difficoltà
- Implementa griglie di dimensioni diverse:
    - Facile: 10x10 (100 celle)
    - Medio: 9x9 (81 celle)
    - Difficile: 7x7 (49 celle)
    

✨ **AI Bonus - Dettagli di gioco:**

- Permetti all’utente di piazzare una bandierina con il tasto destro per segnare le celle sospette, facilitando la strategia di gioco
- Salva e mostra i tempi migliori

Buon kata! 🥷

</aside>

## Struttura progetto

```
nome-progetto/
├── README.md
├── propedeutici/            # Esercizi propedeutici
│   ├── ex-01/
│   └── ex-02/
├── src/                     # Il codice sorgente
└── assets/                  # Immagini, icone, eventuali font
```

## Note del docente

1. **Approccio Metodico**
    - Inizia con la struttura HTML/CSS
    - Aggiungi la logica JavaScript un pezzo alla volta
    - Usa il console.log() per debuggare
2. **Best Practices**
    - Separa la logica in funzioni riutilizzabili
    - Commenta il codice nei punti critici
    - Usa nomi di variabili e funzioni descrittivi
3. **README**
Includi il file [**README.md**](http://readme.md/) in cui:
    - Descrivi la struttura del tuo progetto
    - Spiega le scelte implementative
    - Documenta eventuali bonus realizzati