module.exports = (sequelize, DataTypes) => {

  // DESIGN

  let Posts = sequelize.define('posts', {
    liked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    favourited: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  },
  {
    underscored: true
  });

  //ASSOCIATION


  return Posts;
};
