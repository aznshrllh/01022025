"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Statuses",
      [
        {
          id: 1,
          name: "bisa dijual",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "tidak bisa dijual",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Statuses", null, {});
  },
};
