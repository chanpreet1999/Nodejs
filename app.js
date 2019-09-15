var http=require('http');
var date =require('./myFirstModule');
var url=require('url');

http.createServer(function (req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    var q=url.parse(req.url,true).query;
    var d=date.myDateTime();
    var txt="<br>"+q.year;
    res.write("<br>hello");
    res.write(d);
    res.end(txt);
}).listen(8080);