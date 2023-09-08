const pizzas = [
  "Margherita", // i= 0
  "Salami", // i = 1
  "Brokkoli", // i = 2
  "Mista", // i = 3
  "Diavolo", // i = 4
  "Funghi", // i = 5
];

// task => convert each pizza in array to DIV HTML elements

// wann welche loop
// for => wir wissen vorher WIE OFT wir loopen wollen
  // for loop wird zu 99% genutzt
// while => wir wissen vorher NICHT wie oft wir loopen wollen
  // Beispiel: Files Line by Line durchloopen

// das hier ist ugly!
// wir schreiben sehr viel code um zu allen items zu gehen
// angenommen wir haben 100 items => 100 zeilen code! 
// console.log(pizzas[0].toUpperCase())
// console.log(pizzas[1].toUpperCase())
// console.log(pizzas[2].toUpperCase())
// console.log(pizzas[3].toUpperCase())
// console.log(pizzas[4].toUpperCase())
// console.log(pizzas[5].toUpperCase())

// loop repeated den code in den klammern {} so oft wie der array big ist

// Use Case 1: Loope durch Daten und mache aus jedem Item ein HTML item
for(let i=0; i<pizzas.length; i++) {
  console.log( "<div>" + pizzas[i].toUpperCase() + "</div>")
}

