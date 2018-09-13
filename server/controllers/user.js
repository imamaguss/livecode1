const User = require('../models/user');
const { encrypt } = require('../helpers/encrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');

class Controller {
  static register(req, res) {
    if(req.body.password.length < 6) {
      res.status(500).json({ 
        message: 'Password minimal is 6 character'
       })
    } else {
      let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: encrypt(req.body.password),
      });

      newUser
        .save()
        .then(user => {
          console.log(user);
          res.status(200).json({
            message: 'You has been registed, thank you...'
          })
        })
        .catch(err => {
          res.status(500).json({message: err});
        })
    }
  }

  static login(req, res) {
    User
      .findOne({
        email: req.body.email,
        password: encrypt(req.body.password)
      })
      .then(user => {
        if(user) {
          let id = user._id;
          jwt.sign({
            id,
            name: user.name,
            email: user.email
          }, process.env.LOGIN, (err, token) => {
            console.log('kirim token======>', token);
            
            res.status(200).json({
              message: 'You has logged in now',
              token,
            })
          })
        } else {
          res.status(400).json({
            message: `Your email or password is wrong`
          })
        }
      })
      .catch(err => {
        res.status(500).json({message: err});
      })
  }

  

  

}

module.exports = Controller;