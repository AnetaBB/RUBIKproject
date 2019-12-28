const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');
const express = require('express');
const router = express.Router();

/* Add user 
Example: 
  "name": "kitty",
	"surname": "meow",
	"email": "kitty@meow.com",
	"password": "qweasd",
	"repeat_password": "qweasd",
	"active": true  */
router.post('/', async (req, res) => {
  const {
    User
  } = res.locals.models;
  const checkUser = await User.findOne({
    email: req.body.email,
  });
  if (checkUser) return res.status(400).send('User already registered');

  const {
    error
  } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = new User({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password,
    active: req.body.active,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  user.save();
  res.send('User add to databse. Move to dashboard');
});

router.get('/', async (req, res) => {
  const {
    User
  } = res.locals.models;
  const user = await User.find();
  res.status(200).send(user);
});

router.get('/:id', async (req, res) => {
  const {
    User
  } = res.locals.models;
  const user = await User.findById(req.params.id);
  user.save();
  res.send(user);
});

router.put('/:id', async (req, res) => {
  const {
    User
  } = res.locals.models;
  const user = await User.findById(req.params.id);
  user.name = req.body.name;
  user.save();
  res.send(user);
});

router.delete('/:id', async (req, res) => {
  const {
    User
  } = res.locals.models;
  const user = await User.findByIdAndRemove(req.params.id);
  user.name = req.body.name;
  user.save();
  res.send('User is 3m below ground...');
});

function validate(user) {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(30)
      .required(),
    surname: Joi.string()
      .min(3)
      .max(30)
      .required(),
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
    repeat_password: Joi.ref('password'),
    active: Joi.boolean()
  });

  return schema.validate(user);
}

module.exports = router;