'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lab = sequelize.define('Lab', {
    ["l-id"]:DataTypes.STRING,
    ["l-time"] :  DataTypes.DATE,
    ["t-id"]:     DataTypes.BIGINT,
    ["t-name"]:   DataTypes.STRING,
    ["s-subject"]:DataTypes.STRING,
    ["s-course"]:DataTypes.STRING,
    ["s-grade"]:  DataTypes.INTEGER,
    ["s-class"]:  DataTypes.INTEGER
  }, {});
  Lab.associate = function(models) {
    // associations can be defined here
  };
  return Lab;
};