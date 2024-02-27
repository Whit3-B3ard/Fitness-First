import express from 'express';
import { registerMember, loginMember } from '../controllers/memberController.js';
import uploadCloud from '../middleware/multerCloudinary.js';

const router = express.Router();

router.post('/register', uploadCloud.single('image'), registerMember);
router.post('/login', loginMember);
// router.get('/logout', logOut)

export default router;
