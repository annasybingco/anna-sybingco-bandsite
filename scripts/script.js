
// example array to work with for demo
const shows = [
  {
    date:"Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco",
    button: "Buy Tickets",
  },
  {
    date:"Tue Sept 17 2024",
    venue: "Pier 3 East", 
    location: "San Francisco",
    button: "Buy Tickets",
  },
  {
    date:"Sat Oct 12 2024",
    venue: "View Lounge", 
    location: "San Francisco",
    button: "Buy Tickets",
  },
  {
    date:"Sat Nov 16 2024",
    venue: "Hyatt Agency", 
    location: "San Francisco",
    button: "Buy Tickets",
  },
  {
    date:"Fri Nov 29 2024",
    venue: "Moscow Center", 
    location: "San Francisco",
    button: "Buy Tickets",
  },
  {
    date:"Wed Dec 18 2024",
    venue: "Press Club", 
    location: "San Francisco",
    button: "Buy Tickets",
  },

];

const showList = document.querySelector(".show-list");

shows.forEach((product) => {
  const showItem = document.createElement("li");
  showItem.classList.add("shows__item");

  const showDate = document.createElement("li");
  showDate.classList.add("shows__items");
  showDate.innerText = product.date;


  const showVenue = document.createElement("li");
  showVenue.classList.add("shows__items");
  showVenue.innerText = product.venue;

  const showLocation = document.createElement("li");
 showLocation.classList.add("shows__items");
  showLocation.innerText = product.location;

  const showsButton = document.createElement("button");
  showsButton.classList.add("shows__button");
  showsButton.innerText = product.button;

  showItem.appendChild(showDate); // append description to productItem <li>
  showItem.appendChild(showVenue); // append date to productItem <li>
  showItem.appendChild(showLocation); // append price to productItem <li>
  showItem.appendChild(showsButton); //append button to productItem 
  showList.appendChild(showItem); // append everything to the <ul class="product-list">
});
