const pizzas = [
  "Margherita", // i= 0
  "Salami", // i = 1
  "Brokkoli", // i = 2
  "Mista", // i = 3
  "Diavolo", // i = 4
  "Funghi", // i = 5
  "Hawaii", // i = 6
];

// Hawaii => haW
// hawaii => haw

const searchMatches = [];
search = "w"; // USER INPUT

// case insensitive search
for (let i = 0; i < pizzas.length; i++) {
  // bei suche brauchen wir einen CHECK
  // wir müssen jedes Item ANGUCKEN
  // und nur WENN das Item passt, machen wir etwas damit!
  // wenn item gefunden => packe es in den array
  if (pizzas[i].toLowerCase().includes(search.toLowerCase())) {
    // TODO: packe gefundenes item in den array searchMatches
    searchMatches.push(pizzas[i]);
    // console.log(search + " gefunden in ", pizzas[i], i);
  }
}

// console logge das result der search
console.log(searchMatches);
