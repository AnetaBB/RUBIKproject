const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Ticket } = res.locals.models;

  const query = { status: 'Open' };

  if (req.query.projectID) {
    query.projectID = req.query.projectID;
  }
  const tickets = await Ticket.find(query);
  res.status(200).json(tickets);
});

router.get('/:id', async (req, res) => {
  const { Ticket } = res.locals.models;
  const ticket = await Ticket.findOne({ _id: req.params.id });
  res.status(200).json(ticket);
});

router.post('/', async (req, res) => {
  try {
    const { Ticket } = res.locals.models;
    if (!req.body) return res.status(400).send('Bad request');
    const ticket = new Ticket(req.body);
    const result = await ticket.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(`Adding ticket failed: ${err}`);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { Ticket } = res.locals.models;
    if (!req.params.id) return res.status(400).send('Bad request');
    const ticket = await Ticket.findById(req.params.id);
    ticket.title = req.body.title;
    const result = await ticket.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(`Updating ticket failed: ${err}`);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { Ticket } = res.locals.models;
    const ticket = await Ticket.findByIdAndRemove(req.params.id);
    const result = await ticket.delete();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(`Deleting failed: ${err}`);
  }
});

module.exports = router;
