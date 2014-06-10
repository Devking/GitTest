// Each function represents a path in the URL
// Because we have passed response, we can control what to print

var exec = require("child_process").exec;

function start(response) {
	console.log("Request handler 'start' was called.");

	// Have the child do this
	exec("find /", 
	    { timeout: 10000000, maxBuffer: 20000*1024 }, 	// Shows that even if one person is blocked on start, no one else is blocked
		function(error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		// But did we ever define what happens with standard out?
		// Should print nothing at the moment
		response.write(stdout);
		response.end();
	});
}

function upload(response) {
	console.log("Request handler 'upload' was called.");
	// Just basic on-the-page printing
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello upload ... HTML tags won't work in here!");
	response.end();
}

exports.start = start;
exports.upload = upload;