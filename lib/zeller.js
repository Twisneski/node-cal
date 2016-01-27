#!/usr/bin/env node

"use strict"

let modifiedMonth = function (month) {
  var mod;

  if (month === 1){
    mod = 13;
    {
      return month + 12;
    };
    //to take care of January
  }
  if (month === 2) {
    mod = 14;{
      return month +12;
    }
    //to take care of February
  }
  else {
    mod = month;
  }
  return mod;
};

let getDay = function (year, month, day) {
    modifiedMonth(month);

    var h = (day + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7;
    return h;

};

let modifiedYear = function (year, month) {
  if (month < 3){
    return year - 1;
  }
  else {
    return year;
  }
}

module.exports = {
  modifiedMonth: modifiedMonth,
  getDay: getDay,
  modifiedYear: modifiedYear
}
//this is going to be satisfying test cases.  Need the algorithim.

 //var zellers = function (obj) {
  //for(var key in obj) {
    //obj[key] = obj[key] * 1;
  //}
  //return (obj.q + Math.floor((obj.m + 1)*26/10) + obj.y + Math.floor(obj.y/4) + 6 * Math.floor(obj.y/100) + Math.floor(obj.y/400)) % 7 + '';
//}
  //module.exports = zellers;
//};
