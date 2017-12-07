const db = require('../models');

class UsersController {

  // GET /users
  index(req, res) {

    db.user.findAll().then(users => {
      res.status(200).json({ user: users})
    });

  }

  // GET /users/:id
  show(req, res) {

    db.user.findById(req.params.id).then(user => {
      if (!user) {
        res.status(400).json({ err: "No such user" })
      } else {
        res.status(200).json({ user: user})
      }
    });

  };

  // PUT /users/:id
  update(req, res) {

    // db.user.update( {req.body} , { where: {id: req.params.id }} )
    // .then(user => {
    //   if (!user) {
    //     res.status(400).end();
    //   } else {
    //     res.status(204).end();
    //   }
    // })

    db.user.findById(req.params.id).then(user => {
      if (!user) {
        res.status(400).end();
      } else {
        user.update( {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        password_confirmation: req.body.password_confirmation
      });
      res.status(200).end();
      }
    })
  };

  // DELETE /users/:id
  delete(req, res) {

    db.user.findOne({where: {id: req.params.id }}).then(user => {
      if (!user) {
        res.status(400).json({ err: "No such user"});
      } else {
        user.destroy();
        res.status(204).end();
      }
    });

  };

}

module.exports = new UsersController();
