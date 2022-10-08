import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= new Date().getTime()){
      refs.startBtn.disabled = true;
    } else {
      refs.startBtn.disabled = false;
    };
  },
};

const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  startBtn: document.querySelector('[data-start]'),
  dataTimePicker: document.querySelector('#datetime-picker'),
};

refs.startBtn.disabled = true;

flatpickr(refs.dataTimePicker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}



// 1 добавить библиотеки
// 2 инициализировать
// 3 вибор дати
// 4 добавить разметку
//


function onClick() {
  refs.days.innerHTML()
}

