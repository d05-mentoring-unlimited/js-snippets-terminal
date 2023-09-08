// lottery
// the user can guess a number => Math.random
// INPUT
//  win number= 8
//  erlaubte runs = 5
// OUTPUT
//  result => true / false => true => gewonnen | false => lost

// Scenario Examples:
// Run 1: 4
// Run 2: 5
// Run 3: 7
// Run 4: 8 => exit while loop here!
// Run 5: 3

// Run 1: 4
// Run 2: 5
// Run 3: 7
// Run 4: 9
// Run 5: 3
// exit while loop after 5 runs => user has lost! and TELL HIM / HER that HE / SHE has LOST

// while loop benutzt man, wenn wir nicht wissen wie oft wir loopen werden
// "normales" while (ohne do) benutzen wir, wenn wir eventuell sogar GAR nicht loopen
// z.B. wenn es nichts zu durchloopen gibt (BEispiel: Leere Datei)
// do while benutzt man, wenn man MINDESTENS einen Run machen will
// Beispiel: Guessing => mindestens 1 Versuch

const winNumber = 1;
const allowedRuns = 5;
let currentRun = 1; // 2 => 3 => 4 => 5
let result = false;

// tue erstmal was
do {
  // guess a random number
  const guessedNumber = Math.floor(Math.random() * 10); // Beispiel: 0.55 => 5.5 => floor => 5
  console.log("Current run:", currentRun, "You Guessed:", guessedNumber);

  // LOGIC => hat user die richtige NUMBER geguessed?
  if (guessedNumber === winNumber) {
    result = true; // user hat gewonnen
    // TODO: exit the loop wenn wir gewonnen haben
    break;
  }

  // nach jedem guessing des users => erhöhe den RUN
  currentRun++;
} while (
  // exit condition
  currentRun < 6
); // checke erst NACH dem erten Mal, ob wir abbrechen sollen

// Success??
if (result) {
  console.log("Du hast gewonnen:", winNumber, "ist die richtige Number");
} else {
  console.log("Hat nicht geklappt! Nochmal versuchen! Streng dich an!");
}
