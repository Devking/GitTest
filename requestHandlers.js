// Each function represents a path in the URL
// Because we have passed response, we can control what to print

// Included to work with the POST data string
var querystring = require("querystring");

// Included to work with the non-blocking start timeout
var exec = require("child_process").exec;

function start(response) {
	console.log("Request handler 'start' was called.");

	// Have the child do this
	/*exec("find /", 
	    { timeout: 10000000, maxBuffer: 20000*1024 }, 	// Shows that even if one person is blocked on start, no one else is blocked
		function(error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		// But did we ever define what happens with standard out?
		// Should print nothing at the moment
		response.write(stdout);
		response.end();
	});*/
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write('<a href="/texter">To The Text Field Code</a>');
	response.end();
}

// Create a new function/page that works with textfields
function texter(response) {
	console.log("Request handler for the text field function was called.");

	// Wouldn't have it inline like this for MVC
	var body = '<html>' + '<head>' + '<title>Text Field Thing</title>' + '</head>'
	+ '<body>' + '<h1>Some Text Field Thing</h1>' + '<form action="/upload" method="post">' // recall that how forms work, this sends them to the '/upload' page after
	+ '<textarea name="text" rows="20" cols="60"></textarea>' +
	'<br /><input type="submit" value="Submit text" />' +
	'</form>' + '</body>' + '</html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();

}

function upload(response, postData) {
	console.log("Request handler 'upload' was called.");
	// Just basic on-the-page printing
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello upload ... HTML tags won't work in here because content type is plain text!");
	// The upload page will now also display "Post Data" if it is passed from POST data
	// However, the POST data is displayed in ugly post data format
	// We need to reformat it for good looks
	// response.write("\nYou've also sent the data: " + postData);
	// Below we use the querystring to parse the data
	response.write("\nYou've also sent the text: " + 
		querystring.parse(postData).text);
	// Notice that now, we actually display exaclty what we typed into the text field!
	response.end();
}

exports.start = start;
exports.upload = upload;
exports.texter = texter; // Remember to export