function showDetails() {
  const myImage = document.getElementById("myImage");
  const imageDetails = `${myImage.alt}`;
  alert(imageDetails);
}

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
