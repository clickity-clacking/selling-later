const router = require("express").Router();
const { Post, User } = require("../../models");
const { registerPrompt } = require("inquirer");

const withAuth = require("../../utils/auth");

// get all users
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "post_url", "title", "created_at"],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "address",
      "sell_date",
      "post_url",
      "price_floor",
      "price_ceiling",
      "beds",
      "baths",
      "sqft",
      "created_at",
    ],

    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  HPost.create({
    address: req.body.address,
    sell_date: req.body.sell_date,
    post_url: req.body.post_url,
    price_floor: req.body.price_floor,
    price_ceiling: req.body.price_ceiling,
    beds: req.body.beds,
    baths: req.body.baths,
    sqft: req.body.sqft,
    user_id: req.body.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Post.update(
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
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
