import { participants } from "../models/participants.js";



export const createParticipants = async (req,res)=>{
    const {conversation_id,user_id}=req.body;
    try {
        const createParticipant= await participants.create({
            conversation_id,
            user_id
        })
     res.status(201).json([{message:`Your join to the conversation with id: ${conversation_id} and your user id is: ${user_id}`},(createParticipant)])   
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}



export const getParticipants = async (req,res)=>{
    const {meId}=req.params;
    try {
        const getChats= await participants.findAll({
            where:{
                user_id:meId
            }
        })

     res.status(200).json(getChats)   
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}



export const getParticipant = async (req,res)=>{
    const {meId,chatId}=req.params;
    try {
        const getChat= await participants.findOne({
            where:{
                user_id:meId,
                id:chatId
            }
        })

     res.status(200).json(getChat)  
        
    } catch (error) {
     
        return res.status(500).json({message:error.message})
    }
}


export const deleteParticipants = async (req,res)=>{
    const {meId,chatId}=req.params;
    try {
        const deleteChat= await participants.destroy({
            where:{
                user_id:meId,
                id:chatId
            }
        })

     res.status(204).json(deleteChat)  
        
        
    } catch (error) {

        return res.status(500).json({message:error.message})
        
    }
}