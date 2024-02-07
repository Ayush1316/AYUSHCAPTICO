import User from "../models/User.js";
import { createError } from "../utils/error.js"
import { CreateSuccess } from "../utils/success.js";

export const getAllUsers =async (req,res,next)=>{
 
    try {
        const users = await User.find();
        return next(CreateSuccess(200,"All users ", users));

    } catch (error) {
        return next(createError(500,"Internal server error"));
    }

}

export  const getById =async (req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        if(!user){
            return next(createError(404,"User not found"));
        }
        return next(CreateSuccess(200,"Single User",user));

    } catch (error) {
        return next(createError(500,"Internal server error"));
    }

}