module.exports = (sequelize, DataTypes) => {

  // DESIGN

  let Posts = sequelize.define('posts', {
    liked: DataTypes.BOOLEAN,
    favourited: DataTypes.BOOLEAN
  },
  {
    underscored: true
  });

  //ASSOCIATION


  return Posts;
};
