// import all models
const { post } = require("../controllers");
const HPost = require("./HPost");
const User = require("./user");

HPost.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  HPost,
};
