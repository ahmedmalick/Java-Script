var name = prompt("Please Enter your name ");
var birthDate = prompt("Please Enter your DOB date ");
var birthMonth = prompt("Please Enter your DOB month ");
var birthYear = prompt("Please Enter your DOB year ");

var date = new Date().getDate(birthDate);
var month = new Date().getMonth(birthMonth);
var year = new Date().getFullYear(birthYear);

console.log(`Hello ${name}, Good `)