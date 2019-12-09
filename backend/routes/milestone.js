const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Milestone } = res.locals.models;
  const milestones = await Milestone.find();
  res.sendStatus(200);
  console.log(
    req.query,
    milestones.map(milestone => {
      return milestone;
    })
  );
});

module.exports = router;
