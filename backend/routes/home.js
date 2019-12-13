const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (process.env.NODE_ENV === 'dev') {
    if (process.env.PORT) {
      res.send(
        `Hello, bugfixers! Welcome on port ${process.env.PORT}! (${process.env.NODE_ENV})`
      );
    } else {
      res.send(`Hello, bugfixers! Welcome on board! (${process.env.NODE_ENV})`);
    }
  } else {
    if (process.env.PORT) {
      res.send(`Hello, bugfixers! Welcome on port ${process.env.PORT}!`);
    } else {
      res.send(`Hello, bugfixers! Welcome on board!`);
    }
  }
});

module.exports = router;
