'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Worktests', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ["s-id"]: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      ["s-class"]:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ["s-grade"]:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ["s-course"]:{
        type: Sequelize.STRING,
        allowNull: false
      },
      ["s-subject"]:{
        type: Sequelize.STRING,
        allowNull: false
      },
      ["w-mark"]:{
        type: Sequelize.INTEGER
      },
      ["w-text"]:{
        type: Sequelize.TEXT
      },
      ["w-response"]:{
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Worktests');
  }
};