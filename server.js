// Go to http://localhost:8888 

var http = require("http");
var url = require("url");

function start(route, handle) {		// We are passing in the ROUTE function!!!
	var person = 0;

	function onRequest(request, response) {
	  person++;

	  // THIS is where we actually get the pathname
	  var pathname = url.parse(request.url).pathname; 	// Allows us to save into a variable the pathname of the URL the user is accessing
	  
	  console.log("Request received for user #" +  person + " for pathname " + pathname); // Every time someone requests for the server, this is printed to command line
	  
	  route(handle, pathname, response); // Exported from route.js
	  // Now we are passing response to route, so that we print based on what page the user wants
	  // response.writeHead(200, {"Content-Type": "text/plain"});
	  // response.write("Hello World"); // This is what the user sees on their page
	  
	  response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started."); // Logs this in the command line after server is created
}

exports.start = start;