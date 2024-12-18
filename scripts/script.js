// JavaScript
function addShowInfo(date, venue, location) {
    // Select the container where shows will be appended
    const allShowsContainer = document.querySelector('.all-shows');

    // Create the parent container for this show
    const showInfo = document.createElement('div');
    showInfo.classList.add('show-info');

    // Create the date element
    const showDate = document.createElement('div');
    showDate.classList.add('show__date');
    showDate.innerHTML = `<p>date</p><p>${date}</p>`;

    // Create the venue element
    const showVenue = document.createElement('div');
    showVenue.classList.add('show__venue');
    showVenue.innerHTML = `<p>venue</p><p>${venue}</p>`;

    // Create the location element
    const showLocation = document.createElement('div');
    showLocation.classList.add('show__location');
    showLocation.innerHTML = `<p>location</p><p>${location}</p>`;

    // Create the button element
    const buttonContainer = document.createElement('div');
    const button = document.createElement('button');
    button.textContent = 'Buy Tickets';
    buttonContainer.appendChild(button);

    // Append all elements to the show-info container
    showInfo.appendChild(showDate);
    showInfo.appendChild(showVenue);
    showInfo.appendChild(showLocation);
    showInfo.appendChild(buttonContainer);

    // Append show-info to the all-shows container
    allShowsContainer.appendChild(showInfo);
  }

  // Adding multiple shows dynamically
  addShowInfo('Mon Sept 09 2024', 'Ronald Lane', 'San Francisco, CA');
  addShowInfo('Tue Sept 10 2024', 'Madison Square', 'New York, NY');