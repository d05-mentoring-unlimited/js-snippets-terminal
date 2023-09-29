const user = {
  name: "losrobbos",
  age: 40,
  isAdmin: false,
  experience: 77
}

// SPREAD  ???

// DESTRUCTURING ??
// const namey = user.name
// const age = user.age
// const { name, age } = user

// pluck out and rename at the same time
const { name: nameyyy, age, experience: expo } = user
console.log(nameyyy)
console.log(age)
console.log(expo)

// purpose of destructuring:
// pluck info out of object that we 
// likely use more often than the other infos in the object



