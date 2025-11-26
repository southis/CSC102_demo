// Validate user input and for display the untold message 

function validateInputs() { 

  // Obtain the values from form 

  let firstName = document.getElementById("firstName").value.trim();

  let lastName = document.getElementById("lastName").value.trim();

  let zip = document.getElementById("zip").value.trim();

  // Combine first + last name 

  let fullName = firstName + " " + lastName;

  // Name length 

  if (fullName.length > 20) {

    document.getElementById("message").innerHTML = 
      
      "Warning: Full name must be less than 20 characters.";

    return;

  }

  // Using zip code: 5 digits

  if (!/^\d{5}$/.test(zip) ) {

    document.getElementById("message").innerHTML = 
      
      "Warning: Zip code must be 5 digits.";

    return;

  }

  // If inputs are valid, reveal untold message

  document.getElementById("message").innerHTML = 
    
    "Hooray, " + fullName + 
    
    "! Here's the untold message: <strong>Cybersecurity is about positioning - trust no one verify everything!</strong>";
}
