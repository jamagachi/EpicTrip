const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const PORT = process.env.PORT || 3000; // Use PORT from environment variable or default to 3000

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files from client build
// app.use(express.static(path.resolve(__dirname, '../dist')));

// CONSOLE LOG TESTING
// app.use((req, res, next) => {
//   console.log(`
//   * FLOW METHOD ***\n
//   URL: ${req.url}\n
//   BODY: ${req.body}\n
//   METHOD: ${req.method}\n`);
//   return next();
// });

// define route handlers
app.use('/api', apiRouter);

// Serve the client app
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../dist', 'index.html'));
// });

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Page Not Found!'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
