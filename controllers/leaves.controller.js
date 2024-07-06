const LeavesService = require("../services/leaves.service");

const getLeaves = (req, res) => {
  let query = req.query;
  let page = query.page ? parseInt(query.page) : 1;
  let limit = query.limit ? parseInt(query.limit) : 10;
  LeavesService.getAllLeaves(page, limit)
    .then((leaves) => {
      res.status(200).json(leaves);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

const getLeaveById = (req, res) => {
  let id = req.params.id;
  LeavesService.getLeaveById(id)
    .then((leave) => {
      res.status(200).json(leave);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = { getLeaves, getLeaveById };
