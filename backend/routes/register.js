const bcrypt = require('bcrypt');
const { userSchema, validate } = require('../models/User');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//let user = mongoose.model('user', User);
let User = mongoose.model('User', userSchema);

router.post('/', async (req, res) => {
  /* let user = await User.findOne({
    email: req.body.email,
  });
  if (user) return res.status(400).send('User already registered');

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);*/

  console.log('Przed dodanie obiektu');

  let user = new User({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password,
  });

  console.log('Po dodaniu obiektu');
  console.log(user);

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  user.save();
  res.send('User add to databse. Move to dashboard');
  console.log(user);
});

module.exports = router;
