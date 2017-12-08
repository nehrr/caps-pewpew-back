module.exports = (sequelize, DataTypes) => {

  // DESIGN

  let Caps = sequelize.define('caps', {
    path: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        notEmpty: true,
      }
    }
  },
  {
    underscored: true
  });

  //ASSOCIATION

  Caps.associate = function (db) {
    db.caps.belongsTo(db.movie, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Caps;
};
