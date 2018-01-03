//Load HTTP Module
var http = require ("http");
// Require express and create an instance of it
var express = require('express');
var app = express();

// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    res.send('<b>Veera-Rasp-Module</b> Server to accept request from Alexa running on Raspberry pi.');
});

// On localhost:2314/LightOn
app.get('/LightOn', function (req, res) {
    
    http.get('http://192.168.1.28/Relay=ON', (resp) => {
    	let data = '';
    	// A chunk of data has been recieved.
    	resp.on('data', (chunk) => {
    		data += chunk;
    	});
    	// The whole response has been received. Print out the result.
    	resp.on('end', () => {
    		console.log(JSON.parse(data).explanation);
    	});
    }).on("error", (err) => {
    	console.log("Error: " + err.message);
    });

    res.send('OK');
});

// On localhost:2314/LightOff
app.get('/LightOff', function (req, res) {
    
    http.get('http://192.168.1.28/Relay=OFF', (resp) => {
    	let data = '';
    	// A chunk of data has been recieved.
    	resp.on('data', (chunk) => {
    		data += chunk;
    	});
    	// The whole response has been received. Print out the result.
    	resp.on('end', () => {
    		console.log(JSON.parse(data).explanation);
    	});
    }).on("error", (err) => {
    	console.log("Error: " + err.message);
    });

    res.send('OK');
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 2314 !
app.listen(2314, function () {
    console.log('Example app listening on port 2314.');
});