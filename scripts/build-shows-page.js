const shows = [
  {
    dateTitle: "Date",
    date: 1725849600000,
    venueTitle: "Venue",
    venue: "Ronald Lane",
    locationTitle: "Location",
    location: "San Francisco",
    button: "Buy Tickets",
  },
  {
    dateTitle: "Date",
    date: 1726540800000,
    venueTitle: "Venue",
    venue: "Pier 3 East", 
    locationTitle: "Location",
    location: "San Francisco",
    button: "Buy Tickets",
  },
  {
    dateTitle: "Date",
    date: 1728691200000,
    venueTitle: "Venue",
    venue: "View Lounge", 
    locationTitle: "Location",
    location: "San Francisco",
    button: "Buy Tickets",
  },
  {
    dateTitle: "Date",
    date: 1731417600000,
    venueTitle: "Venue",
    venue: "Hyatt Agency", 
    locationTitle: "Location",
    location: "San Francisco",
    button: "Buy Tickets",
  },
  {
    dateTitle: "Date",
    date:1732838400000,
    venueTitle: "Venue",
    venue: "Moscow Center", 
    locationTitle: "Location",
    location: "San Francisco",
    button: "Buy Tickets",
  },
  {
    dateTitle: "Date",
    date: 1734480000000,
    venueTitle: "Venue",
    venue: "Press Club", 
    locationTitle: "Location",
    location: "San Francisco",
    button: "Buy Tickets",
  },

];


// Select the parent container
const showList = document.querySelector(".show-list");

// Create a new div for the title
const titleDiv = document.createElement("div");
titleDiv.classList.add("shows-title");

// Create the h3 element
const titleElement = document.createElement("h3");
titleElement.innerText = "Shows";
titleElement.classList.add("shows-heading"); // Optional class for styling

// Append the h3 to the title div
titleDiv.appendChild(titleElement);

// Add the title div to the top of the show list container
showList.prepend(titleDiv);

// Loop through the shows array and add show information
shows.forEach((show) => { 
  const showDiv = document.createElement("div");
  showDiv.classList.add("shows-all");

  const showItem1 = document.createElement("li");
  showItem1.classList.add("show__item");

  const showDateTitle = document.createElement("p");
  showDateTitle.classList.add("show__subtitle");
  showDateTitle.innerText = show.dateTitle;

  const showDate = document.createElement("p");
  showDate.classList.add("show__text");
  showDate.innerText = new Date(show.date).toLocaleDateString();

  const showItem2 = document.createElement("li");
  showItem2.classList.add("show__item2");

  const showVenueTitle = document.createElement("p");
  showVenueTitle.classList.add("show__subtitle");
  showVenueTitle.innerText = show.venueTitle;

  const showVenue = document.createElement("p");
  showVenue.classList.add("show__text");
  showVenue.innerText = show.venue;

  const showItem3 = document.createElement("li");
  showItem3.classList.add("show__item3");

  const showLocationTitle = document.createElement("p");
  showLocationTitle.classList.add("show__subtitle");
  showLocationTitle.innerText = show.locationTitle;

  const showLocation = document.createElement("p");
  showLocation.classList.add("show__text");
  showLocation.innerText = show.location;

  const showsButton = document.createElement("button");
  showsButton.classList.add("button");
  showsButton.innerText = show.button;

  showItem1.appendChild(showDateTitle);
  showItem1.appendChild(showDate);
  showItem2.appendChild(showVenueTitle);
  showItem2.appendChild(showVenue);
  showItem3.appendChild(showLocationTitle);
  showItem3.appendChild(showLocation);
  showDiv.appendChild(showItem1);
  showDiv.appendChild(showItem2);
  showDiv.appendChild(showItem3);
  showDiv.appendChild(showsButton);

  showList.appendChild(showDiv);
});