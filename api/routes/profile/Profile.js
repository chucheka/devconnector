import express from 'express';
import ProfileController from '../../controllers/Profile';
import verifyToken from '../../config/verifyToken';

const router = express.Router();
//@ route GET /api/v1/profile
//@ desc Gets a user profile
//@ access Private
router.get('/profile', verifyToken, ProfileController.getProfile);

//@ route POST /api/v1/profile
//@ desc Create New Profile
//@ access Private
router.post('/profile', verifyToken, ProfileController.createAndUpdateProfile);

//@ route POST /api/v1/profile/experience
//@ desc Add experience to profile
//@ access Private
router.post('/profile/experience', verifyToken, ProfileController.addExperience);

//@ route POST /api/v1/profile/education
//@ desc Add education to profile
//@ access Private
router.post('/profile/education', verifyToken, ProfileController.addEducation);
//@ route DELETE /api/v1/profile/education
//@ desc delete education from profile
//@ access Private
router.delete('/profile/education/:edu_id', verifyToken, ProfileController.deleteEducation);
//@ route DELETE /api/v1/profile/experience
//@ desc delete experience from profile
//@ access Private
router.delete('/profile/experience/:exp_id', verifyToken, ProfileController.deleteExperience);

//@ route GET /api/v1/profile/all
//@ desc Gets profile by userId
//@ access Public
router.get('/profile/all', ProfileController.getAllProfiles);
//@ route GET /api/v1/profile/handle/:handle
//@ desc Gets profile by handle
//@ access Public
router.get('/profile/handle/:handle', ProfileController.getByHandle);

//@ route GET /api/v1/profile/handle/:userId
//@ desc Gets profile by userId
//@ access Public
router.get('/profile/handle/:userId', ProfileController.getByUserId);

export default router;
