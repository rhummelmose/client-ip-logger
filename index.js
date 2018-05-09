var http = require('http');

var server = http.createServer(function(request, response) {

    var clientIPAddress = request.connection.remoteAddress;
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hi, you're on ip: ${clientIPAddress}");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
