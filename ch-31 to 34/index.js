var name = prompt("Please enter your full name");
var birthDate = Number(prompt("Please Enter your DOB date"));
var birthMonth = Number(prompt("Please Enter your DOB month"));
var birthYear = Number(prompt("Please Enter your DOB year"));

var getToday = new Date()
var getHours = getToday.getHours();

if (getHours >= 00 && getHours <= 12) {
    var greet = (`Good Morning`);
} else if (getHours >= 12 && getHours <= 17) {
    var greet = (`Good Afternoon`);
} else if (getHours >= 17 && getHours <= 21) {
    var greet = (`Good Evening`)
} else if (getHours >= 21 && getHours <= 23) {
    var greet = (`Good Night`)
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'oct', 'Nov', 'Dec']
var DOB = new Date(`${birthDate}/${months[birthMonth - 1]}/${birthYear}`);

var msDiff = getToday.getTime() - DOB.getTime();

var Years = Math.floor(msDiff / (1000 * 60 * 60 * 24 * 365));
var days = Math.floor(msDiff / (1000 * 60 * 60 * 24));
var hours = Math.floor(msDiff / (1000 * 60 * 60));

var month = getToday.getMonth();
var nextYear;

if (month >= 0 && month <= 10) {
    nextYear = getToday.getFullYear();
} else if (month == 11 && birthDate > 16) {
    nextYear = getToday.getFullYear() + 1;
}

var nextDOB = new Date(`${birthDate}/${months[birthMonth - 1]}/${nextYear}`);
var nextBirthdayMsDiff = nextDOB.getTime() - getToday.getTime();
var nextBirthday = Math.floor(nextBirthdayMsDiff / (60 * 60 * 24 * 1000));

console.log(`Hello ${name} ${greet}`);
console.log(`Your DOB is ${DOB}`);
console.log(`You are ${Years} years old`);
console.log(`Your age in days are ${days}`);
console.log(`Your age in hours are ${hours}`);
console.log(`Your birthday duration days are ${nextBirthday}`);