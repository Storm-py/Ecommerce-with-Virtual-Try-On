import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema= new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            index:true,
            lowercase:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            
        },
        fullName:{
            type:String,
            required:true,
            lowercase:true,
            index:true
        },
        avatar:{
            type:String,
            required:true,
        },
        coverImage:{
            type:String,
        },
        password:{
            type:String,
            required:[true,"Password is required"]
        },
        refreshToken:{
            type:String,
        },
    },
    {
        timestamps:true
    }
)

userSchema.pre("save",async function(next){
    if(!this.isModified('password')) return next();
    this.password=await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect=async function(password) {
   return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken=async function() {
    jwt.sign(
        {
            _id:this._id,
            email:this.email,
            fullname:this.fullName,
            username:this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }

    )
}
userSchema.methods.generateRefreshToken=async function() {
    jwt.sign(
        {
            _id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }

    )
}
export const User=mongoose.model("User",userSchema)