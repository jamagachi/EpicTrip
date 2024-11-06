const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // console.log('api ', 'Test');
  res.status(200).json(['Test']);
});

module.exports = router;
