import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectMongoDB.js"

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config()

// middleware
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req,res) => {
    // root route
    res.send("Hello World")
})

app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server started on port ${PORT}`)
})
