"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    static associate(models) {
      Status.hasMany(models.Product, {
        foreignKey: "status_id",
      });
    }
  }
  Status.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Status",
    }
  );
  return Status;
};
