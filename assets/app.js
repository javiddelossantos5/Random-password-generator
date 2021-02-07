// Assignment code here

//all the special characters that we could use for random password
const specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

//numbers to use for the random password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//lower case alphabetical letters
const lowerCaseCharacters = [
'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z'
];


//uppercase alphabetical order letters
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//function on getting password info from the user
const getPassword = () => {
  //ask the user how long the password is
  const length = parseInt(prompt(`How many characters would you like to have on your password?`));
  
  //checks if the user put a number 
  if (isNaN(length) === true) {
    alert(`Password length must be a number`);
    return;
  }

  //makes sure password length is atleast 8 characters long
  if (length < 8) {
    alert(`Password has to be atleast 8 characters long`);
    return;
  }

  //makes sure password isnt longer than 129 characters
  if (length > 128) {
    alert(`Password must be atleast less than 129 characters short`);
    return
  }

  //confirm asks the user if they want to use the variables made 
  const hasSpecialCharacters = confirm(`Click OK to confirm including special characters.`);

  const hasNumericCharacters = confirm(`Click OK to confirm including numeric characters.`)

  const hasLowerCaseCharacters = confirm(`Click OK to include lower case characters.`);

  const hasUpperCaseCharacters = confirm(`Click OK to include Upper case characters.`);

  //if statement making sure they atleast picked 1 option to proceed
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCaseCharacters === false &&
    hasUpperCaseCharacters === false
  ) {
    alert(`Must select atleast one character type`);
    return;
  }

  //Object to store input
  let passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters
  };

  return passwordOptions;

};

//function on getting random element from arrays
const getRandom = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomElement = arr[randomIndex];

  return randomElement;
};

//function for getting random password with user input
const generatePassword = () => {
  const options = getPassword();
  const result = [];

  //stores possibe characters into empty array
  let possibleCharacters = [];

  //stores guaranteed characters into empty array
  let guaranteedCharacters = [];

  //uses push to generate random special characters into guaranteed characters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  };

  //uses push to generate random numeric characters into guaranteed characters
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  };

  //uses push to generate random special lowercase characters into guaranteed characters
  if (options.hasLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
    guaranteedCharacters.push(getRandom(lowerCaseCharacters));
  };

  //uses push to generate random special uppercase character into guaranteed characters
  if (options.hasUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  };

  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (let i = 0; i < guaranteedCharacters.length; i++) {
    let possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacters);
  };

  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  };

  return result.join('');

};



// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
const writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
