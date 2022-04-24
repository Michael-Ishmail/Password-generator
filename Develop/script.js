// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "-", "+", "=", "<", ">", "/", "."]
var password = ""


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword (){
  var promptLength = window.prompt("Please enter the desired length of your password.");

  if (promptLength < 8 | promptLength > 128) {
    window.alert ("Please enter a value between 8 - 128 characters.");
    writePassword();
  }

  else {
    confirmUpper = window.confirm ("Would you like to include upper case characters?")
    confirmLower = window.confirm ("Would you like to include lower case characters?")
    confirmNumber = window.confirm ("Would you like to include numbers?")
    confirmSpecial = window.confirm ("Would you like to include special characters?")  
  }

  if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecial) {
    window.alert("Please select at least one value.");
    writePassword();
  }

  else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial){
    list = lowerCase.concat(upperCase, numeric, special);
  }

  else if (confirmLower && confirmUpper && confirmNumber){
    list = lowerCase.concat(upperCase, numeric);
  }

  else if (confirmLower && confirmUpper && confirmSpecial){
    list = lowerCase.concat(upperCase, special);
  }

  else if (confirmLower && confirmNumber && confirmSpecial){
    list = lowerCase.concat(numeric, special);
  }

  else if (confirmUpper && confirmNumber && confirmSpecial){
    list = upperCase.concat(numeric, special);
  }

  else if (confirmLower && confirmUpper){
    list = lowerCase.concat(upperCase)
  }

  else if (confirmLower && confirmNumber) {
    list = lowerCase.concat(numeric)
  }

  else if (confirmLower && confirmSpecial) {
    list = lowerCase.concat(special)
  }

  else if (confirmUpper && confirmNumber) {
    list = upperCase.concat(numeric)
  }

  else if (confirmUpper && confirmSpecial) {
    list = upperCase.concat(special)
  }

  else if (confirmNumber && confirmSpecial) {
    list = numeric.concat(special)
  }

  else if (confirmLower) {
    list = lowerCase
  }

  else if (confirmUpper) {
    list = upperCase
  }

  else if (confirmNumber) {
    list = numeric
  }

  else if (confirmSpecial) {
    list = special
  }

  var password = []

  for (i = 0; i < promptLength; i++) {
    var choices = list[Math.floor(Math.random() * list.Length)]
    console.log(choices)
  }
}