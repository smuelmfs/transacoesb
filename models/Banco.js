const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Banco = sequelize.define("Banco", {
        cnpj: {
          allowNull: false,
          type: Sequelize.INTEGER,
          
          },
        razaosocial:{
          allowNull: false,
          type: Sequelize.STRING,
        },
        contato:{
          allowNull: false,
          type: Sequelize.INTEGER,
        }
    })
    return Banco;
}