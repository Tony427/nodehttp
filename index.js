var server;
var port = 2012;
var http = require('http');
var url = require('url');
var fs = require('fs');

server = http.createServer(
    function(req, res) {
        path = url.parse(req.url);
        res.writeHead(200, { 'Content-type': 'text/plain' });
        switch (path.pathname) {
            case '/':
                res.end('Hello world');
                break;
            case '/index':
                res.end('index page');
                break;
            default:
                res.end('path.pathname=' + path.pathname);
                break;
        }
        //console.log('guest visited');
        console.log('try rebase');
    }
).listen(port);
console.log('Server is running');