import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import {users} from '../models/users.js'
import {hashPassword,comparePassword} from '../tools/crypto.js'
import { verifyToken } from "../tools/verifyToken.js";


const SECRET_WORD=process.env.MY_SECRET_WORD

dotenv.config()










export const signUp=async(req,res)=>{
    
    const{first_name,last_name,email,profile_image,phone,password}= req.body;
    const hashedPass= hashPassword(password)
    const token= jwt.sign({id: email},SECRET_WORD)
    try {
        const createUser= await users.create({
            first_name,
            last_name,
            email,
            profile_image,
            phone,
            password:hashedPass,
            token
        })
       
        res.status(201).json([{message:'User are created!',token},createUser]) 
    } catch (error) {
        return res.status(500).json({message: error.message}) 
    }
}



 export const loginUser =  async (req,res,next)=>{
 
try {
    
   const user= await users.findOne({where:{email:req.userId}})

    res.json({message: 'authenticate',user})
    
} catch (error) {
    return res.status(500).json({message: error.message})
}
 }

 




 export const signIn=async(req,res)=>{
     try {
        const {email,password}=req.body;
        
    const user=await users.findOne({
            where:{
            email:email
              }})
 
    if(!user){
            return res.status(404).json({message:'The email doesnt exist!'})
        }
        const userPassword= user.password;
        const verifiedPass= await comparePassword(password,userPassword)
        
             
                   if(verifiedPass)
                  {
                    const token= jwt.sign({id: email},SECRET_WORD,{
                        expiresIn:60*60*48
                     })
                     res.status(200).json({auth:true,token})
                  
                    }  else{
                        res.status(401).json({auth:false,token:null})
                    }              
         
        }
        
     catch (error) {
        return res.status(500).json({message:error.message})
    }
}