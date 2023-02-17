const http = require('http');

function handleRequest(request, response) {
    console.log(request);
}

const server = http.createServer(handleRequest)

server.listen(9000);