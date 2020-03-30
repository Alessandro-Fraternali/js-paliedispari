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
    document.getElementById("rpc1").innerHTML = "Il numero di PC1 è " + numPC1;
  }
  // numero di PC2
  else {
    numPC2 = randomizzatore(min, max);
    document.getElementById("rpc2").innerHTML = "Il numero di PC2 è " + numPC2;
  }
}

// funzione per generare un numero da 1 a 5
function randomizzatore(min, max){
  return randomizzato = Math.floor(Math.random() * (max - min +1) + min);
}

// somma dei due numeri e dichiarazione del vincitore
var sommadeldestino = numPC1 + numPC2;
document.getElementById("somma").innerHTML = "La somma dei due numeri è " + sommadeldestino;
if (sommadeldestino % 2 === 0) {
  document.getElementById("vincitore").innerHTML = "PC1 ha vinto la sfida";
}else {
  document.getElementById("vincitore").innerHTML = "PC2 ha vinto la sfida";
}
