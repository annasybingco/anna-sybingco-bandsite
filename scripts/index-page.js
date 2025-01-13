function createCommentSection(comment) {
  const commentAll = document.createElement("div");
  const commentFilled = document.createElement("div");
  const commentImage = document.createElement("img");
  const commentText = document.createElement("div");
  const commentTitle = document.createElement("div");
  const commentName = document.createElement("p");
  const commentDate = document.createElement("p");
  const commentCopy = document.createElement("p");

  commentTitle.appendChild(commentName);
  commentTitle.appendChild(commentDate);
  commentText.appendChild(commentTitle);
  commentText.appendChild(commentCopy);
  commentFilled.appendChild(commentImage);
  commentFilled.appendChild(commentText);
  commentAll.appendChild(commentFilled);
 
  commentAll.classList.add("comments");
  commentFilled.classList.add("comments__filled")
  commentText.classList.add("comments__text");
  commentImage.classList.add("comments__image");
  commentTitle.classList.add("comments__title");
  commentCopy.classList.add("comments__copy");

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

  comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  
  comments.forEach((comment) => {
      const commentToAdd = createCommentSection(comment);
      commentList.appendChild(commentToAdd);
  });
}

renderAllComments();

const commentForm = document.querySelector(".form__fields");

commentForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const newCommentAdded = {
    name: event.target.commentName.value,
    comment: event.target.commentText.value,
  };
  
  await bandSiteApi.addComment(newCommentAdded);
  renderAllComments();
});

