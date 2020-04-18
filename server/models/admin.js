'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    ["a-id"]: DataTypes.INTEGER,
    ["a-name"]: DataTypes.STRING,
    ["a-pwd"]: DataTypes.STRING,
    ["a-token"]: DataTypes.INTEGER,
    ["a-type"]: DataTypes.INTEGER,
  }, {});
  Admin.associate = function(models) {
    // associations can be defined here
  };
  return Admin;
};