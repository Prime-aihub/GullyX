// THEME TOGGLE

const themeToggle
 = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {

  document.body.classList.toggle('light');

  if (document.body.classList.contains('light')) {

    themeToggle.innerHTML = '🌙';

  } else {

    themeToggle.innerHTML = '⚽';

  }

});

console.log('✅ GullyX Loaded Successfully');
```
