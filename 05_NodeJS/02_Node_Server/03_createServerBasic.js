const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request);
}).listen(9000)

// server.listen(9000);