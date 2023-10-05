// Assignment Code
var generateBtn = document.querySelector("#generate");
// Added variables to password length and characters. I separated them so the password generator would require at least one character from each variable. //
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789"
var specialCharacters = "!@#$%^&*()-_=+,.?;:";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  // make sure ALL variables, methods, etc are within this function. This will enact everything. //
  let passwordOptions = "";
  // This sets the length of the password the user can select. 
  var passwordLength = prompt("Select a number between 8 and 128 characters for your password length.");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("You must select a password length between 8 and 128 characters.");
    } 

    // This creates a prompt for the user to select the characters they want in their password.
var includeLowerCase = confirm("Include lowercase letters?");
var includeUpperCase = confirm("Include uppercase letters?");
var includeNumbers = confirm("Include numbers?");
var includeSpecialCharacters = confirm("Include special characters?");

// Includes whichever characters the user selects into the generated password
if (includeLowerCase) {
  passwordOptions += lowerCase;
}
if (includeUpperCase) {
  passwordOptions += upperCase;
}
if (includeNumbers) {
  passwordOptions += numbers;
}
if (includeSpecialCharacters) {
  passwordOptions += specialCharacters;
}

// Ensures at least one character set is selected
if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
  alert("You must select at least one character type.");
}
// I had to create a new variable here to hold the password values based on user input
var newPassword = "";

// The for loop here creates the string of random characters based on previous user inputs, choosing a random character until it hits the limit set by passwordLength
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * passwordOptions.length);
  newPassword +=passwordOptions.charAt(randomIndex);
}

return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
