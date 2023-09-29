// spread: heavily used in REACT

const user = {
  name: "losrobbos",
  age: 40,
  isAdmin: false,
  experience: 77,
};

// SPREAD ???
const eugen = { ...user };
console.log(eugen);

eugen.name = "Eugen"
eugen.experience += 10
eugen.magicPower = "tree burning"

console.log(eugen)
console.log(user)