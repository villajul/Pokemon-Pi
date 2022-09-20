const { DataTypes } = require('sequelize');
//const { AbstractQuery } = require('sequelize/types/dialects/abstract/query');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
     id:{
       type: DataTypes.INTEGER,
       primaryKey: true,
       allowNull: false
       
     },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    hp:{
      type: DataTypes.INTEGER
    },
    attack:{
      type: DataTypes.INTEGER
    },
    defense:{
      type: DataTypes.INTEGER
    },
    speed:{
      type: DataTypes.INTEGER
    },
    height:{
      type: DataTypes.INTEGER
    }, 
    weight: {
      type: DataTypes.INTEGER
    },
    image:{
      type: DataTypes.TEXT
    },
    createdBd:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true    
    }
  });
};
