const http=require('http');

http.createServer((req,resp)=>{

    console.log(req.headers.host);
    if(req.url=="/"){
        resp.write("Home page")
    }
    else if(req.url=="/login"){
        resp.write("Login page")
    }
    else{
        resp.write("Other page")
    }
    resp.end();
}).listen(5400);