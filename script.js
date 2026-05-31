document.getElementById("themeToggle").onclick = function () {

  document.body.classList.toggle("light");

};

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

// LOGIN STATUS

const user = JSON.parse(
  localStorage.getItem("gullyxUser")
);

if (user) {

  const loginBtn =
    document.getElementById("loginBtn");

  const tokenBadge =
    document.getElementById("tokenBadge");

  if (loginBtn) {

    loginBtn.innerHTML =
      "👤 " + user.name;

  }

  if (tokenBadge) {

    tokenBadge.style.display = "block";

    tokenBadge.innerHTML =
      "🎟️ " + user.tokens;

  }

}

const walletBalance =
  document.getElementById("walletBalance");

if (walletBalance && user) {

  walletBalance.innerHTML =
    user.tokens + " Tokens";

}



