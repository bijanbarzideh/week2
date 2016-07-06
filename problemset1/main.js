Write a function called letterCapitalize which takes a single string parameter and capitalizes the
first letter of each word in the string. You can assume that words in the input string will be separated
by only one space.

//take a string and change to an array
//after putting to an array split the array up at " "
// when the arrays are split then take the [0] of each of the split arrays and then set toUpperCase
function letterCapitalize(str) {
     words = str.toLowerCase().split(' ');

     for(var i = 0; i < words.length; i++) {
          var letters = words[i].split('');
          letters[0] = letters[0].toUpperCase();
          words[i] = letters.join('');
     }
     return words.join(' ');
}
letterCapitalize("I'm a little tea pot");

Write a function called wordCount which takes a single string parameter and returns the number of words
the string contains (ie. "Never eat shredded wheat" would return 4). You can assume that words in the input
string will be separated by only one space.
//take a string and turn it into an array
//after turning it into an array split the array at " "
//once the array is split into different elements then count the arrays after being split
var comboOfWords = 'Never eat shredded wheat';
function wordCount(string){
    var resultWord = comboOfWords.split(' ')
    console.log(resultWord.length)

}
wordCount()


Bonus:

Write a function called primeTime that takes a single number parameter and returns true if the parameter
 is a prime number, otherwise false. The range will be between 1 and 216.

 function optimusPrime(numberToTest)
 {
     // declare the return value to set later.
     var isPrime = true;

     // do square root
     var squareRoot = Math.sqrt(numberToTest);

     // floor the value to eliminate extra operatios
     var flooredValue = Math.floor(squareRoot);

     // result of square root = limit for loop
     // start at 2 because everything is divisible by one -- one less operation
     for(var i = 2; i <= flooredValue; i++)
     {
         // do division
         var dividedValue = numberToTest / i;

         // subtract dividedValue by floored dividedValue
         // if subtractedValue equal zero then its a whole number
         var subtractedValue = dividedValue - Math.floor(dividedValue);

         // if whole number its not prime
         // as soon as we find a whole number we should stop
         if(subtractedValue == 0)
         {
             // we have a whole number!
             isPrime = false;
             break;
         }
     }

     console.log(numberToTest + " is a prime number " + isPrime);

     return isPrime;
 };

 // test for prime numbers
 for(var i = 0; i <= 216; i++)
 {
//      // run the test on the rounded number
     optimusPrime(i);
}
