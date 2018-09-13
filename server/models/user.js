const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    min: [6, 'too short']
  }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;