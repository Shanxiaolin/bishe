'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Labs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ["l-id"]: {
        type: Sequelize.INTEGER
      },
      ["l-time"]: {
        type: Sequelize.DATE
      },
      ["t-id"]: {
        type: Sequelize.INTEGER
      },
      ["t-name"]: {
        type: Sequelize.STRING
      },
      ["s-subject"]: {
        type: Sequelize.STRING
      },
      ["s-course"]:{
        type: Sequelize.STRING,
        allowNull: false
      },
      ["s-grade"]: {
        type: Sequelize.INTEGER
      },
      ["s-class"]: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Labs');
  }
};