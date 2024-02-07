import mongoose,{Schema} from "mongoose";
import Role from "./Role.js";

const UserSchema = mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        profileImage:{
            type:String,
            required:false,
            default:"https://th.bing.com/th/id/OIP.KGs0xdGXGSk4qiX2CeAYHAHaHa?rs=1&pid=ImgDetMain"
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        roles:{
            type:[Schema.Types.ObjectId],
            required:true,
            ref:"Role"
        }
        

    }, 
    {
        timestamps:true
    }
);

export default mongoose.model("User",UserSchema);