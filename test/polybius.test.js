// Write your tests here!
let expect = require("chai").expect;
let polybius = require("../src/polybius").polybius;

describe ("polybius()", () => {
  describe("encoding", () => {
    it("should encode letters into number pairs", () => {
      let expected = "4432423352125413";

      let actual = polybius("thinkful");

      expect(actual).to.equal(expected);
    })

    it("should translate 'i' and 'j' to 42", () => {
      let expected = "4242";

      let actual = polybius("ij");

      expect(actual).to.equal(expected);
    })

    it("should leave spaces", () => {
      let expected = '3251131343 2543241341';

      let actual = polybius("Hello world");

      expect(actual).to.equal(expected);
    })
  })

  describe("decoding", () => {
    it("should decode number pairs into letters", () => {
      let expected = "hello world";

      let actual = polybius("3251131343 2543241341", false);

      expect(actual).to.equal(expected);
    })

    it("should translate 42 into '(i/j)'", () => {
      let expected = "(i/j)";

      let actual = polybius("42", false);

      expect(actual).to.equal(expected);
    })

    it("should leave spaces", () => {
      let expected = "hello world"

      let actual = polybius('3251131343 2543241341', false);

      expect(actual).to.equal(expected);
    })

    it("should return false if length of numbers is odd", () => {
      let expected = false;

      let actual = polybius("44324233521254134", false);

      expect(actual).to.equal(expected);
    })
  })
})