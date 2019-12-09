const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { Demo } = res.locals.models;
  const demos = await Demo.find();
  res.sendStatus(200);
  console.log(
    req.query,
    demos.map(demo => {
      return demo;
    })
  );
});

router.post('/', async (req, res) => {
  const { Demo } = res.locals.models;
  const demo = new Demo({
    ...req.body,
  });
  await demo.save();
  res.json(demo);
});

module.exports = router;
