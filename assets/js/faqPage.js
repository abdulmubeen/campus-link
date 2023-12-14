$(document).ready(function () {
  $(".toggle-button a").click(function () {
    console.log("Toggle button clicked!");
    $("#mySidenav").toggleClass("active");
  });
});

function openNav() {
  $("#mySidenav").css("width", "250px");
}

function closeNav() {
  $("#mySidenav").css("width", "0");
}

const btnSubmit = document.querySelector(".btn-submit");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const uname = document.querySelector("#uname");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("myModal").style.display = "block";
  document.getElementById("modalBackdrop").style.display = "block";
});

function closeModal() {
  // Hide modal and backdrop
  document.getElementById("myModal").style.display = "none";
  document.getElementById("modalBackdrop").style.display = "none";
  email.value = "";
  message.value = "";
  uname.value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});

window.addEventListener("load", (event) => {
  const openButton = document.querySelector(".toggle-button a");
  const closeButton = document.querySelector(".close-button");
  const sideNav = document.querySelector(".main-side-nav");

  openButton.addEventListener("click", () => {
    sideNav.style.width = "250px";
    sideNav.style.animation = "slideIn 0.5s forwards";
  });

  closeButton.addEventListener("click", () => {
    sideNav.style.animation = "slideOut 0.5s forwards";
  });

  // Close the side nav when clicking outside of it
  document.addEventListener("click", (event) => {
    if (!sideNav.contains(event.target) && !openButton.contains(event.target)) {
      sideNav.style.animation = "slideOut 0.5s forwards";
    }
  });
});
