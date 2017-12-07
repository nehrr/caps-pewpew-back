const db = require('../models');
const Sequelize = require('../models').Sequelize;

class CapsController {

  // GET caps
  index(req, res) {

    db.caps.findAll().then(arCaps => {
      res.status(200).json({ caps: arCaps})
    });

  };

  // GET caps-random
  random(req, res) {

    db.caps.find({
      order: [
        Sequelize.fn( 'RANDOM' )
      ]
    }).then(randomCap => {
      res.status(200).json({ caps: randomCap})
    });

  };


}

module.exports = new CapsController();
