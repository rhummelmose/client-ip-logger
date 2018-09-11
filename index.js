var http = require('http');

var server = http.createServer(function(request, response) {

    var clientIPAddress = request.headers['x-forwarded-for'] || 
    request.connection.remoteAddress || 
    request.socket.remoteAddress ||
     (request.connection.socket ? request.connection.socket.remoteAddress : null);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hej SKAT! Your IP is: " + clientIPAddress);

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
