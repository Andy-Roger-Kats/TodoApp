import { isStringValid } from "./Form";

describe("isStringValid function", () => {
  it("should return true if 'Buy apples' is passed in as an argument", () => {
    const argument = "Buy apples";
    const result = isStringValid(argument);
    expect(result).toEqual(true);
  });

  it("should return false if an empty string is passed in as an argument", () => {
    const argument = "";
    const result = isStringValid(argument);
    expect(result).toEqual(false);
  });

  it("should return false if a number is passed in as an argument", () => {
    const argument = 99;
    const result = isStringValid(99);
    expect(result).toEqual(false);
  });
});
