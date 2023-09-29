const fruits = ["Banana", "Mango", "Cherry"];

// DESTRUCTURING
const [banana, mango] = fruits;
// const banana = fruits[0]
// const mango = fruits[1]
// console.log(banana, mango)

// destructure user terminal input
const [myname, myage] = process.argv.slice(2);
console.log(myname, myage);
