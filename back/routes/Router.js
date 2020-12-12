const express = require("express");
const router = express.Router();
const signClient = require("../controller/user");
const auth = require("../controller/auth");

// router.post("/signupClient", signClient.signup);
router.post("/signinClient", signClient.signin);
router.post("/signupClient", signClient.signup);

module.exports = router;
