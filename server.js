const http = require("http");
const fs = require("fs");
const path=require("path");
const port = 3000;
const server = http.createServer((req, res) => {
    const filepath=path.join(__dirname,req.url=="/"?"index.html":req.url);
    fs.readFile(filepath,(err,result)=>{
        if(err){
            res.end("404 Error: Page not found");
        }
        else{
            res.end(result,"utf8");
        }
    })
});
server.listen(port, console.log(`Server is listerning on the port ${port}`));
