var courses = [];

var course1 = prompt("Enter first course name:");
var course2 = prompt("Enter second course name:");
var course3 = prompt("Enter third course name:");
var course4 = prompt("Enter fourth course name:");
var course5 = prompt("Enter fifth tcourse name:");

courses.push(course1);
courses.push(course2);
courses.push(course3);
courses.push(course4);
courses.push(course5);

alert(courses);

course1 = prompt(course1, course1);
course2 = prompt(course2, course2);
course3 = prompt(course3, course3);
course4 = prompt(course4, course4);
course5 = prompt(course5, course5);

courses.splice(0, 1, course1);
courses.splice(1, 1, course2);
courses.splice(2, 1, course3);
courses.splice(3, 1, course4);
courses.splice(4, 1, course5);

alert(courses);