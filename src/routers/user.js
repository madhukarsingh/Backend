import express from 'express';
import {getProfile} from '../controller/userController.js';

const router = express.router();


router.get('/profile',getProfile);

export default router;