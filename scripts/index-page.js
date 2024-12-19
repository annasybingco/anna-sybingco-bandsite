const comments = [
  {
    name: "Victor",
    date: "12/19/24",
    text: "this is a comment",
  },
  {
    name: "Victor",
    date: "12/19/24",
    text: "this is a comment",
  }
 ]
 
 
 const commentList = document. querySelector(".comment");
 comments.forEach((test) => {
 const commentItem = document.createElement("li");
 commentItem.classList.add("comments__item");

   const commentName = document.createElement("p");
  commentName.classList.add("comment__name");
  commentName.innerText = test.name;
 
 
  const commentDate = document.createElement("p");
  commentDate.classList.add("comment__name");
  commentDate.innerText = test.date;
 
 
  const commentText = document.createElement("p");
  commentText.classList.add("comment__text");
  commentText.innerText = test.text;
 
 
  commentItem.appendChild(commentName);
  commentItem.appendChild(commentDate);
  commentItem.appendChild(commentText);
  commentList.appendChild(commentItem);
 
 
 });
 