const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const {
    Comments
  } = res.locals.models;
  const comments = await Comments.find();
  res.sendStatus(200);
  console.log(
    req.query,
    comments.map(comments => {
      return comments;
    })
  );
});

module.exports = router;