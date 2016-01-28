"use strict";

var days;

let dayInMonth = function (month, year) {
  var totalDay = new Date(year, month, 0).getDate();
  var days = [];

  for (var i = 1; i <= totalDay; i++) {
    days.push(i);
  }
  var days = days.toString().replace(/,/g, " ");
  console.log('days');
  return days;
}
//number of days in the current month


let currentMonth = function () {
  var date = new Date();
  console.log('date', date);
}

var month = new Array();
month[1] = 'January';
month[2] = 'February';
month[3] = 'March';
month[4] = 'April';
month[5] = 'May';
month[6] = 'June';
month[7] = 'July';
month[8] = 'August';
month[9] = 'September';
month[10] = 'October';
month[11] = 'November';
month[12] = 'December';

var date = new Date;
currentMonth = month[date.getMonth()+1];

var currentYear = date.getFullYear();
//to get current year

var monthNumber = date.getMonth()+1;
dayInMonth(monthNumber, currentYear);
//to get current month


console.log('Output here!');
var output = "    " + currentMonth + " " + currentYear + "\n" +
"Su Mo Tu We Th Fr Sa\n" + days;
console.log(output);
//injection spot




module.exports = {
  currentMonth: currentMonth,
  dayInMonth: dayInMonth


}


//math.round from total spaces less space from header divide by2
