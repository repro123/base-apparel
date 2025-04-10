"use strict";

// select all needed DOM elements
const form = document.querySelector(".form");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error-message");

// commonly used regular empression for validating emails
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// validate email
function validateEmail() {
  const emailValue = emailInput.value.trim();
  const isValid = emailRegex.test(emailValue); // should be true if input is correct

  //   set data-invalid attribute to true if isValid is falser, and vice versa
  emailInput.setAttribute("data-invalid", !isValid);

  //   update error messafge if input's data invalid attribute is false
  if (emailInput.getAttribute("data-invalid") === "true") {
    errorMessage.textContent = "Please provide a valid email";
  } else {
    errorMessage.textContent = "";
  }
}

// clear input and success message fields after form is submitted
function clearFields() {
  emailInput.value = "";
  errorMessage.textContent = "";
  errorMessage.classList.remove("success-message");
}

// validate input as the user types
emailInput.addEventListener("input", validateEmail);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateEmail();

  if (emailInput.getAttribute("data-invalid") === "false") {
    // Simulate form submission
    errorMessage.textContent = "Submitted successfully";
    errorMessage.classList.add("success-message");

    setTimeout(clearFields, 3000); //clear learFields function after 3 seconds
  } else {
    errorMessage.textContent = "Please fix the errors before submitting";
  }
});
