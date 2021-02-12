var input = prompt("Please enter a phrase");
var words = input.toLowerCase().split(' ');

for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
}
var result = words.join(' ');

console.log(result);