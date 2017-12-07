const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {

  // DESIGN

  let Caps = sequelize.define('caps', {
    movie: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        notEmpty: true,
      }
    },
    path: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        notEmpty: true,
      }
    }
  });


  return Caps;
};
