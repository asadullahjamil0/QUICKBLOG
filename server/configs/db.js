import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // mongoose default function and connected is an event listener
        mongoose.connection.on('connected', () => console.log("Database connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/QUICKBLOG`)
    } catch (error) {
        console.log(`Error in DB connection: ${error.message}`);
    }
}

export default connectDB;