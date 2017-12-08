module.exports = (sequelize, DataTypes) => {

  // DESIGN

  let Movie = sequelize.define('movie', {
    title: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        notEmpty: true,
      }
    },
  },
  {
    underscored: true
  }
);

//ASSOCIATION

Movie.associate = function(db) {
  db.movie.hasMany(db.caps);
};

return Movie;
};
