const comments = [
  {
    name: "Victor Pinto", 
    date: "11/02/2023",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera", 
    date: "10/28/2023",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse", 
    date: "10/20/2023",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
 ]
 
 
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
  commentDate.innerText = comment.date;

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
});