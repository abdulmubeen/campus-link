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

// document.getElementById("send-comment").addEventListener("click", function () {
//   // Get the input value
//   var commentInput = document.querySelector(".comment-input input");
//   var commentText = commentInput.value;

//   // Check if the comment is not empty
//   if (commentText.trim() !== "") {
//     // Create a new comment element
//     var newComment = document.createElement("div");
//     newComment.classList.add("post-comment");

//     // Add user avatar
//     newComment.innerHTML += `
//             <div class="user-details">
//                 <div class="avatar">
//                     <img src="../assets/imgs/abdul/avatar.png" class="avatar" alt="avatar">
//                 </div>
//                 <div class="name-time">
//                     <h4>John Doe</h4>
//                     <p>10 October at 10.43 AM</p>
//                 </div>
//             </div>
//         `;

//     // Add comment text
//     newComment.innerHTML +=
//       '<div class="comment-content">' + commentText + "</div>";

//     // Append the new comment below the post-content
//     var postContent = document.querySelector(".post-content");
//     postContent.appendChild(newComment);

//     // Clear the comment input
//     commentInput.value = "";
//   }
// });
