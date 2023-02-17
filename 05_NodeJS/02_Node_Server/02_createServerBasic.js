const http = require('http');

const server = http.createServer(function(request, response) {
    console.log(request);
})

server.listen(9000);