export async function createPost(req,res) {
    // post will be created
    console.log(req.file);
    return res.json({message : "Post is created succcessfully"});
}