const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check_auth');
const ifAdmin = require('../middleware/if_admin');
const userController = require('../controllers/userController');
const adminController = require('../controllers/adminController');

//test
router.get('/test', adminController.test);
// info o wszystkich uzytkownikach
router.get('/all', ifAdmin, userController.getUsers);
router.get('/admins/all', ifAdmin, userController.getAdmins);
// usuwanie wszystkich uzytkownikow
router.delete('/all', ifAdmin, userController.deleteUsers);
// dodawanie administratora
router.post('/addadmin', ifAdmin, adminController.addAdmin);
// wlaczenie / wylaczenie konta
router.put('/disableaccount/:userId/:value', adminController.turnOffOnAccount);





module.exports = router;
