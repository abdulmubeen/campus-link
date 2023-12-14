function joinGroup() {
  var joinName = document.getElementById("joinName").value;
  var joinGroupCode = document.getElementById("joinGroupCode").value;

  // logic for joining a group here, e.g., checking the group code and handling the join process
  console.log(joinName + " is joining Group " + joinGroupCode);
}

function createGroup() {
  var createGroupName = document.getElementById("createGroupName").value;
  var createGroupCode = document.getElementById("createGroupCode").value;

  // Add your logic for creating a group here, e.g., storing the group details
  console.log(
    "Creating Group " + createGroupName + " with Code " + createGroupCode
  );
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
