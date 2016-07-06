
Prompt the user to enter their phone number with dashes. (You might want to assure them that it won’t be used for SPAM. Your site probably looks pretty sketchy right now, being a blank page with a prompt for their phone number. I know I wouldn’t enter my phone number...)

//prompt to ask for number and then assign that number to a variable
//add a statement assuring user the info will not be used for spam

// ? Tip: You can report simple boolean evaluations of user input by combining boolean operators.
// ? e.g. alert(userInput.charAt(0) === 'B' && userInput.length === 7) will display true if the user enters 'Boulder' or 'Baghdad'.
//
// Alert the user if their phone number is valid (just true or false) according to the simple rule that the fourth and eighth characters must be dashes.

//compare the user input to the desired input // alert(userInput.charAt(0) === 'B' && userInput.length === 7)  modify to look for "-" within the input, so ask for "303-333-333",if user inputs "303333333" then it would comeback as invalid input
//if the




//phone number//must follow xxx-xxx-xxxx

var pNum = prompt("Please input your phone number. ex. 303-123-4567 DISCLOSURE: This is for private use and will not be shared")
    if( pNum.charAt(3) === "-" && pNum.charAt(7) === "-"){
      alert("Thank you for the information")
    }else{
      var pnum = prompt("Please enter valid number")
    }


//birth date // must follow xx/xx/xx

 var birthDate = prompt("Please input your birth-date ex. 01/01/2001 DISCLOSURE: This is for private use and will not be shared")

  function validateDate(birthDate) {
        var date_regex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
        return date_regex.test(birthDate);
    }
   if(validateDate(birthDate) == true){
       alert('Thank you for the information.')
   }else{
       alert('Please enter valid date')
   }

//postal code // must follow format xxxxx-xxxx

var zipCode = prompt('Please input zip code ex. 80123')


  function zip_check(zipCode) {
        var zip_regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
        return zip_regex.test(zipCode);
    }
        if(zip_check(zipCode) == true){
          alert('Thank you for the information.')
      }else{
          alert('Please enter valid date')
      }



//state abbreviation// must be only 2 characters and all caps

var stateCaps = prompt("Please enter the state you live in. ex. CO,NV,CA,...etc");

      function stateCheck(){
          var state_regex = /\b[A-Z]{2,}\b/;
            return state_regex.test(stateCaps);
      }
      if(stateCheck(stateCaps) == true && stateCaps.length === 2){
          alert('Thank you for the information.')
      }else{
          alert('Please enter valid state')
      }


//married // yes or no //can be any combo of capitalization


var youMarried = prompt("Are you married? Yes or No")
        if( youMarried.toLowerCase() == 'yes'){

          alert("You have selected YES")
        }else if( youMarried.toLowerCase() == 'no'){

          alert("You have selected NO")
        }else{
            alert('Please select Yes or No')
        }
