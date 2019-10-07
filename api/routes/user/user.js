import express from 'express';
import usersController from '../../controllers/user';
import verifyToken from '../../config/verifyToken';
const router = express.Router();

//@ route POST /api/v1/users/register
//@ desc Register new user
// @ access public
router.post('/users/register', usersController.registerUser);

//@ route POST /api/v1/users/login
//@ desc Logs in user /returns JWT
//@ access public
router.post('/users/login', usersController.loginUser);

export default router;
