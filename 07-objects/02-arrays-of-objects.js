

const pizzas = [
  {
    name: "Margherita",
    price: 8.99,
    description: "Klassische Margherita-Pizza mit Tomaten und Mozzarella.",
    image: "margherita.jpg",
  },
  {
    name: "Pepperoni",
    price: 10.99,
    description: "Pizza mit scharfer Pepperoni und Käse.",
    image: "pepperoni.jpg",
  },
  {
    name: "Funghi",
    price: 9.49,
    description: "Pizza mit Pilzen und Kräutersoße.",
    image: "funghi.jpg",
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
  },
  {
    name: "Vegetariana",
    price: 10.99,
    description: "Vegetarische Pizza mit frischem Gemüse.",
    image: "vegetariana.jpg",
  },
  {
    name: "Capricciosa",
    price: 11.99,
    description: "Pizza mit Schinken, Pilzen, Oliven und Artischocken.",
    image: "capricciosa.jpg",
  },
  {
    name: "Diavola",
    price: 11.99,
    description: "Scharfe Pizza mit Salami und Peperoni.",
    image: "diavola.jpg",
  },
  {
    name: "Carbonara",
    price: 12.49,
    description: "Pizza mit Speck, Ei und Sahnesoße.",
    image: "carbonara.jpg",
  },
  {
    name: "Marinara",
    price: 9.99,
    description: "Einfache Pizza mit Knoblauch und Tomatensoße.",
    image: "marinara.jpg",
  },
];

// loope durch pizzas array
// und extracte von jeder Pizza den "name" => und packe name in einen neuen Array
const pizzaNames = [] 
for(let pizza of pizzas) {
  // console.log(pizza.name)
  // add pizza name of each object to pizzaNames array
  const name = pizza.name;
  pizzaNames.push(name)
}
// Array nur mit Pizza Names. Z.B. für ein Dropdown Menu
console.log(pizzaNames)

// Umwandlung aller Pizza Names in HTML Option Tags
let strOptionsTags = ""
for(let name of pizzaNames) {
  strOptionsTags += `<option>${name}</option>`
  // console.log("<option>" + name + "</option>")
}
// wrappe string von options in select tags
strOptionsTags = "<select>" + strOptionsTags + "</select>"
console.log(strOptionsTags)

// wandel alle Pizza Objects in einen Array von DIV cards um! GEIL!
let pizzasHtml = []
for(let pizza of pizzas) {
  pizzasHtml.push(`
    <div class='pizza'>
      <span>${pizza.name}</span>
      <span>${pizza.description}</span>
      <span>${pizza.price}</span>
      <button>BUY NOW</button>
    </div>
  `)
}
console.log(pizzasHtml)














