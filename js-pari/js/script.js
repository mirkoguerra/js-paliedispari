// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function pari(numero) {
  return numero%2 == 0;
  //funzione che mi dice se un numero è pari
}
//console.log(pari(2));
//console.log(pari(3));
function pariSomma(num1,num2) {
  return (num1+num2)%2 == 0;
  //funzione che mi dice se la somma di due numeri è pari
}
// console.log(pariSomma(2,4));
// console.log(pariSomma(3,4));
function daUnoACinque() {
  return Math.floor(Math.random() * 5 ) + 1;
  // restituisce un numero random fra 1 e 5
}
// console.log(daUnoACinque());


document.getElementById("gioca").addEventListener("click", function(){
  // dichiaro le variabili input
  var numeroUtente = parseInt(document.getElementById("numeroUtente").value);
  var pariDispariUtente = document.getElementById("pariDispariUtente").value;
  var pcNumber = daUnoACinque();

  // dichiaro le variabili output
  var numeroPc = document.getElementById("numeroPc");
  var sommaNumeri = document.getElementById("sommaNumeri");
  var risultato = document.getElementById("risultato");

  // mando in esecuzione
  numeroPc.innerHTML = "Il numero del computer è: " + pcNumber;
  sommaNumeri.innerHTML = "La somma dei vostri numeri è: " + (numeroUtente + pcNumber);
  var esito = "Hai perso";
  if ((pariSomma(numeroUtente,pcNumber) && pariDispariUtente == "pari") || (!pariSomma(numeroUtente,pcNumber) && pariDispariUtente == "dispari")){
    esito = "Hai vinto!"
  }
  risultato.innerHTML = esito;
});
