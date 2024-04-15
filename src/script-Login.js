import {login} from  "./backend.js";

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {
  login();
});

