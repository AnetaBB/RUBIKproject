const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Todo } = res.locals.models;
  const todos = await Todo.find();
  res.status(200).json(subtickets);
});

module.exports = router;
