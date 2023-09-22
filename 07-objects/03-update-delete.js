const pizzas = [
  {
    name: "Margherita",
    price: 8.99,
    description: "Klassische Margherita-Pizza mit Tomaten und Mozzarella.",
    image: "margherita.jpg",
  },
  {
    name: "Funghi",
    price: 9.49,
    description: "Pizza mit Pilzen und Kräutersoße.",
    image: "funghi.jpg",
  },
  {
    name: "Pepperoni",
    price: 10.99,
    description: "Pizza mit scharfer Pepperoni und Käse.",
    image: "pepperoni.jpg",
  },
  {
    name: "Quattro Formaggi",
    price: 12.99,
    description: "Pizza mit vier verschiedenen Käsesorten.",
    image: "quattro-formaggi.jpg",
  },
  {
    name: "Hawaii",
    price: 11.49,
    description: "Pizza mit Schinken und Ananas.",
    image: "hawaii.jpg",
  }
]

// delete peperoni

// find item in an array of objects 
// indexOf & includes dont work to find objects in array
// console.log(pizzas.indexOf("Funghi"))
// console.log(pizzas.includes("Funghi"))

// Instead we must use LOOPS to find objects
// in a loop we can check each object in detail (access its properties)
// and then do something with it... 

// UPDATE Pattern
// loope über array
// checke jedes object => ob es das ist, was wir suchen
// update dieses object
for(let pizza of pizzas) {
  if(pizza.name === "Funghi") {
    pizza.price += 3
  }
}

// search for position of object in array
const searchName = "Pepperoni"

// delete => find the index of the item first
// then use it in SPLICE to delete object from array
let indexItemToDelete = -1
for(let i=0; i<pizzas.length; i++) {
  if (pizzas[i].name === searchName) {
    indexItemToDelete = i;
  }
}
// once we found the index => we can now delete the item using splice
console.log("Found item at position: ", indexItemToDelete)
pizzas.splice(indexItemToDelete, 1) // delete item at found position
console.log(pizzas) // item is gone

// when updating object in array => you can use for ... of loop
// when deleting object in array => use rather for i loop to find position to delete