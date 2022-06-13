const router = require('express').Router();
const sequelize = require('../config/connection');
const { HPost, User } = require('../models');

// router.get('/', (req, res) => {
//     res.render('new-listing');
//   });

// get all posts for create listings page
router.get('/', (req, res) => {
  console.log(req.session);
  console.log('======================');
  HPost.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'address',
      'sell_date',
      'post_url',
      'price_floor',
      'price_ceiling',
      'beds',
      'baths',
      'sqft',
      'created_at'
      // 'id',
      // 'post_url',
      // 'title',
      // 'created_at',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbHPostData => {
      const hposts = dbHPostData.map(hpost => hpost.get({ plain: true }));
      res.render('new-listing', { hposts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;