var generateBtn = document.querySelector("#generate");
let CHARACTER_TYPES = [
  "lowercase",
  "uppercase",
  "numeric",
  "special characters",
];
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = LOWERCASE.toUpperCase();
const NUMERIC = "0123456789";
const SPECIAL = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const characterTypesArr = [LOWERCASE, UPPERCASE, NUMERIC, SPECIAL];
function generatePassword() {
  alert("First, let's choose the length of your password!");
  let passwordLength = promptLengthOfPassword();
  if (passwordLength === null) return null;
  alert(
    "Great! Let's choose the character types for your password! (Please choose at least one)"
  );
  let types = promptCharacterTypes();

  let password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomTypeStr = types[Math.floor(Math.random() * types.length)];
    password += randomTypeStr.charAt(
      Math.floor(Math.random() * randomTypeStr.length)
    );
  }
  console.log(password);
  return password;
}
function promptLengthOfPassword() {
  let passwordLength = window.prompt(
    "What is the length of the password? (Please enter a number between 8 and 128)"
  );
  if (passwordLength === null) {
    alert("Thank you and see you later!");
    return null;
  }
  if (isNaN(passwordLength)) {
    alert("Please enter a number");
    passwordLength = promptLengthOfPassword();
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Length should be between 8 and 128 characters");
    passwordLength = promptLengthOfPassword();
  }
  return passwordLength;
}
function promptCharacterTypes() {
  let result = [];

  CHARACTER_TYPES.forEach((type, index) => {
    let input = confirm(`Would you like to include ${type} in the password?`);
    if (input) result.push(characterTypesArr[index]);
  });

  if (result.length === 0) {
    alert("Please choose at least one character types!");
    result = promptCharacterTypes();
  }

  return result;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
