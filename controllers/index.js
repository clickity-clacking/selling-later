const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');
const listingsRoutes = require('./listings-routes.js');
const newListingRoutes = require('./new-listing-routes.js');
const loginRoutes = require('./login-routes.js');
const editListingRoutes = require('./edit-listing-routes.js')


router.use('/api', apiRoutes);


router.use('/', homeRoutes);
router.use('/listings', listingsRoutes);
router.use('/new-listing', newListingRoutes);
router.use('/login', loginRoutes);
router.use('/edit-listing', editListingRoutes)




module.exports = router;
