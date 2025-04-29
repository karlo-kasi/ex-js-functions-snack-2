// /* 🏆 Snack 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.*/


function somma1(numero1, numero2) {
    return numero1 + numero2
}



const somma2 = function (numero1, numero2) {
    return numero1 + numero2
}


const somma3 = (numero1, numero2) => (numero1 + numero2)

console.log(somma3(1, 2))

// /*Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.*/

const quadrato = (numero1) => (numero1 * numero1)

console.log(quadrato(2))


// /*🏆 Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.*/

const moltiplicazione = (a, b) => a * b
const divisione = (a, b) => a / b

const eseguiOperazione = (a, b, callback) => callback(a, b)

console.log(eseguiOperazione(4, 4, moltiplicazione))
console.log(eseguiOperazione(16, 4, divisione))


// /*🏆 Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".*/

function creaTimer(tempo) {

    return () => {
        setTimeout(() => {
            console.log("Tempo scaduto!")
        }, tempo)
    }
}

const timer3s = creaTimer(4000)

timer3s()

// /*🏆 Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.*/

let count = 0

function stampaognisecondo(messaggio) {

    return () => {
        let intervallo = setInterval(() => {
            if (count == 5) {
                clearInterval(intervallo)
            }
            console.log(messaggio)
            count = count + 1
        }, 1000)


    }
}



const messaggio = stampaognisecondo("Hello")

messaggio()


// /*🏆 Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.*/



function creaContatoreAutomatico(tempo) {

    let contatore = 0

    return () => {
        let intervallo = setInterval(() => {

            if (contatore == 5) {
                clearInterval(intervallo)
            }
            contatore = contatore + 1
            console.log(contatore)
        }, tempo)
    }
}

const conteggio = creaContatoreAutomatico(1000)

conteggio()


/*Snack 7
Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.*/


function eseguiEferma(messaggio, avvio, fine) {

    return () => {
        setTimeout(() => {

            console.log(messaggio)

            let intermedio = setInterval(() => {
                console.log(messaggio)

            }, 2000)

            setTimeout(() => {
                clearInterval(intermedio)
            }, fine)
        }, avvio)
    }

}

const inizio = eseguiEferma("Sto inziando", 1000)

const intermedio = eseguiEferma("Continuo...", 2000, 8000)

const fine = eseguiEferma("Fine!", 10000)

inizio()
intermedio()
fine()

/*  Snack 8 (Bonus)
Crea una funzione che simula un conto alla rovescia
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.*/

function contoAllaRovescia(n, messaggio) {

    let inizio = n

    const intervallId = setInterval(() => {
        console.log(inizio--)
        if (inizio === 0) {
            console.log(messaggio)
            clearInterval(intervallId)
        }
    }, 1000)


}

console.log(contoAllaRovescia(10, "Fine conto alla rovescia!"))


/*🎯 Snack 9 (Bonus)
Creare una funzione che esegue una sequenza di operazioni con ritardi
Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.*/

const array = [() => 1 + 1, () => 10 / 2, () => 1 * 3]

function sequenzaOperazioni(array, tempo) {

    for (let i = 0; i < array.length; i++) {
        let ritardo = i * tempo
        setTimeout(() => {
            array[i]()
        }, ritardo)
    }

}

sequenzaOperazioni([
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3")
], 2000);


/*🎯 Snack 10 (Bonus)
Creare un throttler per limitare l’esecuzione di una funzione
Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.*/


function creaThrottler(callback, tempo) {

    let puòFare = true

    return () => {
        
        if (puòFare) {
            callback();
            puòFare = false;

            setTimeout(() => {
                puòFare = true;
            }, tempo);
        }
    };


}
const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)



