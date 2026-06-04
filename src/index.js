import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"
import dotenv from "dotenv";

import express from "express"
const app = express()
dotenv.config({
    path:'./env'
});

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