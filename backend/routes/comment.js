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

module.exports = router;
