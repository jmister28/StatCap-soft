var http = require("http");

function start() {
	function openServer(request, response) {
		console.log("Request recieved.");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Welcome To StatCap alpha software ");
		response.write("If you want to learn more news here is how to use it in HTML");
		response.end();
	}
	http.createServer(openServer).listen(5555);
	console.log("Go to your browser and type localhost:5555");
}
exports.start = start;