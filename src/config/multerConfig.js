import multer from "multer";
import multerS3 from 'multer-s3';
import {s3} from './awsConfig.js';
import {AWS_BUCKET_NAME} from './ServerConfig.js'

export const s3uploader = multer({
    storage : multerS3({
        s3 : s3,
        bucket : AWS_BUCKET_NAME,
        //acl : "public-read",
        key : function(req,file,cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);

            cb(null, file.fieldName + '-' + uniqueSuffix + '.'+ file.mimetype.split('/')[1]);
        }
    })
});