const router = require('express').Router();
const sequelize = require('../config/connection');
const { HPost, User } = require('../models');

router.get('/:id', (req, res) => {
    HPost.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'address', 'sell_date', 'post_url', 'price_floor', 'price_ceiling', 'beds', 'baths', 'sqft', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
    .then(dbHPostData => {
        if (dbHPostData) {
          const hpost = dbHPostData.get({ plain: true });
          
          res.render('edit-listing', {
            hpost,
            loggedIn: true
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });



  module.exports = router;