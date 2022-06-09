const sequelize = require("../config/connection");
const { Hpost, User } = require("../models");

const hpostseed = require("./hpostseed.json");
const userseed = require("./userseed.json");

const seedDatabase = async () => {
  await sequelize.sync({
    force: true,
  });
  await User.bulkcreate(userseed);
  await hpostseed.bulkcreate(hpostseed);
  console.log("finish");
  process.exit(0);
};  
seedDatabase();
