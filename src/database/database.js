import  Sequelize  from "sequelize";
import dotenv from 'dotenv'
dotenv.config();


const USER= process.env.USER_NAME
const DB= process.env.DATA_BASE
const PASSWORD= process.env.PASSWORD



export const sequelize= new Sequelize(
DB,
USER,
PASSWORD,{
    host:'localhost',
    dialect:'postgres'
})