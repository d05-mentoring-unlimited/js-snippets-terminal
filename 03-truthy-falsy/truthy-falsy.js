const meineVar = "hallo"

if(meineVar) {
  console.log("meineVar ist truthy");
  // redirect me to admin page
}
else {
  console.log("meineVar ist nicht truthy")
  // show error message that user no rights to pass
}

// console.log(meineVar === true); // false!
// const comparison = meineVar == true; // comparison => always returns us back a BOOLEAN
// console.log(comparison);


