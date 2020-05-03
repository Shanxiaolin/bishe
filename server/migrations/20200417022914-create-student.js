'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ["s-id"]: { 
        type: Sequelize.INTEGER
      }, 
      ["s-pwd"]:{
        type: Sequelize.STRING,
        allowNull: false
      },
      ["s-token"]:{
        type: Sequelize.INTEGER
      },
      ["s-type"]: {
        allowNull: false,
        type: Sequelize.INTEGER,
        enum:('3')
      },
      ["s-name"]:{
        type: Sequelize.STRING,
        allowNull: false
      },
      ["s-subject"]:{
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('Students');
  }
};