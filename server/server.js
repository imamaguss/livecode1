require('dotenv').config();
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');

const userRoute = require('./routes/users');
const quoteRoute = require('./routes/quotes');

mongoose.connect('mongodb://imam:imam82@ds149974.mlab.com:49974/livecode1', {
  useNewUrlParser: true
});

server
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extends: false }))
  
server
  .use('/users', userRoute)
  .use('/quotes', quoteRoute)
  .listen(3000, () => {
    console.log(`Server running on port 3000`);
  }); 