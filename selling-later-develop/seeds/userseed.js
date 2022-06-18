const sequelize = require("../config/connection");
const { User, HPost } = require("../models");

const userdata = [
  {
    username: "marissa",
    email: "marrisa@gmail.com",
    password: "marrisa1234",
  },
  {
    username: "suja",
    email: "suja@gmail.com",
    password: "suja1234",
  },
  {
    username: "tejji",
    email: "tejji@gmail.com",
    password: "tejji1234",
  },
];
const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
