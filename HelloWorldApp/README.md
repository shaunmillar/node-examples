# Hello World App

A node js application with modifications allowing for deployment to OpenShift.  
This information originated from: https://blog.openshift.com/run-your-nodejs-projects-on-openshift-in-two-simple-steps/

# What makes a Node JS app compatible with OpenShift

# Step 1: Include package.json

This should include script.start and main entries like this:

,,,
"scripts": {
  "start": "node server.js"
},
"main": "server.js"
,,,

## This also allows you to use: ##
npm start to run the app. 

# Step 2: If you expand dependencies, make sure to use the --save flag like this:

npm install --save PACKAGE_NAME

# Step 3: Read Configuration Details from the System Environment

OpenShift’s Node.js cartridge automatically publishes server connection information to your application’s environment via the following environment variables: OPENSHIFT_NODEJS_PORT and OPENSHIFT_NODEJS_IP

,,,


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

'''

That's it.. Now deploy to OpenShift!

