import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import { connectDB } from "./db/connectDB.js"

import authRoutes from "./routes/auth.routes.js"


dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json()) // this allows to parse incoming JSON data as req.body
app.use(cookieParser()) // this allows to parse incoming cookies as req.cookies

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connectDB() // 123
    console.log("Server is running on port:", PORT)
})
