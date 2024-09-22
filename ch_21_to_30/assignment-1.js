let userInput = prompt("Enter a number", "3.8");
let roundedNumber = Math.ceil(userInput);

let text = "What is this?";
let slicedText = text.slice(0, roundedNumber);

let reversedText = "";

for (let i = slicedText.length - 1; i >= 0; i--) {
    reversedText += slicedText[i];
}

alert(reversedText);
