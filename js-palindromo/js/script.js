// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// .toLowerCase() per trasformare tutte le lettere in minuscolo
// .split(' ').join('') per togliere gli spazi
// .split('').reverse().join('') per prendere i singoli caratteri e metterli in un array, invertirne l'ordine, inserirli nuovamente in una stringa
// combinando i tre passaggi sopra descritti, non posso confrontare solo parole, ma anche frasi (prive di punteggiatura) a prescindere dal fatto che ci siano spazi e a prescindere dal fatto che le lettere siano maiuscole o minuscole

function reverseString(stringa) {
    return stringa.toLowerCase().split(' ').join('').split('').reverse().join('');
}

console.log(reverseString("Il cane"));
