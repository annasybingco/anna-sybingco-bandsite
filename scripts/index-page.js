//form fields
const commentListElement = document.querySelector(".comment");
const productForm = document.querySelector(".form__fields");

productForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event.target.commentName);
  console.log(event.target.commentText);

  const newComment = {
    name: event.target.commentName.value,
    text: event.target.commentText.value,
    date: Date.now(),
  };

  console.log(newComment)

  comments.unshift(newComment);

  loopThroughandAppendComments();
});


//comment section

const comments = [
  {
    name: "Victor Pinto", 
    date: 1698883200000,
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera", 
    date: 1698451200000,
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse", 
    date: 1697760000000,
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
 ]
 function loopThroughandAppendComments() {
  commentListElement.innerText = "";
  
 
 const commentList = document. querySelector(".comment");
 comments.forEach((comment) => {
  const commentItem = document.createElement("div");
  commentItem.classList.add("comments__item");

  const commentsInfo = document.createElement("div");
  commentsInfo.classList.add("comments__info");

  const commentName = document.createElement("p");
  commentName.classList.add("comment__name");
  commentName.innerText = comment.name;

  const commentDate = document.createElement("p");
  commentDate.classList.add("comment__name");
  commentDate.innerText = new Date(comment.date).toLocaleDateString("fr");

  const commentText = document.createElement("p");
  commentText.classList.add("comment__text");
  commentText.innerText = comment.text;

  // Append name and date to the info container
  commentsInfo.appendChild(commentName);
  commentsInfo.appendChild(commentDate);


  // Append info container and text to the main item
  commentItem.appendChild(commentsInfo);
  commentItem.appendChild(commentText);

  // Append the item to the list
  commentList.appendChild(commentItem);
})
 }

 loopThroughandAppendComments();