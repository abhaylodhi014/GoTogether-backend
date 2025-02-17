import express from 'express';


import {loginUser, signupUser ,authGoogle} from '../controllers/user.controller.js';
import { createRide , getAllRide , deleteRide , getRide , updateRide} from '../controllers/ride.controller.js';
import { authenticateToken } from '../controllers/jwt.controller.js';
import { newContactUs } from '../controllers/contactUs.controller.js';
import { newReply , getAllReplies , deleteReply ,updateReply , getReplies} from '../controllers/reply.controller.js';
import { newChat , getAllChat } from '../controllers/Chat.controller.js';
import { newRating , getRating } from '../controllers/rating.controller.js';
const router = express.Router();

//routes for registration
router.post('/login', loginUser);
router.post('/signup', signupUser);
router.post('/google-auth' , authGoogle);

//routes for ride 
router.post('/create' , authenticateToken , createRide)
router.get('/rides', getAllRide);
router.get('/rideDetail/:RideId', authenticateToken, getRide);
router.put('/update', authenticateToken, updateRide);
router.delete('/delete/:RideId', authenticateToken, deleteRide);


//reply routes
router.post('/newReply', authenticateToken, newReply);
router.get('/replies', authenticateToken, getAllReplies);
router.delete('/reply/delete', authenticateToken, deleteReply);
router.put('/reply/update', authenticateToken, updateReply);
router.get('/allreplies' , authenticateToken , getReplies)


//chats routes 
router.post('/newChat', authenticateToken, newChat);
router.get('/chats', authenticateToken , getAllChat);

//routes for ratings
router.post('/rating' , authenticateToken , newRating);
router.get('/ratings/:username' , authenticateToken , getRating);

//routes for contactus
router.post('/contactUs' , newContactUs);

export default router;