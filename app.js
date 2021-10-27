var http = require('http');
var fs = require('fs');
var url = require('url');
 
 
// create server
http.createServer( function (request, response) {  
   // parse url and path
   var pathname = url.parse(request.url).pathname.substr(1);
   
   // print path
   console.log("Request for " + pathname + " received.");

   // set default path to "index.html"
   if (fs.existsSync(pathname) == false) {
   	pathname = 'index.html';
   	console.log("Redirect to " + pathname);
   }

   // read path from file system
   fs.readFile(pathname, function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status Code: 404 : NOT FOUND
         // Content Type: text/html
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{             
         // HTTP Status Code: 200 : OK
         // Content Type: text/html
         response.writeHead(200, {'Content-Type': 'text/html'});    
         
         // write content into response
         response.write(data.toString());        
      }
      // send response
      response.end();
   });   
}).listen(8080);
 
// console output
console.log('Server running at http://127.0.0.1:8080/');
