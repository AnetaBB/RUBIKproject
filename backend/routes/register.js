const bcrypt = require('bcrypt');
const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  let user = await User.findOne({
    email: req.body.email,
  });
  if (user) return res.status(400).send('User already registered');

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  user = new User({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  await user.save();
  res.send('User add to databse. Move to dashboard');
});

module.exports = router;
