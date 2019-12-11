describe('FizzBuzz', function() {
  //describe method for Fizzbuzz
  var fizzbuzz;
  //declare a variable inside the function block
  describe('knows when a number is', function() {
    //nested describe function in the place of a function block
    it ('divisible by 3', function(){
      //it statement
      fizzbuzz = new FizzBuzz();
      //create instance of FizzBuzz
      //expect(isDivisibleByThree(3)).toBe(true);
      //isDivisibleByThree method is undefined, what does method refer to?
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

//describe('Fizzbuzz', function() {
//  var fizzbuzz;
 describe('knows when a number is NOT', function() {
  it ('divisible by 3', function() {
   fizzbuzz = new FizzBuzz();
   expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
   });
 });



});
//counter test
