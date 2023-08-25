console.log(v) // variable existiert hier noch gar nicht. also crash? Nein, nicht bei var
// => loggt "undefined", statt crash
var v = "hallo"

// aus dem code oben macht javascript diesen code unten 

// var v
// console.log(v);
// v = "hallo"

// => HOISTING (=> alle var variables werden immer nach OBEN gezogen (to hoist))


// doppelte declaration geht mit var!
var ich = "hey"
var ich = "heyyyy"
console.log(ich) // => heyyyy

let l = "hey"
// let l = "heyyyyy" // doppelte declaration geht mit let nicht!