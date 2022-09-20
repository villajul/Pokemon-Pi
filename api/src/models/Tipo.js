const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('tipo', {      
          name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
    })}