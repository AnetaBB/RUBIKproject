const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Project } = res.locals.models;
  const projects = await Project.find();
  res.status(200).send(projects);
});

router.post('/', async (req, res) => {
  const { Project } = res.locals.models;
  const projects = await Project.find();

  if(!req.body) return res.status(400).send('0 in body');

  const project = new Project({
    id: projects.length + 1,
    title: req.body.title,
    owner: req.body.owner
  });

  projects.push(project);
  res.sendStatus(200).send(project);
});

module.exports = router;
