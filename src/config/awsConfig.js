import aws from 'aws-sdk';

import ServerConfig from './ServerConfig.js';

const s3 = new aws.S3({
    region : ServerConfig.AWS_Region,
    accessKeyId : ServerConfig.AWS_ACCESS_KEY_ID,
    secretAccesskey : ServerConfig.AWS_SECRET_ACCESS_KEY,
})

export default s3;

