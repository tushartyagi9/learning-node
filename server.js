const http=require('http') //we imported this module..
http.createServer((request,response)=>{ //created a server
    response.write("Hii. ") //this is to write
    response.end("Hello from server") //this is important otherwise system will 
    // buffer and buffer
}).listen(4390); //we can write any port no...


//2nd server in the same file
http.createServer((req,resp)=>{
    resp.write("<h1>We can also write html here..</h1>")
    resp.end("Hello from 2nd server.....")
}).listen(4890);

