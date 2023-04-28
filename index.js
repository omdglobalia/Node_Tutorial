const fs = require('fs');

// For enter input pass input in comand line like - [
//     - node index.js add test.txt "Hello I'm from cmd"
//     - node index.js remove test.txt
// ]
const input = process.argv

if (input[2] === "add") {
    fs.writeFileSync(input[3], input[4]);
} else if (input[2] === "remove") {
    fs.unlinkSync(input[3]);
} else {
    console.log("Input Invalid")
}