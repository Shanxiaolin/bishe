'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    ["s-id"]: DataTypes.INTEGER,
    ["s-name"]: DataTypes.STRING,
    ["s-pwd"]: DataTypes.STRING,
    ["s-token"]: DataTypes.INTEGER,
    ["s-type"]: DataTypes.INTEGER,
    ["s-subject"]:DataTypes.STRING,
    ["s-class"]:DataTypes.INTEGER,
    ["s-grade"]:DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};