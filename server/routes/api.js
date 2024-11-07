const express = require('express');
const router = express.Router();
const plannerController = require('../controllers/plannerController');

// GET Request
router.get('/', (req, res) => {
  console.log('Backend Get Route: ', 'HELP');
  // res.status(200).send('Hi frontend');
  res.status(200).json(['new trip GET']);
  // res.status(200).redirect('/planner');
});

router.post('/create-trip', plannerController.createTrip, (req, res) => {
  // console.log('Backend Post Route: ', "You've Got Mail");
  res.status(200).json(res.locals.newTrip);
});

// router.post('/login', plannerController.login, (req, res) => {
//   // console.log('Backend Post Route: ', "You've Got Mail");
//   res.status(200).json(res.locals.profile);
// });

// router.post('/create-trip', (req, res) => {
//   console('POST create-trip Test ');
//   return res.status(200).send('Hi');
// });

// router.post('/create-trip', plannerController.createTrip, (req, res) => {
//   console('POST create-trip Test ');
//   return res.status(200).json(res.locals.newTrip);
// });

module.exports = router;
