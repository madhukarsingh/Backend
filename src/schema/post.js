
/** new post schema  for Imagegram*/
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    caption : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
}, {timestamp : true});

const post = new mongoose.model("Post",PostSchema);

export default post;
