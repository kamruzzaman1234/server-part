import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 6001;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true
}));

// DB Connect
connectDB();

// Test Route
app.get('/', (req, res) => {
    res.send('API working now');
});

// Server Listen
app.listen(port, () => {
    console.log(`Server is running url: http://localhost:${port}`);
});
