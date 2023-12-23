document.getElementById("myForm").addEventListener("submit", function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Validate the form
  if (validateForm()) {
    alert("Form submitted successfully!");
  }
});

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // Simple validation - check if name and email are not empty
  if (name.trim() === "" || email.trim() === "") {
    alert("Name and email are required!");
    return false;
  }

  // You can add more complex validation logic here if needed

  return true;
}
