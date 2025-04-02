import express from 'express';

import {s3uploader} from  '../config/multerConfig.js'
import {createPost, getAllPosts} from '../controller/postController.js'



const router = express.router();



router.post('/',s3uploader.single('ímage'),createPost); //whatever comes after /post that will be directed here , therefore path here will be /

router.get('/',getAllPosts);    

export default router;
