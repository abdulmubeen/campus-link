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

document
  .getElementById("edit-about-btn")
  .addEventListener("click", function () {
    var newCollege = prompt("Enter new College:");
    var newWork = prompt("Enter new Work:");

    if (newCollege !== null && newCollege !== "") {
      document.getElementById("about-college").innerText = newCollege;
    }

    if (newWork !== null && newWork !== "") {
      document.getElementById("about-work").innerText = newWork;
    }
  });

document.getElementById("edit-info-btn").addEventListener("click", function () {
  var newEmail = prompt("Enter new Email:");
  var newLocation = prompt("Enter new Location:");

  if (newEmail !== null && newEmail !== "") {
    document.getElementById("Email").innerText = newEmail;
  }

  if (newLocation !== null && newLocation !== "") {
    document.getElementById("Location").innerText = newLocation;
  }
});
