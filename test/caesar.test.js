// Write your tests here!
let expect = require("chai").expect;
let caesar = require("../src/caesar").caesar;

describe ("caesar()", () => {
  describe("error handling", () => {
    it("should return false if shift is 0", () => {
      let expected = false;

      let actual = caesar("thinkful");

      expect(actual).to.equal(expected);
    })

    it("should return false if shift > 25", () => {
      let expected = false;

      let actual = caesar("thinkful", 99);

      expect(actual).to.equal(expected);
    })

    it("should return false if shift < -25", () => {
      let expected = false;

      let actual = caesar("thinkful", -26); 

      expect(actual).to.equal(expected);
    })
  })

  describe("encoding", () => {
    it("should encode by shifting letters", () => {
      let expected = 'wklqnixo';

      let actual = caesar("thinkful", 3);

      expect(actual).to.equal(expected);
    })

    it("should leave special characters", () => {
      let expected = 'bpqa qa i amkzmb umaaiom!';

      let actual = caesar("This is a secret message!", 8);

      expect(actual).to.equal(expected);
    })

    it("should ignore capital letters", () => {
      let expected = 'bpqa qa i amkzmb umaaiom!';

      let actual = caesar("THIS is a secret message!", 8);

      expect(actual).to.equal(expected);
    })

    it("should handle letters at the end of the alphabet", () => {
      let expected = "cheud pdjdclqh";

      let actual = caesar("zebra magazine", 3);

      expect(actual).to.equal(expected);
    })

    it("should allow for negative shift to the left", () => {
      let expected = "qefkhcri";

      let actual = caesar("thinkful", -3);

      expect(actual).to.equal(expected);
    })
  })

  describe("decoding", () => {
    it("should decode by shifting in the opposite direction", () => {
      let expected = "thinkful";

      let actual = caesar("wklqnixo", 3, false);

      expect(actual).to.equal(expected);
    })

    it("should leave special characters", () => {
      let expected = 'this is a secret message!';

      let actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);

      expect(actual).to.equal(expected);
    })

    it("should ignore capital letters", () => {
      let expected = "this is a secret message!";

      let actual = caesar('BPQA qa I amkzmb umaaiom!', 8, false);

      expect(actual).to.equal(expected);
    })

    it("should handle letters at the end of the alphabet", () => {
      let expected = "zebra magazine";

      let actual = caesar("cheud pdjdclqh", 3, false);

      expect(actual).to.equal(expected);
    })

    it("should allow for negative shift to the left", () => {
      let expected = "thinkful";

      let actual = caesar("qefkhcri", -3, false);
      
      expect(actual).to.equal(expected);
    })
  })
})