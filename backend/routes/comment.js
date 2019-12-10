const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Comment } = res.locals.models;
  const comments = await Comment.find();
  res.sendStatus(200).send(comments);
  console.log(
    req.query,
    comments.map(comment => {
      return comment;
    })
  );
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

module.exports = router;
