const random = require('../models/random');

let randomColor = (req, res) => {
  res.send(random.rand())
}

module.exports = {
  randomColor
}
