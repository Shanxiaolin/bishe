'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    ["t-id"]: DataTypes.INTEGER,
    ["t-name"]: DataTypes.STRING,
    ["t-pwd"]: DataTypes.STRING,
    ["t-token"]: DataTypes.INTEGER,
    ["t-type"]: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};