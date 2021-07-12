const express = require("express");
const {
  authUser,
  registerUser,
  updateUserProfile,
} = require("../controllers/userControllers");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").post(updateUserProfile);
module.exports = router;
