const http=require('http')

const userData=[
    {
        name:"Tushar",
        age:20,
        email:"tushar@test.com"
    },
        {
        name:"Amrit",
        age:20,
        email:"amrit@test.com"
    },
        {
        name:"Shubham",
        age:20,
        email:"shubham@test.com"
    },
        {
        name:"Prateek",
        age:20,
        email:"prateek@test.com"
    }
]
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type",'application/json')
    // resp.write("Hello")
    resp.write(JSON.stringify(userData))
    resp.end();
}).listen(3800)