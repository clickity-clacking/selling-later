const router = require('express').Router();
const sequelize = require('../config/connection');

// router.get('/', (req, res) => {
//   console.log('======================');
//   res.render('homepage');
// });


const { HPost, User } = require('../models');

router.get('/', (req, res) => {
  console.log('======================');
  HPost.findAll({
    attributes: ['id', 'address', 'sell_date', 'post_url', 'price_floor', 'price_ceiling', 'beds', 'baths', 'sqft', 'created_at'],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render('homepage', { posts });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;