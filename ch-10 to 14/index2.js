var sub1 = Number(prompt("How much marks did you get in Urdu"));
var sub2 = Number(prompt("How much marks did you get in English"));
var sub3 = Number(prompt("How much marks did you get in Maths"));
var sub4 = Number(prompt("How much marks did you get in Physics"));
var sub5 = Number(prompt("How much marks did you get in Islamiat"));

var totalMarks = 500;
var obtainedMarks = sub1+sub2+sub3+sub4+sub5;
var totalPercentage = Number(obtainedMarks * 100 / totalMarks); 

alert("Your got "+totalPercentage+" %");
