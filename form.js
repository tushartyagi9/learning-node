const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, resp) => {

    if (req.url === "/" && req.method === "GET") {
        fs.readFile('html/form.html', 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(500, { 'Content-Type': 'text/plain' });
                resp.end("Internal Server Error");
                return;
            }

            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.end(data);
        });
    } 
    else if (req.url === "/submit" && req.method === "POST") {

        let dataBody = [];

        req.on('data', (chunk) => {
            dataBody.push(chunk);
        });
        // Data sent in a POST request does not come at once.
        // It arrives in small pieces called "chunks".
        // So we initialize an array (dataBody) and push
        // each incoming chunk into it.

        req.on('end', () => {
            let rawData = Buffer.concat(dataBody).toString();
            // After all chunks are received, we combine them
            // using Buffer.concat() and convert the result
            // into a single string.

            // console.log(rawData);
            // The data is URL-encoded and not easy to use directly.

            // Using the "querystring" module, we convert
            // the URL-encoded string into a readable object.
            let readable = querystring.parse(rawData);
            console.log(readable);

            resp.write("<h1>The name is</h1>"+readable.name+"<br/>");
            resp.write("<h1>The email is</h1>"+readable.email+"<br/>");

            let details = `Name: ${readable.name}, Email: ${readable.email}\n`;

            //synchronous way...
            fs.appendFileSync("FormData.txt", details);

            //asynchronous way...
            fs.appendFile("FormData2.txt", details,(err)=>{
                if(err){
                    resp.end("Server error");
                    return false;
                }
                else{
                    console.log("file created")
                }
            })


            resp.end("<Data submitted..");
        });
        // After collecting and processing all chunks,
        // we send the response back to the client.
    } 
    else {
        resp.writeHead(404, { 'Content-Type': 'text/plain' });
        resp.end("Page not found");
    }

}).listen(5700);

console.log("Server running on port 5700");
