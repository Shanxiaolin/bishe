'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    ["t-id"]: DataTypes.BIGINT,
    ["t-name"]: DataTypes.STRING,
    ["t-pwd"]: DataTypes.STRING,
    ["t-token"]: DataTypes.BIGINT,
    ["t-type"]: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};