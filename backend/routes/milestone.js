const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Milestone } = res.locals.models;
  const milestones = await Milestone.find();
  res.sendStatus(200).send(milestones);
});

router.post('/', async (req, res) => {
  const { Milestone } = res.locals.models;
  const milestones = await Milestone.find();

  if (!req.body) return res.status(400).send('0 in body');

  const milestone = new Milestone({
    // id: milestones.length + 1,
    title: req.body.title,
    description: req.body.description,
    owner: req.body.owner,
    contributors: req.body.contributors,
  });

  milestones.push(milestone);
  res.sendStatus(200).send(milestone);
  console.log(
    req.query,
    milestones.map(milestone => {
      return milestone;
    })
  );
});

module.exports = router;
