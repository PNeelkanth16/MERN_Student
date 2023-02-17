const http = require("http");
const fs = require('fs')

http.createServer((req,res)=>{
    if(req.url === "/"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<body>")
        res.write("<form action='/method' method='POST'>Enter Your Name<input type='text' name='name'><input type='submit' value='submit'></form>")
        res.write("</body></html>")
        res.end()
        return res
    }
    if(req.url === '/method' && req.method === "POST"){
        const data = [];
        req.on("data", (chunk)=>{
            data.push(chunk)
        })
        return req.on("end", ()=>{
            const userName = Buffer.concat(data).toString().split("=")[1]
            fs.appendFileSync("./userName.txt", userName+"\n")
            res.statusCode = 302
            res.setHeader("Location", "/Hello")
            res.end()
        })
        res.write("Hi")
        res.end()
        
    }else{
        res.write("<h1>You are Welcome to Node.js World</h1>")
        res.end()
    }
}).listen(4500)