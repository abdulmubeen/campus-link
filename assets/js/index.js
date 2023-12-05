const signInBtn = document.querySelector(".signInBtn");

// button animation
const signInArrow = document.querySelector(".signInArrow");

const btnTimeline = gsap.timeline({ paused: true });
btnTimeline
  .to(signInArrow, { duration: 0.175, x: 18 })
  .to(signInBtn, { duration: 0.175, x: 10 });

signInBtn.addEventListener("mouseenter", () => {
  btnTimeline.play();
});

signInBtn.addEventListener("mouseleave", () => {
  btnTimeline.reverse();
});

//password toggle button
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("input[id='pwd']");

togglePassword.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  this.classList.toggle("fa-eye");
});

//form validation
const username = document.querySelector("input[id='uname']");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const signinToast = document.getElementById("signinToast");

// Add event listener to the sign-in button
signInBtn.addEventListener("click", (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Validate username
  if (!validateUsername(username.value)) {
    showError(username, usernameError, "invalid username");
    return;
  }

  // Validate password
  if (!validatePassword(password.value)) {
    showError(password, passwordError, "invalid password");
    return;
  }

  // If all validations pass, user is redirected to the home page

  // Show the toast
  signinToast.style.display = "block";

  // Redirect to the home page after a delay (e.g., 2 seconds)
  setTimeout(() => {
    window.location.href = "../../pages/home.html";
  }, 2000);
});

// Function to validate username
const validateUsername = (username) => {
  const usernamePattern =
    /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/;
  return usernamePattern.test(username);
};

// Function to validate password
const validatePassword = (password) => {
  const passwordPattern =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return passwordPattern.test(password);
};

// Function to show error message and highlight the input
const showError = (inputElement, errorElement, errorMessage) => {
  inputElement.style.borderColor = "red";
  errorElement.textContent = errorMessage;
  errorElement.style.color = "red";
  errorElement.style.fontSize = "0.8rem";
  if (errorMessage == "invalid password") {
    togglePassword.style.borderColor = "red";
  }
};

// Function to reset the input style and hide the error message
const resetError = (inputElement, errorElement, pwd = 0) => {
  inputElement.style.borderColor = "";
  errorElement.textContent = "";
  if (pwd) {
    togglePassword.style.borderColor = "";
  }
};

// Reset the input style and hide the error when user starts typing
username.addEventListener("input", () => resetError(username, usernameError));
password.addEventListener("input", () =>
  resetError(password, passwordError, 1)
);
