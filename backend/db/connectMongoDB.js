import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("db connected");
    }
    catch(err){
        console.error("Error connecting to mongodb", err);
    }
}

export default connectMongoDB;