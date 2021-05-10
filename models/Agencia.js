const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Agencia = sequelize.define("Agencia", {
        numero: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        descricao:{
          allowNull: false,
          type: Sequelize.STRING,
        },
        idbanco:{
          allowNull: false,
          type: Sequelize.INTEGER,
        }
    })
    return Agencia;
}