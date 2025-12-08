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

  let reversed = normalized.split('').reverse().join('');

  // Check if palindrome

  if (normalized === reversed) {

    document.getElementById("result").innerHTML = `"${input}" is a palindrome. Hooray!`;

  } else {

    document.getElementById("result").innerHTML = `"${input}" is NOT a palindrome. Try again.`;

  }

  // Asking user if they want to try again

  setTimeout(() => {

    let tryAgain = prompt("Do you want to examine another word? (yes/no)")?.toLowerCase();

    if (tryAgain === "yes" || tryAgain === "y") {

      // Clear input and result for next examination 

      document.getElementById("userInput").value = "";

      document.getElementById("result").innerHTML = "Your result will appear here.";

      document.getElementById("userInput").focus();

    } else {

      document.getElementById("result").innerHTML += "<br>Thank you for using the Palindrome Checker!";

    }

  }, 100); // Delay to allow innerHTML update before prompt 

}

