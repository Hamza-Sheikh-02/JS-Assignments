let course1 = prompt("Enter marks for Course 1:", 70);
let course2 = prompt("Enter marks for Course 2:", 80);
let course3 = prompt("Enter marks for Course 3:", 65);
let course4 = prompt("Enter marks for Course 4:", 75);
let course5 = prompt("Enter marks for Course 5:", 90);

course1 = Number(course1);
course2 = Number(course2);
course3 = Number(course3);
course4 = Number(course4);
course5 = Number(course5);

let totalMarks = 500;
let obtainedMarks = course1 + course2 + course3 + course4 + course5;

let percentage = (obtainedMarks * 100) / totalMarks;

let grade;
switch (true) {
    case (percentage >= 90):
        grade = "A+";
        break;
    case (percentage >= 75):
        grade = "A";
        break;
    case (percentage >= 60):
        grade = "B";
        break;
    case (percentage >= 45):
        grade = "C";
        break;
    case (percentage >= 30):
        grade = "D";
        break;
    default:
        grade = "F";
}

alert(`Total Marks: ${obtainedMarks}\nPercentage: ${percentage.toFixed(2)}%\nGrade: ${grade}`);
