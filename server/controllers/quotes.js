const Quote = require('../models/quote');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

class Controller {
  static posting(req, res) {
    let newQuote = new Quote({
      userId: req.body.userId,
      status: req.body.status,
    });
    
    newQuote
      .save()
      .then(quote => {
        res.status(200).json({
          message: `${quote.status} has been posted`
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err
        })
      });
  }

  static display(req, res) {
    Quote
      .find()
      .then(quotes => {
        console.log(quotes);
        res.status(200).json({quotes})
      })
      .catch(err => {
        console.log(err);
        
      })
  }

  static delete(req, res) {
    
  }

}

module.exports = Controller;