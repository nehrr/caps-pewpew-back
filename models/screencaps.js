module.exports = (sequelize, DataTypes) => {

  // DESIGN

  let Screencaps = sequelize.define('screencaps', {
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

  Screencaps.associate = function (db) {
    db.screencaps.belongsTo(db.movie, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Screencaps;
};
