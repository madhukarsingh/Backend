/**
 * // writing server in node
 * const http = require('http');
const PORT = 3000;

const server = http.createServer((req,res)=> {
    console.log(req);
    console.log(res);

    res.write('hello');
    res.end()

})

server.listen(PORT,() => {
    console.log("server is running");
})
**/


import express from 'express';

import dbConnect from './config/DbConfig.js';

import cors from 'cors';
const app = express();

app.use(cors());

const PORT = 3000;


app.get('/',(req,res) => {
    return res.send({message:"Home"});
})


app.get('/ping',(req,res) => {
    return res.send({message:"Pong"});
})

app.post('/hello',(req,res) => {
    return res.send({message:"hello"});
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
    dbConnect();
})
 


