const http = require('http');

const server = http.createServer((req,res) =>{
    console.log(req.url);  
    res.end('Hello from Srinjay !');
});

server.listen(3000);

//If we want to not manually restart the server everytime we change the js file then we can run the command : "npx nodemon app.js"

