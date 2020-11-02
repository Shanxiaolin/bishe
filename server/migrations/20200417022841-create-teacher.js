'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Teachers', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ["t-id"]: { 
        type: Sequelize.BIGINT
      }, 
      ["t-pwd"]:{
        type: Sequelize.STRING,
        allowNull: false
      },
      ["t-token"]:{
        type: Sequelize.BIGINT
      },
      ["t-type"]: {
        allowNull: false,
        type: Sequelize.INTEGER,
        enum:('2')
      },
      ["t-name"]:{
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
    return queryInterface.dropTable('Teachers');
  }
};