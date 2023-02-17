const http = require('http')
const route = require('./11_userRoute')

http.createServer(route).listen(5500);