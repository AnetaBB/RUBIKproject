const bcrypt = require('bcrypt');
const { User } = require('../models/user');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  let user = await User.findOne({
    email: req.body.email,
  });
  if (!user) return res.status(400).send('Invalid email');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');

  res.send('Good morning user :)');
});

module.exports = router;
