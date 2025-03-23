import mongoose  from "mongoose";

import { DB_URL } from "./ServerConfig.js";

export default async function dbConnect() {
    try{
        await mongoose.connect(DB_URL)
        console.log('Connected to Mongo db')
    }catch(error) {
        console.log('there is some issue',error)

    }
    
    
}