const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Project } = res.locals.models;
  const projects = await Project.find({ active: true });
  res.status(200).json(projects);
});

router.get('/:id', async (req, res) => {
  const { Project } = res.locals.models;
  const project = await Project.findById(req.params.id);
  res.status(200).json(project);
});

router.post('/', async (req, res) => {
  const { Project } = res.locals.models;

  const project = new Project(req.body);
  const validation = project.validateSync();
  const schemaErrors = validation ? validation.errors : [];
  const validationErrors = [];
  for (const errName in schemaErrors) {
    validationErrors.push(schemaErrors[errName].message);
  }
  if (validationErrors.length > 0) {
    res.status(400).json({ errors: validationErrors });
  } else {
    const existsByTitle = await Project.findOne({
      title: req.body.title,
    });
    if (existsByTitle) {
      res.status(409).json({ errors: ['Project name already exist'] });
    } else {
      project
        .save()
        .then(savedProject => {
          res.status(200).json(savedProject._id);
        })
        .catch(error => {
          res.status(400).json({ errors: [error] });
        });
    }
  }
});

router.put('/:id', async (req, res) => {
  const { Project } = res.locals.models;
  if (!req.body) return res.status(400).send('Bad request');
  const project = await Project.findById(req.params.id);
  if (!project) return;

  const reqBodyElements = [];
  for (const el in req.body) {
    reqBodyElements.push(el);
  }
  const schemaElements = [];
  for (const el in Project.schema.obj) {
    schemaElements.push(el);
  }

  reqBodyElements.forEach(el => {
    if (schemaElements.includes(el)) {
      project[el] = req.body[el];
    }
  });

  // todo: validation what is required

  project
    .save()
    .then(res.status(200).json(project._id))
    .catch(error => {
      res.status(400).send('Editing project failed: ' + error);
    });
});

router.patch('/:id', async (req, res) => {
  const { Project } = res.locals.models;
  if (!req.body) return res.status(400).send('Bad request');
  const project = await Project.findById(req.params.id);
  if (!project) return;

  const bodyElements = [];
  for (const el in Project.schema.obj) {
    bodyElements.push(el);
  }
  bodyElements.forEach(prop => {
    const bodyProp = req.body[prop];
    if (bodyProp) {
      project.set({
        [prop]: bodyProp,
      });
    }
  });

  project
    .save()
    .then(res.status(200).json(project))
    .catch(error => {
      res.status(400).send('Editing project failed: ' + error);
    });
});

router.delete('/:id', async (req, res) => {
  const { Project } = res.locals.models;
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).send('This project was not found');
  project
    .delete()
    .then(res.status(200).json(project))
    .catch(error => {
      res.status(400).send('Deleting project failed: ' + error);
    });
});
module.exports = router;
