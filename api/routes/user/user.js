import express from 'express';
import usersController from '../../controllers/user';
import verifyToken from '../../config/verifyToken';
const router = express.Router();

//@ route POST /api/v1/users/register
//@ desc Register new user
// @ access public
router.post('/user/signup', usersController.registerUser);

//@ route POST /api/v1/users/login
//@ desc Logs in user /returns JWT
//@ access public
router.post('/user/signin', usersController.loginUser);

export default router;
