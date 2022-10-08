const startBtnEl = document.querySelector('[data-start]');
// console.log(startBtnEl);

const stoptBtnEl = document.querySelector('[data-stop]');
// console.log(stoptBtnEl);

const bodyEl = document.body;
// console.log(bodyEl);

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
stoptBtnEl.disabled = true;

startBtnEl.addEventListener('click', () => {
  // stoptBtnEl.disabled = true;
  stoptBtnEl.disabled = false;
  startBtnEl.disabled = true;
  bodyEl.style.backgroundColor = getRandomHexColor();
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  console.log(intervalId);
});

stoptBtnEl.addEventListener('click', () => {
  startBtnEl.disabled = false;
  stoptBtnEl.disabled = true;
  clearInterval(intervalId);
  console.log(intervalId);
});