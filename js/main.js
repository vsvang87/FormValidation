const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");
const errorField = document.querySelectorAll(".error");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

//prevent form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function formValidate() {
  if (firstName.value < 1) {
    errorField[0].innerText = "First Name cannot be empty";
    firstName.classList.add("active");
  } else {
    errorField[0].innerText = "";
    firstName.classList.remove("active");
  }
  if (lastName.value < 1) {
    errorField[1].innerText = "Last Name cannot be empty";
    lastName.classList.add("active");
  } else {
    errorField[1].innerText = "";
    lastName.classList.remove("active");
  }
  if (email.value < 1) {
    errorField[2].innerText = "Email cannot be empty";
    email.classList.add("active");
  } else {
    errorField[2].innerText = "";
    email.classList.remove("active");
  }
  if (password.value < 1) {
    errorField[3].innerText = "Password cannot be empty";
    password.classList.add("active");
  } else {
    errorField[3].innerText = "";
    password.classList.remove("active");
  }
}

submitBtn.addEventListener("click", formValidate);
