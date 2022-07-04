import {sequelize} from './database/database.js'
import app from './app.js'
import dotenv from 'dotenv'
 
import './models/users.js'
import './models/conversations.js'
import './models/message.js'
import './models/participants.js'

dotenv.config();

const PORT= process.env.PORT || 8002

async function main(){
 try {
   //await sequelize.authenticate;
   //await sequelize.sync({alter:true})
   console.log('Connection to DB has been established succesfully')
   app.listen(PORT,()=>{
    console.log(`Server listen in port ${PORT}`)
   })
    
 } catch (error) {
    console.log('Unable to connect to the server and database', error)
 }

}

main()