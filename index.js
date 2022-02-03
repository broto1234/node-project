const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {

  const readFileFunction = (filePath,statusCode) => {
    fs.readFile(filePath, (err,data) => {
      if(err) {throw error;}
      else {
        res.writeHead(statusCode, {'content-Type' : 'text/html'});
        res.write(data);
        res.end();
      }
    });
  }
  //Home Page
    if(req.url=="/"){
      readFileFunction('home.html',200);
    }

  //Contact Page
    else if(req.url=="/contact"){
      readFileFunction('contact.html',200);
      //           Or
      // fs.readFile('contact.html', (err,data) => {
      //   if(err) {throw error;}
      //   else {
      //     res.writeHead(200, {'content-Type' : 'text/html'});
      //     res.write(data);
      //     res.end();
      //   }
      // });
    }

    else if(req.url=="/dataJSON"){
          res.writeHead(200, {'content-Type' : 'application/json'});
          res.write(JSON.stringify({message: "This example demonstrates how to serve JSON response from the Node.js web server."}));
          res.end();

    }

  //404

  else{
    res.writeHead(404, {'content-Type' : 'text/html'});
    res.write('<h1>404 Not Found</h1><p><a href="http://localhost:7007/">Goto Home page</a></p>');
    res.end();
  }
      
}).listen(7007, ()=> {console.log("Server is running on port 7007");});