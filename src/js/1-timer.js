import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('.js-button');
const days = document.querySelector('.value[ data-days ]');
const hours = document.querySelector('.value[ data-hours ]');
const minutes = document.querySelector('.value[ data-minutes ]');
const seconds = document.querySelector('.value[ data-seconds ]');

startBtn.disabled = true;
let date = Date.now();
let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
  },
};

if (userSelectedDate < date) {
    iziToast.show({
        message: 'Please choose a date in the future',
        position: 'topRight',
        progressBarColor: 'rgd(255, 255, 255)',
    })
}




flatpickr('#datetime-picker', options);

