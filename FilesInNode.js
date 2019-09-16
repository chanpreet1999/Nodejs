var http = require('http');
//var url = require("url");
var fs = require("fs");

http.createServer(function (req, res) {

//READ FILE
//fs.readFile("demoFile1.html", function (err, data) {

//APEND TO FILE
// fs.appendFile("demoFile1.html", "<br>Appending Data to File",function (err) {

//WRITE TO FILE
res.write("demoFile2.txt", 'Write example', function (err) {
    if (err)
        throw (err);

res.writeHeader(200, {
    "Content-Type": "text/html"
});

res.write("Example to depict manupulation of files in NodeJS");
res.end("Data append successful");

});


}).listen(8080);