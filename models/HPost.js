const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class HPost extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

// create fields/columns for Post model
HPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sell_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    },
    price_floor: {
      type: DataTypes.INTEGER,      
      allowNull: false

    },
    price_ceiling: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    beds: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    baths: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sqft: {
      type: DataTypes.INTEGER,
      allowNull: false

    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = HPost;
