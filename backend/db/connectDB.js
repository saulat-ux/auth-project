import mongoose from "mongoose"
export const connectDB = async () => {
    try {
        console.log('Connecting to MongoDB...', process.env.MONGO_URI)
        const conn = await mongoose.connect(process.env.MONGO_URI, {

        })
        console.log(`MongoDB connected successfully: ${conn.connection.host}`)
    } catch (error) {
        console.log("Error connecting to mongodb: ", error.message)
        process.exit(1) // 1 failure if 0 means it was success
    }
}