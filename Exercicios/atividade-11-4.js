var ageCalculator = require('age-calculator')
var {AgeFromDateString, AgeFromDate} = require('age-calculator')

// Be careful: Javascript months start at 0 (so zero stands for january)

let ageFromString = new AgeFromDateString('1987-01-08').age;
console.log("value from ageFromString", ageFromString);

let ageFromDate = new AgeFromDate(new Date(1996, 8, 8)).age;
console.log("value from AgeFromDate", ageFromDate);