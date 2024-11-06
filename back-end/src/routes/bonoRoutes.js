// src/routes/bonoRoutes.js
const express = require("express");
const router = express.Router();
const bonoController = require("../controllers/bonoController");

router.get("/", bonoController.getAllBonos); // GET all bonos
router.post("/", bonoController.createBono); // POST a new bono

module.exports = router;
