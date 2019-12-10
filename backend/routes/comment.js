const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Comment } = res.locals.models;
  const comment = await Comment.find();
  res.status(200).json(comment);
  console.log(
    req.query,
    comments.map(comment => {
      return comment;
    })
  );
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
