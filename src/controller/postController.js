import { createPostService} from "../services/postservice.js";

export async function createPost(req,res) {
    // post will be created
    console.log(req.file);
    const post = await createPostService({
        caption : req.body.caption,
        image : req.file.location    
    })
    return res.json({
        successs : true,
        message : "Post is created succcessfully",
        data: {post}
});
}

export async function getAllPosts(req,res) {
    // retunr unimplemented
    return res.status(501).json({
        success : false,
        message : 'Method not implemented'
    })
    
}
