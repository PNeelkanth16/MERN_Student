const http = require("http");

http.createServer((req,res)=>{
    if(req.url === "/"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<body>")
        res.write("<form action='/method'>Enter Your Name<input type='text' name='name'><input type='submit' value='submit'></form>")
        res.write("</body></html>")
        res.end()
        // return res
    }else{
        res.write("<h1>You are Welcome to Node.js World</h1>")
        res.end()
    }
}).listen(4500)