let monthYear = document.querySelector(".month-year");
let boxDate = document.querySelector(".box-date ul");
let navigationbtn = document.querySelectorAll(".fa-solid");
let footer = document.querySelectorAll(".footer h3");

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function renderCalender() {
  let firstdayofmonth = new Date(currentYear, currentMonth, 1).getDay();
  let lastdateofmonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let lastdayofmonth = new Date(
    currentYear,
    currentMonth,
    lastdateofmonth
  ).getDay();
  let lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();
  console.log(firstdayofmonth, lastDateofLastMonth);

  let lisTag = "";

  for (let i = firstdayofmonth; i > 0; i--) {
    // creating li of previous month last days
    lisTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastdateofmonth; i++) {
    if (
      i == date.getDate() &&
      new Date().getFullYear() == currentYear &&
      new Date().getMonth() == currentMonth
    ) {
      lisTag += `<li class="active">${i}</li>`;
      continue;
    }
    lisTag += `<li>${i}</li>`;
  }

  for (let i = lastdayofmonth; i < 6; i++) {
    lisTag += `<li class="inactive">${i - lastdayofmonth + 1}</li>`;
  }

  monthYear.innerText = months[currentMonth] + " " + currentYear;
  boxDate.innerHTML = lisTag;
}
renderCalender();

navigationbtn.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", (e) => {
    currentMonth = btn.id == "prev" ? currentMonth - 1 : currentMonth + 1;

    if (currentMonth < 0 || currentMonth > 11) {
      // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      date = new Date(currentYear, currentMonth);
      currentYear = date.getFullYear(); // updating current year with new date year
      currentMonth = date.getMonth();
    } // updating current month with new date month
    else {
      date = new Date(); // pass the current date as date value
    }
    renderCalender();
  });
});

footer.forEach((element) => {
  let footerdate = new Date();
  if (element.id == "date") {
    element.innerText = `Today: ${footerdate.toDateString()}`;
  } else {
    setInterval((e) => {
      let footertime = new Date();
      element.innerText = `Time: ${footertime.toLocaleTimeString()}`;
    }, 1000);
  }
});
