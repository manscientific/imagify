import userModel from "../models/userModel.js"
import bcrypt from 'bcrypt'
import  jwt from 'jsonwebtoken'
export const registerUser = async(req,re)=>{
    try{
        const {name,email,password}=req.body;
        if(!name||!email||!password){
              return res.json({sucess:false,message:'Misiing Details'})
        }
         const  salt = await bcrypt.genSalt(10)
         const hashedPassword = await bcrypt.hash(password,salt);
         const userData = {
            name,email,password:hashedPassword
         }
         const newUser= new userModel(userData);
         const user = await newUser.save();
         const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
         res.json({success:true,token,user : {name:user.name}})
    } catch(error){
        console.log(error)
        res.json({success:false,message:error.message})

    }

}

export const loginUser =async(req,res)=>{
   try{
    const {email,password}=req.body;
    const user = await userModel.findOne({email})

    if(!user){
        return res({sucess:false,message:'user  does not exist'})
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if (isMatch){
            const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
         res.json({success:true,token,user : {name:user.name}})
    }else{
          return res({sucess:false,message:'invalid credentials'})
    }
   } catch (error){
          console.log(error);
        res.json({success:false,message:error.message});
   }

}