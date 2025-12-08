//

// Palindrome Checker Script

//

function checkPalindrome() {

// Get user input from form

let input = document.getElementById("userInput").value.trim();

// Validate input length

if (input.length === 0) {

  document.getElementById("result").innerHTML = "Please enter a word or phrase.";

  return;

}

// Normalize input: remove spaces and convert to lowercase

let normalized = input.replace(/\s+/g, '').toLowerCase();

  // Reverse the normalized string

  let reversed = normalized.split("").reverse().join("");

  // Determine message

  let message = "";

  if (normalized === reversed) {

   message = `"${input}" <strong>is</strong> a palindrome!`;

  } else {

    message = `"${input}" <strong>is NOT</strong> a palindrome.`;

  }

  // Show the result

   document.getElementById("result").innerHTML = message;


      document.getElementById("userInput").value = "";


  // Asking user if they want to check another word

  continueLoop();

}
// Display options to continue or exit

function continueLoop() {

  document.getElementById("result").innerHTML +=

    "<br><br>Would you like to check another word?<br>" +

    "<button onclick='resetForNext(this)'>Yes, Check Another</button> " +

    "<button onclick='exitLoop(this)'>No, I'm Done</button>";

  // Disable submit button

  document.querySelector("input[type='submit']").disabled = false;

}

// Reset input for next check

function resetForNext(button) { 

  document.getElementById("result").innerHTML = "Enter another word or phrase!";

  document.querySelector("input[type='submit']").disabled = false;

  document.getElementById("userInput").focus();

}

// End the loop and showing closing message

function exitLoop(button) {

  document.getElementById("result").innerHTML =

    "Thanks for using the Palindrome Checker! Refresh the page to start again.";

  document.querySelector("input[type='submit']").disabled = true;


}


    
