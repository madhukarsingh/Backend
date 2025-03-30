import post from '../schema/post.js';

export const createDBPost = async (caption,image,user) => {
    try {
        const newpost = await post.create({caption,image,user});
        return newpost;
    } catch (error) {
        console.log(error)
    }
}


export const findAllPosts = async () => {
    try {
        const posts = await post.find();
        return posts;
    } catch (error) {
        console.log(error)
    }
}

export const findPostById = async (id) => {
    try {
        const post = await post.findById(id);
        return post;
    } catch (error) {
        console.log(error)
    }
}

export const DeletePostById = async (id) => {
    try {
        const deletedpost = await post.findByIdAndDelete(id);
        return deletedpost ;
    } catch (error) {
        console.log(error)
        
    }
}