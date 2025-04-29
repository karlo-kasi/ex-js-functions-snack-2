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



console.log()