//SPRINT THREE

function createCommentSection(comment) {
  const commentAll = document.createElement("div");
  const commentFilled = document.createElement("div");
  const commentImage = document.createElement("img");
  const commentText = document.createElement("p");
  const commentTitle = document.createElement("p");
  const commentName = document.createElement("p");
  const commentDate = document.createElement("p");
  const commentCopy = document.createElement("p");

  commentTitle.appendChild(commentName);
  commentTitle.appendChild(commentDate);
  commentText.appendChild(commentCopy);
  commentText.appendChild(commentTitle);
  commentFilled.appendChild(commentImage);
  commentFilled.appendChild(commentText);
  commentAll.appendChild(commentFilled);
 
  commentAll.classList.add("comments");
  commentFilled.classList.add("comments__filled");
  commentImage.classList.add("comments__image")
  commentTitle.classList.add("comments__title");

  commentName.innerText = comment.name;
  const convertedDate = new Date(comment.timestamp).toLocaleDateString();

  commentDate.innerText = convertedDate;
  commentCopy.innerText = comment.comment;

  return commentAll;
}
const bandSiteApi = new BandSiteApi("ac2bf06c-5b5f-4ccb-9b1c-5d24a455bc33");
  
async function renderAllComments() {
  const commentList = document.querySelector(".comments-list")
  commentList.innerHTML = "";
 
  const comments = await bandSiteApi.getComments();
  console.log(comments)
  comments.forEach((comment) => {
      const commentToAdd = createCommentSection(comment);
      commentList.appendChild(commentToAdd);
  });
}

renderAllComments();


//form from sprint 2
// const commentListElement = document.querySelector(".comment");
// const productForm = document.querySelector(".form__fields");

// productForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const newComment = {
//     name: event.target.commentName.value,
//     text: event.target.commentText.value,
//     date: Date.now(),
//   };

//   comments.unshift(newComment);

//   event.target.commentName.value = "";
//   event.target.commentText.value = "";

//   loopThroughandAppendComments();

// const latestCommentWrapper = commentListElement.firstChild;
// latestCommentWrapper.classList.add("form__full-width");
// });

// new stuff
const commentForm = document.querySelector(".form__fields");

commentForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const newCommentAdded = {
    name: event.target.commentName.value,
    comment: event.target.commentText.value,
  };
  console.log(newCommentAdded)
  
  await bandSiteApi.addComment(newCommentAdded);
  renderAllComments();
});

