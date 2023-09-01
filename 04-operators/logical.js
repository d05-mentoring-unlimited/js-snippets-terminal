// logical AND (&&)
// only gives a TRUTHY expression, if BOTH sides (left / right) are truthy as well


console.log(0 && 0); // 0

console.log(0 && 1); // 0 (=> if first item is not truthy, logical AND does not even check the next item. it returns the first found "falsy" item => 0)
console.log(1 && 1); // 1
console.log(1 && 2); // 2 (=> logical and checks in sequence if all values are truthy and returns last truthy value)
console.log(1 && 3 && 2); // 2 (=> logical and checks in sequence if all values are truthy and returns last truthy value)

console.log("a" && "b"); // b
console.log(0 && "b"); // 0
console.log("" && "b");
console.log(undefined && "b");

// logical OR
// returns a TRUTHY expression, if at least ONE of the items is truthy
console.log(0 || 0) // 0 (returns first truthy item, otherwise the last item in the list)
console.log(1 || 0) // 1
console.log(0 || 1) // 1
console.log(0 || 2 || 1) // 2
console.log(0 || "" || undefined) // undefined => all items are not truthy, so the last item is returned / logged
// console.log(0 || 1)
// console.log("a" || "b");
