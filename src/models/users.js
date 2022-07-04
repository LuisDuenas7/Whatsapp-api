import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { conversations } from "./conversations.js";
import {message} from './message.js'
import { participants } from "./participants.js";


export const users= sequelize.define('users',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true

    },
    first_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    profile_image:{
        type:DataTypes.STRING,
        allowNull:true
    },
    phone:{
        type:DataTypes.STRING(16),
        allowNull:false,
        unique: true
    },
    token:{
        type:DataTypes.STRING
    }


},{
    timestamps:true
})
// ===============Relation for conversations=============
users.hasMany(conversations,{
    foreignKey:'createdBy',
    sourceKey:'id'   
  })
  
  conversations.belongsTo(users,{
      foreignKey:'createdBy',
      targetId:'id'  
  })

  //conversations.belongsTo(users, {foreignKey: "created_by"});
  //users.hasMany(conversations, {foreignKey: "created_by"});
 
// ===============Relation for messages================
  users.hasMany(message,{
     foreignKey:'sender_id',
     sourceKey:'id'
  })

  message.belongsTo(users,{
     foreignKey:'sender_id',
    targetId:'id' 
  })

   //message.belongsTo(users, { foreignKey: "sender_id"});
  //users.hasMany(message, {  foreignKey: "sender_id"});


  // ===============Relation for participants ===============
  participants.belongsTo(users,{
    foreignKey:'user_id',
    sourceKey:'id'
  })

  users.hasMany(participants,{
    foreignKey:'user_id',
    targetId:'id'
  })

// ==============Relation for participants==================


  //participants.belongsTo(users, { foreignKey: "user_id"});
  //users.hasMany(participants, { foreignKey: "user_id"});