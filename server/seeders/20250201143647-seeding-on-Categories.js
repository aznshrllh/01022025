"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          id: 1,
          name: "L QUEENLY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "L MTH AKSESORIS (IM)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "L MTH TABUNG (LK)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "SP MTH SPAREPART (LK)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "CI MTH TINTA LAIN (IM)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "S MTH STEMPEL (IM)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
