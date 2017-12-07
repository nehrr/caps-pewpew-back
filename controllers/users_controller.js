const db = require('../models');

class UsersController {

  // GET /users
  index(req, res) {

    db.user.findAll().then(arUser => {
        res.status(200).json({ user: arUser})
      });

  }

  // GET /users/:id
  show(req, res) {

    db.user.findOne({ where: { id: req.params.id }}).then(user => {
      if (!user) {
        res.status(400).json({ err: "No such user" })
      } else {
        res.status(200).json({ user: arUser})
      }
    });

  };

  // PUT /users/:id
  update(req, res) {

    db.user.findOne({ where: { id: req.params.id }}).then(user => {
      if (!user) {
        res.status(400).json({ err: "No such user"})
      } else {
        user.update( {
          username: req.body.username,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password
        })
        res.status(204).json({ user: user});
      }
    });

  };

  // DELETE /users/:id
  delete(req, res) {

    db.user.findOne({where: {id: req.params.id }}).then(user => {
      if (!user) {
        res.status(400).json({ err: "No such user"});
      } else {
        user.destroy();
        res.status(204).json({ msg: "User deleted"});
      }
    });

  };

}

module.exports = new UsersController();
