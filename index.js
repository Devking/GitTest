var server = require("./server");	// Forces server.js to be loaded
var router = require("./router"); 	// Forces route.js to be loaded
var requestHandlers = require("./requestHandlers");

var handle = {}	// Defining a variable array
handle["/"] = requestHandlers.start; // Start method given by mapped string
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
server.start(router.route, handle); 	// Passing in a FUNCTION to start