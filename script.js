// WAIT UNTIL PAGE LOADS

document.addEventListener('DOMContentLoaded', () => {

  console.log('✅ GullyX Loaded Successfully');

  // THEME TOGGLE

  const themeToggle = document.getElementById('themeToggle');

  if (themeToggle) {

    themeToggle.addEventListener('click', () => {

      document.body.classList.toggle('light');

      if (document.body.classList.contains('light')) {

        themeToggle.innerHTML = '🌙';

      } else {

        themeToggle.innerHTML = '⚽';

      }

    });

  }

  // SMOOTH SCROLL NAVIGATION

  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {

    link.addEventListener('click', function (e) {

      const targetId = this.getAttribute('href');

      if (targetId.startsWith('#')) {

        e.preventDefault();

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

          targetSection.scrollIntoView({
            behavior: 'smooth'
          });

        }

      }

    });

  });

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

  console.log("User Location:", lat, lon);

  // OPEN GOOGLE MAPS

  window.open(
    `https://www.google.com/maps?q=${lat},${lon}`,
    "_blank"
  );

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

// GAME JOIN FUNCTION

function joinGame(amount = 10) {

  window.location.href = `payment.html?amount=${amount}`;

}

// OPEN VENUE PAGE

function openVenue() {

  window.location.href = 'venues.html';

}

// OPEN WALLET PAGE

function openWallet() {

  window.location.href = 'wallet.html';

}

// START PLAYING BUTTON

function startPlaying() {

  const gamesSection = document.getElementById('games');

  if (gamesSection) {

    gamesSection.scrollIntoView({
      behavior: 'smooth'
    });

  }

}
```
