const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

/* Add user */
router.post('/', async (req, res) => {
  const { User } = res.locals.models;
  /* const user = await User.findOne({
    email: req.body.email,
  });
  if (user) return res.status(400).send('User already registered');

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);*/

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

/* Get user */
router.get('/', async (req, res) => {
  const { User } = res.locals.models;
  const user = await User.find();
  res.status(200).send(user);
  console.log(
    req.query,
    user.map(szuka => {
      return szuka;
    })
  );
});

router.put('/:id', async(req, res) => {
  const { User } = res.locals.models;
  const user = await User.findById(req.params.id);
  user.name = req.body.name;
  user.save();
  res.send(user);
});

router.delete('/:id', async(req, res) => {
  const { User } = res.locals.models;
  const user = await User.findByIdAndRemove(req.params.id);
  user.name = req.body.name;
  user.save();
  res.send('User is 3m below ground...');
});

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
