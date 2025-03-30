import {createDBPost} from '../repositories/postRepo.js';

export const createPostService = async (createPostObject) => {
    // take image and upload to aws
    // create db object with caption, image url & user
    // return the postObject
    const caption = createPostObject.caption?.trim();
    const image = createPostObject.image;
    //const user = createPostObject.user ; 

    const post = await createDBPost(caption,image);

    return post
}