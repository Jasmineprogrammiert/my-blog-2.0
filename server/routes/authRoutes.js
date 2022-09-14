const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signUp);
router.post('/login', authController.logIn);
router.get('/signup', authController.allSignUp);
router.get('/login', authController.allLogIn);

module.exports = router;