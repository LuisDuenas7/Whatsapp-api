import { Strategy,ExtractJwt } from "passport-jwt";
import dotenv from 'dotenv'
import {users} from '../models/users.js'

dotenv.config()

const SECRET_WORD= process.env.MY_SECRET_WORD

const opts={
   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
   secretOrKey:SECRET_WORD
}

export default new Strategy(opts, async (payload, done)=>{
    try {
        const user=await users.findOne(payload.email)
     if (user){
        return done(null,user)
     }
     return done(null,false)
        
    } catch (error) {
        return console.log(error)
    } 
})