var email = document.getElementById("email").value;
function validateEmail() {
    var email = document.getElementById("email").value;
    var error = document.getElementById("error");
    var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  
    if (email.match(regex)) {
      error.innerHTML = "";
      return true;
    } else {
      error.innerHTML = "Please enter a valid email address.";
      return false;
    }
  }
  