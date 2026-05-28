document.getElementById("themeToggle").onclick = function () {

  document.body.classList.toggle("light");

};

```javascript id="x8m2v4"
// NEAR YOU BUTTON

const locationBtn = document.querySelector(".location-btn");

locationBtn.onclick = function () {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(

      function(position) {

        const lat = position.coords.latitude;

        const lon = position.coords.longitude;

        window.open(
          `https://www.google.com/maps?q=${lat},${lon}`,
          "_blank"
        );

      },

      function() {

        alert("Unable to access location.");

      }

    );

  } else {

    alert("Geolocation not supported.");

  }

};
