import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        console.log("MongoDB URI:", uri);  // Add this line to check if the URI is correct

        if (!uri) {
            throw new Error("MongoDB URI is missing.");
        }

        await mongoose.connect(uri);
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        throw new Error("Connection to MongoDB failed");
    }
};

export default connectMongoDB;
