const router = require('express').Router();
const { registerPrompt } = require('inquirer');
const { HPost, User, Geocode } = require('../../models');
const geocode = new Geocode;

// get all users
router.get('/', (req, res) => {
  // HPost.findAll()
  HPost.findAll({
    attributes: ['id', 'post_url', 'address', 'created_at', 'geocode_id'],
    order: [['created_at', 'DESC']],
    include: [
      // Join geocode lat, lon coordinates
      
      /*
      {
        model: Geocode,
        attributes: ['lat', 'lon']
      }
      */
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    ]
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
    include: [
      // Join geocode data on find one

      /*
      {
        model: Geocode,
        attributes: ['lat, lon']
      }
      */
    //{
    //  model: User,
    //  attributes: ['username']
    //}
    ]
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
    .then(dbPostData => {
      res.json(dbPostData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Sample of code to use post data to create geocoded data
// Replace create route if you would like to use this

/*
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
    .then(dbPostData => {
      res.json(dbPostData)
      // The address object needs to be split up in to query parameters. Easiest way to do this is to make the req body reference different columns
      geocode.geocoded(dbPostData.address).then(geoData => {
        Geocode.create({
          lat: geoData.latitude,
          lon: geoData.longitude,
          hpost_id: dbPostData.id
        })
        .then(dbGeoData => {
          res.json(dbGeoData)
          HPost.update(
          {
            where: {
              id: dbGeoData.hpost_id
            },
          },
          {
            geocode_id: dbGeoData.id
          }
          )
          .then(dbPostGeoID => res.json(dbPostGeoID))d
        })

      })
        
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
});
*/

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
      //Update geocoded data if address value is changed on update
      /*
      geocode.geocoded(dbPostData.address).then(geoData => {
        Geocode.update(
          {
            lat: geoData.latitude,
            lon: geoData.longitude
          },
          {
            where: {
              id: dbPostData.geocode_id
            }
          }
        )
        .then(dbGeoData => res.json(dbGeoData))
      })
      */
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
