window.onload = function () {

  const themeToggle = document.getElementById('themeToggle');

  themeToggle.onclick = function () {

    document.body.classList.toggle('light');

    if (document.body.classList.contains('light')) {

      themeToggle.innerHTML = '🌙';

    } else {

      themeToggle.innerHTML = '⚽';

    }

  };

};
