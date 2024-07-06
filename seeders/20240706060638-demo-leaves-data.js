"use strict";
let leavesData = new Array();
for (let i = 0; i < 100; i++) {
  leavesData.push({
    reason: `Annual Leave ${i + 1}`,
    from: new Date(2023, 3, 10 + i),
    to: new Date(2023, 3, 20 + i),
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("leaves", leavesData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("leaves", null, {});
  },
};
