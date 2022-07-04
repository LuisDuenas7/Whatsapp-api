import { message } from "../models/message.js";


export const createMessage=async(req,res)=>{   
    const {conversationId,meId}=req.params;
    try {
        const{messages}=req.body;
        const writeMessage= await message.create({
        messages,
        conversation_id:conversationId,
        sender_id:meId
      })

        res.status(201).json(writeMessage)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}



export const getMessages=async(req,res)=>{
    const{conversationId,meId}=req.params;
    try {
        const getUserMessages= await message.findAll({
            where:{
            sender_id:meId,
            conversation_id:conversationId
            }
        })
     res.status(200).json([{message:`Messages from user id: ${meId} !!`},(getUserMessages)])
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}



export const findMessage=async(req,res)=>{
    const{conversationId,meId,messageId}=req.params;
    try {
        const userMessage= await message.findOne({
            where:{
                sender_id:meId,
                conversation_id:conversationId,
                id:messageId
            }
        })
res.status(200).json([{message:`Message from the user ${meId} from conversation ${conversationId} with the message id ${messageId} !!! `},(userMessage)])
    
} catch (error) {
        return res.status(500).json({message: error.message})   
    }
}



export const deleteMessage=async(req,res)=>{
    const{conversationId,meId,messageId}=req.params;
    try {
        const messageDelete= await message.destroy({
            where:{
                sender_id:meId,
                conversation_id:conversationId,
                id:messageId
            }
        })
       res.status(204).json(messageDelete) 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}