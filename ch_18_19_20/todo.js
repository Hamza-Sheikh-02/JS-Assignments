let courses = [];

for (let i = 1; i <= 5; i++) {
    let course = prompt(`Enter a course ${i}:`);
    courses.push(course);
}

alert(`Course: ${courses}`)

for (let i = 0; i < courses.length; i++) {
    let editedCourse = prompt("Edit course " + (i + 1) + ":", courses[i]);

    if (editedCourse !== courses[i]) {
        courses.splice(i, 1, editedCourse);
    }
}

alert(`Updated Courses: ${courses}`);
