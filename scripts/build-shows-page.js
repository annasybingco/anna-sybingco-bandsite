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

  const showList = document.querySelector(".show-list");
  shows.forEach((show) => { 

    const showDiv = document.createElement("div");
    showDiv.classList.add("shows-all")

    const showItem1 = document.createElement("li");
    showItem1.classList.add("show__item");

    const showDateTitle = document.createElement("p");
    showDateTitle.classList.add("show__subtitle");
    showDateTitle.innerText = show.dateTitle;
  
    const showDate = document.createElement("p");
    showDate.classList.add("show__text");
    showDate.innerText = new Date (show.date).toLocaleDateString();

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
  
    showItem1.appendChild(showDateTitle) //add p to li
    showItem1.appendChild(showDate); //add p to the li
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

