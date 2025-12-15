

// Global for setInterval ID

// This allows us to stop the movement later 

// 

let moveInterval;


// Function: startMove()

// Goal: Start the meme movement & disable Start button, enable Stop button


function startMove () {

// Disable start button, enable stop

document.getElementById("startBtn").disabled = true;

document.getElementById("stopBtn").disabled = false;

  // Getting the Audio by its ID

  let music = document.getElementById("backgroundMusic");

  // Play the background sound

  music.play();

// Call the moveMeme every 200ms to animate movement

moveInterval = setInterval(moveMeme, 200);

}


// Function: stopMove ()

// Goal: Stop movement & update button states


function stopMove() {

  // Stop the setInterval loop

  clearInterval(moveInterval);

  // Getting the audio by its ID

  let music = document.getElementById("backgroundMusic");

  // Pause the background sound

  music.pause();

  // Enable the Start again, disable Stop

  document.getElementById("startBtn").disabled = false;

  document.getElementById("stopBtn").disabled = true;

}



// Function: moveMeme()

// Goal: Place the meme on the page 


function moveMeme () {

  // Selecting meme by ID

  let meme = document.getElementById("memeImage");

  let container = document.querySelector('.image-center');

  // Calculate max positions to keep meme inside container

  let maxX = container.offsetWidth - meme.offsetWidth;

  let maxY = container.offsetHeight - meme.offsetHeight;


  // Random positions within container window

  let randomX = Math.floor(Math.random() * maxX); 
  
  let randomY = Math.floor(Math.random() * maxY);

  // Applied a position using CSS

  meme.style.left = randomX + "px";

  meme.style.top = randomY + "px";

}


