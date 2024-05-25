import mongoose from "mongoose";


const connectDB = async ()=>{
    try{
        const dbInstance = await mongoose.connect(`${process.env.MONGO_URI}`,{
            dbName:"Student-Details",
        })
        console.log(`Database Connected : ${dbInstance.connection.host}`);
    }
    catch(error){
        console.log(`Connection Failed : ${error}`);
        process.exit(0)
    }
}

export default connectDB