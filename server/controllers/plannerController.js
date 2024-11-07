const fsp = require('fs/promises');
const fs = require('fs');
const path = require('path');

const plannerController = {};

// CREATETRIP MIDDLEWARE
plannerController.createTrip = async (req, res, next) => {
  try {
    const newTrip = req.body;
    console.log('res body', newTrip);
    res.locals.newTrip = newTrip;
    return next();
  } catch (err) {
    return next(err);
  }
};

// LOGIN MIDDLEWARE
plannerController.createTrip = async (req, res, next) => {
  try {
    const login = req.body;
    console.log('res body', login);
    res.locals.profile = login;
    return next();
  } catch (err) {
    return next(err);
  }
};

// CONTROLLER MIDDLEWARE TEMPLATE
// plannerController.createTrip = async (req, res, next) => {
//     try {

//         return next()
//     } catch(err) {
//         return next(err)
//     }
// }

module.exports = plannerController;
