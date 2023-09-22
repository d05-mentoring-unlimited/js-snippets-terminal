const task = (word) => {

  return word === word.toUpperCase() ? 
    word + " " + "is upper case" :
    word + " " + "is not upper case";

  // if (word.includes(word.toUpperCase())) {
  //   return word + " " + "is upper case";
  // } else {
  //   return word + " " + "is not upper case";
  // }
  // return word.includes(word.toUpperCase()) ?
  //   word + " " + "is upper case" :
  //   word + " " + "is not upper case";

};

console.log(task("c"));
console.log(task("C"));
console.log(task("hello I AM DONALD"));
console.log(task("HELLO I AM DONALD"));
console.log(task("ACSKLDFJSgSKLDFJSKLDFJ"));
console.log(task("ACSKLDFJSGSKLDFJSKLDFJ"));
