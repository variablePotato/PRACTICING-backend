import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"
import connectDB from "../db/index.js";

import dotenv from "dotenv";//Experimental feature


const app = express()
dotenv.config({
    path:'./env'
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`SERVER IS RUNNING AT :${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED",err);
})







/*              METHOD 1 FOR DB CONNECTION
(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("DB CONNECTED");

        const server = app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });

        server.on("error", (error) => {
            console.error("Server Error hai:", error);
            process.exit(1);
        });

    } catch (error) {
        console.error("ERROR FOUND in DB connection:", error);
        process.exit(1);
    }
})();
*/