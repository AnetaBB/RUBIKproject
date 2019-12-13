const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Milestone } = res.locals.models;
  const milestones = await Milestone.find();
  res.status(200).json(milestones);
});

router.get('/:id', async (req, res) => {
  const { Milestone } = res.locals.models;
  const milestones = await Milestone.findById(req.params.id);
  res.status(200).json(milestones);
});

router.post('/', async (req, res) => {
  try {
    const { Milestone } = res.locals.models;
    if (!req.body) return res.status(400).send('0 in body');
    const milestone = new Milestone(req.body);
    const result = await milestone.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(`Hey dude this is the reason:${error}`);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { Milestone } = res.locals.models;
    if (!req.params.id) return res.status(400).send('0 in body');
    const milestone = await Milestone.findById(req.params.id);
    milestone.title = req.body.title;
    const result = await milestone.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(`Hey dude this is the reason:${error}`);
  }
});

router.delete('/:id', async (req, res) => {
  const { Milestone } = res.locals.models;
  const milestone = await Milestone.findByIdAndRemove(req.params.id);
  milestone.delete();
  res.status(200).send('Game over');
});

module.exports = router;
