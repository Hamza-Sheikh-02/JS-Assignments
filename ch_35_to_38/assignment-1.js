let inputValue = prompt("Enter text:", "cloUd naTive computinG");

function capitalizeFirstLetter(string) {
    return string.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

inputValue = capitalizeFirstLetter(inputValue);
console.log(inputValue);
