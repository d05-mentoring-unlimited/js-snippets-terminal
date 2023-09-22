
// functions with function keywords 
// are always dragged (HOISTING) to TOP of file by JS engine
// so we can declare them anywhere in the file
// console.log(sumArrow(1, 3)); // crashes. Function does not exist
console.log(sumNormal(1, 3)); // 

function sumNormal(a, b) {
  return a + b;
}
const sumArrow = (a, b) => {
  return a + b;
};


// TEST / Call the functions
// console.log(sumNormal(1,3))
