// this api router will be triggered when path starts with /api
import express from 'express';
import postRouter from './post.js';

import userRouter from './user.js';

const router = express.Router();

router.use('/post',postRouter); // when url will have /post after /api then router will send the request to postRouter

router.use('/user', userRouter);


