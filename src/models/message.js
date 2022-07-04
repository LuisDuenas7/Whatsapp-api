import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const message= sequelize.define('message',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    sender_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    conversation_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    messages:{
        type:DataTypes.STRING,
        allowNull:false
    },

},{
    timestamps:true
})

