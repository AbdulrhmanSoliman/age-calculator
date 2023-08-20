// Day, Month and Year inputs seperated
const years = document.querySelector("#year");
const months = document.querySelector("#month");
const days = document.querySelector("#day");
// All Inputs and Labels
const allInputs = document.querySelectorAll("input");
const allLabels = document.querySelectorAll("label");
// Error Dates and button
const btn = document.querySelector("button");
const invaildSpans = document.querySelectorAll(".invaild");
const dayError = document.querySelector(".dayerr");
const monthError = document.querySelector(".montherr");
const yearError = document.querySelector(".yearerr");
// Span Date Result
const yearResult = document.querySelector(".years span");
const monthResult = document.querySelector(".months span");
const dayResult = document.querySelector(".days span");
const allSpans = document.querySelectorAll(".num");

btn.onclick = function (e) {
  e.preventDefault();
  if (years.value != "" || months.value != "" || years.value != "") {
    let allDate = `${months.value} ${days.value} ${years.value}`;
    let theDate = new Date();
    let birthday = new Date(allDate);
    let lastDayOf = new Date(years.value, months.value, 0).getDate();
    let myYears = theDate.getFullYear() - birthday.getFullYear();
    let myMonths = theDate.getMonth() - birthday.getMonth();
    let myDays = theDate.getDate() - birthday.getDate();

    // Check if the value greater than the end of months or days
    if (
      days.value > 31 ||
      months.value > 12 ||
      years.value > theDate.getFullYear()
    ) {
      allInputs.forEach((e) => {
        e.style.borderColor = "hsl(0, 100%, 67%)";
      });
      allLabels.forEach((e) => {
        e.style.color = "hsl(0, 100%, 67%)";
      });
      dayError.innerHTML = "Must be a vaild day";
      monthError.innerHTML = "Must be a vaild month";
      yearError.innerHTML = "Must be a in the past";
      return false;
    }
    // a condition to check if the user type a number greater than the end of each month
    if (days.value > lastDayOf) {
      allInputs.forEach((e) => {
        e.style.borderColor = "hsl(0, 100%, 67%)";
      });
      allLabels.forEach((e) => {
        e.style.color = "hsl(0, 100%, 67%)";
      });
      dayError.innerHTML = "Must be a vaild date";
      return false;
    }
    // handling the negative results from all date
    if (myDays < 0) {
      myMonths -= 1;
      myDays += lastDayOf;
    }
    if (myMonths < 0) {
      myYears -= 1;
      myMonths += 12;
    }
    allSpans.forEach((s) => {
      s.innerHTML = "";
      s.style.paddingRight = "10px";
    });
    yearResult.innerHTML = myYears;
    monthResult.innerHTML = myMonths;
    dayResult.innerHTML = myDays;
  } else {
    allInputs.forEach((e) => {
      e.style.borderColor = "hsl(0, 100%, 67%)";
    });
    invaildSpans.forEach((e) => {
      e.innerHTML = "This field is requird";
    });
    allLabels.forEach((e) => {
      e.style.color = "hsl(0, 100%, 67%)";
    });
  }
};
// return default stting to every input when focus on any one
allInputs.forEach((e) => {
  e.onfocus = function () {
    dayError.innerHTML = "";
    invaildSpans.forEach((e) => {
      e.innerHTML = "";
    });
    allInputs.forEach((e) => {
      e.style.borderColor = "hsl(0, 0%, 86%)";
    });
    allLabels.forEach((e) => {
      e.style.color = "hsl(0, 1%, 44%)";
    });
    e.style.borderColor = "hsl(259, 100%, 65%)";
    e.previousElementSibling.style.color = "hsl(259, 100%, 65%)";
  };
});
