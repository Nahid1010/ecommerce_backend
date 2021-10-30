// router module from express
const router = require('express').Router();
const apiRoutes = require('./api');

// api routes
router.use('/api', apiRoutes);
router.use((req, res) => {
});

// export
module.exports = router;