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

module.exports = router;
