let course1 = parseFloat(prompt("Enter marks for Course 1:"));
let course2 = parseFloat(prompt("Enter marks for Course 2:"));
let course3 = parseFloat(prompt("Enter marks for Course 3:"));
let course4 = parseFloat(prompt("Enter marks for Course 4:"));
let course5 = parseFloat(prompt("Enter marks for Course 5:"));

let totalMarks = 500;
let obtainedMarks = course1 + course2 + course3 + course4 + course5;

let percentage = (obtainedMarks * 100) / totalMarks;

alert(`Obtained Marks: ${obtainedMarks} \nTotal Marks: ${totalMarks} \nPercentage: ${percentage.toFixed(2)}%`)
