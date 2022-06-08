const router = require('express').Router();
const { registerPrompt } = require('inquirer');
const { HPost, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    // HPost.findAll()
  HPost.findAll({
    attributes: ['id', 'post_url', 'address', 'created_at'],
    order: [['created_at', 'DESC']],
    // include: [
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    // ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  HPost.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'post_url', 'address', 'created_at'],
    // include: [
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    // ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {

  HPost.create({
    address: req.body.address,
    sell_date: req.body.sell_date,
    post_url: req.body.post_url,
    price_floor: req.body.price_floor,
    price_ceiling: req.body.price_ceiling,
    beds: req.body.beds,
    baths: req.body.baths,
    sqft: req.body.sqft,
    user_id: req.body.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  HPost.update(
    {
        address: req.body.address,
        sell_date: req.body.sell_date,
        post_url: req.body.post_url,
        price_floor: req.body.price_floor,
        price_ceiling: req.body.price_ceiling,
        beds: req.body.beds,
        baths: req.body.baths,
        sqft: req.body.sqft,
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  HPost.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
