const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Comment } = res.locals.models;
  const comments = await Comment.find();
  res.status(200).json(comments);
});

router.get('/:id', async (req, res) => {
  const { Comment } = res.locals.models;
  const comments = await Comment.findById(req.params.id);
  res.status(200).json(comments);
});

router.post('/', async (req, res) => {
  try {
    const { Comment } = res.locals.models;
    const comment = new Comment(req.body);
    const result = await comment.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(`Adding comment failed with error: ${err}`);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const { Comment } = res.locals.models;
    const comment = await Comment.findByIdAndRemove(req.params.id);
    const result = await comment.delete();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(`Deleting failed with error: ${err}`);
  }
});

router.put('/:id', async (req, res) => {
  if (!req.params.id) res.status(404).send('There is no such comment');
  try {
    const { Comment } = res.locals.models;
    const comment = await Comment.findById(req.params.id);
    comment.status = req.body.status;
    const result = await comment.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(404).send(`There is no such comment:${err}`);
  }
});

module.exports = router;
