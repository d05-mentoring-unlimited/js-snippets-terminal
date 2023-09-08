const pizzas = [
  "Margherita", // i= 0
  "Salami", // i = 1
  "Brokkoli", // i = 2
  "Mista", // i = 3
  "Diavolo", // i = 4
  "Funghi", // i = 5
  "Hawaii", // i = 6
];

// Use Case 2: Filtere alle items raus die SUCHBEGRIFF haben
let search = "Mista";
for (let i = 0; i < pizzas.length; i++) {
  // bei suche brauchen wir einen CHECK
  // wir müssen jedes Item ANGUCKEN
  // und nur WENN das Item passt, machen wir etwas damit!
  if (pizzas[i] === search) {
    console.log(search + " gefunden", i);
  }
}

console.log(pizzas.indexOf("mista")) // case sensitive search in array

search = "m";

// Hawaii => haW
// hawaii => haw

for (let i = 0; i < pizzas.length; i++) {
  // bei suche brauchen wir einen CHECK
  // wir müssen jedes Item ANGUCKEN
  // und nur WENN das Item passt, machen wir etwas damit!
  if (pizzas[i].toLowerCase().includes(search.toLowerCase())) {
    console.log(search + " gefunden in ", pizzas[i], i);
  }
}


