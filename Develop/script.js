// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "1234567890"
var special = "!@#$%^&*()?"
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
  var prompLength = window.prompt("Please enter the desired length of your password.");

  if (prompLength < 8 | prompLength > 128) {
    window.alert ("Please enter a value between 8 - 128 characters.");
    writePassword();
  }

  else {
    confirmUpper = window.confirm ("Would you like to include upper case characters?")
    confirmLower = window.confirm ("Would you like to include lower case characters?")
    confirmNumber = window.confirm ("Would you like to include numbers?")
    confirmSpecial = window.confirm ("Would you like to include special characters?")  
  }

  


}