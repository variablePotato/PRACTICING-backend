import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"


const app = express()
app.use(cors({
    origin:proces.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit : "16KB"}))//middleware config
app.use(express.urlencoded({extended:true,linit:"16KB"}))
app.use(express.static("public"))
app.use(cookieParser())

export {app}