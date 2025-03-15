import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./db/connectDB.js"
import path from "path"

import authRoutes from "./routes/auth.routes.js"


dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const __dirname = path.resolve()

app.use(cors({ origin: "http://localhost:5173", credentials: true })) // this allows to access the server from any origin

app.use(express.json()) // this allows to parse incoming JSON data as req.body
app.use(cookieParser()) // this allows to parse incoming cookies as req.cookies

app.use("/api/auth", authRoutes)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

app.listen(PORT, () => {
    connectDB() // 123
    console.log("Server is running on port:", PORT)
})

console.log('test')