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

let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector(".tooltip");
let passwordText = document.querySelector("#password");

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
    alert("Please enter a number!");
    return promptLengthOfPassword();
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Length should be between 8 and 128 characters!");
    return promptLengthOfPassword();
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

function writePassword() {
  var password = generatePassword();
  if (password) {
    document.getElementsByClassName("tooltip")[0].style.display = "block";
    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", writePassword);

function handleCopy() {
  /* Select the text field */
  passwordText.select();
  passwordText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied!";
}
copyBtn.addEventListener("click", handleCopy);
copyBtn.addEventListener("mouseout", () => {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
});
