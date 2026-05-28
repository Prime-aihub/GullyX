// THEME TOGGLE

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {

  document.body.classList.toggle('light');

  if (document.body.classList.contains('light')) {

    themeToggle.innerHTML = '🌙';

  } else {

    themeToggle.innerHTML = '⚽';

  }

});

// LOCATION BUTTON

function getLocation() {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(showPosition, showError);

  } else {

    alert("Geolocation is not supported by this browser.");

  }

}

// SHOW USER LOCATION

function showPosition(position) {

  const lat = position.coords.latitude;

  const lon = position.coords.longitude;

  // OPEN GOOGLE MAPS

  window.open(
    `https://www.google.com/maps?q=${lat},${lon}`,
    "_blank"
  );

  console.log("User Location:", lat, lon);

}

// LOCATION ERROR HANDLER

function showError(error) {

  switch (error.code) {

    case error.PERMISSION_DENIED:

      alert("Location access denied.");

      break;

    case error.POSITION_UNAVAILABLE:

      alert("Location unavailable.");

      break;

    case error.TIMEOUT:

      alert("Location request timed out.");

      break;

    default:

      alert("Unknown location error.");

      break;

  }

}

// OPTIONAL FUTURE READY FUNCTIONS

function joinGame(gameName, amount) {

  window.location.href = `payment.html?amount=${amount}`;

}

function openVenue() {

  window.location.href = 'venues.html';

}

function openWallet() {

  window.location.href = 'wallet.html';

}

// WEBSITE LOADED

console.log('✅ GullyX Loaded Successfully');
```
