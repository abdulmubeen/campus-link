function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("show-menu");
}

document.addEventListener("DOMContentLoaded", function () {
  const messageInput = document.querySelector(".messages .input input");
  const sendMessageBtn = document.querySelector(
    ".send-message .input-icons .send"
  );

  // Handle sending a message when the send button is clicked
  sendMessageBtn.addEventListener("click", function () {
    const messageText = messageInput.value.trim();
    if (messageText !== "") {
      sendMessage(messageText);
      messageInput.value = ""; // Clear the input field
    }
  });

  // Handle sending a message when Enter key is pressed
  messageInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const messageText = messageInput.value.trim();
      if (messageText !== "") {
        sendMessage(messageText);
        messageInput.value = ""; // Clear the input field
      }
    }
  });

  // Function to simulate sending a message (replace with your actual functionality)
  function sendMessage(text) {
    // Implement your logic to send the message
    console.log("Message sent:", text);

    // For demonstration purposes, let's add a new message to the chat
    const messageBody = document.querySelector(".message-body");
    const newMessage = createMessage("You", text, true);
    messageBody.appendChild(newMessage);

    // Scroll to the bottom to show the latest message
    messageBody.scrollTop = messageBody.scrollHeight;
  }

  // Function to create a message element
  function createMessage(sender, text, isUser) {
    const message = document.createElement("div");
    message.classList.add("message");

    const userImage = document.createElement("div");
    userImage.classList.add("message-user");
    userImage.innerHTML = `<img src="../assets/imgs/abdul/avatar.png" alt="avatar">`;

    const messageBody = document.createElement("div");
    messageBody.classList.add("message-body");
    messageBody.textContent = text;

    if (!isUser) {
      message.appendChild(userImage);
      message.appendChild(messageBody);
    } else {
      messageBody.classList.add("message-body-pr");
      const userImagePr = document.createElement("div");
      userImagePr.classList.add("message-user-pr");
      userImagePr.innerHTML = `<img src="../assets/imgs/abdul/post1-user.png" alt="avatar">`;
      message.appendChild(messageBody);
      message.appendChild(userImagePr);
    }

    return message;
  }
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
