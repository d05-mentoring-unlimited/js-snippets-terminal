// logical AND (&&)
// only gives a TRUTHY expression, if BOTH sides (left / right) are truthy as well


console.log(0 && 0); // 0

console.log(0 && 1); // 0
console.log(1 && 1); // 1
console.log(1 && 2); // 2 (=> logical and checks in sequence if all values are truthy and returns last truthy value)
console.log(1 && 3 && 2); // 2 (=> logical and checks in sequence if all values are truthy and returns last truthy value)

console.log("a" && "b"); // b
console.log(0 && "b"); // 0
console.log("" && "b");
console.log(undefined && "b");

// logical OR
console.log(0 || 0) // 0
console.log(1 || 0) // 1
console.log(0 || 1) // 1
console.log(0 || 2 || 1) // 2
// console.log(0 || 1)
// console.log("a" || "b");
