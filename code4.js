//

// Palindrome Checker Script

//

class PalindromeTracker {

  // The Constructor: runs when I create a brand new Palindrome Tracker

 constructor () {

   // Total number checks peformed

   this.totalChecks = 0;

   // Number of palindromes that's found

   this.palindromesFound = 0;

   // Number of non-palindromes that's found

   this.nonPalindromesFound = 0;

 }

  // Method: addCheck ()

  // Purpose: A new palindrome check 

  // Parameter: isPalindrome (true/false)

  addCheck(isPalindrome) {

    // Increment total checks

    this.totalChecks++;

    // Using decision logic (if/else) to track the result

    if (isPalindrome) {

      // If a palindrome, increment palindrome count

      this.palindromesFound++;

    } else {

      // If not a palindrome, increment non-palindrome count

      this.nonPalindromesFound++;

    }

  }

  // Method: getSuccessRate()

  // Purpose: Calculate what percentage were palindromes

  // Returns: A number between 0-100

  getSuccessRate() {

    // Avoiding division by zero

    if (this.totalChecks === 0) {

      return 0;

    }

    // Calculate percentage between palindromes / total * 100

    return Math.round((this.palindromesFound / this.totalChecks) * 100);

  }

  // Method: getSuccessRate()

  // Purpose: Generate the HTML to display stats 

  // Returns: HTML string with stats

  getStatsHTML () {

    // Building HTML using string manipulation

    let html = "<div style='margin-top: 20px; padding: 10px; background-color: #f0f0f0; border-radius: 5px; '>";

    html += "<h3> The Statistics: </h3>";

    html += "<p><strong>Total Checks: </strong> " + this.totalChecks + "</p>";

    html += "<p><strong>Palindromes Found: </strong> " + this.palindromesFound + "</p>";
    
    html += "<p><strong>Non-Palindromes: </strong> " + this.nonPalindromesFound + "</p>";
    
    html += "<p><strong>Success Rate: </strong> " + this.getSuccessRate() + "%</p>";

    html += "</div>";

    return html;

   

  }

}

//

// Creating a PalindromeTracker object globally

// This'll persist throughout the user's session

//

 let tracker = new PalindromeTracker();


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

  let isPalindrome = false;

  if (normalized === reversed) {

   message = `"${input}" <strong>is</strong> a palindrome!`;

    isPalindrome = true;

  } else {

    message = `"${input}" <strong>is NOT</strong> a palindrome.`;

    isPalindrome = false;

  }

  tracker.addCheck(isPalindrome);

  // Show the result

   document.getElementById("result").innerHTML = message;

  // Add stats display using the class method

  document.getElementById("result").innerHTML += tracker.getStatsHTML();
  
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

  // Add stats display

  document.getElementById("result").innerHTML += tracker.getStatsHTML();

  document.querySelector("input[type='submit']").disabled = false;

  document.getElementById("userInput").focus();

}

// End the loop and showing closing message

function exitLoop(button) {

  document.getElementById("result").innerHTML =

    "<h3>Thanks for using the Palindrome Checker!</h3>" + 
    
    "<p>Refresh the page to start again.</p>";

  // Show final stats

  document.getElementById("result").innerHTML += tracker.getStatsHTML ();

  // Disable submit button 

  document.querySelector("input[type='submit']").disabled = true;

}

