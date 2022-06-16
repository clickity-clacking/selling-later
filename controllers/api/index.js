const router = require("express").Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./hpost-routes');

router.use('/users', userRoutes);
router.use('/hposts', postRoutes);

module.exports = router;
