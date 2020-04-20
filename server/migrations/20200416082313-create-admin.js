'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Admins', {
      ["a-id"]: { 
        primaryKey: true,
        type: Sequelize.INTEGER
      }, 
      ["a-pwd"]:{
        type: Sequelize.STRING,
        allowNull: false
      },
      ["a-token"]:{
        type: Sequelize.INTEGER
      },
      ["a-type"]: {
        allowNull: false,
        type: Sequelize.INTEGER,
        enum:('1')
      },
      ["a-name"]:{
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('Admins');
  }
};