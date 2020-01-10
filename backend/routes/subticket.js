const express = require('express');
const Joi = require('@hapi/joi');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const {
      Subticket
    } = res.locals.models;
    const subtickets = await Subticket.find();
    res.status(200).json(subtickets);
  } catch (err) {
    res.status(400).send(`Getting subtickets failed with error: ${err}`);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const {
      Subticket
    } = res.locals.models;
    const subticket = await Subticket.findById(req.params.id);
    if (!subticket)
      return res.status(404).send('The subticket with given ID was not found.');
    res.status(200).json(subticket);
  } catch (err) {
    res.status(400).send(`Getting subticket failed with error: ${err}`);
  }
});

router.post('/', async (req, res) => {
  const schema = Joi.object({
    ticketId: Joi.any()
      .required(),
    ticket: Joi.string()
      .required(),
    title: Joi.string()
      .min(5)
      .max(70)
      .required(),
    description: Joi.string()
      .min(25)
      .required(),
    priority: Joi.string()
      .valid('Low', 'Medium', 'High', 'Urgent')
      .required(),
    relevance: Joi.string()
      .valid('Trivial', 'Minor', 'Major', 'Critical')
      .required(),
    contributor: Joi.string()
      .min(3)
      .max(30)
      .required()
  });
  try {
    const value = await schema.validateAsync(req.body);
    const {
      Subticket
    } = res.locals.models;
    const subticket = new Subticket(value);
    const result = await subticket.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(`Adding subticket failed with error: ${err}`);
  }
});

router.put('/:id', async (req, res) => {
  const schema = Joi.object({
    //ticketId: Joi.id(),
    ticket: Joi.string(),
    title: Joi.string()
      .min(5)
      .max(70),
    description: Joi.string().min(25),
    status: Joi.string().valid('Open', 'Assigned', 'Completed', 'Closed'),
    contributor: Joi.string().min(3),
    priority: Joi.string().valid('Low', 'Medium', 'High', 'Urgent'),
    relevance: Joi.string().valid('Trivial', 'Minor', 'Major', 'Critical'),
  });
  try {
    const value = await schema.validateAsync(req.body);
    const {
      Subticket
    } = res.locals.models;
    const subticket = await Subticket.findById(req.params.id);
    if (!subticket)
      return res.status(404).send('The subticket with given ID was not found.');
    for (let [k, v] of Object.entries(value)) {
      subticket[k] = v;
    }
    const result = await subticket.save();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(`Updating subticket failed with error: ${err}`);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const {
      Subticket
    } = res.locals.models;
    const subticket = await Subticket.findByIdAndRemove(req.params.id);
    if (!subticket)
      return res.status(404).send('The subticket with given ID was not found.');
    subticket.delete();
    res.status(200).send(subticket);
  } catch (err) {
    res.status(400).send(`Deleting subticket failed with error: ${err}`);
  }
});

module.exports = router;