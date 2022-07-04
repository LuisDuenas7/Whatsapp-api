import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const participants= sequelize.define('participants',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  conversation_id:{
    type:DataTypes.INTEGER,
    //allowNull:false
  },
  user_id:{
    type:DataTypes.INTEGER,
    //allowNull:false
  }
},{
    timestamps:true
}
) 