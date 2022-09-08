// Write your tests here!
// Write your tests here!
let expect = require("chai").expect;
let substitution = require("../src/substitution").substitution;

describe ("substitution()", () => {
  describe("error handling", () => {
    it("should return false if the alphabet key is not given", () => {
      let expected = false;

      let actual = substitution("Thinkful");

      expect(actual).to.equal(expected);
    })

    it("should return false if the alphabet key is not exactly 26 characters", () => {
      let expected = false;

      let actual = substitution("thinkful", "short");

      expect(actual).to.equal(expected);
    })

    it("should return false if the alphabet key have more than one of the same character", () => {
      let expected = false;

      let actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");

      expect(actual).to.equal(expected);
    })
  })
  
  describe("encoding", () => {
    it("should encode letters into new letters based on the alphabet key", () => {
      let expected = 'jrufscpw';

      let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");

      expect(actual).to.equal(expected);
    })

    it("should work with any alphabet key with special characters", () => {
      let expected = "y&ii$r&";

      let actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");

      expect(actual).to.equal(expected);
    })

    it("should leave spaces", () => {
      let expected = 'elp xhm xf mbymwwmfj dne';

      let actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");

      expect(actual).to.equal(expected);
    })
  })

  describe("decoding", () => {
    it("should decode letters of a given alphabet key back into alphabet letters", () => {
      let expected = 'thinkful';

      let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);

      expect(actual).to.equal(expected);
    })

    it("should decode with any key containing special characters", () => {
      let expected = "message";

      let actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);

      expect(actual).to.equal(expected);
    })

    it("should leave spaces", () => {
      let expected = "you are an excellent spy";

      let actual = substitution('elp xhm xf mbymwwmfj dne', "xoyqmcgrukswaflnthdjpzibev", false);

      expect(actual).to.equal(expected);
    })
  })
})