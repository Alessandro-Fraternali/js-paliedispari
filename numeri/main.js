// lista variabili
// variabili che creeranno dei numeri casuali
var numPC1;
var numPC2;

// variabili per il randomizzatore
var min = 1;
var max = 5;

// ciclo for per simulare PC1 e PC2 che scelgono i loro numeri
for (var i = 0; i < 2; i++) {
  // numero di PC1
  if (i==0) {
    numPC1 = randomizzatore(min, max);
    console.log(numPC1);
  }
  // numero di PC2
  else {
    numPC2 = randomizzatore(min, max);
    console.log(numPC2);
  }
}

// funzione per generare un numero da 1 a 5
function randomizzatore(min, max){
  return randomizzato = Math.floor(Math.random() * (max - min +1) + min);
}

// dichiarazione del vincitore e somma dei due numeri
