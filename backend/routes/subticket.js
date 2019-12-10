const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Subticket } = res.locals.models;
  const subtickets = await Subticket.find();
  res.sendStatus(200);
  console.log(
    req.query,
    subtickets.map(subticket => {
      return subticket;
    })
  );
});

module.exports = router;
