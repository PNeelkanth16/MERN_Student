const fs = require('fs')

const handleRequest = (req,res) => {
    const url = req.url
    const method = req.method
    if(url === '/'){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<body>")
        res.write("<form action='/data' method='POST'>Enter Your Name<input type='text' name='name'><input type='submit' value='submit'></form>")
        res.write("</body></html>")
        res.end()
    }else if(url === '/data' && method === 'POST'){
        const buffer = []
        req.on('data', (chunk)=>{
            buffer.push(chunk)
        })
        req.on('end',()=>{
            var message = Buffer.concat(buffer).toString().split('=')[1]
            fs.writeFile('./routeTest.txt', message, (err) => {
                // console.log(err);
                res.statusCode = 302
                res.setHeader('Location', '/result')
                res.end()
            })
        })
    }else{
        var message;
        // fs.readFile('./routeTest.txt', 'utf8', (err, data) => {
        //     message = data;
        //     res.write(`<h1>${message}, Welcome to the node JS World.</h1>`)
        //     res.end()
        // });
        message = fs.readFileSync('./routeTest.txt', 'utf8')
        res.write(`<h1>${message}, Welcome to the node JS World.</h1>`)
        res.end()
    }
}

// module.exports = handleRequest;

// module.exports = {
//     handler: handleRequest
// }

exports.handler = handleRequest
