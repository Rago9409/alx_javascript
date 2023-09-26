var form = document.getElementById("myForm");
form.addEventListener("submit", handleFormSubmit);
function handleFormSubmit(event) {
    event.preventDefault(); 
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    if (name === "" || email === "") {
      alert("Please fill in all required fields.");
      return;
    }
  
    alert("Form submitted successfully!");
  }
  