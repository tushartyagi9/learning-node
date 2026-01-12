const http=require('http')
const fs=require('fs')

http.createServer((req,resp)=>{
    fs.readFile('html/first.html','utf-8',(err,data)=>{
        if(err){
            resp.write("Internal Server Error")
            resp.end();
            return
        }
        else{
            resp.writeHead(200,{"content-type":'text/html'})
            resp.write(data);
            resp.end();
        }

    })
}).listen(5300);