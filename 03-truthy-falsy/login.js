const emailUserInput = "rob@rob.rob";
const pwUserInput = "pw12";

const emailValid = "rob@rob.rob";
const pwValid = "pw123";

// check if login data correct

// step by step check what JS does in the IF statement below
// 1) "rob@rob.rob" === "rob@rob.rob" && "pw123" === "pw456"
// 2) true && false ==> false
if (emailUserInput === emailValid && pwUserInput === pwValid) {
  console.log("Ja! Das passt! Komme gerne herein!");
  let i = 0;
  i++;
  i.toString();
}
// check if all fields are filled out (=not empty strings)
else if (???) {
  console.log("Bitte alle Felder ausfüllen");
}
// check if email has less than 8 characters
else if (???) {
  console.log("Email muss mindestens 8 Zeichen haben");
} 
// check if pw has less than 5 characters
else if (???) {
  console.log("PW muss mindestens 5 Zeichen haben");
} 
else {
  console.log("Email PW Kombi passt nicht!");
}

// ternary variant
// console.log(
//   emailUserInput === emailValid && pwUserInput === pwValid
//     ? "Ja! Das passt! Komme gerne herein!"
//     : "Email PW Kombi passt nicht!"
// );

// ternary is great if we just want to do ONE thing in the IF case and only ONE thing in the else case
// in case we want to do multiple things in the if or else => rather use if-else instead of ternary,
// because the code is way easier to read
