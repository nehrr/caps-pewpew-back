const db = require('../models');

class UsersController {

  // GET /users
  index(req, res) {

  }

  // GET /users/:id
  show(req, res) {

    db.user.findOne({ where: { id: req.params.id }}).then(user => {
      if (!user) {
        res.status(400).json({ err: "No such user"})
      } else {
        res.status(200).json({ user: user})
      }
    });
    
  }

  // PUT /users/:id
  update(req, res) {

  }

  // DELETE /users/:id
  delete(req, res) {

  }
}

module.exports = new UsersController();
