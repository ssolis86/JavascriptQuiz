// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialCharacters = "!@#$%^&*()-_+=".split("");
var numberS = "1234567890".split("");


// Write password to the #password input
function generatePassword() {
  var userPrompt = prompt("Please select a length of characters between 8 - 128 characters");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



