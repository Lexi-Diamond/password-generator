// user clicks button then prompt pops up asking for number of characters

// hold all inputs from confirms in seperate variables

// Do i need to hold any information?
// create array with special characters
// create array with numeric, 
// create array lowercase
// create array upper case

// create empty array that holds all the true confirmed options in it.
// push all character that user wants into this array. This creates the pool of characters to select from
// once the pool is complete, then randomly select characters based on the number of characters the user selcted in the beggining.

// generate password function
// var numberOfChar = validatecharLength(prompts for number of characters) 
// var isSpecialCharaters = confirm pops up asking if they would like specialial characters
// var isCapitol = confirm for capital, 
// var isLowercase = lowercase confirm, 
// var isNumeric = numeric characters confirm

// validate number of chars is between 8 and 128
// validator function send it users input

// function validateCharLength (numberOfChars) {
//   if (numberOfChars < 8 || numberOfChars > 128) {
//     alert("Please enter a number between 8 and 128");
//     return generatePassword()
//   }
//   return numberOfChars
// }

// validate user selected at least one of the availbale options
// if user selected isSpecial or isCapital or isLower or isNum then continue
// else alert user "none selected" and return to main function call


// Assignment Code

//* arrays for the caracter, capitol. lowercase and number as well as an empty array to store users choices in*// 
var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var capitol = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var charPool = []

//*generates click button for writing the password*//
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//*function to generate the password*//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//*created one function to take the user through all of the prompts first prompt is for password length and asks user how long they want their password.
//*if the user enters less than 8 or more than 128 it alerts them to choose within parameter and takes them back to the beginning of the function*//

function generatePassword(){
  var numberOfChar = parseInt(prompt("Enter desired password length."))
  console.log(numberOfChar);
  if (numberOfChar < 8 || numberOfChar > 128) {
    alert("Please enter a number between 8 and 128.");
    return generatePassword()
  }

  //*prompts user to select weather they want special characters. If they do it stores them in empty charPool variable.*//
  var isSpecialCharacters = confirm("Would you like to use special characters?")
  console.log(isSpecialCharacters);
  if (isSpecialCharacters === true) {
  
    for (var i=0; i < specChar.length; i++) {
      charPool.push(specChar[i])

    }
  }

  //*prompts user to select weather they want capitol letters. If they do it stores them in empty charPool variable.*//
  var isCapitol = confirm("Would you like to use capitol letters?")
  console.log(isCapitol);
  if (isCapitol === true) {
    for (var i=0; i < capitol.length; i++) {
      charPool.push(capitol[i])

    }
  }

  //*prompts user to select weather they want lowercase letters. If they do it stores them in empty charPool variable.*//
  var isLowercase = confirm("Would you like to use lowercase letters?")
  console.log(isLowercase);
  if (isLowercase === true) {
    for (var i=0; i < lowercase.length; i++) {
      charPool.push(lowercase[i])

    }
  }

  //*prompts user to select weather they want numbers. If they do it stores them in empty charPool variable*//
  var isNumeric = confirm("Would you like to use numbers?")
  console.log(isNumeric);
  if (isNumeric === true) {
    for (var i=0; i < number.length; i++) {
      charPool.push(number[i])

    }
  }

  //*If the user says no to special characters, capitol letters, lowercase letters and numbers this alerts them to choose at least one option and returns to generate password function*//
  if (!isSpecialCharacters && !isCapitol && !isLowercase && !isNumeric) {
    alert("Please confirm at least one option.")
    return generatePassword()
  } 

  //*Generates random password bassed on users desired password length*//
  var passwordString = ""
  if (charPool.length > 0) {
    console.log(charPool)
    for (var i=0; i < numberOfChar; i++) {
  passwordString += (charPool[Math.floor(Math.random() * charPool.length - 1)])
  }  
}
//*populates password in password field*//
return passwordString;
}
