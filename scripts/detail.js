// const { log } = require('console');
const API_URL = 'https://travel-advisor.p.rapidapi.com/';
const tripAdvisorHost = 'travel-advisor.p.rapidapi.com';
const tripAdvisorKey = '289f16ea54msh62210c94ea30784p1721fbjsn45935df11aa5';

let getAdult = document.getElementById('adults');
let totalPrice = document.getElementById('totalPrice');
let getToDate = document.getElementById('toDate');
let getFromDate = document.getElementById('fromDate');
const priceRoom = 1000;
// log(getAdult.value + totalPrice.value);
let updatePrice = () => {
  getToDate.min = getFromDate.value;
  let toDateValue = new Date(getToDate.value);
  let fromDateValue = new Date(getFromDate.value);

  let days = (toDateValue - fromDateValue) / (24 * 60 * 60 * 1000);

  if (getAdult.value && getToDate.value && getFromDate.value) {
    totalPrice.value = 'Rs. ' + parseInt(getAdult.value) * priceRoom * days;
  } else {
    totalPrice.value = 'Rs.0';
  }
};

updatePrice();
