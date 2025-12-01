//

// Global for setInterval ID

// This allows us to stop the movement later 

// 

let moveInterval;

//

// Function: startMove()

// Goal: Start the meme movement & 

// disable Start button, enable Stop button

//

function startMove () {

// Disable starting point, enable stop

document.getElementById("startBtn").disabled = true;

document.getElementById("stopBtn").disabled = false;

// Call the moveMeme every 200ms to animate movement

moveInterval = setInterval(moveMeme, 200);

}

//

// Function: stopMove ()

// Goal: Stop movement & updates button state 

//

function stopMove() {

  // Stop the setInterval loop

  clearInterval(moveInterval);

  // Enable the Start again, disbale Stop

  document.getElementById("startBtn").disabled = false;

  document.getElementById("stopBtn").disabled = true;

}

//

// Function: moveMeme()

// Goal: Place the meme on the page 

//

function moveMeme () {

  // Selecting meme by ID

  let meme = document.getElementById("memeImage");

  // Created a random X/Y position inside the window

  let randomX = Math.floor(Math.random() * 500); 
  
  let randomY = Math.floor(Math.random() * 500);

  // Applied a brand new position using CSS

  meme.style.position = "relative";

  meme.style.left = randomX + "px";

  meme.style.top = randomY + "px";

}


