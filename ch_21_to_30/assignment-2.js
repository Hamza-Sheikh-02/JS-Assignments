let inputValue = prompt("Enter text:", "cloUd naTive computinG");

let words = inputValue.split(' ');

for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
}

inputValue = words.join(' ');
console.log(inputValue);
