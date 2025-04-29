/* 🏆 Snack 1
Crea una funzione che somma due numeri.
Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.*/


function somma1(numero1, numero2) {
    return numero1 + numero2
}



const somma2 = function (numero1, numero2) {
    return numero1 + numero2
}


const somma3 = (numero1, numero2) => (numero1 + numero2)

console.log(somma3(1, 2))

/*Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.*/

const quadrato = (numero1) => (numero1 * numero1)

console.log(quadrato(2))


/*🏆 Snack 3
Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.*/

const moltiplicazione = (a, b) => a * b
const divisione = (a, b) => a / b

const eseguiOperazione = (a, b, callback) => callback(a, b)

console.log(eseguiOperazione(4, 4, moltiplicazione))
console.log(eseguiOperazione(16, 4, divisione))


/*🏆 Snack 4
Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".*/

function creaTimer(tempo) {

    return () => {
        setTimeout(() => {
            console.log("Tempo scaduto!")
        }, tempo)
    }
}

const timer3s = creaTimer(4000)

timer3s()

/*🏆 Snack 5
Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.*/

let count = 0

function stampaognisecondo(messaggio) {

    return () => {
        let intervallo = setInterval(() => {
            if (count == 5) {
                clearInterval(intervallo)
            }
            console.log(messaggio)
            count = count + 1
            console.log(count)
        }, 1000)

        
    }
}



const messaggio = stampaognisecondo("Hello")

messaggio()