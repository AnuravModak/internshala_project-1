const http=require("http");
const fs=require("fs");
const url=require('url');

const form_html=fs.readFileSync(`${__dirname}/HTML/home.html`,"utf-8");

const server=http.createServer((req,res)=>{
    const {query,pathname}=url.parse(req.url,true);
    if (pathname==="/"|| pathname==="/overview"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(form_html);
    }


});
server.listen(7500,"127.0.0.1",()=>{
    console.log("Connected to port 7500");
    
    
});