const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Todo } = res.locals.models;
  const todos = await Todo.find();
  res.status(200).json(todos);
});

router.get('/:id', async (req, res) => {
  const { Todo } = res.locals.models;
  const todo = await Todo.findById(req.params.id);
  if (!todo)
    return res.status(404).send('The todo for this user id was not found.');
  res.status(200).json(todo);
});

router.post('/', async (req, res) => {
  try {
    const { Todo } = res.locals.models;
    const todo = new Todo(req.body);
    const result = await todo.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(`Adding a todo failed with error: ${err}`);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { Todo } = res.locals.models;
    const todo = await Todo.findById(req.params.id);
    if (!todo)
      return res.status(404).send('The todo with given ID was not found.');
    todo.content = req.body.content;
    todo.done = req.body.done;
    todo.userId = req.body.userId;
    const result = await todo.save();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(`Updating todo failed with error: ${err}`);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { Todo } = res.locals.models;
    const todo = await Todo.findByIdAndRemove(req.params.id);
    if (!todo)
      return res.status(404).send('The todo with given ID was not found.');
    todo.delete();
    res.status(200).send(todo);
  } catch (err) {
    res.status(400).send(`Deleting todo failed with error: ${err}`);
  }
});

module.exports = router;
