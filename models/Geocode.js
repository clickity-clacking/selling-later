const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const NodeGeocoder = require('node-geocoder');

class Geocode extends Model {
    geocoded(streetname, city, state, zip) {
        const options = {
            provider: 'openstreetmaps'
          };
          
          const geocoder = NodeGeocoder(options);
          
          // Using callback
          const res = await geocoder.geocode({
            street: streetname,
            city: city,
            state: state,
            country: 'United States',
            postalcode: zip
          })
          
          return res;
    }
}

Geocode.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        lat: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        lon: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        hpost_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'geocode'
    }    
)

module.exports = Geocode;