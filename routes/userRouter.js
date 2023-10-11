const express = require("express");
const router = express.Router();

const { getAllUsers, getUser, addUser, editUser, deleteUser,userLogin, googleSignUp, googleSignIn}  = require("../modules/user/userController");

 router.route('/').get(getAllUsers)
 router.route('/login').post(userLogin)
 router.route('/:id').get(getUser)
 router.route('/add').post(addUser)
 router.route('/edit/:id').put(editUser)
 router.route('/delete/:id').delete(deleteUser)
 router.route('/auth/googleSignUp').post(googleSignUp)
 router.route('/auth/googleSignIn').post(googleSignIn)

 module.exports = router;