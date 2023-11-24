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
