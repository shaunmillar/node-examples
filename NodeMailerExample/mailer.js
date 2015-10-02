

var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",
   auth: {
       user: "someguy@@gmail.com",
       pass: "myPassword"
   }
});

smtpTransport.sendMail({
	   from: "someguy@@gmail.com", // sender address
	   to: "someguy@@gmail.com", // comma separated list of receivers
	   subject: "Hello from Node.JS", // Subject line
	   text: "This is a message from node" // plaintext body
	}, function(error, response){
	   if(error){
	       console.log(error);
	   }else{
	       console.log("Message sent: " + response.message);
	   }
	});