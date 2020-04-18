'use strict';
module.exports = (sequelize, DataTypes) => {
  const Worktest = sequelize.define('Worktest', {
    ["s-id"]: DataTypes.INTEGER,
    ["s-subject"]: DataTypes.STRING,
    ["s-course"]:DataTypes.STRING,
    ["s-grade"]: DataTypes.INTEGER,
    ["s-class"]: DataTypes.INTEGER,
    ["w-mark"]: DataTypes.INTEGER,
    ["w-text"]:DataTypes.TEXT,
    ["w-response"]: DataTypes.TEXT,
    ["s-class"]:DataTypes.INTEGER,
  }, {});
  Worktest.associate = function(models) {
    // associations can be defined here
  };
  return Worktest;
};