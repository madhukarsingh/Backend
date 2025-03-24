import mongoose from "mongoose";

const userSceham = new mongoose.Schema({
    username: {
        type : String,
        required : true,
        unique : true,
        minLength : 5
    },
    email : {
        type : String ,
        required : true,
        unique : true,
        minLength : 5,
        validate : {
            validator : function(emailValue) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
            },
            message : 'Enter a valid email'
        }
    },
    password : {
        type : String,
        minLength : 5
    }
}, {timestamp : true}
);


const user = new mongoose.model("User",userSceham)

export default user;

