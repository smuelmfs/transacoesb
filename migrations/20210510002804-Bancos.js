'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */await queryInterface.createTable('Bancos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER, 
      },
      cnpj: {
        allowNull: false,
        type: Sequelize.INTEGER, 
      },
      razaosocial: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      contato: {
        allowNull: false,
        type: Sequelize.INTEGER, 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('Bancos');
  }
};
