const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {

  // DESIGN

  let User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        notEmpty: true,
      }
    },
    firstname: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        notEmpty: true,
      }
    },
    lastname: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        notEmpty: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        isEmail: true,
      },
      unique: {
        args: true,
        msg: 'Email address already in use!'
      }
    },
    password: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        len: [ 5, 20 ],
      }
    },
    password_confirmation: {
      type: DataTypes.VIRTUAL
    },
  },
  {
    underscored: true
  },
  {
    hooks: {
      beforeCreate: function(user) {
        if (user.password != user.password_confirmation) {
          throw new Error("Passwords doesn't match!");
        }

        let salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      },

      //For user.update (instance)
      beforeUpdate: function(user) {
        let salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      },

      //For db.user.update (model call)
      beforeBulkUpdate: function() {

      }
    }
  });

  //ASSOCIATION

  User.associate = function (db) {
    db.user.belongsToMany(db.caps, {
      onDelete: "CASCADE",
      through: db.posts,
    });
  };

  // EXTENDS METHODS

  User.prototype.checkPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  }

  User.prototype.toJSON = function() {
    let obj = Object.assign({}, this.get());

    delete obj.password;
    return obj;
  }

  return User;
};
