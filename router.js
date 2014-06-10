function route(handle, pathname) { 	// Passing a association map and a variable
	console.log("About to route a request for " + pathname);

	if (typeof handle[pathname] === 'function') { 	// Check association map if a function exists
		handle[pathname] (); 	// If that function exists, in this case start or upload, then execute that function
	} else {
		console.log ("No request handler found for " + pathname);
	}
}

exports.route = route; // Export the function defined here to be accessible by other files