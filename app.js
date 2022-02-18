const weekList = [
  "Chủ nhật",
  "Thứ hai",
  "Thứ ba",
  "Thứ tư",
  "Thứ năm",
  "Thứ sáu",
  "Thứ bảy",
];

const giveaway = document.querySelector(".giveaway");
const daysText = document.querySelector(".days");
const hoursText = document.querySelector(".hours");
const minutesText = document.querySelector(".minutes");
const secondsText = document.querySelector(".seconds");

function countdown(endDate) {
  const now = new Date();
  const startTime = now.getTime();
  const endTime = new Date(endDate).getTime();

  /*
    ngày - giờ - phút - giây
        1 ngày = 24 * 60 * 60 = 86400 seconds
        1 giờ = 60 * 60 = 3600
        1 phút = 60 
    */
  const oneDay = 24 * 60 * 60;
  const oneHour = 60 * 60;
  const oneMinute = 60;
  let currentTime = parseInt((endTime - startTime) / 1000); // chia cho 1000 để chuyển từ milisecond về second

  if (isNaN(endDate) || endDate - currentTime <= 0) return;

  let days = Math.floor(currentTime / oneDay);
  let hours = Math.floor((currentTime % oneDay) / oneHour);
  let minutes = Math.floor((currentTime % oneHour) / oneMinute);
  let seconds = Math.floor(currentTime % oneMinute);

  hoursText.textContent = formatNumber(hours);
  daysText.textContent = formatNumber(days);
  minutesText.textContent = formatNumber(minutes);
  secondsText.textContent = formatNumber(seconds);

  if (currentTime < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}

function formatNumber(number) {
  return number < 10 ? `0${number}` : number;
}

let futureYear = new Date().getFullYear();
let futureMonth = new Date().getMonth();
let futureDay = new Date().getDate();
const futureDate = new Date(futureYear, futureMonth, futureDay + 10, 11, 30, 0);

let yearLeft = futureDate.getFullYear(); // Lấy năm còn lại

let monthLeft = formatNumber(futureDate.getMonth()); // Lấy tháng còn lại
let weekLeft = weekList[futureDate.getDay()]; // Lấy tuần còn lại

let dayLeft = formatNumber(futureDate.getDate()); // Lấy ngày còn lại
let hourLeft = formatNumber(futureDate.getHours()); // Lấy giờ còn lại
let minuteLeft = formatNumber(futureDate.getMinutes()); // Lấy phút còn lại

giveaway.textContent = `Thời hạn ưu đại kết thúc vào ${weekLeft}, ${dayLeft}/${monthLeft}/${yearLeft} ${hourLeft}:${minuteLeft}am`;

setInterval(function () {
  countdown(futureDate);
}, 1000);
