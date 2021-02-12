var courses = [];
var num = 1;

for (var i = 0; i <= 4; i++) {
    courses[i] = prompt(`Enter ${num} course name`);
    if (courses.length <= 4) {
        courses.push(courses[i]);
    }
    num++
}

alert(courses);

for (var i = 0; i <= 4; i++) {
    courses[i] = prompt(courses[i], courses[i]);
}

alert(courses);