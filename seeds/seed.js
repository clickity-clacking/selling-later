const seedUsers = require("./userseed");
const seedPosts = require("./hpostseed");

const { sync } = require("../config/connection");

const seedAll = async () => {
  await sync({ force: true });
  await seedUsers();

  await seedPosts();
  process.exit(0);
};

seedAll();
