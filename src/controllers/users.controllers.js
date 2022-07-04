import {users} from '../models/users.js'
import { conversations } from '../models/conversations.js'
import {hashPassword,comparePassword} from '../tools/crypto.js'



export const getUsers=async(req,res)=>{
  try {
     const Users= await users.findAll()
     res.status(200).json(Users)
  } catch (error) {
    return res.status(500).json({message: error.message}) 
  }
}





export const getUser=async(req,res)=>{
    const {id}=req.params;
    try {
        const user= await users.findOne({
            where:{
                id:id
            }
        })
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message: error.message}) 
    }
}





export const updateUsers=async(req,res)=>{
    const{id}=req.params;
    try {
        const{password}=req.body;
        const hashedPass= hashPassword(password)
        const updateUser= await users.findByPk(id)
           updateUser.set(req.body)
           updateUser.password=hashedPass;
       
        if(!updateUser) 
            res.status(400).json({message:'Impossible tu update user, check info or User!'})   
           
    await updateUser.save()
    res.status(201).json([{message:`Your profile with id ${id} are updated!`},(updateUser)])
    
} catch (error) {
        return res.status(500).json({message: error.message})    
    }
}



export const deleteUsers=async(req,res)=>{
    
    try {
      const {id}=req.params;
       await users.destroy({
        where:{
            id:id
        }
       });
       res.status(204).json({message:'User deleted!'})

    } catch (error) {
        return res.status(500).json({message: error.message})     
    }
}

// ==============================================================================
//============= Get user conversations===========================================

export const getConversations= async(req,res)=>{
       const {meId}=req.params;
    try {
         const userConversations= await conversations.findAll({
            where:{
                createdBy:meId
            }
         })   
         res.status(200).json([{message:`Conversations from the user ${meId}`},userConversations])

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}



export const getConversation= async(req,res)=>{
    const {meId,conversationId}=req.params;
    try {
       const conversation= await conversations.findOne({
        where:{
            id:conversationId,
            createdBy:meId
        }
       })
       if(!conversation)
         return res.status({message:'This conversation not exist!'})

       res.status(200).json([{message:`Conversation from the user ${meId}`},conversation]) 
     } catch (error) {
        return res.status(500).json({message: error.message})
     }
   }

