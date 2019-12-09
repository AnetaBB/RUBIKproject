const { userSchema } = require('../models/User');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('User', userSchema);

router.put('/:id', async (req, res) => {
  console.log(req.params.id);
  console.log(req.body.name);

  let sprawdzam = User.findById(req.params.id);
  //console.log(sprawdzam);
  sprawdzam.name = req.body.name;

  sprawdzam.save();

  res.send('sprawdzilem...');
});

module.exports = router;
