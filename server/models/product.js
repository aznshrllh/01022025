"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: "kategori_id",
      });
      Product.belongsTo(models.Status, {
        foreignKey: "status_id",
      });
    }
  }
  Product.init(
    {
      id_produk: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      nama_produk: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      harga: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      kategori_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
      },
      status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Statuses",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
