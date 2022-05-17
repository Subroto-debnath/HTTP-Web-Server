var http = require('http'); // Import HTTP 
var fs = require('fs'); // file system


var server = http.createServer(function (request, response) {   //create HTTP web server

     
    if (request.method == 'GET' ) { //Handle GET Method
        console.log('GET method called')
        fs.readFile(__dirname + "/index.html",function (err, data){
        response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        response.write(data);
        response.end();
        });
    }
    else if (request.method == 'POST' ) { // Handle Post method
      console.log('POST method called')
        var body = "";
        request.on("data", function (chunk) {
            body += chunk;
        });

        request.on("end", function(){
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(body);
        });
      }
    else
        response.end('Invalid Request!');

});

server.listen(8080);// default listen to localhost:8080

console.log('HTTP webserver is running at port 8080')

//References
//https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/
//https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module
//https://nodejs.dev/learn/build-an-http-server
//https://www.guru99.com/node-js-create-server-get-data.html