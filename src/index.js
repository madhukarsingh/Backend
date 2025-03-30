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
import {createPost} from './controller/postController.js'
import { s3uploader} from './config/multerConfig.js';


const app = express();

app.use(cors());

const PORT = 3000;

app.use(express.json()); // middleware to parse json
app.use(express.text()); // middleware to parse text


app.get('/',(req,res) => {
    return res.send({message:"Home"});
})


app.get('/ping',(req,res) => {
    return res.send({message:"Pong"});
})

app.post('/hello',(req,res) => {
    return res.send({message:"hello"});
})

/**
// express middleware

function m1(req,res,next) {
    console.log('m1');
    next();
}

function m2(req,res,next) {
    console.log('m2');
    next();
}
 */

// CALLIMG controller
//app.post('/posts',[m1,m2],createPost);  //controller with middleware

app.post('/posts',s3uploader.single('image'), createPost);

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
    dbConnect();
})
 


