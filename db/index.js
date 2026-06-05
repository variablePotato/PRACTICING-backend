import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../src/constants.js";

const connectDB = async()=>{
    try{
       const connection_instance= await mongoose.connect(`${process.env.mongodb_uri}/${DB_NAME}`)
       console.log(`\n MONGODB CONNECTED SUCCESSFULLY!!!! and DB HOST IS:${connection_instance.connection.host}`)
    }catch(error){
        console.log("MONGO-DB connection error hai ",error)
        process.exit(1);
    }
}

export default connectDB