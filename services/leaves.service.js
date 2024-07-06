// Import the Leaves model
const { options } = require("pg/lib/defaults");
const { Leave } = require("../models");

class LeavesService {
  async getAllLeaves(page, limit) {
    try {
      const options = {
        offset: (page - 1) * limit,
        limit: limit,
        order: [["createdAt", "DESC"]],
      };
      const leaves = await Leave.findAll(options);
      return leaves;
    } catch (error) {
      throw new Error("Error fetching leaves: " + error.message);
    }
  }

  async getLeaveById(leaveId) {
    try {
      const leave = await Leave.findByPk(leaveId);
      if (!leave) {
        throw new Error("Leave not found");
      }
      return leave;
    } catch (error) {
      throw new Error("Error fetching leave: " + error.message);
    }
  }
}

module.exports = new LeavesService();
