const pizzas = [
  "Hawaii",
  "Funghi",
  "Salami",
  "Diavolo",
  "Döner"
];

// mache ALLE uppercase!

// links: Array mit MEHRZAHL => rechts EINZAHL
pizzas.forEach((pizza) => {
  console.log(pizza.toUpperCase())
}) // variable pizza is just visible in function => technical: pizza is scoped to function

// for EACH item in the array => the inner function is called
// and the item gets passed in as parameter
// forEach function does never RETURN anything

// this is the same as above, just way more complicated
// console.log()
// for(let i=0; i<pizzas.length; i++) {
//   console.log(pizzas[i])
// }

console.log()
// map purpose => create a NEW array with EXACTLY AS MANY items as in original array
// but each item different FORMATTED
const result = pizzas.map((pizza) => {
  return pizza.toUpperCase()
})
console.log(result) // we got a NEW array with different FORMAT of each item
console.log(pizzas) // original array is UNCHANGED !

const pizzasHtml = pizzas.map((pizza) => {
  return `<div class="pizza-item">${pizza.toUpperCase()}</div>`
});
console.log(pizzasHtml)
