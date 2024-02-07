import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import roleRoute from './routes/role.js';
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';
import courseRoute from './routes/course.js';
import downloadRoute from './routes/download.js';
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:4200',
    credentials:true
}));
app.use("/api/role", roleRoute );
app.use("/api/auth", authRoute );
app.use("/api/user", userRoute);
app.use("/api/course", courseRoute);
app.use("/api/download", downloadRoute);
//Error Handler Middleware
// app.use((err,req,res,next)=>{
//     const statuscode = err.status || 500;
//     const errorMessage = err.message || "something went wrong";
//     return res.status(statuscode).json({
//         success:false,
//         status:statuscode,
//         message:errorMessage
//     }); 
// })

//Response Handler MiddleWare
app.use((obj,req,res,next)=>{
    const statusCode= obj.status || 500;
    const message = obj.message || "Something went wrong";
    return res.status(statusCode).json({
        success: [200,201,204].some(a=> a === obj.status) ? true : false,
        status:statusCode,
        message:message,
        data:obj.data
    });
});

//DB connection
const connectMongoDB=async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to database");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    throw error;
    }
};


app.listen(8800,()=>{

    console.log("connected to backend");
    connectMongoDB();
});