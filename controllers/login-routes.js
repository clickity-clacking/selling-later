const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { Post, User, Comment, Vote } = require('../models');


router.get('/', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('login');
});

module.exports = router;