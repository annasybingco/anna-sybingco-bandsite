function createShowdates(showDate) {
  const showdate = document.createElement("ul")
  const showdateDate = document.createElement("ul");
  const showdateDateTitle = document.createElement("li");
  const showdateDateCopy = document.createElement("li");
  const showdateVenue = document.createElement("ul");
  const showdateVenueTitle = document.createElement("li");
  const showdateVenueCopy = document.createElement("li");
  const showdateLocation = document.createElement("ul");
  const showdateLocationTitle = document.createElement("li");
  const showdateLocationCopy = document.createElement("li");
  const showdateSubmit = document.createElement("ul");
  const showdateButton = document.createElement("button");

  showdateDate.appendChild(showdateDateTitle);
  showdateDate.appendChild(showdateDateCopy);
  showdateVenue.appendChild(showdateVenueTitle);
  showdateVenue.appendChild(showdateVenueCopy);
  showdateLocation.appendChild(showdateLocationTitle);
  showdateLocation.appendChild(showdateLocationCopy);
  showdateSubmit.appendChild(showdateButton);
  showdate.appendChild(showdateDate)
  showdate.appendChild(showdateVenue);
  showdate.appendChild(showdateLocation);
  showdate.appendChild(showdateSubmit);

  showdate.classList.add("showdate__section");
  showdateDate.classList.add("showdate__date");
  showdateDateTitle.classList.add("showdate__hidden")
  showdateVenue.classList.add("showdate__venue");
  showdateVenueTitle.classList.add("showdate__hidden")
  showdateLocation.classList.add("showdate__location");
  showdateLocationTitle.classList.add("showdate__hidden")
  showdateButton.classList.add("button")
 
  showdateDateTitle.innerText = "Date";
  const convertedDate = new Date(showDate.date).toLocaleDateString();
  showdateDateCopy.innerText = convertedDate;
  showdateVenueTitle.innerText = "Venue"
  showdateVenueCopy.innerText = showDate.place;
  showdateLocationTitle.innerText = "Location"
  showdateLocationCopy.innerText = showDate.location;
  showdateButton.innerText = "Buy Tickets"

  return showdate;
}

const bandSiteApi = new BandSiteApi("ac2bf06c-5b5f-4ccb-9b1c-5d24a455bc33");

async function renderAllShowDates() {
  const showdates = document.querySelector(".showdates");
  showdates.innerHTML = ""; // Clear the container

  // Create the top row with headers
  const headerRow = document.createElement("ul");
  headerRow.classList.add("showdate__header");
  
  const dateHeader = document.createElement("li");
  dateHeader.innerText = "Date";
  
  const venueHeader = document.createElement("li");
  venueHeader.innerText = "Venue";
  
  const locationHeader = document.createElement("li");
  locationHeader.innerText = "Location";

  headerRow.appendChild(dateHeader);
  headerRow.appendChild(venueHeader);
  headerRow.appendChild(locationHeader);
  showdates.appendChild(headerRow);

  const showdateAll = await bandSiteApi.getShowdates();

  showdateAll.forEach((showDate) => {
    const showdateAdd = createShowdates(showDate);
    showdates.appendChild(showdateAdd);
  });

let allShowdates = document.querySelectorAll(".showdate__section"); // Select all relevant elements
let currentBackground = "lightgrey"; // Default background color
let activeBackground = "black"; // Background color when active

// Loop through each showdate and add a click event listener
for (let i = 0; i < allShowdates.length; i++) {
  allShowdates[i].addEventListener("click", function () {
    // Reset the background of all elements
    for (let j = 0; j < allShowdates.length; j++) {
      allShowdates[j].style.backgroundColor = currentBackground;
      allShowdates[j].style.color = ""; // Reset text color (optional)
    }

    // Set the background and text color of the clicked element
    this.style.backgroundColor = activeBackground;
    this.style.color = "#fff"; // Optional: Make text color white for contrast
  });
}}

renderAllShowDates();


 