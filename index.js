/*  
* * Function: FizzBuzz
* * @param {number} n
* * @return {string[]}
*
*  - Invalid param, return -1
*  - for multiples of three return “Fizz”
*  - for the multiples of five return “Buzz”. 
*  - For numbers which are multiples of both three and five return “FizzBuzz”."
*  - Othewise return the numbers
*/
const FizzBuzz = n => {
  if(isNaN(n) || n <= 0) return -1;

  if(n % 15 === 0) return "FizzBuzz";
  else if(n % 5 ===0) return "Buzz";
  else if( n % 3 ===0 ) return "Fizz";
  else return n;

};



/*
* * Function: PrintFizzBuzz
* * @param  {number} n 
* * @return -1 if number != 100
* *          0 if ok
*
* - Prints the FizzBuzz numbers from 1 to n
*
*/
const PrintFizzBuzz = n => {
  if( n !== 100) return -1;
  
  for(let i=1; i<=n; i++)
    console.log(FizzBuzz(i));
  return 0;
};

//Print
PrintFizzBuzz(100);

module.exports = { FizzBuzz, PrintFizzBuzz};