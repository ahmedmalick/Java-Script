var course1 = Number(prompt("Enter first course number"));
var course2 = Number(prompt("Enter second course number"));
var course3 = Number(prompt("Enter third course number"));
var course4 = Number(prompt("Enter fourth course number"));
var course5 = Number(prompt("Enter fifth course number"));

var totalMarks = 500;
var obtainedMarks = course1 + course2 + course3 + course4 + course5;
var grade = (obtainedMarks * 100 / totalMarks).toFixed();

switch (true) {
    case (grade <= 100 && grade >= 90):
        alert(`Your grade is A+ with ${grade}%`)
        break;
    case (grade <= 89 && grade >= 75):
        alert(`Your grade is A with ${grade}%`)
        break;
    case (grade <= 74 && grade >= 60):
        alert(`Your grade is B with ${grade}%`)
        break;
    case (grade <= 59 && grade >= 45):
        alert(`Your grade is C with ${grade}%`)
        break;
    case (grade <= 44 && grade >= 30):
        alert(`Your grade is D with ${grade}%`)
        break;
    case (grade <= 29 && grade >= 0):
        alert(`You Failed with ${grade}%`)
        break;
}