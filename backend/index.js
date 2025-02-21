import express from "express"
import { connectDB } from "./db/connectDB.js"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"



const app = express()
dotenv.config()
app.get("/", (req, res) => {
    res.send("Hello, World!123")
})

app.use("/api/auth", authRoutes)

app.listen(3000, () => {
    connectDB() // 123
    console.log("Server is running on port 3000")
})
// 9knKGfCvcz5vkHqc
// mongodb+srv://saulatzubair:9knKGfCvcz5vkHqc@cluster0.92zvc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0