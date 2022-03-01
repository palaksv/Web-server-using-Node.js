import http from 'http';
const server=http.createServer((req, res)=>{
    //console.log(req.url);
    if(req.url=="/")
    {
        res.end("hello all");
    }
    else if(req.url=="/about")
    {
        res.end("hello from about");
    }
    else if(req.url=="/contact")
    {
        res.write("hello from contact");
        res.end();
    }
    else
    {

        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 error, page does not exist<h1>");
    }

});
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening at port 8000");
});