const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "post",
    timestamps: false,
  }
);

module.exports = Post;
