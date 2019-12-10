const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Ticket } = res.locals.models;
  const tickets = await Ticket.find();
  res.sendStatus(200);
  console.log(
    req.query,
    tickets.map(ticket => {
      return ticket;
    })
  );
});

module.exports = router;