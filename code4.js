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

  // Check match

  let message = "";

  if (normalized === reversed) {

   message = `"${input}" <strong>is</strong> a palindrome!`;

  } else {

    message = `"${input}" <strong>is NOT</strong> a palindrome.`;

  }

  // Display the result

   document.getElementById("result").innerHTML = message;


      // Clear input for repeat loop

      document.getElementById("userInput").value = "";


      document.getElementById("userInput").focus();

}

    
