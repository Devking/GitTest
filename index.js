var server = require("./server");	// Forces server.js to be loaded
var router = require("./router"); 	// Forces route.js to be loaded
var requestHandlers = require("./requestHandlers"); // Forces requestHandler.js to be loaded

var handle = {}	// Defining a variable array / association map
// We MUST list the association mapping here in order to relate the URL to a function
handle["/"] = requestHandlers.start; // Define as 'start' method given by mapped string
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/texter"] = requestHandlers.texter;
server.start(router.route, handle); 	// Passing in a FUNCTION to start