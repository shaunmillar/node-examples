/**
 * Simple socket example 2
 * Client sends back data to server
 * 
 * Works in tandem with socket2.html
 * 
 */
var http = require("http");
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response) {
	
	console.log('Connection');
	var path = url.parse(request.url).pathname;
	console.log('incoming path request ' + path);

	switch (path) {
	case '/':
		response.writeHead(200, {
			'Content-Type' : 'text/html'
		});
		response.write('hello world');
		response.end();
		break;
	case '/socket.html':
		fs.readFile("socket2.html", "utf8", function(error, data) {
			if (error) {
				console.log('Error ' + error);
				response.writeHead(404);
				response.write("opps this doesn't exist - 404");
			} else {
				response.writeHead(200, {
					"Content-Type" : "text/html"
				});
				response.write(data);
			}
			response.end();
		});
		break;
	default:
		response.writeHead(404);
		response.write("opps this doesn't exist - 404");
		response.end();
		break;
	}

});

// The following attaches socket.io to a plain Node.JS HTTP server
var io = require('socket.io')(server);
io.on('connection', function(socket){
	console.log('wow a connectrion');
	 //send live data to the client every second
    setInterval(function(){
        socket.emit('date', {'date': new Date()});
    }, 1000);
    socket.on('client_data', function(data){
    	process.stdout.write(data.letter);
    });
});
server.listen(8001);