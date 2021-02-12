var input = Math.ceil(Number(prompt("Enter a number")));
var text = "This is a dummy text as you know";
var cutedText = text.slice(0, input);
var finalText = '';

for (var i = cutedText.length - 1; i >= 0; i--) {
    finalText += cutedText[i].toLowerCase();
}

alert(finalText);