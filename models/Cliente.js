const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("Cliente", {
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cpf: {
        allowNull: false,
        type: Sequelize.INTEGER, 
      },
      sexo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      salario: {
        allowNull: false,
        type: Sequelize.DOUBLE, 
      },
      contato: {
        allowNull: false,
        type: Sequelize.INTEGER, 
      }
    })
    return Cliente;
}