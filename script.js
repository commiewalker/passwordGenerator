// Assignment Code
var generateBtn = document.querySelector("#generate");

// CharacterSet
var getLower = generateArray(97,122);
var getUpper = generateArray(65,90);
var getNum = generateArray(48,57);
var getSpecial = generateArray(33,47).concat(generateArray(58,64).concat(generateArray(91,96).concat(generateArray(123,126))));

var passLenght = 0;
var lower;
var upper;
var num;
var special;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

(function() {
  do {
    passLenght = prompt("How long for the password? ( 8 - 128 characters)");
  } while (passLenght < 8 || passLenght > 128);

  do {
  lower = confirm("Does it contain lower cases?");
  upper = confirm("Does it contain upper cases?");
  num = confirm("Does it contain the numbers?");
  special = confirm("Does it contain special charactor?");  
  } while (lower === false && upper === false && num === false && special === false);
})();


function generatePassword() {
  // array of Character 
  var conditionCharArray = []; 
  if (lower) conditionCharArray = conditionCharArray.concat(getLower);
  if (upper) conditionCharArray = conditionCharArray.concat(getUpper);
  if (num) conditionCharArray = conditionCharArray.concat(getNum);
  if (special) conditionCharArray = conditionCharArray.concat(getSpecial);


  var passwordCharacter = "";
  for (var i = 0; i < passLenght; i++) {
    var passwordRandom = conditionCharArray[Math.floor(Math.random() * conditionCharArray.length)]
    passwordCharacter += String.fromCharCode(passwordRandom);
  }    
  return passwordCharacter;
}

// function for looping character code
function generateArray (low, high){
  var arrayPass = [];
  for (var i = low; i <= high; i++){
    arrayPass.push(i);
  }
  return arrayPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);