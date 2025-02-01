"use strict";
const data = require("../data.json");

function getCategoryId(categoryName) {
  const categoryMap = {
    "L QUEENLY": 1,
    "L MTH AKSESORIS (IM)": 2,
    "L MTH TABUNG (LK)": 3,
    "SP MTH SPAREPART (LK)": 4,
    "CI MTH TINTA LAIN (IM)": 5,
    "S MTH STEMPEL (IM)": 6,
  };
  return categoryMap[categoryName];
}

function getStatusId(statusName) {
  return statusName === "bisa dijual" ? 1 : 2;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    const products = data.data.map((item) => ({
      id_produk: item.id_produk,
      nama_produk: item.nama_produk,
      harga: parseInt(item.harga),
      kategori_id: getCategoryId(item.kategori),
      status_id: getStatusId(item.status),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Products", products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
