const express = require("express");
const router = express.Router();
const {
  getAdminDataByEmail,
  saveAdmin,
  getAllAdmins,
} = require("../controllers/user.controller");

router.get("/", getAllAdmins);

router.post("/", saveAdmin);

router.get("/search", getAdminDataByEmail);

module.exports = router;
