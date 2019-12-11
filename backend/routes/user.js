const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

/* Aby zobaczyć działanie json web token w postam wywołaj GET dla api/users
  error. brak tokena
  Otworz nowa karte w postman, trzeba zrobić post`a do user wykorzystujac dane ponizej(nie zamykaj karty po poprawnej odpowiedzi)
  Nasza odpowiedz jest w body, przechodzimy do Headers. Kopiujemy wartość x-auth-token
  Wracam do naszej karty gdzie jest GET
  Poniżej GET i paska adresu wybieramy Headers
  Wpisujemy nowy klucz: x-auth-token
  W pole wartości wklejamy wartość z karty post`a
  Klikamy send i dopiero wtedy mamy wszystkich userów :D  */

/* Add user 
Example: 
  "name": "kitty",
	"surname": "meow",
	"email": "kitty@meow.com",
	"password": "qweasd",
	"repeat_password": "qweasd",
	"active": true  */
router.post('/', async (req, res) => {
  const { User } = res.locals.models;
  const checkUser = await User.findOne({
    email: req.body.email,
  });
  if (checkUser) return res.status(400).send('User already registered');

  const { error } = validate(req.body);
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

  /* Gdy bedzie ustalone jakie parametry to zapisz token w localStorage 
  Aktualnie,aby zobaczyć jwt po wysłaniu POST`a należy w odpowiedzi należy przejść do headers -> x-auth-header: *token* */

  //const token = user.generateJwtToken();
  const token = jwt.sign({ _id: user.id }, process.env.rubikproject_jwtKey);

  res.header('x-auth-token', token).send(token);
});

router.get('/', auth, async (req, res) => {
  const { User } = res.locals.models;
  const user = await User.find();
  res.status(200).send(user);
  console.log(
    req.query,
    user.map(user => {
      return user;
    })
  );
});

router.get('/:id', async (req, res) => {
  const { User } = res.locals.models;
  const user = await User.findById(req.params.id);
  user.save();
  res.send(user);
});

router.put('/:id', async (req, res) => {
  const { User } = res.locals.models;
  const user = await User.findById(req.params.id);
  user.name = req.body.name;
  user.save();
  res.send(user);
});

router.delete('/:id', async (req, res) => {
  const { User } = res.locals.models;
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
    active: Joi.boolean(),
  });

  return schema.validate(user);
}

/* ========================== Autentykacja ============================ */
/*router.post('/', async (req, res) => {
  let user = await User.findOne({
    email: req.body.email,
  });
  if (!user) return res.status(400).send('Invalid email');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');

  jwt.sign({ _id: user.id }, 'ZmjZuxaSYE');

  res.send('Good morning user :)');
});*/

module.exports = router;

/* Plan dla jwt:
podczas rejestracji tworzymy token, który wysyłamy do user`a i zostaje zapisany w localStorage
podczas logowania wysyłamy jego token w header 
Trzeba przygotować cały plan autentykacji dla poszczególnych routes. Kiedy użytkownik może wysłać właśnie to zapytanie */
