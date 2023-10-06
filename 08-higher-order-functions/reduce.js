const cartItems = [
  { name: "Funghi", price: 4.99 }, 
  { name: "Hawaii", price: 5.99 },
  { name: "Salami", price: 6.99 },
  { name: "Tunguska", price: 1.99 },
  { name: "Döner", price: 8.99 },
];

// calculate total sum in cart

// whenever we want to generate exactly ONE item out of an array
// typically we use reduce
const result = cartItems.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.name + ","
  // return accumulator+1 // 0 => 1 => 2 => 3 => 4
}, "")
// accumulator how it builts up: 
//Funghi,
//Funghi,Hawaii,
//Funghi,Hawaii,Salami
//Funghi,Hawaii,Salami,Tungusku
//Funghi,Hawaii,Salami,Tungusku,Döner
console.log(result)

// like usual the function is run for EACH item
// but we just build up the ACCUMULATOR variable by our returns
// on LAST item => our last return will get stored in result variable
// merker: 
// wenn du eine NUMBER aufbauen willst => nimm als startwert eine "empty number" (=> 0)
// wenn du einen STRING aufbauen willst => nimm als startwert einen empty string (=> "")
// wenn du ein OBJECT aufbauen willst => nimm als startwert ein empty object (=> {}) 


const result2 = cartItems.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price;
  // return accumulator+1 // 0 => 1 => 2 => 3 => 4
}, 0);
// 0 => 4.99 => 5.99 => .... SUM
console.log(result2.toFixed(2), "EUR")