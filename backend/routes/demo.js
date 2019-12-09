const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Demo } = res.locals.models;
  const demos = await Demo.find();
  res.status(200).json(demos);
  console.log(
    req.query,
    demos.map(demo => {
      return demo;
    })
  );
});

router.post('/', async (req, res) => {
  const { Demo } = res.locals.models;
  console.log(req.body);
  const demo = new Demo(req.body);
  demo
    .save()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(400).send('adding demo failed: ' + error);
    });
});

module.exports = router;
