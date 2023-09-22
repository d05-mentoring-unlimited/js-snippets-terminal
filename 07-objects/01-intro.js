
// Object literal
const fruit = {
  name: "Durian", // Stinkefrucht
  price: 5, // property : value
  quantity: 6
}

const fruit2 = {
  name: "Mango", // Stinkefrucht
  price: 3,
  quantity: 10
};

const fruit3 = {
  name: "Cherry", // Stinkefrucht
  price: 2, // 3
  quantity: 50
  // expiresOn: '2023-09-27' ???
};

// we cannot OVERWRITE constants,
// but MODIFY the values inside (but only in objects and arrays)
fruit3 = {
  name: "Kiwi"
}

// CRUD

// U - Update
fruit3.price += 2
// in JS objects can - by default - be extended anytime
fruit3.expiresOn = '2023-09-27'
console.log(fruit3)

// Search object
const filter = {
  city: "Berlin", // city = property = key
  adults: 4,
  children: 0,
  fromDate: '2023-09-22',
  toDate: ''
}

let prop = "adults"
let value = 2

console.log(filter.city)

// read property that we want to update from variable
prop = "city"
filter[prop] = "Hamburg" 
console.log(filter)

prop = "fromDate"
filter[prop] = "2023-10-01"
console.log(filter);



