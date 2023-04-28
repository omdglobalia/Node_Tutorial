const http = require('http');

http.createServer((req, res) => {
    res.write("Hello I'm om davra")
    res.end();
}).listen(8000);