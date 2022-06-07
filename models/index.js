// import all models
const { post } = require("../controllers");
const HPost = require("./HPost");
const User = require("./user");

post.belongTo(User, {
  foreignKey: "userId",
  onDelete: " CASCADE",
});

module.exports = {
  User,
  Post,
};
