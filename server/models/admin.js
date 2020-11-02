'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    ["a-id"]: DataTypes.BIGINT,
    ["a-name"]: DataTypes.STRING,
    ["a-pwd"]: DataTypes.STRING,
    ["a-token"]: DataTypes.BIGINT,
    ["a-type"]: DataTypes.INTEGER,
  }, {});
  Admin.associate = function(models) {
    // associations can be defined here
  };
  return Admin;
};