// router module from express
const router = require('express').Router();
const apiRoutes = require('./api');

// api routes
router.use('/api', apiRoutes);

// catch other than /api
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// export
module.exports = router;