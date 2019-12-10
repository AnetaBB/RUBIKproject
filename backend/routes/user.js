const bcrypt = require('bcrypt');
const { userSchema, validate } = require('../models/User');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json());

//let user = mongoose.model('user', User);
//let User = mongoose.model('User', userSchema);

/* Add user */
router.post('/', async (req, res) => {
  const { User } = res.locals.models;
  //const szukam = await User.find();
  /* const user = await User.findOne({
    email: req.body.email,
  });
  if (user) return res.status(400).send('User already registered');

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);*/
  console.log(req.body);
  console.log('Przed dodanie obiektu');

  let user = new User({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password,
    active: req.body.active,
  });

  console.log('Po dodaniu obiektu');
  console.log(user);

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  user.save();
  res.send('User add to databse. Move to dashboard');
  console.log(user);
});

/* Get user */
router.get('/', async (req, res) => {
  console.log('I`m here');
  console.log('makaron');
  console.log(res.locals.models);
  const { User } = res.locals.models;
  const szukam = await User.find();

  console.log(szukam);
  res.status(200).send(szukam);
  console.log(
    req.query,
    szukam.map(szuka => {
      return szuka;
    })
  );
});

/*router.get('/', async (req, res) => {
  const { Milestone } = res.locals.models;
  const milestones = await Milestone.find();
  res.sendStatus(200);
  console.log(
    req.query,
    milestones.map(milestone => {
      return milestone;
    })
  );
});*/

/*function validateUpdateData(par) {
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
  });

  return schema.validate(par);
}*/

/* ========================== Autentykacja ============================ */
/*router.post('/', async (req, res) => {
  let user = await User.findOne({
    email: req.body.email,
  });
  if (!user) return res.status(400).send('Invalid email');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');

  res.send('Good morning user :)');
});*/

module.exports = router;
