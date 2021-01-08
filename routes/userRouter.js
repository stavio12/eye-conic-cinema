const express = require("express");

const userCon = require("./../Controllers/userCon");

const authCon = require("./../Controllers/authCon");

const router = express.Router();

//Post routes
router.post("/signup", authCon.signup);
router.post("/login", authCon.login);

router.post("/forgotPassword", authCon.forgotPassword);
router.patch("/resetPassword/:token", authCon.resetPassword);

router.patch("/updateMyPassword", authCon.bodyGuard, authCon.updatePassword);
router.patch("/updateMe", authCon.bodyGuard, userCon.updateMe);

router.route("/trumutu").get(authCon.bodyGuard, userCon.getUser);

module.exports = router;