const express = require("express");

const userCon = require("./../Controllers/userCon");

const authCon = require("./../Controllers/authCon");

const router = express.Router();

//Post routes
router.post("/signup", authCon.signup);
router.post("/login", authCon.login);

router.post("/forgotPassword", authCon.forgotPassword);
router.post("/resetPassword", authCon.resetPassword);

router.route("/trumutu").get(authCon.authenUser, userCon.getUser);

module.exports = router;
