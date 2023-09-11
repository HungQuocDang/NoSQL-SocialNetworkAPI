const router = require('express').Router();
const thougthRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/thoughts', thougthRoutes);
router.use('/users', userRoutes);

module.exports = router;
