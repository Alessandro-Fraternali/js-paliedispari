// variabili
var parolaUtente = prompt("Inserisci un palindromo (es: Afa, Anna, Otto)");
var reversed;

// funzione che crea una var di parolaUtente invertita e le mette a confronto
function reverseString(parolaUtente){
  // ribaltamento di parolaUtente
  reversed = parolaUtente.split("").reverse().join("");
  // dichiarazione e stampa del risultato
  if (parolaUtente == reversed) {
    alert("Hai inserito un palindromo");
  }else {
    alert("Non hai inserito un palindromo");
  }
  return reversed;
}
console.log(reverseString(parolaUtente));
console.log(reversed);
