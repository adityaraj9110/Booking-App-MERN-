import dotenv from 'dotenv'
dotenv.config()
import  express from "express";
import connection from "./connectDb.js";
import router from "./Routes/bookroutes.js";
import cors from 'cors'



const app=express();
const PORT = process.env.PORT 
const DATABASE_URL=process.env.URL

// database connection
connection(DATABASE_URL);

// Middleware
app.use(express.json())
app.use(cors())
app.use("/books",router)


app.listen(PORT,()=>{
    console.log(`server listen at http://localhost:${PORT}`)
})



