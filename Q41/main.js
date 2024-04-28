// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Create an array of magician names
var magicians = ["James", "Hamoon", "Saamry",];
show_magicians(magicians);
