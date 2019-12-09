const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Project } = res.locals.models;
  const projects = await Project.find();
  res.sendStatus(200);
  console.log(
    req.query,
    projects.map(project => {
      return project;
    })
  );
});

module.exports = router;
