function route(handle, pathname, response, postData) { 	// Passing a association map and a variable
	console.log("About to route a request for " + pathname);

	if (typeof handle[pathname] === 'function') { 	// Check association map if a function exists
		handle[pathname] (response, postData); 	// If that function exists, in this case start or upload, then execute that function
	} else {
		// If the function does not exist through the mapping, based on the URL, then we get a 404 page error
		console.log ("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route; // Export the function defined here to be accessible by other files