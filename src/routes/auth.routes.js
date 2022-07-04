import {Router} from 'express'
import { signUp,loginUser,signIn } from '../controllers/auth.controllers.js';
import { verifyToken } from '../tools/verifyToken.js';

const router= Router();


router.post('/signup',signUp)
router.get('/login',verifyToken,loginUser)
router.post('/signin',signIn)


export default router