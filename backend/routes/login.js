const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

/* ========================== Autentykacja ============================ */
router.post('/', async (req, res) => {
  const { User } = res.locals.models;

  let user = await User.findOne({
    email: req.body.email,
  });
  if (!user) return res.status(400).send('Invalid email');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');

  res.send('Good morning user :)');
});

module.exports = router;
