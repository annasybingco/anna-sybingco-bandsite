// make a new class and pass in key + async functions like bio page to call and await

//sprint 3

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
  showdateDate.classList.add("showdate_date");
  showdateVenue.classList.add("showdate__venue");
  showdateLocation.classList.add("showdate__location");
 
  const convertedDate = new Date(showDate.date).toLocaleDateString();
  showdateDateCopy.innerText = convertedDate;
  showdateVenueCopy.innerText = showDate.place;
  showdateLocationCopy.innerText = showDate.location;

  return showdate;
}

const bandSiteApi = new BandSiteApi("ac2bf06c-5b5f-4ccb-9b1c-5d24a455bc33");

async function renderAllShowDates() {
  const showdates = document.querySelector(".showdates");
  showdates.innerHTML = "";

  const showdateAll = await bandSiteApi.getShowdates();

  showdateAll.forEach((showDate) => {
    const showdateAdd = createShowdates(showDate);
    showdates.appendChild(showdateAdd);
  });
}

renderAllShowDates();