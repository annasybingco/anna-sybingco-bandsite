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
  const convertedDate = new Date(showDate.date).toLocaleDateString('en-US', {
    weekday: 'short', 
    month: 'short',   
    day: '2-digit',  
    year: 'numeric'  
  });
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
  showdates.innerHTML = ""; 

  const headerRow = document.createElement("ul");
  headerRow.classList.add("showdate__header");
  
  const dateHeader = document.createElement("li");
  dateHeader.innerText = "Date";
  dateHeader.classList.add("showdate__date");
  
  
  const venueHeader = document.createElement("li");
  venueHeader.innerText = "Venue";
  venueHeader.classList.add("showdate__venue");
  
  const locationHeader = document.createElement("li");
  locationHeader.innerText = "Location";
  locationHeader.classList.add("showdate__location");

  headerRow.appendChild(dateHeader);
  headerRow.appendChild(venueHeader);
  headerRow.appendChild(locationHeader);
  showdates.appendChild(headerRow);

  const showdateAll = await bandSiteApi.getShowdates();

  showdateAll.forEach((showDate) => {
    const showdateAdd = createShowdates(showDate);
    showdates.appendChild(showdateAdd);
  });

let allShowdates = document.querySelectorAll(".showdate__section"); 
let currentBackground = "#FAFAFA";
let activeBackground = "#E1E1E1";


for (let i = 0; i < allShowdates.length; i++) {
  allShowdates[i].addEventListener("click", function () {
    for (let j = 0; j < allShowdates.length; j++) {
      allShowdates[j].style.backgroundColor = currentBackground;
      allShowdates[j].style.color = ""; 
    }
    this.style.backgroundColor = activeBackground;
    this.style.color = "#323232"; 
  });
}}

renderAllShowDates();


 