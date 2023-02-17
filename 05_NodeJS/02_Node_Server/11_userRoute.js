const fs = require('fs')

const handleUser = (req,res) => {
    const url = req.url
    const method = req.method
    if(url === "/"){
        // fs.readFile('../11_form.html', "utf-8", (err, data)=>{
        fs.readFile('11_form.html', "utf-8", (err, data)=>{
                // console.log(data);
                res.setHeader("Content-Type", "text/html")
                res.write(data)
                res.end()
        })
    }else if(url === "/createUser" && method === "POST"){
        const buffer = []
        req.on('data', (chunk) => {
            buffer.push(chunk)
            console.log(chunk);
        })
        req.on('end', () => {
            console.log(buffer);
            var uname = Buffer.concat(buffer).toString().split('=')[1]
            console.log(uname);
            fs.appendFile("./userList.txt", uname+"\n", (err) => {
                res.statusCode = 302
                res.setHeader('Location', '/users')
                res.end()
            })
        })
    }else if(url==='/users'){
        fs.readFile('./userList.txt', 'utf8', (err, data) => {
            var users = data.split('\n')
            // console.log(users);
            res.setHeader("Content-Type", "text/html");
            res.write("<html>")
            res.write("<body>")
            res.write("<ol>")
            for(i of users){
                if(i != ""){
                    res.write(`<li>${i}</li>`)
                }
            }
            res.write("</ol>")
            res.write("</body></html>")
            res.end()
        })
    }
};
module.exports = handleUser
