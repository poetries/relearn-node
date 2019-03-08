const http = require('http')

http.createServer(function (req,res) {
    res.writeHead(200,{"Content-Type": "text/html;chartset='utf-8'"});
    res.write('hello nodejs');
    res.end();
}).listen(8000,function () {
    console.log('app run at http://localhost:8000')
})