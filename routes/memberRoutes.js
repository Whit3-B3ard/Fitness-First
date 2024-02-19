import express from 'express';
import { registerMember, loginMember } from '../controllers/memberController.js';

const router = express.Router();

router.post('/register', registerMember);
router.post('/login', loginMember);
// router.get('/logout', logOut)

export default router;
