const express = require('express');
const router = express.Router();

const leavesRoutes = require('./leaves.routes');

router.use('/leaves', leavesRoutes);

module.exports = router;