// sort simple array
const prices = [4,1,2,7, 11, 8]

// typically we create a COPY of the data to sort
// so we do not touch / change the original data sort order
// so each user can have their own fr**** sort order
const pricesSorted = [...prices]
pricesSorted.sort((itemA, itemB) => {
  // console.log(itemA, itemB)
  // return itemB-itemA // descending sort
  return itemA-itemB // ascending sort
})
console.log(pricesSorted)


// sort array of objects
const pizzas = [
  { name: "Hawaii", price: 5.99 },
  { name: "Funghi", price: 4.99 },
  { name: "Döner", price: 8.99 },
  { name: "Salami", price: 6.99 },
];

const pizzasSorted = [...pizzas]
pizzasSorted.sort( (itemA, itemB) => {
  // in objects we need to tell JS
  // WHICH properties of the objects to compare
  return itemA.price-itemB.price
})
console.log(pizzasSorted)