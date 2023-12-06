const fileBtn = document.querySelector(".file-btn");
const bodyContent = document.getElementById("bodyContent");

fileBtn.addEventListener("click", () => {
  bodyContent.classList.toggle("hide");

  fileBtn.classList.toggle("fa-chevron-up");
  fileBtn.classList.toggle("fa-chevron-down");
});

const copyLinkButton = document.getElementById("copyLinkButton");
const copyNotification = document.getElementById("copyNotification");

copyLinkButton.addEventListener("click", () => {
  // Copy the current window URL to the clipboard
  const currentURL = window.location.href;
  navigator.clipboard.writeText(currentURL);

  // Show notification
  copyNotification.style.display = "block";

  // Change button appearance to success state
  copyLinkButton.classList.add("success");
  copyLinkButton.innerHTML =
    '<i class="fa-solid fa-check animate-checkmark"></i><span>Copied!</span>';

  // Revert the changes after a delay (e.g., 2 seconds)
  setTimeout(() => {
    copyLinkButton.classList.remove("success");
    copyLinkButton.innerHTML =
      '<i class="fa-solid fa-copy"></i><span>Copy link</span>';

    // Hide notification
    copyNotification.style.display = "none";
  }, 2000);
});

const gridViewIcon = document.getElementById("grid-view");
const listViewIcon = document.getElementById("list-view");

gridViewIcon.addEventListener("click", () => {
  bodyContent.classList.remove("list-view");
  bodyContent.classList.add("grid-view");
  gridViewIcon.classList.add("active");
  listViewIcon.classList.remove("active");
});

listViewIcon.addEventListener("click", () => {
  bodyContent.classList.remove("grid-view");
  bodyContent.classList.add("list-view");
  listViewIcon.classList.add("active");
  gridViewIcon.classList.remove("active");
});
