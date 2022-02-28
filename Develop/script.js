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

var specChar = ["!", "@", "#", "$", "%", "?", ".", "^", "&", "*"];
var capitol = ["A", "B", "C"];
var lowercase = ["a", "b", "c"];
var number = ["1" , "2", "3", "4", "5"];

var charPool = []

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
/**@todo write generatePassword function*/


  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

function generatePassword(){
  var numberOfChar = parseInt(prompt("Enter Password length between 8 and 128"))
  console.log(numberOfChar);
  if (numberOfChar < 8 || numberOfChar > 128) {
    alert("Please enter a number between 8 and 128");
    return generatePassword()
  }
  var isSpecialCharacters = confirm("Would you like to use special characters")
  console.log(isSpecialCharacters);
  if (isSpecialCharacters === true) {
  
    for (var i=0; i < specChar.length; i++) {
      charPool.push(specChar[i])

    }
  }

  var isCapitol = confirm("Would you like to use capitol letters")
  console.log(isCapitol);
  if (isCapitol === true) {
    for (var i=0; i < isCapitol.length; i++) {
      charPool.push(isCapitol[i])

    }

  }
  var isLowercase = confirm("would you like to use lowercase letters")
  console.log(isLowercase);
  if (isLowercase === true) {
    for (var i=0; i < isLowercase.length; i++) {
      charPool.push(isLowercase[i])

    }

  }
  var isNumeric = confirm("would you like to use numbers")
  console.log(isNumeric);
  if (isNumeric === true) {
    for (var i=0; i < isNumeric.length; i++) {
      charPool.push(isNumeric[i])

    }
    
  }
  if (!isSpecialCharacters && !isCapitol && !isLowercase && !isNumeric) {
    alert("Please select at least 1")
    return generatePassword()
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
  






// document.getElementById("generate"); addEventListener ("click", function(generateBtn) {
  
  
  


  // var specChar = ["!", "@", "#", "$"];
  // var numberOfChars = ""
  // var isSpecChar = 

  // addEventListener (generateBtn.prompt("Enter desired password length"));
  
 
    
  // }
  // return numberOfChars;
  
  
  // if (isSpecChar === true) {
    
  //   return generatePassowrd()
  // }