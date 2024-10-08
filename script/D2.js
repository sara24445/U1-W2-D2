/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 4
let n2 = 9

let bigger
if (n1 > n2) {
  console.log(n1 + 'è più grande di' + n2)
  console.log('il più grande è' + n1)
} else {
  console.log(n2 + 'è più grande di' + n1)
  console.log('il più grande è' + n2)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*
/* SCRIVI QUI LA TUA RISPOSTA */
let num = 6

if (num !== 5) {
  console.log('not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let num2 = 35
if (num2 % 5 === 0) {
  console.log('divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x1 = 80
let x2 = 8
if (x1 === 8 || x2 === 8 || x1 + x2 === 8 || x1 - x2 === 8 || x2 - x1 === 8) {
  console.log('verificato')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 28
const shippingCost = 10
let totalToPay
if (totalShoppingCart >= 50) {
  totalToPay = totalShoppingCart
} else {
  totalToPay = totalShoppingCart + shippingCost
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart2 = 28
const shippingCost2 = 10
let totalToPay2
if (totalShoppingCart2 * 0.8 >= 50) {
  totalToPay2 = totalShoppingCart2 * 0.8
} else {
  totalToPay2 = totalShoppingCart2 * 0.8 + shippingCost2
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let a1 = 5
let a2 = 6
let a3 = 7

if (a1 > a2) {
  if (a1 > a3) {
    if (a2 > a3) {
    } else {
    }
  } else {
  }
} else {
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numberOrNot='ciao'
if(typeof numberOrNot==='number')

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
