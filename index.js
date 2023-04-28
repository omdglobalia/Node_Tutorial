const fs = require('fs'); // As requirement we import module according us! Like - [ const fs = require('fs').writeFile ]

fs.writeFile('mynewfile.txt', "helloo", function (err) {
    if (err) {
        console.log('File Not Found!');
    } else {
        console.log('File created!');
    }
});