var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var port = process.env.CLIENT_PORT || 4001;
app.use(express.static(__dirname + '/dist/client_ui'));
app.get('/*', function (Request, Response) { return Response.sendFile(path.join(__dirname)); });
var server = http.createServer(app);
server.listen(port, function () { return console.log('Cellares UI is running ...'); });
