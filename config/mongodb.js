import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Database Connected");
        });

        await mongoose.connect(`${process.env.MONGO_URL}/mern-auth`);
    } catch (error) {
        console.log("Database Connection Error:", error);
    }
};

export default connectDB;
