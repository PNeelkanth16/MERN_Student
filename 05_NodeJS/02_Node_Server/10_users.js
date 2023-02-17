const http = require('http')
const route = require('./10_userRoute')

http.createServer(route).listen(5500);