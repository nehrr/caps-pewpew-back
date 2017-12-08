const db = require('../models');
const Sequelize = require('../models').Sequelize;

class ScreencapsController {

  // GET caps
  index(req, res) {
    let options = {
      include: [
        {
          model: db.movie,
          attributes: ['title']
        }
      ]
    }
    db.screencaps.findAll(options).then(arCaps => {
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
