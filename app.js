const express = require('express');
const fs = require("fs");

var app = express();
app.get('/', function (req, response) {
   // read path from file system
   fs.readFile('index.html', function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status Code: 404 : NOT FOUND
         // Content Type: text/html
         response.writeHead(404, { 'Content-Type': 'text/html' });
      } else {
         // HTTP Status Code: 200 : OK
         // Content Type: text/html
         response.writeHead(200, { 'Content-Type': 'text/html' });

         // write content into response
         response.write(data.toString());
      }
      // send response
      response.end();
   });
})

var server = app.listen(8080, function () {
   console.log("server running")
})
