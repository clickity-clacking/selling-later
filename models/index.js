// import all models
const HPost = require('./HPost');
const User = require('./User');



User.hasMany(HPost, {
    foreignKey: 'user_id'
  });

HPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

// User.hasMany(HPost, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
//   });



module.exports = { User, HPost };