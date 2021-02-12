var courses = [];

var course1 = prompt("Enter first course name");
var course2 = prompt("Enter second course name");
var course3 = prompt("Enter third course name");
var course4 = prompt("Enter fourth course name");
var course5 = prompt("Enter fifth tcourse name");

courses.push(course1);
courses.push(course2);
courses.push(course3);
courses.push(course4);
courses.push(course5);

alert(courses);

course1 = prompt(courses[0], courses[0]);
course2 = prompt(courses[1], courses[1]);
course3 = prompt(courses[2], courses[2]);
course4 = prompt(courses[3], courses[3]);
course5 = prompt(courses[4], courses[4]);

courses.splice(0, 1, course1);
courses.splice(1, 1, course2);
courses.splice(2, 1, course3);
courses.splice(3, 1, course4);
courses.splice(4, 1, course5);

alert(courses);