const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: { // listo
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false  
    },
    name: { //listo
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: { // aparecen vacías las descripciones
      type: DataTypes.TEXT,
      allowNull: false,
    },
    releaseDate: { // listo
      type: DataTypes.STRING,
    },
    rating: { // listo
      type: DataTypes.INTEGER,
    },
    img: { //listo
      type: DataTypes.STRING,
    },
    platforms: { // listo
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
