// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  // let x = ['a', 'b', 'c', 'd', 'e', 'f',
//   'g', 'h', 'i', 'j', 'k', 'l',
//   'm', 'n', 'o', 'p', 'q', 'r',
//   's', 't', 'u', 'v', 'w', 'x',
//   'y', 'z']
  let alphabet = alphabets.split("");
  
  //the returned result
  let result = [];

  function caesar(input, shift, encode = true) {
    // your solution code here
    //I have a long solution and a shortend optimized solution.
    //if trying to decode, reverse the shift
    if (encode === false) shift = shift * -1;

    
    //return false if no shift given, shift is 0, or if shift is outside of range
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
      
      //this is the long decode
//     } else if (encode === false) {
//       const inputted = input.toLowerCase().split("");

//       let output = inputted.map((letter) => {
//         for (let alphaLetters in alphabet) {
//           if (letter === alphabet[alphaLetters]) {
//             return parseInt(alphaLetters);
//           }
//         }
//         return letter;
//       });

//       const newOutput = output.map((numbers) => {
//         if (typeof numbers === "number") {
//           return numbers - shift;
//         } else {
//           return numbers;
//         }
//       });

//       let numToLetters = [];
//       for (let numbers of newOutput) {
//         if (typeof numbers === "string") {
//           numToLetters.push(numbers);
//         } else if (numbers > 25) {
//           let num = numbers - 26;
//           numToLetters.push(alphabet[num]);
//         } else if (numbers < 0) {
//           let num = numbers + 26;
//           numToLetters.push(alphabet[num]);
//         } else {
//           numToLetters.push(alphabet[numbers]);
//         }
//       }

//       return (result = numToLetters.join(""));
      
      //this is encoding
    } else {
      const inputted = input.toLowerCase().split("");

      //this is checking through the key to match each letter and then returning the index value of that letter while ignoring any non matching letters such as spaces
      let output = inputted.map((letter) => {
        for (let alphaLetters in alphabet) {
          if (letter === alphabet[alphaLetters]) {
            return parseInt(alphaLetters);
          }
        }
        return letter;
      });

      //this is taking the array of numbers and spaces and checking the varable type, if it is a number then add shift to it but if it is not a number then return it such as spaces or special characters
      const newOutput = output.map((numbers) => {
        if (typeof numbers === "number") {
          return numbers + shift;
        } else {
          return numbers;
        }
      });

      //now we want to take those shifted numbers and special characters if any
      let numToLetters = [];
      for (let numbers of newOutput) {
        //if any special characters, return them
        if (typeof numbers === "string") {
          numToLetters.push(numbers);
        
        //if the number is outside of range, -26 to loop over again and return the letter at that index
        } else if (numbers > 25) {
          let num = numbers - 26;
          numToLetters.push(alphabet[num]);
          
        //if the number is under range, +26 to loop into range and return the letter at that index
        } else if (numbers < 0) {
          let num = numbers + 26;
          numToLetters.push(alphabet[num]);
        
        //if the number is in range, then return the letter at that index
        } else {
          numToLetters.push(alphabet[numbers]);
        }
      }
      
      //return result array to new encoded letters array joined
      //I could obviously remove result and just return the encoded letters array joined and everything would still work
      return (result = numToLetters.join(""));
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

