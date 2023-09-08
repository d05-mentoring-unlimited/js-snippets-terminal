// most used built in functions

const str = "Pizza Hawaii";

// includes function
// includes => searches CASE SENSITIVE
console.log(str.includes("Haw")); // true
console.log(str.includes("HAW")); // false

// toUpperCase, toLowerCase

// Pizza Hawaii => pizza hawaii
// Search term: HAW => haw
const searchTerm = "HaW";
console.log(str.toLowerCase()) // haw
console.log(searchTerm.toLowerCase()) // HAW


// function chaining
console.log(str.toLowerCase().includes(searchTerm.toLocaleLowerCase())) // true
console.log(str.toUpperCase().includes(searchTerm.toUpperCase())) // true

// Pizza Hawaii => "pizza hawaii".includes("haw")
// Pizza Hawaii => "PIZZA HAWAII".includes("HAW")

// trim
// non visible characters " " => whitespace
// often used to slightly correct input from user so it is still usable
console.log("hallo there".trim()) // hallothere
console.log(" hallo there ") // hallothere
console.log(" hallo there ".trim()) // hallothere



// rather rarely used functions
console.log( "hallo there".slice(0, 3) ) // ???
// 0 1 2 3 4
// h a l l o

const plzZipcode = "D-13577 Gesundbrunnen"

// indexOf
// console.log("hallo welt".indexOf("hall")) // 0
// console.log("hallo welt".indexOf("wel")) // 6