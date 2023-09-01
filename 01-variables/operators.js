let n = 10;

// increment operator
n++; // 10 => 11

console.log(n);

// decrement operator
n--;
console.log(n);

// how to increase by 2: 10 => 12 ???

n += 2;
// dasselbe wie: n = n + 2
// javascript checkt zeilen von RECHTS nach LINKS, 
// also immer erst RECHTS vom Gleichheitszeichen
// n = 10 + 2
// n = 12 // sobald wir rechts einen VALUE haben, speichert ihn JS in der variable links

console.log(n);

// String concatenation (= strings zusammenfügen)

let str = "Eugen";
// => wir wollen haben: Hallo Eugen

// add "Hallo" vor str
str = "Hallo " + str; // => "Hallo " + "Eugen" => "Hallo Eugen"
console.log(str); // Hallo Eugen

str += ", wie geht es?"; // adde string am ENDE der Variable
console.log(str); // Hallo Eugen, wie geht es?"

// name = Enrique => Hallo "name", wie geht es???

let firstname = "Islam";
// ausgabe mit "template literal"
console.log(`Hallo ${firstname}, wie geht es?`);
