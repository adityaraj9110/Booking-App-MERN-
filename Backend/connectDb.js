import mongoose from "mongoose";
const DB="mongodb+srv://admin:OdWZ567YvVRJG2Ed@cluster0.byflo33.mongodb.net/?retryWrites=true&w=majority"

const connection = async (DATABASE_URL)=>{
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Database Connected")
    } catch (error) {
        console.log(error)
    }
    
}
export default connection;