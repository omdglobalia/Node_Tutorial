const fs = require('fs'); // As requirement we import module according us! Like - [ const fs = require('fs').writeFile ]
const fs_specific = require('fs').writeFileSync;

fs_specific("file.txt", "This is file is created with spacifically imported module")

fs.writeFile('mynewfile.txt', "helloo", function (err) {
    if (err) {
        console.log('File Not Found!');
    } else {
        console.log('File created!');
    }
});