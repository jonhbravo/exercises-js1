const miArray = ["Leo", "Clara", "Amy", "Luis"];

function secondMatchesAmy(miArray) {
  if (miArray[2] === "Amy" ) {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy("Amy"))