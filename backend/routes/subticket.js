const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Subticket } = res.locals.models;
  const subtickets = await Subticket.find();
  res.status(200).json(subtickets);
});

router.get('/:id', async (req, res) => {
  const { Subticket } = res.locals.models;
  const subticket = await Subticket.findById(req.params.id);
  if (!subticket)
    return res.status(404).send('The subticket with given ID was not found.');
  res.status(200).json(subticket);
});

router.post('/', async (req, res) => {
  try {
    const { Subticket } = res.locals.models;
    const subticket = new Subticket(req.body);
    const result = await subticket.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(`Adding subticket failed with error: ${err}`);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { Subticket } = res.locals.models;
    const subticket = await Subticket.findById(req.params.id);
    if (!subticket)
      return res.status(404).send('The subticket with given ID was not found.');
    subticket.title = req.body.title;
    subticket.description = req.body.description;
    const result = await subticket.save();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(`Updating subticket failed with error: ${err}`);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { Subticket } = res.locals.models;
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
