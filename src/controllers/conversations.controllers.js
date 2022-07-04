import { conversations } from "../models/conversations.js";







export const createConversation= async(req,res)=>{
   const{meId}=req.params;
    try {
         const{tittle,image_url}=req.body;
         
         const createChat= await conversations.create({
            tittle,
            image_url,
            createdBy:meId
         })
      res.status(201).json(createChat)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}



export const deleteConversations= async(req,res)=>{
    try {
        const{conversationId,meId}=req.params;

        await conversations.destroy({
            where:{
                id:conversationId,
                createdBy:meId
            }
        })
        res.status(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteConversationsAdmin= async(req,res)=>{
    try {
        const{conversationId}=req.params;

       const deleteCon= await conversations.destroy({
            where:{
                id:conversationId,
                           }
        })
        res.status(204).json(deleteCon)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}