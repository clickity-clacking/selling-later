// import all models
const { post } = require("../controllers");
const HPost = require("./HPost");
const User = require("./user");

User.hasMany(HPost, {
  foreignKey: 'user_id'
});

HPost.belongsTo(User, {
  foreignKey: "user_Id",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  HPost,
};
 