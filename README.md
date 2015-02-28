# StatCap-soft
the StatCap is a capacitor battery for instant charge. This program is so you can learn and use StatCap
# Installation
In this github repository click the download ZIP button. Unzip the Zip folder and open index.js.
Install <a href= "nodejs.org">Node</a> if you haven't already. Open terminal and type the following:
<br>`cd ~/Downloads/StatCap-soft-master`</br>
<br> `cd statcap-soft`
<br>`node index.js`</br>
<br> Then, open your browser and go to localhost:5555</br>
# Use
to use this program to host your websites on localhost open terminal and type the following
<br> `nano app.js` </br>
<br> edit your files and than click control and x at the same time </br>
<br> then click `y` on your keyboard </br>
<br> then click `enter` on your keyboard if you have a windows</br><br> click `return` on your keyboard if you have a mac</br> 
# Example
<br>`var http = require("http");` </br>

<br>`function start() { ` </br>
	<br>`function openServer(request, response) { ` </br>
	    <br>`console.log("Request recieved.");`</br>
		<br>`response.writeHead(200, {"Content-Type": "text/plain"});`</br>
		<br>`response.write(" Hello World ");`</br>
		<br>`response.write("I Like Cheese");`</br>
		<br>`response.end();`</br>
	<br>`}`</br>
	<br>`http.createServer(openServer).listen(5555);`</br>
	<br>`console.log("Go to your browser and type localhost:5555");`</br>
<br>`}`</br>
<br>`exports.start = start;`</br>
