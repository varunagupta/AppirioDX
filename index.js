const http = require('http')
const port = 3000
const lodash = require('lodash');
const fs = require("fs");
const express = require('express');
const app = express()
const router = express.Router();

const displayFile = (request, response, fileName) => {
    fs.readFile(fileName+".html", function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
});}

app.get('/wiki', (request, response) => {
    displayFile(request, response, 'wiki');
})

app.get('/', (request, response) => {
    displayFile(request, response, 'index');
})
app.listen(port);
/*router.get('/wiki', function(request, response){
    console.log(request.url)
  fs.readFile("wiki.html", function(err, data){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(data);
  response.end();
});
})

const requestHandler = (request, response) => {
  console.log(request.url)
  fs.readFile("index.html", function(err, data){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(data);
  response.end();
});
}

const server = http.createServer(requestHandler).listen(3000);

module.exports = router;*/