import aws from 'aws-sdk';

import {AWS_ACCESS_KEY_ID, AWS_Region, AWS_SECRET_ACCESS_KEY} from './ServerConfig.js';

export const s3 = new aws.S3({
    region : AWS_Region,
    accessKeyId : AWS_ACCESS_KEY_ID,
    secretAccesskey : AWS_SECRET_ACCESS_KEY,
})



