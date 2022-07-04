import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

const SECRET_WORD=process.env.MY_SECRET_WORD

export function verifyToken (req,res,next) {
 try {
    const token = req.headers['x-acces-token'];

    if(!token){
        return res.status(401).json({
           auth:'false',
            message:'No token provided'
        })}
        const decoded= jwt.verify(token, SECRET_WORD);
        req.userId= decoded.id;
        next()
    
 } catch (error) {
    return res.status(500).json({message:error.message})
 }
    
}