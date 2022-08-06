// here we will make the router and link the controller , and write the main logic of the function in the controller file

const express = require('express');
const { registerUser, loginUser, updatePassword, updateProfile, searchUsers, uploadAvatar, getMe , removeProfilePicture, loadGroupNotifications} = require('../controllers/userController');
const router = express.Router();
const isAuthenticated = require('../middlewares/auth');



// link the controller to the specific route
router.route('/register').post(registerUser); // registeruser is the controller exported from the controllers folder
router.route('/avatar/upload').put(isAuthenticated,uploadAvatar)

router.route('/login').post(loginUser) // loginUser controller

// router.route('/logout').get(logoutUser) 
router.route('/update/password').put(isAuthenticated, updatePassword) // private route , hence middleware will run before actual endpoint
router.route('/update/profile').put(isAuthenticated, updateProfile) // private route
router.route('/find').get(isAuthenticated, searchUsers) // private route
router.route('/me').get(isAuthenticated,getMe) //private route
router.route('/avatar/remove').put(isAuthenticated, removeProfilePicture) // private route
router.route('/group/notifications').get(isAuthenticated, loadGroupNotifications)

module.exports = router;
