const { Model, DataTypes } = require ("sequelize");
const sequelize = require("../config/connection");

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
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sell_date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: true,
    //   validate: {
    //     isURL: true,
    //   },
    // },
    price_floor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'user',
      //   key: 'id'
      // }
    },
    price_ceiling: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'user',
      //   key: 'id'
      // }
    },
    beds: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'user',
      //   key: 'id'
      // }
    },
    baths: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      // references: {
      //   model: 'user',
      //   key: 'id'
      // }
    },
    sqft: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'user',
      //   key: 'id'
      // }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }

    }
  },
},
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'hpost'
  }
);

module.exports = HPost;
