const db = require('../models');
const Sequelize = require('../models').Sequelize;

class ScreencapsController {

  // GET caps
  index(req, res) {

    db.screencaps.findAll().then(arCaps => {
      res.status(200).json({ caps: arCaps})
    });

  };

  // GET caps-random
  random(req, res) {

    db.screencaps.find({
      order: [
        Sequelize.fn( 'RANDOM' )
      ]
    }).then(randomCap => {
      res.status(200).json({ caps: randomCap})
    });

  };


}

module.exports = new ScreencapsController();
