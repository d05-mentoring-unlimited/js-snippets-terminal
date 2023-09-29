const fruits = ["Banana", "Mango", "Cherry"]
// push changed the ORIGINAL array
// fruits.push("Durian")

console.log(fruits)
const fruitsCopy = [...fruits] // ????
fruitsCopy.push("Durian")
console.log(fruitsCopy)
console.log(fruits)



