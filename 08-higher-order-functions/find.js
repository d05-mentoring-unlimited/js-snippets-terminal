const pizzas = [
  { name: "Funghi", price: 4.99 },
  { name: "Hawaii", price: 5.99 },
  { name: "Salami", price: 6.99 },
  { name: "Döner", price: 8.99 },
]

const result = pizzas.find((pizza) => {
    return pizza.price > 5
  })
console.log(result)

