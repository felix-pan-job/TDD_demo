// Test The FizzBuzz and PrintFizzBuzz
//  - Invalid param, return -1
//  - for multiples of three return “Fizz”
//  - for the multiples of five return “Buzz”. 
//  - For numbers which are multiples of both three and five return “FizzBuzz”."
//  - Othewise return the numbers

const { FizzBuzz, PrintFizzBuzz } = require("./index");

describe('Test FizzBuzz and PrintFizzBuzz', () => {

  //Check the paramter of PrintFizzBuzz is 100
  it('PrintFizzBuzz n != 100', () => {
    expect(PrintFizzBuzz(101)).toBe(-1);
  });

  it('PrintFizzBuzz n == 100', () => {
    expect(PrintFizzBuzz(100)).toBe(0);
  });


//Check the return of FizzBuzz
  it('FizzBuzz n < 0', () => {
    expect(FizzBuzz(-1)).toBe(-1);
  });

  it('FizzBuzz n = 0', () => {
    expect(FizzBuzz(0)).toBe(-1);
  });

  it('FizzBuzz n is not number', () => {
    expect(FizzBuzz("sss")).toBe(-1);
  });

  it('FizzBuzz n=3', () => {
    expect(FizzBuzz(3)).toBe("Fizz");
  });

  it('FizzBuzz n=5', () => {
    expect(FizzBuzz(5)).toBe("Buzz");
  });

  it('FizzBuzz n=15', () => {
    expect(FizzBuzz(15)).toBe("FizzBuzz");
  });

  it('FizzBuzz n=1', () => {
    expect(FizzBuzz(1)).toBe(1);
  });

  it('FizzBuzz n=98', () => {
    expect(FizzBuzz(98)).toBe(98);
  });


  it('FizzBuzz n=100', () => {
    expect(FizzBuzz(100)).toBe("Buzz");
  });

});
