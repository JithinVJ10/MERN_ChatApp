import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const connect = await mongoose.connect("mongodb://127.0.0.1:27017/MERN-ChatApp")

        console.log('MongDB Connected')
    } catch (error) {
        console.log(error);
    }
    
}

export default connectDB