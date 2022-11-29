const express = require("express");
const router = express.Router();
const { registerUser, getUserData, loginUser } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/getUserData", protect, getUserData);

module.exports = router;
