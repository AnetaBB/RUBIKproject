const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Project } = res.locals.models;
  const projects = await Project.find();
  res.status(200).json(projects);
});

router.get('/:id', async (req, res) => {
  const { Project } = res.locals.models;
  const project = await Project.findById(req.params.id);
  res.status(200).json(project);
});

router.post('/', async (req, res) => {
  const { Project } = res.locals.models;
  if (!req.body) return res.status(400).send('Bad request');
  const project = new Project(req.body);
  project
    .save()
    .then(res.status(200).json(project))
    .catch(error => {
      res.status(400).send('Adding project failed: ' + error);
    });
});

router.put('/:id', async (req, res) => {
  const { Project } = res.locals.models;
  if (!req.body) return res.status(400).send('Bad request');
  const project = await Project.findById(req.params.id);
  if (!project) return;

  const bodyElements = [];
  for (const el in Project.schema.obj){
    bodyElements.push(el)
  }

  // todo: validation what is required

  project
    .save()
    .then(res.status(200).json(project))
    .catch(error => {
      res.status(400).send('Editing project failed: ' + error);
    })
});

router.patch('/:id', async (req, res) => {
  const { Project } = res.locals.models;
  if (!req.body) return res.status(400).send('Bad request');
  const project = await Project.findById(req.params.id);
  if (!project) return;

  const bodyElements = [];
  for (const el in Project.schema.obj){
    bodyElements.push(el)
  }
  bodyElements.forEach( prop => {
      const bodyProp = req.body[prop];
      if (bodyProp) {
        project.set({
          [prop]: bodyProp
        });
      }
  });

  project
    .save()
    .then(res.status(200).json(project))
    .catch(error => {
      res.status(400).send('Editing project failed: ' + error);
    })
});

router.delete('/:id', async (req, res) => {
  const { Project } = res.locals.models;
  if (req.body) return res.status(400).send('Bad request.');
  const project = await Project.findById(req.params.id);
  if (!project) return;

  project
    .delete()
    .then(res.status(200).json(project))
    .catch(error => {
      res.status(400).send('Deleting project failed: ' + error);
    })
});
module.exports = router;
