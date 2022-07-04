import { Router } from 'express'
import {getUser,getUsers,updateUsers,deleteUsers,getConversations,getConversation} from '../controllers/users.controllers.js'
import {createConversation,deleteConversations,deleteConversationsAdmin} from '../controllers/conversations.controllers.js'
import {createMessage,getMessages,findMessage,deleteMessage} from '../controllers/message.controllers.js'
import {createParticipants} from '../controllers/participants.controllers.js'
import passport from 'passport'


const router= Router();
// To create user 
// router.post('/users',createUsers)

// User getting users or editing or deleting hes user
   router.get('/users',passport.authenticate('jwt',{session:false}),getUsers)
    router.get('/users/:id',passport.authenticate('jwt',{session:false}),getUser)
    router.put('/me/:id',passport.authenticate('jwt',{session:false}),updateUsers)  //Esta ruta debe estar protegida
   router.delete('/me/delete/:id',passport.authenticate('jwt',{session:false}),deleteUsers)  //Esta ruta debe estra protegida


// User creating & Deleting chats

router.post('/me/:meId/conversations/',passport.authenticate('jwt',{session:false}),createConversation)
router.get('/me/:meId/conversations/',passport.authenticate('jwt',{session:false}),getConversations)
router.get('/me/:meId/conversations/:conversationId',passport.authenticate('jwt',{session:false}),getConversation)
router.delete('/me/:meId/conversations/delete/:conversationId',passport.authenticate('jwt',{session:false}),deleteConversations)

//  user creating messages

router.post('/me/:meId/conversations/:conversationId/message/',passport.authenticate('jwt',{session:false}),createMessage)
router.get('/me/:meId/conversations/:conversationId/message/',passport.authenticate('jwt',{session:false}),getMessages)
router.get('/me/:meId/conversations/:conversationId/message/:messageId',passport.authenticate('jwt',{session:false}),findMessage)
router.delete('/me/:meId/conversations/:conversationId/message/:messageId',passport.authenticate('jwt',{session:false}),deleteMessage)

// associating users to a conversations

router.post('/conversations/participants',passport.authenticate('jwt',{session:false}),createParticipants)
router.get('/conversations/participants')
router.get('/conversations/participant/:id')
router.delete('/conversation/delete/:id')


//Admin delete users

router.delete('/admin/conversations/delete/:conversationId',deleteConversationsAdmin)


export default router