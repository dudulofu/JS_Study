console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);



/* const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello World');
        res.end();
    }
    
    if(req.url==='/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000'); */

/* 
2.12 - Event handling
const EventEmitter = require('events');
const Logger = require('./logger.js');
const logger = new Logger();
//Register a listener
logger.on('messageLogged',(arg)=>{
    console.log('Listener called',arg);
});
logger.log('aaaaaaaaa') */