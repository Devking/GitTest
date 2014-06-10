// Go to http://localhost:8888 

var http = require("http");
var url = require("url");

function start(route, handle) {		// We are passing in the ROUTE function!!!
	var person = 0;

	function onRequest(request, response) {
	  person++;

	  // THIS is where we actually get the pathname
	  var pathname = url.parse(request.url).pathname; 	// Allows us to save into a variable the pathname of the URL the user is accessing
	  
	  // Data from POST command to deal with
	  var postData = "";

	  console.log("Request received for user #" +  person + " for pathname " + pathname); // Every time someone requests for the server, this is printed to command line
	  
	  request.setEncoding("utf8");

	  // Now we will add a listener on the server to deal with POST data from forms
	  // We *could* do this elsewhere, but perhaps it's best for the server to deal with this
	  // The listener checks if all the POST data has been received or not

	  // passing "data" to the function means we are still passing chunks
	  request.addListener("data", function(postDataChunk) {
	  	postData += postDataChunk;
	  	console.log("Received POST data chunk '" + postDataChunk + "'.");
	  });

	  // passing "end" to the function means all of the data has been passed
	  request.addListener("end", function() {
	  	// Start the route operation, except this time with postData
	  	// Note that if there was no POST command, then postData is just an empty string
	  	route(handle,pathname,response,postData);
	  });

	  // This part removed since we only route when end is reached
	  // route(handle, pathname, response); // Exported from route.js
	  // Now we are passing response to route, so that we print based on what page the user wants
	  // response.writeHead(200, {"Content-Type": "text/plain"});
	  // response.write("Hello World"); // This is what the user sees on their page
	  
	  // response.end();
	  // If we end the response here, we won't be able to do anything from our functions
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started."); // Logs this in the command line after server is created
}

exports.start = start;