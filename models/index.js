// import all models
const HPost = require('./HPost');
const User = require('./User');
const Geocode = require('./Geocode')

HPost.hasOne(Geocode, {
    foreignKey: 'geocode_id'
});

Geocode.belongsTo(HPost, {
    foreignKey: 'geocode_id'
})

module.exports = { User, HPost, Geocode };