//import dependencies
import express from "express";
import passport from "passport";
import passportMiddleware from './tools/auth.js'
import usersRoutes from './routes/users.routes.js'
import authRoutes from './routes/auth.routes.js'


const app=express();

//middlewares
app.use(express.json())
app.use(passport.initialize());
passport.use(passportMiddleware)



//Routers
app.use(usersRoutes)
app.use(authRoutes)


app.get('/',(req,res)=>{
    res.send('<div style="text-align:center" ><h1>Welcome to WhatsApp API</h1> <br><br>  <a href="http://localhost:8001/signup"> Link to Sign Up </a> <br><br> <a href="http://localhost:8001/login">Link to Login </a>  </div>')
})



export default app;