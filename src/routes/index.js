const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('index', req.query);
  res.json({ data: 'Este es mi main (index)', });
});

module.exports = router;
