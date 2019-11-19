const router = require('express').Router();
const login_register_controllers = require('../controllers/login.register')
const CRUD_controls = require('../controllers/CRUD-controllers')

router.post('/register',login_register_controllers.registerUser);
router.post('/login',login_register_controllers.loginUser);
router.get('/get/:username',login_register_controllers.getDataFromId);
router.get('/get',CRUD_controls.getAllUsers);
router.post('/post_message',CRUD_controls.saveMessages);
router.get('/get_messages',CRUD_controls.getMessages);

module.exports = router;