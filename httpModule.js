var http=require('http');
var date=require('./myFirstModule');
var url=require('url');
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("hello World!");
    
    //req.url prints the urlk from which the user is coming
    //the urll returns the parameters as well
    res.write("<br>The request url is:"+req.url);
    var q=url.parse(req.url,true).query;
    var txt=q.year+" "+q.month;
    res.end("<br>"+txt);
}).listen(8080);