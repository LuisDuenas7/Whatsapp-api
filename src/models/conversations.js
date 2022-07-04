import { DataTypes } from "sequelize";
import {sequelize} from "../database/database.js";
import { message } from "./message.js";
import { participants } from "./participants.js";


export const conversations= sequelize.define('conversations',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true

  },
  tittle:{
    type:DataTypes.STRING(30),
    allowNull:false
  },
  image_url:{
    type:DataTypes.STRING
  },
 },{
    timestamps:true
})
// ==================================
conversations.hasMany(message,{
    foreignKey:'conversation_id',
    sourceKey:'id'   
  })
  
  message.belongsTo(conversations,{
      foreignKey:'conversation_id',
      targetId:'id'  
    })
    
    //conversations.hasMany(message, {foreignKey: "consersation_id"});
    //message.belongsTo(conversations, {foreignKey: "consersation_id"});

// =======================================
  conversations.hasMany(participants,{
    foreignKey:'conversation_id',
    sourceKey:'id'
  })

  participants.belongsTo(conversations,{
    foreignKey:'conversation_id',
   sourceKey:'id'
  })

  //conversations.hasMany(participants, { foreignKey: "conversation_id"});
  //participants.belongsTo(conversations, { foreignKey: "conversation_id"});
  
  
