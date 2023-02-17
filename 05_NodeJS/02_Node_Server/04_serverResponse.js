const http = require("http");

http.createServer((request,response)=>{
    console.log(request.url, request.method, request.headers.host);
    // response.setHeader("Content-Type", "text/html");
    response.write("<h1>This is from Node.js</h1>");
    response.end();
}).listen(4500);
