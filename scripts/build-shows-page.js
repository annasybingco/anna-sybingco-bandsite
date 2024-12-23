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

// Selecting the parent container
const showList = document.querySelector(".show-list");

//create a ul for the title
const showsHeading = document.createElement("ul");
showsHeading.classList.add("shows__heading");

//create the h2 element
const showsTitle = document.createElement("h2");
showsTitle.innerText = "Shows";

showsHeading.appendChild(showsTitle);

const showsTable = document.createElement("ul");
showsTable.classList.add("shows__table");

// Loop through the shows array and add show information
shows.forEach((show, index) => { 
  const showsTableRow = document.createElement("ul");
  showsTableRow.classList.add("shows__table-row");
  
  const showsTableSection = document.createElement("ul");
  showsTableSection.classList.add("shows__table-section");

  const showsTitle = document.createElement("li");
  showsTitle.classList.add("shows__title", "label");
  showsTitle.innerText = show.dateTitle;

  const showsCopy = document.createElement("li");
  showsCopy.classList.add("shows__copy", "shows__date-bold");
  showsCopy.innerText = new Date(show.date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",   
    day: "2-digit",  
    year: "numeric"   
  });

  const showsTableSection2 = document.createElement("ul");
  showsTableSection2.classList.add("shows__table-section");

  const showsTitle2 = document.createElement("li");
  showsTitle2.classList.add("shows__title", "label");
  showsTitle2.innerText = show.venueTitle;

  const showsCopy2 = document.createElement("li");
  showsCopy2.classList.add("shows__copy");
  showsCopy2.innerText = show.venue;

  const showsTableSection3 = document.createElement("ul");
  showsTableSection3.classList.add("shows__table-section");

  const showsTitle3 = document.createElement("li");
  showsTitle3.classList.add("shows__title", "label");
  showsTitle3.innerText = show.locationTitle;

  const showsCopy3 = document.createElement("li");
  showsCopy3.classList.add("shows__copy");
  showsCopy3.innerText = show.location;

  const showsButton = document.createElement("button");
  showsButton.classList.add("button");
  showsButton.innerText = show.button;

  // Hide titles for rows other than the first
  if (index !== 0) {
      showsTitle.classList.add("shows__title--hide");
      showsTitle2.classList.add("shows__title--hide");
      showsTitle3.classList.add("shows__title--hide");
  }

  // Append date section
  showsTableSection.appendChild(showsTitle);
  showsTableSection.appendChild(showsCopy);

  // Append venue section
  showsTableSection2.appendChild(showsTitle2);
  showsTableSection2.appendChild(showsCopy2);

  // Append location section
  showsTableSection3.appendChild(showsTitle3);
  showsTableSection3.appendChild(showsCopy3);

  // Append table sections to the row
  showsTableRow.appendChild(showsTableSection);
  showsTableRow.appendChild(showsTableSection2);
  showsTableRow.appendChild(showsTableSection3);
  showsTableRow.appendChild(showsButton);

  // Append row to table
  showsTable.appendChild(showsTableRow);

  // Append uls to main
  showList.appendChild(showsHeading);
  showList.appendChild(showsTable);
});

