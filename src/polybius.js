// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  
  let alphabetsEncode = {
  'a':11, 'b':21, 'c':31, 'd':41, 'e':51,
  'f':12, 'g':22, 'h':32, '(i/j)':42, 'k':52,
  'l':13, 'm':23, 'n':33, 'o':43, 'p':53,
  'q':14, 'r':24, 's':34, 't':44, 'u':54,
  'v':15, 'w':25, 'x':35, 'y':45, 'z':55
  };
  
// let alphabetsDecode = {
//   11:'a', 21:'b', 31:'c', 41:'d', 51:'e',
//   12:'f', 22:'g', 32:'h', 42:'(i/j)', 52:'k',
//   13:'l', 23:'m', 33:'n', 43:'o', 53:'p',
//   14:'q', 24:'r', 34:'s', 44:'t', 54:'u',
//   15:'v', 25:'w', 35:'x', 45:'y', 55:'z'
// }

  //this is taking encode key and flipping all the keys and values to create a decode key.
  let alphabetsDecode = {};
  for (let letter in alphabetsEncode) {
    alphabetsDecode[alphabetsEncode[letter]] = letter;
  };
//parseInt the keys since this flips everything but the numbers are now strings
// console.log(alphabetsDecode);
//   let result = [];



  function polybius(input, encode = true) {
    // your solution code here
    const inputted = input.toLowerCase().split("");
    // console.log(inputted);

    const inputtedDecode = input.split(" ").join("");
    // console.log(inputtedDecode)


  //if trying to decode but the length of pairs provided is not even then return false because there are no half letters
    if (encode === false && inputtedDecode.length%2 !== 0) {
      console.log(false)
      return false;

      
    //if trying to decode
    } else if (encode === false) { 

      let output = [];
      
      //here again I have two solutions, a long one and a shorter one.
//       for (let i = 0; i < input.length; i = i + 2) {
//         let spaceIndex = input[i];
//         let numIndex = input[i + 1];

//         if (spaceIndex === " ") {
//           // console.log(i)
//           i-=1;
//           // console.log(i)
//           output.push(" ");

//         } else {
//           let pair = spaceIndex + numIndex;
//           let numberstoLetter = alphabetsDecode[pair];
//           output.push(numberstoLetter);
//         }
//       }
      
      //creates an array of paired numbers to search for in the key and push the letter and adds the correct amount of spaces between each array of paired numbers
      input.split(" ").forEach((s,i) => {
        for (let pair of s.match(/.{1,2}/g)) {
          // console.log(pair)
          output.push(alphabetsDecode[pair])
        }
        
        if (i !== input.split(" ").length-1) {
          output.push(" ")
        }
      })

      //return the joined array of letters and spaces
//       console.log(output.join(""));
      return output.join("")

    //if trying to encode
    } else {

      //mapping over input array of letters, if either j or i changed them to (i/j) to match what is in key and return the correct number pair, otherwise if any letter in the input matches any letter in the key, return the number pair, if no matches due to special charaters, return it
      let output = inputted.map((letter) => {
        for (let alphaLetters in alphabetsEncode) {
          if (letter === "j" || letter === "i") {
            letter = "(i/j)";
            return alphabetsEncode[letter];
          } else if (letter === alphaLetters) {
            return alphabetsEncode[letter];
          }
        }
        return letter;
      });

      //return the array of numbers and special characters if any, as a joined string
//       console.log(output.join(""))
      return output.join("");


    }


  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
