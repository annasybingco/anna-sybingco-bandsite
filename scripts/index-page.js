//form fields
const commentListElement = document.querySelector(".comment");
const productForm = document.querySelector(".form__fields");

productForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newComment = {
    name: event.target.commentName.value,
    text: event.target.commentText.value,
    date: Date.now(),
  };

  comments.unshift(newComment);

  event.target.commentName.value = "";
  event.target.commentText.value = "";

  loopThroughandAppendComments();

const latestCommentWrapper = commentListElement.firstChild;
latestCommentWrapper.classList.add("form__full-width");
});

// <--- COMMENT SECTION SPRINT 2 --->
// const comments = [
//   {
//     name: "Victor Pinto", 
//     date: 1698883200000,
//     text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//   },
//   {
//     name: "Christina Cabrera", 
//     date: 1698451200000,
//     text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   },
//   {
//     name: "Isaac Tadesse", 
//     date: 1697760000000,
//     text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//   },

//  function loopThroughandAppendComments() {
//   commentListElement.innerText = "";

//   comments.forEach((comment) => {
//     const wrapper = document.createElement("div");
//     wrapper.classList.add("form__wrapper");

//     const commentAll = document.createElement("div");
//     commentAll.classList.add("comments");

//     const commentImage = document.createElement("div");
//     commentImage.classList.add("comments__image");

//     commentAll.appendChild(commentImage);

//     const commentItem = document.createElement("div");
//     commentItem.classList.add("comments__item");

//     const commentsInfo = document.createElement("div");
//     commentsInfo.classList.add("comments__info");

//     const commentName = document.createElement("p");
//     commentName.classList.add("comment__name");
//     commentName.innerText = comment.name;

//     const commentDate = document.createElement("p");
//     commentDate.classList.add("comment__date");
//     commentDate.innerText = new Date(comment.date).toLocaleDateString("en-US", {
//       weekday: "short",
//       month: "short",   
//       day: "2-digit",  
//       year: "numeric"   
//     });

//     const commentText = document.createElement("p");
//     commentText.classList.add("comment__text");

//     commentText.innerText = comment.text;
//     commentsInfo.appendChild(commentName);
//     commentsInfo.appendChild(commentDate);
//     commentItem.appendChild(commentsInfo);
//     commentItem.appendChild(commentText);
//     wrapper.appendChild(commentAll);
//     wrapper.appendChild(commentItem);
//     commentListElement.appendChild(wrapper);

//   });
// }

//  loopThroughandAppendComments();

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
  const convertedDate = new Date(comment.postedDate).toLocaleDateString();

  commentDate.innerText = convertedDate;
  commentCopy.innerText = comment.comment;

  return commentAll;
}
const BandSiteApi = new BandsiteApi("myApiKey");
async function renderAllCommments() {
  commentListElement.innerHTML = "";

  const comments = await BandSiteApi.getComments();

  comments.forEach((comment) => {
    const commentToAdd = createCommentSection(comment);
    commentListElement.appendChild(commentToAdd)
  });
}
