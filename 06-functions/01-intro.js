
// "Normal" Function
// function funky() {

// }


// ARROW Function
const funky = () => {
  return "hello world"
};

// Function Call
console.log(funky()) // hello world
console.log(funky) // Function: funky

// ARROW Function mit INPUT

// shorthand => no curly braces => implicit return
// const addSwissGreeting = (name) => `Gruezi ${name}`

const addSwissGreeting = (name) => {
  // CODE LOGIC

  return `Gruezi`
  // return `Gruezi ${name}`
  // => we want to have some output and work with this further

  // if we do not return anything it is the same as 
  // => return undefined
}

// Example: "Niclas" => "Gruezi Niclas"
// Example: "Enrique" => "Gruezi Enrique"
console.log( addSwissGreeting("Niclas") ) // Gruezi Niclas
console.log( addSwissGreeting("Enrique") ) // "Gruezi Enrique"

