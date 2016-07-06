// Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.
// tripleFive()
// Five! Five! Five!

var numFive = 3;

for (var i = 0; i < count; i++) {
    saySomething();
}

function saySomething() {
    console.log("Five!");
//Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
// lastLetter('hello') should return 'o'
// lastLetter('island') should return 'd'

function lastLetter(string){
   console.log(string.slice(-1))
}

lastLetter('hello')
lastLetter('island')

// Write a function called 'square' which takes a single argument which is a number, and returns number * number.
// square(3) should return 9
// square(5) should return 25
function square(number){
  console.log(Math.pow(number,2))
}

square(3)
square(5)

// Write a function called 'negate' which takes a single number argument and returns the negative of that number.
// negate(5) should return -5
// negate(-8) should return 8

function negate(number){
  console.log(number * -1)
}

negate(5)
negate(-8)

// Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.
// toArray(1, 4, 5) should return [1, 4, 5]
// toArray(8, 9, 10) should return [8, 9, 10]

function toArray(a, b, c){
  return [a ,b ,c]
}

// Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.
// startsWithA('aardvark') should return true
// startsWithA('bear') should return false
//

function startsWithA(string){
  if( string.charAt(0) === "a"){
    return true
  }else{
    return false
  }
}

startsWithA('aardvark')
startsWithA('bear')


// Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.
// excite('yes') should return 'yes!!!'
// excite('go') should return 'go!!!'

function excite(string){
  return string + "!!!"
}
excite('yes')
excite('go')

// Write a function called 'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it. You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.
// sun('sundries') should return true
// sun('asunder') should return true
// sun('catapult') should return false


function sunCheck(test){
 if (test.indexOf("sun") !=-1) {
    return true;
 }else{
    return false
 }

}
sunCheck('sundries')
sunCheck('asunder')
sunCheck('catapult')


// Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.
// tiny(0.3) should return true
// tiny(14) should return false
// tiny(-5) should return false


function tiny(number){
  if(number >=0 && number <=1){
    return true
  }else{
    return false
  }
}


// Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' (minutes, and seconds) and returns the total number of seconds represented by that timespan.
// getSeconds('01:30') should return 90
// getSeconds('10:25') should return 625

function getSeconds(str) {
    var p = str.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s;
}
