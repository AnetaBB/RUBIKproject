const { User } = require('../models/User');
const express = require('express');
const router = express.Router();
const Joi = require('@hapi/joi');

router.put('/:id', async (req, res) => {
  console.log(req.params.id);

  const user = await User.findById(req.params.id);
  if (!user) res.status(400).send('This user not exist');

  /* Pamiętaj o walidacja danych 
      Zróbmy dwie opcje dla zmiany wszystkiego z panela user`a
      Druga opcja to zmiana hasła*/

  //user.surname = req.body.surname;
  //user.email = req.body.email;

  //await user.save();
  //console.log(user.surname);
  //res.send("Data changed");
});

function validateUpdateData(par) {
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
}

/*const {
  error
} = validate(req.body);
if (error) return res.status(400).send(error.details[0].message);*/

module.exports = router;
