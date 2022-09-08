// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let alpha = alphabets.split("")
  // console.log(alpha);


  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //returned result here
    let result = [];
    
    
    let inputted = input.toLowerCase();
    
    //if no alphabet key given, return false or if the length of the alphabet key given is not 26, return false
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    
    //every character in the alphabet key should be unique, it should match only itself, but if there are two or more matches of the same character > 1, return false
    for (let char of alphabet) {
      // console.log(char)
      let double = alphabet.split("").filter((chars) => {
        // console.log(chars)
        return chars === char
      }).length
//       console.log(double)
      if (double > 1) {
//         console.log(false);
        return false;
      }
    }

    
    //creating the key, I want to match every character of the actual alphabet to each character of the alphabet key given creating an object of keys and their values.
    let key = {};

    //if encoding, return keys being each letter of the actual alphabet and the values of each charater in the alphabet key all into the empty key object
    if (encode) {
      for (let letter in alpha) {
        key[alpha[letter]] = alphabet[letter];
      }
      
    //if decoding, return keys being each letter of the alphabet key given and the values of each character in the actual alphabet into the empty key object
    } else if (!encode) {
      for (let letter in alpha) {
        key[alphabet[letter]] = alpha[letter];
      }
    }

//     console.log(key);

    //now for each index of input, if there exists that index as a key in the key object, push its value, otherwise push the index (special characters);
    for (let letter of inputted) {
      if (key[letter]) {
        result.push(key[letter]);
      } else {
        result.push(letter);
      }
    }

//     console.log(result.join(""));
    return result.join("")
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
