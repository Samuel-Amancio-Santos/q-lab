import  express  from 'express';
const router = express.Router();

import newsletterController from '../controllers/newsletterController.js';

//midleware
import authUser from '../helpers/basicAuth.js';

router.route('/create')
.get((req, res) => newsletterController.createNewsletter(req, res));


router.route('/create')
.post((req, res) => newsletterController.create(req, res));


router.route('/remove/:id')
.post((req, res) => newsletterController.deleteNewsletter(req, res));


router.route('/edit')
.post((req, res) => newsletterController.editNewsletterUpdate(req, res));


router.route('/edit/:id')
.get((req, res) => newsletterController.editNewsletter(req, res));


router.route('/:id') 
.get((req, res) => newsletterController.getNewsletter(req, res));


router.route('/')
.get(/* authUser, */(req, res) => newsletterController.showNewsletter(req, res));



export default router;