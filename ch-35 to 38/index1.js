var input = prompt("Please enter a phrase ");
var words = input.toLowerCase().split(' ');

function capitalizeWord() {
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    console.log(words.join(' '));
}

capitalizeWord();