let name = prompt("Enter your name:", "Hamza Sheikh");

let date = prompt("Enter your date of birth (DD):", "27");
let month = prompt("Enter your month of birth (MM):", "11");
let year = prompt("Enter your year of birth (YYYY):", "2009");

let now = new Date();
let birthDate = new Date(year, month - 1, date);

let hour = now.getHours();
let greeting;
if (hour < 12) {
    greeting = "Good Morning";
} else if (hour < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}
console.log(`Hello ${name}, ${greeting}`);

let options = { timeZone: 'Asia/Karachi', year: 'numeric', month: '2-digit', day: '2-digit' };
console.log(`Your DOB is ${birthDate.toLocaleDateString('en-PK', options)}`);

let ageInMilliseconds = now - birthDate;
let ageInSeconds = Math.floor(ageInMilliseconds / 1000);
let ageInMinutes = Math.floor(ageInSeconds / 60);
let ageInHours = Math.floor(ageInMinutes / 60);
let ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
let years = now.getFullYear() - birthDate.getFullYear();
let months = now.getMonth() - birthDate.getMonth();
let days = now.getDate() - birthDate.getDate();

if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Get last month days
}
if (months < 0) {
    years--;
    months += 12;
}

console.log(`You are ${years} years ${months} months ${days} days ${now.getHours()} hours ${now.getMinutes()} minutes ${now.getSeconds()} seconds old.`);
console.log(`Your Age in Days ${ageInDays}`);

let nextBirthday = new Date(now.getFullYear() + (months === 0 && days === 0 ? 1 : 0), birthDate.getMonth(), birthDate.getDate());
let timeUntilNextBirthday = nextBirthday - now;

let daysLeft = Math.floor(timeUntilNextBirthday / (1000 * 60 * 60 * 24));
let hoursLeft = Math.floor((timeUntilNextBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutesLeft = Math.floor((timeUntilNextBirthday % (1000 * 60 * 60)) / (1000 * 60));
let secondsLeft = Math.floor((timeUntilNextBirthday % (1000 * 60)) / 1000);

if (days === 0 && months === 0) {
    console.log(`Happy Birthday ${name}. Today is Your ${years + 1}th Birthday`);
} else {
    console.log(`How much time left in your next birthday? ${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds`);
}
