const express = require("express");
const leavesController = require("../controllers/leaves.controller");
const router = express.Router();

router.get("/", leavesController.getLeaves);
router.get("/:id", leavesController.getLeaveById);

module.exports = router;
