const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const {
    Comment
  } = res.locals.models;
  const comments = await Comment.find();
  res.sendStatus(200);
  console.log(
    req.query,
    comments.map(comment => {
      return comment;
    })
  );
});

module.exports = router;