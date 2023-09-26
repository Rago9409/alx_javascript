var password = document.getElementById("password").value;
function validatePassword() {
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  
    if (password.match(regex)) {
      error.innerHTML = "";
      return true;
    } else {
      error.innerHTML = "The password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character (!@#$%^&*).";
      return false;
    }
  }
  