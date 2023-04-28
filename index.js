const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/test.txt`;

// CREATE FILE
// fs.writeFileSync(filePath, `This is a simple text file`)

// READ FILE
// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log(item)
// })

// UPDATE FILE
// fs.appendFile(filePath, " and file name is hello.txt", (err) => !err && console.log("file is updated"))

// RENAME FILE
// fs.rename(filePath, `${dirPath}/test.txt`, (err) => !err && console.log("file name is updated"))

// DELETE FILE
// fs.unlinkSync(filePath)