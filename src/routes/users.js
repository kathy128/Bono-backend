const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // throw new ApiError('Bad request', 400);
  res.send({ data: 'My users route',
statusCode: 200 });
});

module.exports = router;
