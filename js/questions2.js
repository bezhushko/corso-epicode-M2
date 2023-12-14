//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let num1= 17
let num2= 8
if (num1 > num2) {
    console.log('(num1) è piu grande di (num2) ')
}
else{
    console.log('(num2) è piu grande di (num1)')
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

const num=8
if (num <5 ){
    console.log('Tiny')
}
else if (num < 10 ){
    console.log('Small')
}
else if (num < 15 ){
    console.log('medium')
}
else if(num < 20 ){
    console.log('Large')
}
else if (num >=20 ){
    console.log ('Huge')
}


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for(let k=0; k <=10; k++){
if(k===3 || k===8) {
    continue
}else console.log(k)
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
for(let b=0; b<=15; b++){
    if(b % 2=== 0){
        console.log (b,'pari')
    }else console.log (b,'dispari')
}