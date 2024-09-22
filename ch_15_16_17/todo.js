let courses = [];

let course1 = prompt("Enter course 1:");
courses.push(course1);
let course2 = prompt("Enter course 2:");
courses.push(course2);
let course3 = prompt("Enter course 3:");
courses.push(course3);
let course4 = prompt("Enter course 4:");
courses.push(course4);
let course5 = prompt("Enter course 5:");
courses.push(course5);

alert(`Courses: ${courses}`);

let editedCourse1 = prompt("Edit course 1:", courses[0]);
if (editedCourse1 !== courses[0]) {
    courses.splice(0, 1, editedCourse1);
}

let editedCourse2 = prompt("Edit course 2:", courses[1]);
if (editedCourse2 !== courses[1]) {
    courses.splice(1, 1, editedCourse2);
}

let editedCourse3 = prompt("Edit course 3:", courses[2]);
if (editedCourse3 !== courses[2]) {
    courses.splice(2, 1, editedCourse3);
}

let editedCourse4 = prompt("Edit course 4:", courses[3]);
if (editedCourse4 !== courses[3]) {
    courses.splice(3, 1, editedCourse4);
}

let editedCourse5 = prompt("Edit course 5:", courses[4]);
if (editedCourse5 !== courses[4]) {
    courses.splice(4, 1, editedCourse5);
}

alert(`Updated Courses: ${courses}`);
