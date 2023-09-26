var selectedValue = document.getElementById("numFields").value;
function generateInputFields(selectedValue) {
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear any existing fields
  
    for (var i = 0; i < selectedValue; i++) {
      var inputField = document.createElement("input");
      inputField.type = "text";
      inputField.name = "field" + (i + 1);
      inputContainer.appendChild(inputField);
    }
  }
  function validateForm() {
    var inputs = document.querySelectorAll("#inputContainer input");
  
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        alert("Please fill in all fields.");
        return false;
      }
    }
  
    return true;
  }
    