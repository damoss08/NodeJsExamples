var http = require('http');



http.createServer(function (req, res) {
    var body = newFunction();
    var content_length = body.length;
    res.writeHead(200, {
        'content-Type': 'text/plain',
        'Content-Length': content_length
    });
    res.end(body);
}).listen(3000);


console.log("Server running at http://127.0.0.1/");
function newFunction() {
    return '<html>' + 
            '<title>THE MOSS MAN TITLE</TITLE>' +
            '<body><h1>THIS IS THE TEST</h1></body>' +
            '</html>';
}

