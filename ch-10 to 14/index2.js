var sub1 = Number(prompt("Enter your first course number"));
var sub2 = Number(prompt("Enter your second course number"));
var sub3 = Number(prompt("Enter your third course number"));
var sub4 = Number(prompt("Enter your fourth course number"));
var sub5 = Number(prompt("Enter your fifth course number"));

var totalMarks = 500;
var obtainedMarks = sub1 + sub2 + sub3 + sub4 + sub5;
var totalPercentage = obtainedMarks * 100 / totalMarks;

alert(`Your got ${totalPercentage}%`);