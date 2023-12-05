// Add an event listener to the send icon
const num = [1, 2, 3];
num.map((num) => {
  document
    .getElementById(`enter-comment${num}`)
    .addEventListener("click", () => {
      // Get the comment text
      const commentInput = document.querySelector(`input.comment-input${num}`);
      const commentText = commentInput.value;

      if (commentText.trim() !== "") {
        // Create a new comment element
        const commentElement = document.createElement("div");
        commentElement.classList.add("post-comment");

        commentElement.innerHTML += `
                  <div class="user-details">
                      <div class="avatar">
                          <img src="../assets/imgs/abdul/avatar.png" class="avatar" alt="avatar">
                      </div>
                      <div class="name-time">
                          <h4>John Doe</h4>
                          <p>10 October at 10.43 AM</p>
                      </div>
                  </div>
              `;

        commentElement.innerHTML +=
          '<div class="comment-content">' + commentText + "</div>";

        const postContent = document.querySelector(`#post${num}`);
        postContent.appendChild(commentElement);

        commentInput.value = "";
      }
    });
});

const userMenuIcon = document.querySelector(".user-drop-btn");
const userDropdown = document.getElementById("userDropdown");

userMenuIcon.addEventListener("click", () => {
  userDropdown.classList.toggle("show");
});

// Close the dropdown menu if the user clicks outside of it
// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (!event.target.closest(".avatar")) {
    userDropdown.classList.remove("show");
  }
});
