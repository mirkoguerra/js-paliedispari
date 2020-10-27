// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// .toLowerCase() per trasformare tutte le lettere in minuscolo
// .split(' ').join('') per togliere gli spazi
// .split('').reverse().join('') per prendere i singoli caratteri e metterli in un array, invertirne l'ordine, inserirli nuovamente in una stringa
// combinando i tre passaggi sopra descritti, non posso confrontare solo parole, ma anche frasi (prive di punteggiatura) a prescindere dal fatto che ci siano spazi e a prescindere dal fatto che le lettere siano maiuscole o minuscole

function comparableString(stringa) {
  return stringa.toLowerCase().split(' ').join('')
  // questa funzione mi serve a creare una stringa uguale a quella inserita dall'utente, ma senza spazi e senza maiuscole
}

// console.log(comparableString("Il cane"));

function reverseString(stringa) {
  return stringa.toLowerCase().split(' ').join('').split('').reverse().join('');
  // restituisce una stringa senza maiuscole, senza spazi e con i caratteri in posizione inversa rispetto a quelli inseriti dall'utente
}

// console.log(reverseString("Il cane"));

function comparazione(stringa) {
  var match = false;
  if (comparableString(stringa) == reverseString(stringa)) {
    match = true;
  }
  return match;
  // avrei potuto compattare tutte e 3 le funzioni nella sola funzione comparazione, ma se mi servissero, per qualche motivo, le funzioni comparableString e reverseString, in questa maniera ce le ho mia disposizione
}

// console.log("Il mio cane", comparazione("Il mio cane"));
// console.log("Ann a", comparazione("Ann a"));

document.getElementById("verifica").addEventListener("click", function(){

  var input = document.getElementById("input").value
  // console.log(stringa);
  var output = document.getElementById("output");

  comparazione(input);

  if (comparazione(input)) {
    output.innerHTML = "La parola o frase è un polindromo";
  } else {
    output.innerHTML = "La parola o frase non è un polindromo";
  }
});
