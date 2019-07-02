const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check_auth');
const userController = require('../controllers/userController');

router.get('/test', userController.test);
// rejestracja uzytkownika
router.post('/register', userController.createUser);
// logowanie uzytkownika
router.post("/login", userController.loginUser);
// aktualizacja danych uzytkownika
router.patch('/updateAccount/:id', checkAuth, userController.updateUser);
// usuwanie konta uzytkownika
router.delete('/deleteAccount/:id', checkAuth, userController.deleteUser);
// reset hasla uzytkownika
router.patch('/resetPass/:id', checkAuth, userController.resetPassword);
//
router.get('/get/email/:email', userController.getUser)
router.get('/get/id/:id', userController.getUserById)




module.exports = router;
