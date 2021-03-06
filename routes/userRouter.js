const express = require("express");

const authCon = require("../Controllers/authCon");
const userCon = require("../Controllers/userCon");

const router = express.Router();

//Post routes
router.post("/signup", authCon.signup);
router.post("/login", authCon.login);

router.post("/forgotPassword", authCon.forgotPassword);
router.patch("/resetPassword/:token", authCon.resetPassword);
router.post("/active-orders", authCon.bodyGuard, userCon.activeOrders);
router.get("/:id", authCon.bodyGuard, userCon.getUser);
router.post("/active-orders/guest", userCon.guestOrders);
module.exports = router;
