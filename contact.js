
// create a function to validate form
function validateForm() {
    var nameInput = document.getElementById("name-input");
    var emailInput = document.getElementById("email-input");
    var messageInput = document.getElementById("message-input");
    var errorMessage = document.getElementById("error-message");
  
    //using if else statement to show an error 
    if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
      errorMessage.textContent = "Please fill out all fields.";
      return false;
    }
  
    if (!isValidEmail(emailInput.value)) {
      errorMessage.textContent = "Please enter a valid email address.";
      return false;
    }
  
    return true;
  }
  
  //regex the email input
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return emailRegex.test(email);
  }