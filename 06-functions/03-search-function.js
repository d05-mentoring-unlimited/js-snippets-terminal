const arrPizzas = ["Hawaii", "Funghi", "Funghi Speciale", "Salami"];

const searchTerm = "Fung";

// INPUT: Array of Pizzas, String with searchTerm
// OUTPUT: Log of items that match search term (no return)

// CODE LOGIC
// - LOOP through items
// - check each item IF it matches search term
// - console.log matching item

// Traditional for loop
// for(let i=0; i<arrPizzas.length; i++) {
//   console.log(arrPizzas[i].toUpperCase())
// }

// for.. of loop
// easier version of for i loop => for of is specific for arrays

// FROM LOGIC to FUNCTION
function searchPizzas(arrPizzas, searchTerm) {
  for (let pizza of arrPizzas) {
    if (pizza.includes(searchTerm)) {
      console.log(pizza.toUpperCase());
    }
  }
}
searchPizzas(arrPizzas, "Fun")
searchPizzas(arrPizzas, "Haw")
