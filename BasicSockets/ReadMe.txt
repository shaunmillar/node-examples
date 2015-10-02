The content is from http://danielnill.com/nodejs-tutorial-with-socketio/

A simple sockets tutorial for node js

Start server2.js and then navigate to http://localhost:8001/socket.html 

Time should be presented in browser being updated every second from node.js server. 

The interesting thing about this is the fact that the import 

	<script src="/socket.io/socket.io.js"></script>
	
in socket.html page works when node.js is running. I have not created a router for this
content in yet it works. Looking at the network in chrome we may see the fetch is 
successful. I have yet to find out how this works. 

I know now: socket.io on the server side, once initialized, serves up this content!
 	