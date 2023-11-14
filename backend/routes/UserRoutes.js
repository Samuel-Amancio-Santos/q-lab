import  express  from 'express';
const router = express.Router();

import UserController from '../controllers/UserController.js';

//midleware
import verifyToken from "../helpers/verify-token.js"


router.route('/register')
.post((req, res) => UserController.register(req, res));

router.route('/login')
.post((req, res) => UserController.login(req, res));

router.route('/checkuser')
.get((req, res) => UserController.checkUser(req, res));

router.route('/:id')
.get((req, res) => UserController.getUserById(req, res));

router.route('/edit/:id')
.patch(verifyToken,(req, res) =>  UserController.editUser(req, res));


export default router;
 