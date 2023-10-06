const pizzas = [
  { name: "Funghi", price: 4.99 },
  { name: "Hawaii", price: 5.99 },
  { name: "Salami", price: 6.99 },
  { name: "Döner", price: 8.99 },
]
/**
 *[
  { name: "Funghi", price: 4.99 },
  { name: "Hawaii", price: 5.99 },
  { name: "Salami", price: 6.99 },
  ]
 */

const maxPrice = 7

console.log(pizzas, "\n")
const result = pizzas.filter((pizza) => {
  return pizza.price < maxPrice // ternary short check
  // same as above, just with if
  // if(pizza.price < maxPrice) {
  //   return true
  // }
})

console.log(result, "\n")

// after filtering do ANOTHER HOF function
// e.g. to convert all found items to HTML and show it to that fr**** user
const resultHtml = result.map(pizza => {
  return `<div>${pizza.name}</div>`
})
console.log(resultHtml)

