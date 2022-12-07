import {Router} from 'express';
const userController = require('../controllers/userController');

const router = Router();

router.post("/postcarousel", userController.postcarousel);
router.get("/carousel/:slide", userController.carousel);


export default router;